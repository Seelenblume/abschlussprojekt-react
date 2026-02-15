import { useNavigate } from "react-router"
import type { CardCollection } from "../../models/card"
import styles from "./CollectionCompact.module.css"

interface Props {
  collection: CardCollection,
}


const CollectionCompact = ({ collection }: Props) => {
  
  const navigate = useNavigate();

  return (
    // TODO: Link oder navigate besser?
    <div className={styles.compact} onClick={() => navigate(`/collection/${collection.id}`)}>
      <div className={styles.header}>
        <p>{collection.title}</p>
        <p>{collection.cards.length}</p>
      </div>
      <p className={styles.desc}>{collection.description}</p>
      <div className={styles.footer}>
        <p>von {collection.user.name}</p>
        <div className={styles.tags}>
          {collection.categories.map((category) =>
            <div key={category.name}>
              <p>{category.name}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default CollectionCompact