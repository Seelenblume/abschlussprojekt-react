import React from 'react'
import { Link, useNavigate } from 'react-router'
import styles from "./Authform.module.css"
import { useForm, type SubmitHandler } from 'react-hook-form'
import { signIn, signUp } from '../../api/loginApi'
import { useToast } from '../../context/ToastContext'

interface Props {
    type: "sign-in" | "sign-up"
}

type Inputs = {
    userName?: string,
    email: string,
    password: string,
}

const AuthForm = ({ type }: Props) => {

    const navigate = useNavigate()

    const { addNotification } = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (type === "sign-in") {
            try {
                console.log("sign-in", data)
                await signIn(data.email, data.password)
                navigate("/")
                addNotification({
                    id: '',
                    message: 'Signed In!',
                    type: 'SUCCESS'
                })
            } catch (error) {
                addNotification({
                    id: '',
                    message: 'Something went wrong!',
                    type: 'SUCCESS'
                })
            }
        } else {
            try {
                console.log("sign-up", data)
                await signUp(data.email, data.password, data.userName!)
                navigate("/")
                addNotification({
                    id: '',
                    message: 'Signed In!',
                    type: 'SUCCESS'
                })
            } catch (error) {
                 addNotification({
                    id: '',
                    message: 'Something went wrong!',
                    type: 'SUCCESS'
                })
            }
        }
    }

    return (
        <div className={styles.auth}>


            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{type === "sign-in" ? "Sign In" : "Sign Up"}</h2>
                <div>
                    {type === "sign-up" &&
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
                    }



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
                                value: 50,
                                message: "Maximum of 50 characters"
                            }
                        })} placeholder='password' />

                        {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
                    </div>
                </div>

                {type === "sign-in"
                    ? <p>No account yet? <Link to="/sign-up?redirect=home">Sign Up</Link></p>
                    : <p>Already have an account? <Link to="/sign-in?redirect=home">Sign In</Link></p>
                }


                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AuthForm