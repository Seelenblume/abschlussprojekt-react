import { Link } from "react-router"
import styles from "./CollectionCompact.module.css"
import { LucideLibrary } from "lucide-react"
import type { CardCollection } from "../../models/card"

interface Props {
  collection: CardCollection,
}


export default function CollectionCompact({ collection }: Props) {

  return (
    <Link className={styles.compact} to={`/collection/${collection.collectionId}`}>
      <div className={styles.header}>
        <p>{collection.title}</p>
        <span><LucideLibrary/><p>{collection.cardCount}</p></span>
      </div>
      <p className={styles.desc}>{collection.description}</p>
      <div className={styles.footer}>
        <Link to={`/user/${collection.user.userId}`}>von {collection.user.name}</Link>
        <div className={styles.tags}>
          {collection.categories.map((category) =>
            <div key={category.value}>
              <p>{category.label}</p>
            </div>
          )}
        </div>
      </div>

    </Link>
  )
}