import React from 'react'
import type { CardCollection } from '../../models/card'

export default function LoggedInUserprofile({collections}:{collections: CardCollection[]}) {
  return (
    <div>LoggedInUserprofile
        <div>My collections: </div>
        <div>My saved collections:</div>
    </div>
  )
}