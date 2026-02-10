import CollectionCompact from "../../Collection/CollectionCompact"
import styles from "./PopularCollectionsArea.module.css"

const PopularCollectionsArea = () => {
  return (
    <div className={styles.area}>
        <h3>Popular collections</h3>
        <div className={styles.grid}>
            <CollectionCompact/>
            <CollectionCompact/>
            <CollectionCompact/>
            <CollectionCompact/>
            <CollectionCompact/>
            <CollectionCompact/>
        </div>
    </div>
  )
}

export default PopularCollectionsArea