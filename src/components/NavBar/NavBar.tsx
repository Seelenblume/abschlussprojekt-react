import { Link, useNavigate } from 'react-router';
import styles from "./NavBar.module.css";
import SearchBar from '../Search/SearchBar';
import { LucidePlus } from 'lucide-react';
import CategoryList from './CategoryList';
import { useLoginContext } from '../../context/Login/LoginContext';

const Navbar = () => {

    const { loginInfo, deleteLogin } = useLoginContext();
    const navigate = useNavigate()

    async function signOut() {
        await deleteLogin()
        navigate("/")
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/">
                    <img src="/logo.png" alt='logo' />
                </Link>
                <CategoryList />
                <SearchBar />
                <div className={styles.links}>
                    <Link to={loginInfo ? "/collection/create" : "/sign-in"} className={styles.create}>
                        <LucidePlus />
                        Erstellen
                    </Link>

                    {loginInfo &&
                        <Link to={`user/${loginInfo.userId}`}><p>Mein Konto</p></Link>
                    }
                    {loginInfo ? <p onClick={() => signOut()}>Abmelden</p> : <Link to={"/sign-up"}>
                        <p>Registrieren</p>
                    </Link>}

                </div>
            </nav>
        </header>
    )
}

export default Navbar