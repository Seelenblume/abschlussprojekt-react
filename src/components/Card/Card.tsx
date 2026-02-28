import { useState } from 'react'
import type { CardModel } from '../../models/card'
import styles from "./Card.module.css"
import clsx from 'clsx'

interface Props {
  card: CardModel,
  small?: boolean
}

const Card = ({ card, small }: Props) => {

  const [showBack, setShowBack] = useState(false);

  return (
    <div className={`${small ? styles.cardSmall : styles.card}`} onClick={() => setShowBack(!showBack)}>
      <div className={clsx(styles.inner,
          showBack && styles.flip
        )}>
        <div className={styles.front}><p>{card.front}</p></div>
        <div className={styles.back}><p>{card.back}</p></div>
      </div>

        
      <div className={styles.notes}>
        <p>{card.notes}</p>
      </div>
    </div>
  )
}

export default Card