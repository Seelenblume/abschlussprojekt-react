import React from 'react'
import type { CardModel } from '../../models/card'

interface Props {
    card: CardModel
}

const CardSmall = (props: Props) => {
  return (
    <div>
        {props.card.front}
        {props.card.back}
    </div>
  )
}

export default CardSmall