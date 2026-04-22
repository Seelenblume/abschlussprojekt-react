import type { LoginInfo } from "../models/loginInfo";

const apiUrl = import.meta.env.VITE_API_URL

export async function getLogin() {
        // return{userId: "0000", userName: "kiko", email: ""}
        const url = `${apiUrl}/login`;

        const response = await fetch(url, {
                method: "GET",
                headers: {
                        'Content-Type': 'application/json',
                },
                credentials: "include" as RequestCredentials
        });
        if (response.ok) {
                const loginInfo: LoginInfo | false = await response.json();
                return loginInfo;
        }
        if (response.status === 401) {
                throw new Error(` ${response.statusText}`);
        }
        throw new Error(` ${response.statusText}`);
}

export async function deleteLogin() {
        const url = `${apiUrl}/logout`;
        const response = await fetch(url, {
                method: "DELETE",
                credentials: "include"
        })
        if (response.ok) {
                return;
        }
        throw new Error(`Error logging out, status: ${response.status}`);
}

export async function signIn(email: string, password: string,) {
        const url = `${apiUrl}/login`;

        const response = await fetch(url, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                credentials: "include" as RequestCredentials,
                body: JSON.stringify({
                        email: email,
                        password: password,
                })
        });

        if (response.ok) {
                const loginInfo: LoginInfo = await response.json();
                //     const loginInfo = await response.json();
                console.log("inner signin", loginInfo)
                return loginInfo;
        }

        if (response.status === 401) {
                throw new Error("Invalid credentials");
        }

        throw new Error(`${response.statusText}`);
}

export async function signUp(email: string, password: string, userName: string) {
        // const url = `http://localhost:3002/api/signup`;
        const url = `${apiUrl}/signup`;

        const response = await fetch(url, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                credentials: "include" as RequestCredentials,
                body: JSON.stringify({
                        email: email,
                        password: password,
                        name: userName,
                })
        });

        if (response.ok) {
                const loginInfo: LoginInfo = await response.json();
                //     const loginInfo = await response.json();
                return loginInfo;
        }

        if (response.status === 401) {
                throw new Error("Invalid credentials");
        }

        throw new Error(`${response.statusText}`);
}