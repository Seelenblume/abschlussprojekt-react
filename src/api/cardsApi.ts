import { testCardCollections } from "../test/testdata";
import type { CardCollection } from "../models/card";
import type { Category } from "../models/category";

const apiUrl = import.meta.env.VITE_API_URL

export async function getCollectionsBySearch(search: string) {

     const response = await fetch(`${apiUrl}/search?query=${search}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: CardCollection[] = await response.json();
        return loadedData;
}

export async function getPopularCollections() {

     const response = await fetch(`${apiUrl}/collections/popular`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: CardCollection[] = await response.json();
        return loadedData;

    // return testCardCollections
}

export async function getCardCollectionById(collectionId: string) {

     const response = await fetch(`${apiUrl}/collection/${collectionId}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        const loadedData: CardCollection = await response.json();
        return loadedData;
        // return testCardCollections[1]
}

export async function getUserCardCollectionByUserId(userId: string) {

    //  const response = await fetch(`${apiUrl}/collection/${collectionId}`, {
    //         method: "GET",
    //         credentials: "include" as RequestCredentials
    //     });
    //     const loadedData: CardCollection = await response.json();
    //     return loadedData;
        return testCardCollections
}

export async function getSavedCollectionsByUserId(userId: string) {

     const response = await fetch(`${apiUrl}/saved/${userId}`, {
            method: "GET",
            credentials: "include" as RequestCredentials
        });
        //error handling????
        const loadedData: CardCollection[] = await response.json();
        return loadedData;
        // return [testCardCollections[0], testCardCollections[1]]
}

export async function postCardCollection(
    userId: string,
    title: string,
    description?: string,
    categories?: Category[],
) {
     const response = await fetch(`${apiUrl}/collection/`, {
            method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                credentials: "include" as RequestCredentials,
                body: JSON.stringify({userId, title, description, categories })
        });
        
        if(!response.ok) {
            throw new Error(response.status.toLocaleString())
        }
        const loadedData: CardCollection = await response.json();
        return loadedData;
    // return `/user/1234/collection/1234`
}

export async function postCard(
    collectionId: string,
    front: string,
    back: string,
    notes: string,
) {
     const response = await fetch(`${apiUrl}/card/`, {
            method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                credentials: "include" as RequestCredentials,
                body: JSON.stringify({collectionId, front, back, notes})
        });
        
        if(!response.ok) {
            throw new Error(response.status.toLocaleString())
        }
}

export async function updateCard(
    cardId: string,
    front?: string,
    back?: string,
    notes?: string,
) {
     const response = await fetch(`${apiUrl}/card/`, {
            method: "PUT",
                headers: {
                        "Content-Type": "application/json"
                },
                credentials: "include" as RequestCredentials,
                body: JSON.stringify({cardId, front, back, notes})
        });
        
        if(!response.ok) {
            throw new Error(response.status.toLocaleString())
        }
}

export async function postBookmark(userId: string, collectionId: string) {

}

export async function deleteBookmark(userId: string, collectionId: string) {

}