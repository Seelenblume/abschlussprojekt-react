import React from 'react'
import CollectionCompact from './CollectionCompact'
import type { CardCollection } from '../../models/card'

import styles from "./CollectionGrid.module.css"

interface Props {
    collections: CardCollection[],
}

const CollectionGrid = ({ collections }: Props) => {
    return (
        <div className={styles.grid}>
            {collections.map((collection) =>
                <CollectionCompact collection={collection} />
            )}
        </div>
    )
}

export default CollectionGrid