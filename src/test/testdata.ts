import type { CardCollection } from "../models/card";

export const testCardCollections: CardCollection[] = [
    {
        id: "col-001",
        user: {id: "0000", name: "kiko"},
        title: "TypeScript Deep Dive",
        description: "Fortgeschrittene TypeScript Konzepte",
        categories: [
            {
                name: "Typen",
            },
            {
                name: "Typen",
            },
            {
                name: "Generics",
            }
        ],
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
        ]
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
                notes: "Kraftwerk der Zelle"
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
