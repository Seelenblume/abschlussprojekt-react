import type { CardModel } from '../../models/card'
import styles from "./CardSmall.module.css"

interface Props {
    card: CardModel
}

export default function CardSmall(props: Props) {
  return (
    <div className={styles.cardSmall}>
        <p>Vorderseite: {props.card.front}</p>
        <p>Rückseite: {props.card.back}</p>
    </div>
  )
}