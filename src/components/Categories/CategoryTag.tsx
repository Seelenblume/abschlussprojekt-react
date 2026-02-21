import React from 'react'
import styles from "./CategoryTag.module.css"

const CategoryTag = ({categoryName}:{categoryName: string}) => {
  return (
    <div className={styles.tag}>
        <p>{categoryName}</p>
    </div>
  )
}

export default CategoryTag