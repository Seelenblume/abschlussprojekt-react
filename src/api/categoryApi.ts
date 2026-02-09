import type { Category } from "../models/category";

async function getCategoryById(categoryId: string) {

     const response = await fetch(`${process.env.API_SERVER_URL}/api/category/${categoryId}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: Category = await response.json();
        return loadedData;
}

async function getAllCategories() {

     const response = await fetch(`${process.env.API_SERVER_URL}/api/category/`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: Category[] = await response.json();
        return loadedData;
}

