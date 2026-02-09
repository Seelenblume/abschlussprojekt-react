import type { Category } from "./category"

export type CardCollection = {
    id: string,
    userId: string,
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