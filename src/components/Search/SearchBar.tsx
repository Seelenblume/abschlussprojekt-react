import React from 'react'
import styles from "./SearchBar.module.css"

const SearchBar = () => {
    return (
        <div className={styles.searchbar}>
            <input
                placeholder='Search collection...'
            />
            <button>
                S
            </button>
        </div>

    )
}

export default SearchBar