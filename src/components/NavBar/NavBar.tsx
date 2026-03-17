import { Link } from 'react-router';
import styles from "./NavBar.module.css";
import SearchBar from '../Search/SearchBar';
import { LucidePlus } from 'lucide-react';
import { useLoginContext } from '../../context/LoginContext';

const Navbar = () => {

    const { loginInfo, setLoginInfo } = useLoginContext();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/">
                    <img src="/logo.png" alt='logo' />
                </Link>
                <SearchBar />
                <div className={styles.links}>
                    <Link to={loginInfo ? "/collection/create" : "/sign-in"} className={styles.create}>
                        <LucidePlus />
                        Erstellen
                    </Link>

                    {loginInfo &&
                    <Link to={`user/${loginInfo.userId}`}><p>My Account</p></Link>
                }
                {loginInfo ? <p onClick={() => setLoginInfo(false)}>Sign Out</p>  : <Link to={"/sign-in"}>
                        <p>Sign In</p>
                    </Link>}
                   
                </div>
            </nav>
        </header>
    )
}

export default Navbar