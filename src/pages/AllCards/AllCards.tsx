import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCardCollectionById, postCard, updateCard } from '../../api/cardsApi'
import CardModal from '../AddCard/CardModal'
import styles from "./AllCards.module.css"
import CardSmall from '../../components/Card/CardSmall'
import type { CardCollection, CardModel } from '../../models/card'
import { LucideEdit, LucidePlus } from 'lucide-react'

const AllCards = () => {
    const params = useParams();
    const collectionId = params.collectionId

    const [collection, setCollection] = useState<CardCollection | null>(null)

    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CardModel | null>(null);

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
    }, [collectionId, handleAddCard])

    if (!collection) {
        return
    }

    async function handleUpdateCard(id: string, front?: string, back?: string, notes?: string) {
        try {
            await updateCard(id, front, back, notes)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleAddCard(front: string, back: string, notes: string) {
        try {
            if (collection) {
                await postCard(collection.id, front, back, notes);
                console.log("handle", front)
            } else {
                throw Error("")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div >
            <button className={styles.addCard} onClick={() => { }}>
                <LucidePlus />
            </button>
            {showModal && <CardModal onModalClose={() => setShowModal(false)}
                onAddCard={(front, back, notes) => handleAddCard(front, back, notes)} />}
            <div className={styles.cardsList}>
                {showModal && selectedCard &&
                    <CardModal
                        update
                        onModalClose={() => setShowModal(false)}
                        onAddCard={(front, back, notes) => handleUpdateCard(selectedCard.id, front, back, notes)} />}

                {collection.cards.map((card) =>
                    <>
                        <div className={styles.card}>
                            <CardSmall card={card} />
                            <div className={styles.below}>
                                <p className={styles.notesArea}>{card.notes}</p>
                                <button onClick={() => {
                                    setSelectedCard(card)
                                    setShowModal(true)
                                }}><LucideEdit/></button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default AllCards