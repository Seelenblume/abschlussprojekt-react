import { Link } from "react-router"
import type { CardCollection } from "../../models/card"
import styles from "./CollectionCompact.module.css"

interface Props {
  collection: CardCollection,
}


const CollectionCompact = ({ collection }: Props) => {

  return (
    <Link className={styles.compact} to={`/collection/${collection.id}`}>
      <div className={styles.header}>
        <p>{collection.title}</p>
        <p>{collection.cards.length}</p>
      </div>
      <p className={styles.desc}>{collection.description}</p>
      <div className={styles.footer}>
        <Link to={`/user/${collection.user.id}`}>von {collection.user.name}</Link>
        <div className={styles.tags}>
          {collection.categories.map((category) =>
            <div key={category.name}>
              <p>{category.name}</p>
            </div>
          )}
        </div>
      </div>

    </Link>
  )
}

export default CollectionCompact