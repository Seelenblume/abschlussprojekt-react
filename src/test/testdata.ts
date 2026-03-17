import type { CardCollection } from "../models/card";
import type { Category } from "../models/category";

export const testCardCollections: CardCollection[] = [
    {
        id: "col-001",
        user: {id: "0000", name: "kiko"},
        title: "TypeScript Deep Dive",
        description: "Fortgeschrittene TypeScript Konzepte",
        categories: [
            {
                label: "Typen",
                value: "Typen",
            },
            {
                label: "Typen",
                value: "Typen",
            },
            {
                label: "Typen",
                value: "Typen",
            }
        ],
        favorite: true,
        cards: [
            {
                id: "card-001",
                front: "Was ist ein Union Type?",
                back: "Ein Typ, der mehrere mögliche Typen erlaubt, z.B. string | number.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            }
        ],
        cardCount: 12
    },
    {
        id: "col-002",
        user: {id: "0000", name: "DENJI"},
        title: "Biologie Grundlagen",
        description: "Grundlagen der Biologie mit Kategorien",
        categories: [
            {
                name: "Biologie",
            },
            {
                name: "Zellbiologie",
            }
        ],
        cards: [
            {
                id: "card-003",
                front: "Was ist die Funktion der Mitochondrien?",
                back: "Energieproduktion der Zelle (ATP).",
                notes: "Kraftwerk der Zelle ocbH QcpÄQDÜOC wvjn wfowopjvowufvbebvoup nwovjbüuw"
            },
            {
                id: "card-004",
                front: "Wofür steht DNA?",
                back: "Desoxyribonukleinsäure",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            },
            {
                id: "card-002",
                front: "Warum sind Generics wichtig?",
                back: "Sie ermöglichen typsichere Wiederverwendbarkeit von Code.",
                notes: ""
            }
        ]
    },
    {
        id: "col-002",
        user: {id: "user-123", name: "DENJI"},
        title: "Biologie Grundlagen",
        description: "Grundlagen der Biologie mit Kategorien",
        categories: [
            {
                name: "Biologie",
                subCategory: {
                    name: "Zellbiologie",
                    subCategory: {
                        name: "Mitochondrien"
                    }
                }
            },
            {
                name: "Biologie",
                subCategory: {
                    name: "Genetik",
                    subCategory: {
                        name: "DNA & RNA"
                    }
                }
            }
        ],
        cards: [
            {
                id: "card-003",
                front: "Was ist die Funktion der Mitochondrien?",
                back: "Energieproduktion der Zelle (ATP).",
                notes: "Kraftwerk der Zelle"
            },
            {
                id: "card-004",
                front: "Wofür steht DNA?",
                back: "Desoxyribonukleinsäure",
                notes: ""
            }
        ]
    },
    {
        id: "col-002",
        user: {id: "user-123", name: "DENJI"},
        title: "Biologie Grundlagen",
        description: "Grundlagen der Biologie mit Kategorien",
        categories: [
            {
                name: "Biologie",
                subCategory: {
                    name: "Zellbiologie",
                    subCategory: {
                        name: "Mitochondrien"
                    }
                }
            },
            {
                name: "Biologie",
                subCategory: {
                    name: "Genetik",
                    subCategory: {
                        name: "DNA & RNA"
                    }
                }
            }
        ],
        cards: [
            {
                id: "card-003",
                front: "Was ist die Funktion der Mitochondrien?",
                back: "Energieproduktion der Zelle (ATP).",
                notes: "Kraftwerk der Zelle"
            },
            {
                id: "card-004",
                front: "Wofür steht DNA?",
                back: "Desoxyribonukleinsäure",
                notes: ""
            }
        ]
    },
    {
        id: "col-002",
        user: {id: "user-123", name: "DENJI"},
        title: "Biologie Grundlagen",
        description: "Grundlagen der Biologie mit Kategorien",
        categories: [
            {
                name: "Biologie",
                subCategory: {
                    name: "Zellbiologie",
                    subCategory: {
                        name: "Mitochondrien"
                    }
                }
            },
            {
                name: "Biologie",
                subCategory: {
                    name: "Genetik",
                    subCategory: {
                        name: "DNA & RNA"
                    }
                }
            }
        ],
        cards: [
            {
                id: "card-003",
                front: "Was ist die Funktion der Mitochondrien?",
                back: "Energieproduktion der Zelle (ATP).",
                notes: "Kraftwerk der Zelle"
            },
            {
                id: "card-004",
                front: "Wofür steht DNA?",
                back: "Desoxyribonukleinsäure",
                notes: ""
            }
        ]
    }
];

export const testCategories: Category[] = [
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
    {
        label: "CATEGORY_LABEL",
        value: "Category value"
    },
]