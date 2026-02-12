import React from 'react'
import { Link } from 'react-router'

interface Props {
    type: string,
}

const AuthForm = ({ type }: Props) => {
    return (
        <div>
            <form>
                {type === "sign-in"
                    ? (
                        <div>
                            <input placeholder='user name or email' />
                            <input placeholder='password' />
                        </div>)
                    : (
                        <div>
                            <input placeholder='user name' />
                            <input placeholder='user name' />
                            <input placeholder='password' />
                        </div>
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