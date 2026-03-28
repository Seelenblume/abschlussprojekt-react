import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getAllCategories } from '../../api/categoryApi'
import type { Category } from '../../models/category'
import { Menu, MenuItem } from '@szhsin/react-menu'
import "@szhsin/react-menu/dist/core.css";
import styles from "./CategoryList.module.css"


const CategoryList = () => {

    const [categories, setCategories] = useState<Category[]>([])
    
    const navigate = useNavigate()

    useEffect(() => {
        async function load() {
            try {
                const cat = await getAllCategories()
                setCategories(cat)
            } catch (error) {
                // just keep it empty...
                // console.log(error)
            }
        }
        load()
    }, [])

    return (
        <Menu menuButton={<p className={styles.menu}>Nach Kategorie</p>}>
            {categories.map((category) =>
                <MenuItem 
                className={styles.menuItem}
                value={category.value}
                onClick={() => {
                    const url = `collections?category=${category.value}`
                    navigate(url);
                }}>{category.label}</MenuItem>
            )}
        </Menu>
    )
}

export default CategoryList