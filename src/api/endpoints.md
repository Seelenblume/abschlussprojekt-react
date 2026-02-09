**Get a User by UserId**

/api/user/${userId}
```
{
    id: "12344526",
    name: "seelenblume"
}
```
**Get all Collections for a User**

/api/user/${userId}/collections
```
[
    {
        id: "12345784",
        userId:  "15786578",
        title: "Remembering the Kanji",
        description: "Vocabulary from Remembering the Kanji by Heisig",
        cards: [
            {
                id: "1234254",
                front: "suki",
                back: "fond",
                notes: "The mother is fond of her child"
            },
            {
                id: "1234254",
                front: "ichi",
                back: "one",
                notes: ""
            },
        ],
        categories: [
            name: "Language",
            subCategories: [
                {
                    name: "Japanese"
                },
            ]
        ]
    },
    {
        id: "904586",
        userId:  "15786578",
        title: "SQL Begriffe",
        description: "",
        cards: [
            {
                id: "0091",
                front: "INSERT",
                back: "Mit INSERT wird ein Datensatz eingefügt",
                notes: ""
            },
        ],
        categories: [
            name: "Science",
            subCategories: [
                {
                    name: "Informatik"
                },
            ]
        ]
    },
]
```
**Get a Collection by Collection Id**

/api/collection/${collectionId}

```
{
    id: "12345784",
    userId:  "15786578",
    title: "Remembering the Kanji",
    description: "Vocabulary from Remembering the Kanji by Heisig",
    cards: [
        {
            id: "1234254",
            front: "suki",
            back: "fond",
            notes: "The mother is fond of her child"
        },
        {
            id: "1234254",
            front: "ichi",
            back: "one",
            notes: ""
        },
    ],
    categories: [
        name: "Language",
        subCategories: [
            {
                name: "Japanese"
            },
        ]
    ]
},
```

**Post a Collection**

/api/collection/create

requested:
```
{
    title: "Remembering the Kanji",
    description: "Vocabulary from Remembering the Kanji by Heisig",
    categories: [
        name: "Language",
        subCategories: [
            {
                name: "Japanese"
            },
        ]
    ]
}
```

returns: 
201 status code + id of created object

**Post a Card**

/api/collection/${collectionId}/card/create

requested: 
```
{
    collectionId: "1234587",
    front: "S",
    back: "Seperation of Concerns",
    notes: "solid principle",
}

```

returns: 201 + id of the created object

**Registrierung**

/api/sign-up

requested: 
```
{
    email: "tsukimen01@gmail.com",
    password: "ilikemiku",
    userName: "noodlemoon",
}
```

returns: 201

**Post Login**

/api/sign-in

request
```
{
    input: "noodlemoon",
    password: ""
}
```
returns LoginInfo
```
{
    email: string,
    password?: string,
    userName: string,
}
```


**Get Login**

/api/verify-login

credentials included in request

returns LoginInfo

```
{
    email: string,
    password?: string,
    userName: string,
}
```

**Delete Login**

/api/sign-out

credentials included in DELETE request

returns 204

**Get All Categories**

```
[
    {
        name: "Language",
        subCategories: [
            {
            name: "German"
        },
            {
            name: "Japanese"
        },
        ]
    },
    {
        name: "Science",
        subCategories: [
            {
            name: "Computer Science"
        },
            {
            name: "Mathematics"
        },
        ]
    },
]
```