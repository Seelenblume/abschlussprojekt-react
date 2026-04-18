import { useState } from "react"
import styles from "./SearchBar.module.css"
import { LucideSearch } from 'lucide-react'
import { useNavigate } from "react-router"

export default function SearchBar() {
    const [searchData, setSearchData] = useState("")

    const navigate = useNavigate();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setSearchData(event.target.value);
    }

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (searchData) {
            navigate(`/collections?query=${searchData}`)
        }
    }

    return (
        <div >
            <form onSubmit={onSubmit} className={styles.searchbar}>
                <input
                    type="search"
                    placeholder='Sammlung suchen...'
                    onChange={handleChange}
                    value={searchData}
                />
                <button type="submit">
                    <LucideSearch />
                </button>
            </form>
        </div>
    )
}