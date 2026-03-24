import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router'
import { getAllCategories } from '../../api/categoryApi'
import type { Category } from '../../models/category'

const CategoryList = () => {

    const [categories, setCategories] = useState<Category[]>([])

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

    const navigate = useNavigate()

    return (
        <div>
            <Select styles={{
                control: (base) => ({
                    ...base,
                    width: "10rem",
                    border: "none",
                    borderColor: "transparent",
                    boxShadow: "none",
                    "&:hover": {
                        border: "none",
                        borderColor: "transparent"
                    },
                    
                }),
                indicatorSeparator: () => ({
                    display: "none"
                }),
                menu: (base) => ({
                    ...base,
                    width: "20rem"
                }),
                menuList: (base) => ({
                    ...base,
                    // eigentlich scrollbar styling aber idk wie man das macht
                }),
            }}
                options={categories}
                value={null}
                placeholder="Kategorie"
                isSearchable={false}
                onChange={(option) => {
                    const url = `collections/category/${option?.value}`
                    navigate(url);
                    // falls option null ist sollte für die category route einfach 404 geben?
                }}
            ></Select>

        </div>
    )
}

export default CategoryList