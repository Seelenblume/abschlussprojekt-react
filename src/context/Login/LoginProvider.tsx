import { type ReactNode, useState } from "react";
import { signUp as loginSignUp, signIn as loginSignIn, getLogin as getLoginInfo, deleteLogin as deleteLoginInfo } from "../../api/loginApi";
import type { LoginInfo } from "../../models/loginInfo";
import { useToast } from "../Toast/ToastContext";
import { LoginContext } from "./LoginContext";
import { v4 as uuidv4 } from 'uuid';


interface ProviderProps {
    children: ReactNode;
}

export default function LoginProvider({ children }: ProviderProps) {
    const { addToast } = useToast()
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
            addToast({
                id: uuidv4(),
                message: "Abgemeldet!",
                type: "SUCCESS",
            })
        } catch (error) {
            addToast({
                id: uuidv4(),
                message: "Abmeldung fehlgeschlagen!",
                type: "ERROR",
            })
        }
    }

    async function signIn(email: string, password: string) {
        try {
            const data = await loginSignIn(email, password);
            setLoginInfo(data)
            addToast({
                    id: uuidv4(),
                    message: 'Angemeldet!',
                    type: 'SUCCESS'
            })
        } catch (error) {
            setLoginInfo(false);
            addToast({
                id: uuidv4(),
                message: "Anmeldung fehlgeschlagen!",
                type: "ERROR",
            })
        }
    }

    async function signUp(email: string, password: string, userName: string) {
        try {
            const data = await loginSignUp(email, password, userName);
            setLoginInfo(data)
            addToast({
                    id: uuidv4(),
                    message: 'Angemeldet!',
                    type: 'SUCCESS'
            })
        } catch (error) {
            setLoginInfo(false);
            addToast({
                id: uuidv4(),
                message: "Registrierung fehlgeschlagen!",
                type: "ERROR",
            })
        }
    }

    return (
        <LoginContext.Provider value={{
            loginInfo, getLogin, deleteLogin, signIn, signUp
        }}>
            {children}
        </LoginContext.Provider>
    )
}