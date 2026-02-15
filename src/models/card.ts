import type { Category } from "./category"
import type { User } from "./user"

export type CardCollection = {
    id: string,
    user: User,
    title: string,
    description: string,
    cards: CardModel[],
    categories: Category[],
}

export type CardModel = {
    id: string,
    front: string,
    back: string,
    notes: string
}