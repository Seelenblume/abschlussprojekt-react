import React from 'react'
import CollectionCompact from './CollectionCompact'
import type { CardCollection, CardCollectionShort } from '../../models/card'

import styles from "./CollectionGrid.module.css"

interface Props {
    collections: CardCollectionShort[],
}

const CollectionGrid = ({ collections }: Props) => {
    return (
        <div className={styles.grid}>
            {collections.map((collection) =>
                <div key={collection.collectionId}>
                    <CollectionCompact collection={collection} />
                </div>
            )}
        </div>
    )
}

export default CollectionGrid