import CollectionCompact from './CollectionCompact'
import type { CardCollection } from '../../models/card'

import styles from "./CollectionGrid.module.css"

interface Props {
    collections: CardCollection[],
}

export default function CollectionGrid({ collections }: Props) {
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