import React from 'react'
import { Link } from 'react-router'
import styles from "./Authform.module.css"

interface Props {
    type: string,
}

const AuthForm = ({ type }: Props) => {
    return (
        <div className={styles.auth}>
            <form>
                {type === "sign-in"
                    ? (
                        <>^
                            {/* make custom input with label */}
                            <input placeholder='user name or email' />
                            <input placeholder='password' />
                        </>)
                    : (
                        <>
                            <input placeholder='user name' />
                            <input placeholder='user name' />
                            <input placeholder='password' />
                        </>
                    )
                }
            </form>
            <div className="mx-auto">
                {type === "sign-in"
                    ? <p>No account yet? <Link to="/sign-up?redirect=home">Sign Up</Link></p>
                    : <p>Already have an account? <Link to="/sign-in?redirect=home">Sign In</Link></p>
                }
            </div>
        </div>
    )
}

export default AuthForm