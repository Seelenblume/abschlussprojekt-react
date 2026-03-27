import { Link, useNavigate } from 'react-router';
import styles from "./NavBar.module.css";
import SearchBar from '../Search/SearchBar';
import { LucidePlus } from 'lucide-react';
import CategoryList from './CategoryList';
import { useLoginContext } from '../../context/Login/LoginContext';
import { deleteLogin } from '../../api/loginApi';
import { useToast } from '../../context/Toast/ToastContext';

const Navbar = () => {

    const { loginInfo, setLoginInfo } = useLoginContext();
    const  { addNotification } = useToast()
    const navigate = useNavigate()

    async function signOut() {
        try {
            await deleteLogin()
            setLoginInfo(false)
            navigate("/")
            addNotification({
                id: '',
                message: "Signed out!",
                type: 'ERROR'
            })
        } catch (error) {
            addNotification({
                 id: '',
                message: (error as Error).message,
                type: 'ERROR'
            })
        }
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
                    <Link to={`user/${loginInfo.userId}`}><p>My Account</p></Link>
                }
                {loginInfo ? <p onClick={() => signOut()}>Sign Out</p>  : <Link to={"/sign-up"}>
                        <p>Sign Up</p>
                    </Link>}
                   
                </div>
            </nav>
        </header>
    )
}

export default Navbar