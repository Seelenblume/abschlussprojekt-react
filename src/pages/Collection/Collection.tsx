import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import type { CardCollection } from "../../models/card";
import { getCardCollectionById, postCard } from "../../api/cardsApi";
import style from "./Collection.module.css"
import Carousel from "../../components/Collection/Carousel";
import CategoryTag from "../../components/Categories/CategoryTag";
import { useLoginContext } from "../../context/LoginContext";
import CardModal from "../AddCard/CardModal";

const Collection = () => {

    const params = useParams()
    const collectionId = params.collectionId;

    const [collection, setCollection] = useState<CardCollection | null>(null);
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false)

    const { loginInfo, setLoginInfo } = useLoginContext();

    const navigate = useNavigate()

    //irgendwie muss ich noch einen rerender triggern nachdem die kart hinzugefügt wurde

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
        return;
    }

    async function handleAddCard(front: string, back: string, notes: string) {
        try {
            if (collection) {
                await postCard(collection.id, front, back, notes);
                console.log("handle", front)
            } else {
                throw Error("")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={style.collection}>
            {showModal && <CardModal onModalClose={() => setShowModal(false)}
                onAddCard={(front, back, notes) => handleAddCard(front, back, notes)} />}
            <h1>{collection.title}</h1>
            {loginInfo && (loginInfo.userId == collection.user.id) &&
                <div>
                    <button onClick={() => setShowModal(true)}>Karte Hinzufügen</button>
                    <button onClick={() => navigate(`/collection/${collectionId}/cards`)}>Alle Karten ansehen</button>
                </div>
            }
            <div>
                {collection.categories.map((category) =>
                    <div>
                        <CategoryTag categoryName={category.name} />
                    </div>
                )}
            </div>
            <Carousel collection={collection} />

        </div>
    )
}

export default Collection