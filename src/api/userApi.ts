import type { User } from "../models/user";

async function getUserById(id: string) {

     const response = await fetch(`${process.env.API_SERVER_URL}/api/user/${id}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: User = await response.json();
        return loadedData;
}