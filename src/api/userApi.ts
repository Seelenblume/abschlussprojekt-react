import type { User } from "../models/user";

const apiUrl = import.meta.env.VITE_API_URL

export async function getUserById(id: string) {

    // return {name: "kiko", id: "0000"}
     const response = await fetch(`${apiUrl}/user/${id}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: User = await response.json();
        return loadedData;
}