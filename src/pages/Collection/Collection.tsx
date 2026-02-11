import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { CardCollection } from "../../models/card";
import { getCardCollectionById } from "../../api/cardsApi";

const Collection = () => {

    const params = useParams()
    const collectionId = params.collectionId;

    const [collection, setCollection] = useState<CardCollection | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            if (collectionId) {
                try {
                    const result = await getCardCollectionById(collectionId);
                    setCollection(result);
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }
        }
        load()
    }, [collectionId])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!collection) {
        return
    }


    return (
        <div>Collection {collection.title}</div>
    )
}

export default Collection