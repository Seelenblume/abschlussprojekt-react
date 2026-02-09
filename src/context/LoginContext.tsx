import { createContext, useContext } from "react";
import type { LoginInfo } from "../models/loginInfo";

interface LoginContextType {
    loginInfo: LoginInfo | false | undefined;
    setLoginInfo: (loginInfo: LoginInfo | false) => void
}

export const LoginContext = createContext<LoginContextType>({} as LoginContextType);


export const useLoginContext = () => useContext(LoginContext);

