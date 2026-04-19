import { Link, useNavigate } from 'react-router'
import styles from "./Authform.module.css"
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useLoginContext } from '../../context/Login/LoginContext'

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
    const { loginInfo, signIn, signUp } = useLoginContext()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (type === "sign-in") {
            console.log("sign-in", data)
            await signIn(data.email, data.password)
            navigate("/")
        } else {
            console.log("sign-up", data)
            await signUp(data.email, data.password, data.userName!)
            if (loginInfo) {
                navigate(`/user/${loginInfo.userId}`)
            } else {
                navigate("/")
            }
        }
    }

    return (
        <div className={styles.auth}>


            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{type === "sign-in" ? "Anmelden" : "Registrieren"}</h2>
                <div>
                    {type === "sign-up" &&
                        <div className={styles.inputGroup}>
                            <label htmlFor='username'>User Name</label>
                            <input className={`${errors.userName && styles.inputError}`} {...register("userName", {
                                required: "Pflichtfeld",
                                maxLength: {
                                    value: 20,
                                    message: "MMaximal 20 Zeichen"
                                }
                            })} placeholder='User Name eingeben...' id='username' />
                            {errors.userName && <span className={styles.errorMessage}>{errors.userName.message}</span>}
                        </div>
                    }



                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>E-Mail</label>
                        <input {...register("email", {
                            required: "Pflichtfeld",
                            pattern: {
                                // https://react-hook-form.com/advanced-usage
                                value: /\S+@\S+\.\S+/,
                                message: "Eingabe muss eine gültige E-Mail sein",
                            },
                        })} placeholder='E-Mail eingeben...' id='email' />
                        {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                    </div>


                    <div className={styles.inputGroup}>
                        <label htmlFor='password'>Passwort</label>
                        <input type='password' {...register("password", {
                            required: "Pflichtfeld",
                            maxLength: {
                                value: 50,
                                message: "Maximal 50 Zeichen"
                            }
                        })} placeholder='Passwort eingeben...' />

                        {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
                    </div>
                </div>

                {type === "sign-in"
                    ? <p>Noch kein Konto? <Link to="/sign-up?redirect=home">Hier registrieren</Link></p>
                    : <p>Du hast schon ein Konto? <Link to="/sign-in?redirect=home">Hier anmelden</Link></p>
                }


                <button type='submit'>{type === "sign-in" ? "Anmelden" : "Registrieren"}</button>
            </form>
        </div>
    )
}

export default AuthForm