import type { Category } from "./category"
import type { User } from "./user"

export type CardCollection = {
    id: string,
    user: User,
    title: string,
    description: string,
    cards: Card[],
    categories: Category[],
}

export type Card = {
    id: string,
    front: string,
    back: string,
    notes: string
}