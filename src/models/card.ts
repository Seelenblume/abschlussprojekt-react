import type { Category } from "./category"
import type { User } from "./user"


export interface CardCollectionShort {
    id: string,
    user: User,
    title: string,
    description: string,
    categories: Category[],
    favorite: boolean,
    cardCount: number,
    color: typeof CollectionColor
}

export interface CardCollection extends CardCollectionShort {
    cards: CardModel[],
}


export type CardModel = {
    id: string,
    front: string,
    back: string,
    notes: string
}

export const CollectionColor = {
    RED: "red",
    BLUE: "blue",
} as const