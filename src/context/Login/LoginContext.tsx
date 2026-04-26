import { createContext, useContext } from "react";
import type { LoginInfo } from "../../models/loginInfo";

interface LoginContextType {
    loginInfo: LoginInfo | false;
    getLogin: () => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, userName: string) => Promise<void>;
    deleteLogin: () => Promise<void>
}

export const LoginContext = createContext<LoginContextType>({} as LoginContextType);


export const useLoginContext = () => useContext(LoginContext);