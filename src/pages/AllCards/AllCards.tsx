import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCardCollectionById, postCard, updateCard } from '../../api/cardsApi'
import CardModal from '../AddCard/CardModal'
import styles from "./AllCards.module.css"
import CardSmall from '../../components/Card/CardSmall'
import type { CardCollection, CardModel } from '../../models/card'
import { LucideEdit, LucidePlus } from 'lucide-react'
import { useToast } from '../../context/Toast/ToastContext'
import { v4 as uuidv4 } from 'uuid';


export default function AllCards() {
    const params = useParams();
    const collectionId = params.collectionId

    const [collection, setCollection] = useState<CardCollection | null>(null)

    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CardModel | null>(null);

    const { addToast } = useToast()

    useEffect(() => {
        async function load() {
            try {
                if (collectionId) {
                    const col = await getCardCollectionById(collectionId);
                    setCollection(col)
                }
            } catch (error) {
                console.log(error)
            }
        }
        load();
    }, [collectionId])

    if (!collection) {
        return
    }

    async function handleUpdateCard(id: string, front?: string, back?: string, notes?: string) {
        try {
            if (!collection) {
                throw new Error("Keine Collection")
            }
            console.log(id);
            await updateCard(id, { front, back, notes })
            const updatedCollection = await getCardCollectionById(collection.collectionId);
            setCollection(updatedCollection);
            setShowModal(false)
        } catch (error) {
            addToast({
                id: uuidv4(),
                message: "Aktualisieren fehlgeschlagen!",
                type: "ERROR",
            })
            console.log(error)
        }
    }

    async function handleAddCard(front: string, back: string, notes: string) {
        try {
            if (!collection) {
                throw new Error("Keine Collection")
            }
            await postCard(collection.collectionId, front, back, notes);
            console.log("handle", front)
            const updatedCollection = await getCardCollectionById(collection.collectionId);
            setCollection(updatedCollection);
            setShowModal(false)
        } catch (error) {
            addToast({
                id: uuidv4(),
                message: "Hinzufügen fehlgeschlagen!",
                type: "ERROR",
            })
            console.log(error)
        }
    }

    return (
        <div >
            <button className={styles.addCard} onClick={() => { setShowModal(true) }}>
                <LucidePlus />
            </button>
            {showModal && <CardModal onModalClose={() => setShowModal(false)}
                onAddCard={(front, back, notes) => handleAddCard(front, back, notes)} />}
            <div className={styles.cardsList}>
                {showModal && selectedCard &&
                    <CardModal
                        update
                        onModalClose={() => setShowModal(false)}
                        onAddCard={(front, back, notes) => handleUpdateCard(selectedCard.cardId, front, back, notes)} />}

                {collection.cards.length !== 0 ? collection.cards.map((card) =>
                    <>
                        <div className={styles.card}>
                            <CardSmall card={card} />
                            <div className={styles.below}>
                                <p className={styles.notesArea}>{card.notes}</p>
                                <button onClick={() => {
                                    setSelectedCard(card)
                                    setShowModal(true)
                                }}><LucideEdit /></button>
                            </div>
                        </div>
                    </>
                ) : <p>Noch keine Karten vorhanden! Um eine Karte zu erstellen, klicke auf das +</p>}
            </div>
        </div>
    )
}