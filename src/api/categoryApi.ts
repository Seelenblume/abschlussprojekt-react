import type { Category } from "../models/category";
import { testCategories } from "../test/testdata";


const apiUrl = import.meta.env.VITE_API_URL

async function getCategoryById(categoryId: string) {

     const response = await fetch(`${apiUrl}/category/${categoryId}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: Category = await response.json();
        return loadedData;
}

export async function getAllCategories() {
     const response = await fetch(`${apiUrl}/categories`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: Category[] = await response.json();
        return loadedData;
}

