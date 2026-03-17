import React from 'react'
import { testCategories } from '../../test/testdata'
import Select from 'react-select'
import { useNavigate } from 'react-router'

const CategoryList = () => {
    const categories = testCategories
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