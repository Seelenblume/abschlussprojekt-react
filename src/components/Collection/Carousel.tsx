import { useState } from 'react'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';
import type { CardCollection } from '../../models/card';
import Card from "../Card/Card"
import styles from "./Carousel.module.css"
import { Link } from 'react-router';

interface Props {
    collection: CardCollection,
}
 

const Carousel = ({collection}: Props) => {

        const [currentIndex, setCurrentIndex] = useState(0);


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
        )) : <span><p>Noch keine Karten vorhanden!</p> <Link to={`/collection/${collection.collectionId}/cards`}>Hier eine Karte erstellen.</Link></span>}
      </div>

      {collection.cards.length !== 0 && <div className={styles.arrows}>
        <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex == 0}> <LucideChevronLeft /> </button> <button onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex == collection.cards.length - 1}> <LucideChevronRight /> </button>
      </div>}
      
    </div>
    )
}

export default Carousel