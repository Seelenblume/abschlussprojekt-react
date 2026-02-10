import styles from "./CollectionCompact.module.css"

const CollectionCompact = () => {
  return (
    <div className={styles.compact}>
      <div className={styles.header}>
        <p>Title</p>
        <p>Size</p>
      </div>
      <p className={styles.desc}>Description Text</p>
      <div className={styles.footer}>
        <p>Username</p>
        <div className={styles.tags}>
          <p>Tag</p>
          <p>Tag</p>
          <p>Tag</p>
        </div>
      </div>

    </div>
  )
}

export default CollectionCompact