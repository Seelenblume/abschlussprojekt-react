import styles from "./SearchBar.module.css"
import { LucideSearch } from 'lucide-react'

const SearchBar = () => {
    return (
        <div className={styles.searchbar}>
            <input
                placeholder='Search collection...'
            />
            <button>
                <LucideSearch />
            </button>
        </div>

    )
}

export default SearchBar