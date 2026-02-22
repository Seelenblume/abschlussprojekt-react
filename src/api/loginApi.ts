import type { LoginInfo } from "../models/loginInfo";

export async function getLogin() {
        // const url = `${process.env.API_SERVER_URL}/verify_login`;

        // const response = await fetch(url, {
        //         method: "GET",
        //         headers: {
        //                 'Content-Type': 'application/json',
        //         },
        //         credentials: "include" as RequestCredentials
        // });
        // if (response.ok) {
        //         const loginInfo: LoginInfo | false = await response.json();
        //         return loginInfo;
        // }
        // if (response.status === 401) {
        //         throw new Error(` ${response.statusText}`);
        // }
        // throw new Error(` ${response.statusText}`);
        return {userId: "000000", email: "kiko@gmail.com", userName: "kiko"}
}

export async function deleteLogin() {
        const url = `${process.env.API_SERVER_URL}/logout`;
        const response = await fetch(url, {
                method: "DELETE",
                credentials: "include"
        })
        if (response.ok) {
                return;
        }
        throw new Error(`Error logging out, status: ${response.status}`);
}

// export async function postLogin(input: string, password: string) {
//         const url = `${process.env.API_SERVER_URL}/login`;

//         const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                         "Content-Type": "application/json"
//                 },
//                 credentials: "include" as RequestCredentials,
//                 body: JSON.stringify({ name, password })
//         });
//         console.log(response)
//         if (response.ok) {
//                 const loginInfo: LoginInfo = await response.json();
//                 //     const loginInfo = await response.json();
//                 return loginInfo;
//         }

//         if (response.status === 401) {
//                 throw new Error("Invalid credentials");
//         }

//         throw new Error(`${response.statusText}`);
// }

export async function signUp(email: string, password: string, userName: string) {
        // const url = `http://localhost:3002/api/signup`;
        const url = `${process.env.API_SERVER_URL}/signup`;

        const response = await fetch(url, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                credentials: "include" as RequestCredentials,
                body: JSON.stringify({
                        email: email,
                        password: password,
                        userName: userName,
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