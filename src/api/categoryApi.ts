import type { Category } from "../models/category";
import { testCategories } from "../test/testdata";

async function getCategoryById(categoryId: string) {

     const response = await fetch(`${process.env.API_SERVER_URL}/api/category/${categoryId}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: Category = await response.json();
        return loadedData;
}

export async function getAllCategories() {

    //  const response = await fetch(`${process.env.API_SERVER_URL}/api/category/`, {
    //         method: "GET",
    //         credentials: "include" as RequestCredentials
    //     });
    //     const loadedData: Category[] = await response.json();
    //     return loadedData;
    return testCategories
}

