import type { Category } from "../models/category";


const apiUrl = import.meta.env.VITE_API_URL

export async function getAllCategories() {
     const response = await fetch(`${apiUrl}/categories`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: Category[] = await response.json();
        return loadedData;
}

