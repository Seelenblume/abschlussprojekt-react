import { Link } from 'react-router';
import styles from "./NavBar.module.css";
import SearchBar from '../Search/SearchBar';
import { LucidePlus } from 'lucide-react';

const Navbar = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/">
                    <img src="/logo.png" alt='logo' />
                </Link>
                <SearchBar />
                <div className={styles.links}>
                    <Link to="/collection/create" className={styles.create}>
                        <LucidePlus />
                        Erstellen
                    </Link>
                    <Link to={"/sign-up"}>
                        <p>Anmelden</p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar