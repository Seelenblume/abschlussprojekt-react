import type { CardCollection } from "../../models/card"
import styles from "./CollectionCompact.module.css"

interface Props {
  collection: CardCollection,
}

const CollectionCompact = ({ collection }: Props) => {
  return (
    <div className={styles.compact}>
      <div className={styles.header}>
        <p>{collection.title}</p>
        <p>{collection.cards.length}</p>
      </div>
      <p className={styles.desc}>{collection.description}</p>
      <div className={styles.footer}>
        <p>von {collection.user.name}</p>
        <div className={styles.tags}>
          {collection.categories.map((category) =>
            <div>
              <p>{category.name}</p>
              {category.subCategory && <p>{category.subCategory.name}</p>}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default CollectionCompact