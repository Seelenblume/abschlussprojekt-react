import { type ReactNode, useState } from "react";
import { signUp as loginSignUp, signIn as loginSignIn, getLogin as getLoginInfo, deleteLogin as deleteLoginInfo } from "../../api/loginApi";
import type { LoginInfo } from "../../models/loginInfo";
import { useToast } from "../Toast/ToastContext";
import { LoginContext } from "./LoginContext";

interface ProviderProps {
    children: ReactNode;
}

export const LoginProvider = ({ children }: ProviderProps) => {
    const { addNotification } = useToast()
    

    const [loginInfo, setLoginInfo] = useState<LoginInfo | false>(false);

    async function getLogin() {
        try {
            const data = await getLoginInfo();
            setLoginInfo(data)
        } catch (error) {
            setLoginInfo(false);
        }
    }

     async function deleteLogin() {
        try {
            await deleteLoginInfo();
            setLoginInfo(false)
            addNotification({
                id: "BO",
                message: "Abgemeldet!",
                type: "ERROR",
            })
        } catch (error) {
            addNotification({
                id: "BO",
                message: "Abmeldung fehlgeschlagen!",
                type: "ERROR",
            })
        }
    }

    async function signIn(email: string, password: string) {
        try {
            const data = await loginSignIn(email, password);
            setLoginInfo(data)
            addNotification({
                    id: '',
                    message: 'Angemeldet!',
                    type: 'SUCCESS'
            })
        } catch (error) {
            setLoginInfo(false);
            addNotification({
                id: "nw",
                message: "Anmeldung fehlgeschlagen!",
                type: "ERROR",
            })
        }
    }

    async function signUp(email: string, password: string, userName: string) {
        try {
            const data = await loginSignUp(email, password, userName);
            setLoginInfo(data)
            addNotification({
                    id: '',
                    message: 'Angemeldet!',
                    type: 'SUCCESS'
            })
        } catch (error) {
            setLoginInfo(false);
            addNotification({
                id: "vsodnö",
                message: "Registrierung fehlgeschlagen!",
                type: "ERROR",
            })
        }
    }

    return (
        <LoginContext.Provider value={{
            loginInfo, setLoginInfo, getLogin, deleteLogin, signIn, signUp
        }}>
            {children}
        </LoginContext.Provider>
    )
}