import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { CardCollection } from "../../models/card";
import { getCardCollectionById } from "../../api/cardsApi";
import CardModel from "../../components/Card/Card";
import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import style from "./Collection.module.css"
import Carousel from "../../components/Collection/Carousel";

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
        <div className={style.collection}>
            <h1>{collection.title}</h1>
           <div>
            {collection.categories.map((category) =>
            <div>
              <p>{category.name}</p>
            </div>
          )}
           </div>
         <Carousel collection={collection} />
        </div>
    )
}

export default Collection