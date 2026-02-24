import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router'
import type { CardCollection } from '../../models/card'
import { getCardCollectionById, updateCard } from '../../api/cardsApi'
import Card from '../../components/Card/Card'
import CardModal from '../AddCard/CardModal'
import styles from "./AllCards.module.css"

const AllCards = () => {

    const params = useParams();
    const collectionId = params.collectionId

    const [collection, setCollection] = useState<CardCollection | null>(null)

    const [showModal, setShowModal] = useState(false);

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

    if(!collection) {
        return
    }

    async function handleUpdateCard(id: string, front?: string, back?: string, notes?: string) {
        try {
            await updateCard(id, front, back, notes)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <div>
            {collection.cards.map((card) =>
                <div className={styles.card}>
                    {showModal && <CardModal update onModalClose={() => setShowModal(false)} onAddCard={(front, back, notes) => handleUpdateCard(card.id, front, back, notes)}/>} 
                    <Card card={card} small/>
                    <button onClick={() => setShowModal(true)}>Edit Card</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default AllCards