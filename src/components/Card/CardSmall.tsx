import React from 'react'
import type { CardModel } from '../../models/card'
import styles from "./CardSmall.module.css"

interface Props {
    card: CardModel
}

const CardSmall = (props: Props) => {
  return (
    <div className={styles.cardSmall}>
        <p>Front: {props.card.front}</p>
        <p>Back: {props.card.back}</p>
    </div>
  )
}

export default CardSmall