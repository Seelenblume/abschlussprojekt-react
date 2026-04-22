import { Link } from "react-router"
import type { Category } from "../../models/category"
import styles from "./CategoryTag.module.css"

export default function CategoryTag({category}:{category: Category}) {
  return (
    <div className={styles.tag}>
        <Link to={`/collections?category=${category.value}`}>{category.label}</Link>
    </div>
  )
}