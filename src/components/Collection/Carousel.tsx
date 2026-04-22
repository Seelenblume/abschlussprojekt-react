import { useState } from 'react'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import type { CardCollection } from '../../models/card';
import Card from "../Card/Card"
import styles from "./Carousel.module.css"
import { Link } from 'react-router';
import { useLoginContext } from '../../context/Login/LoginContext';

interface Props {
    collection: CardCollection,
}
 

export default function Carousel({collection}: Props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const { loginInfo } = useLoginContext()


    return (
       <div className={styles.carousel}>
      <div
        className={styles.cards}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {collection.cards.length !== 0 ? collection.cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <Card card={card} />
          </div>
        )) : <span>{loginInfo ? <span><p>Noch keine Karten vorhanden!</p> <Link to={`/collection/${collection.collectionId}/cards`} className={styles.allCards}>Hier eine Karte erstellen.</Link></span> : <p>Diese Sammlung hat noch keine Karten.</p>}</span>}
      </div>

      {collection.cards.length !== 0 && <div className={styles.arrows}>
        <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex == 0}> <LucideChevronLeft /> </button> <button onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex == collection.cards.length - 1}> <LucideChevronRight /> </button>
      </div>}
      
    </div>
    )
}