import { Link } from 'react-router';
import styles from "./NavBar.module.css";
import SearchBar from '../Search/SearchBar';
import { LucidePlus } from 'lucide-react';
// import { auth, signIn, signOut } from '@/auth'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

//component async weil server component
const Navbar = () => {
    // const session = await auth();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/">
                    <img src="/logo.png" alt='logo' />
                </Link>
                <SearchBar />
                <div className={styles.links}>
                    <Link to="/" className={styles.create}>
                        <LucidePlus />
                        Erstellen
                    </Link>
                    <Link to={"/sign-up"}>
                        <p>Anmelden</p>
                    </Link>
                </div>

                {/* {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({redirectTo: "/"})
                            }}>
                                <button type='submit'>
                                    <span>Logout</span> 
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    )
                        : (
                            // signIn is async, function has to be server action
                            //React 19 Forms
                            <form action={async () => {
                                "use server";
                                await signIn('github')
                            }}>
                                <button type='submit'>
                                    <span>Login</span> 
                                </button>
                            </form>
                        )} */}
            </nav>
        </header>
    )
}

export default Navbar