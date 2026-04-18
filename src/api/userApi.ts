import type { User } from "../models/user";

const apiUrl = import.meta.env.VITE_API_URL

export async function getUserById(id: string) {
    const response = await fetch(`${apiUrl}/user/${id}`, {
        method: "GET",
        credentials: "include" as RequestCredentials
    });
    const loadedData: User = await response.json();
    return loadedData;
}