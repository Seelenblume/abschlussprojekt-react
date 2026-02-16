import React from 'react'
import { Link } from 'react-router'
import styles from "./Authform.module.css"
import { useForm, type SubmitHandler } from 'react-hook-form'

interface Props {
    type: string,
}

type Inputs = {
    userName: string,
    email: string,
    password: string,
}

const AuthForm = ({ type }: Props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.auth}>


            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Register</h2>
                <div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='username'>User name</label>
                        <input className={`${errors.userName && styles.inputError}`} {...register("userName", {
                            required: "This field is required",
                            maxLength: {
                                value: 20,
                                message: "Maximum of 20 characters"
                            }
                        })} placeholder='user name' id='username' />
                        {errors.userName && <span className={styles.errorMessage}>{errors.userName.message}</span>}
                    </div>


                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>E-Mail</label>
                        <input {...register("email", {
                            required: "This field is required",
                            pattern: {
                                // https://react-hook-form.com/advanced-usage
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",
                            },
                        })} placeholder='E-mail' id='email' />
                        {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                    </div>


                    <div className={styles.inputGroup}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' {...register("password", {
                            required: "This field is required",
                            maxLength: {
                                value: 20,
                                message: "Maximum of 50 characters"
                            }
                        })} placeholder='password' />

                        {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
                    </div>
                </div>

                <span>Aleady have an account? <Link to={"/sign-in"}> Sign In </Link></span>


                <button type='submit'>Submit</button>
            </form>

            {/* <form>
                {type === "sign-in"
                    ? (
                        <>
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
            </div> */}
        </div>
    )
}

export default AuthForm