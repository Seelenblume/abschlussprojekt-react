import { testCardCollections } from "../lib/testdata";
import type { CardCollection } from "../models/card";
import type { Category } from "../models/category";

// async function getAllUserCardCollections(userId: string) {

//      const response = await fetch(`${process.env.API_SERVER_URL}/api/collection/user/${userId}`, {
//             method: "GET",
//             credentials: "include" as RequestCredentials
//         });
//         const loadedData: CardCollection = await response.json();
//         return loadedData;
// }
export async function getCollectionsBySearch(search: string) {

    //  const response = await fetch(`${process.env.API_SERVER_URL}/api/collection/user/${userId}`, {
    //         method: "GET",
    //         credentials: "include" as RequestCredentials
    //     });
    //     const loadedData: CardCollection = await response.json();
    //     return loadedData;

    return testCardCollections
}

export async function getCardCollectionById(collectionId: string) {

    //  const response = await fetch(`${process.env.API_SERVER_URL}/api/collection/${collectionId}`, {
    //         method: "GET",
    //         credentials: "include" as RequestCredentials
    //     });
    //     const loadedData: CardCollection = await response.json();
    //     return loadedData;
        return testCardCollections[1]
}

export async function postCardCollection(
    title: string,
    description: string,
    categories: Category[],
) {
    //  const response = await fetch(`${process.env.API_SERVER_URL}/api/collection/`, {
    //         method: "POST",
    //             headers: {
    //                     "Content-Type": "application/json"
    //             },
    //             credentials: "include" as RequestCredentials,
    //             body: JSON.stringify({title, description })
    //     });
        
    //     if(!response.ok) {
    //         throw new Error(response.status.toLocaleString())
    //     }
    return `/user/collection/1234`
}

// async function postCard(
//     collectionId: string,
//     front: string,
//     back: string,
//     notes: string,
// ) {
//      const response = await fetch(`${process.env.API_SERVER_URL}/api/card/`, {
//             method: "POST",
//                 headers: {
//                         "Content-Type": "application/json"
//                 },
//                 credentials: "include" as RequestCredentials,
//                 body: JSON.stringify({collectionId, front, back, notes})
//         });
        
//         if(!response.ok) {
//             throw new Error(response.status.toLocaleString())
//         }
// }
