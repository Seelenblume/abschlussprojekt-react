import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import type { CardCollection } from "../../models/card";
import { deleteBookmark, getCardCollectionById, postBookmark, postCard } from "../../api/cardsApi";
import style from "./Collection.module.css"
import Carousel from "../../components/Collection/Carousel";
import CategoryTag from "../../components/Categories/CategoryTag";
import { useLoginContext } from "../../context/LoginContext";
import CardModal from "../AddCard/CardModal";
import { LucideBookmark, LucideEllipsisVertical, LucideLibraryBig, LucidePlus } from "lucide-react";
import { useToast } from "../../context/ToastContext";

const Collection = () => {

    const params = useParams()
    const collectionId = params.collectionId;

    const menu = useRef<HTMLDivElement | null>(null);

    const [collection, setCollection] = useState<CardCollection | null>(null);
    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false)

    const [bookmark, setBookmark] = useState(false)

    const { addNotification } = useToast()

    const { loginInfo, setLoginInfo } = useLoginContext();

    const navigate = useNavigate()


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

    async function handleBookmark() {
        try {
            if (collection) {
                if (bookmark) {
                    await deleteBookmark(collection.user.id, collection.id)
                    setBookmark(false)
                    addNotification({
                        id: "ioahf",
                        type: "SUCCESS",
                        message: "Bookmark removed!"
                    })
                } else {
                    await postBookmark(collection.user.id, collection.id)
                    setBookmark(true)
                    addNotification({
                        id: "ioahf",
                        type: "SUCCESS",
                        message: "Bookmarked!"
                    })
                }
            }
        } catch (error) {
            console.log(error)
            addNotification({
                id: "ioahf",
                type: "ERROR",
                message: "Something went wrong!"
            })
        }
    }

    return (
        <div className={style.collection}>
            <div className={style.header}>
                <div className={style.title}>
                    <h1>{collection.title}</h1>
                    <span onClick={handleBookmark}>{bookmark ? <LucideBookmark /> : <LucideBookmark fill="black" />}</span>
                </div>
                {loginInfo && (loginInfo.userId == collection.user.id) &&
                    <button onClick={() => navigate(`/collection/${collectionId}/cards`)}><LucideLibraryBig /><p>Alle Karten ansehen</p></button>
                }
            </div>

            <div className={style.categories}>
                {collection.categories.map((category) =>
                    <div>
                        <CategoryTag categoryName={category.value} />
                    </div>
                )}
            </div>
            <Carousel collection={collection} />
            <div className={style.info}>
                <div className={style.desc}>
                    {collection.description}
                </div>
                <div className={style.profile}>
                    <h3>Creator</h3>
                    <div className={style.name}>
                        <img src="../src/assets/react.svg" />
                        <Link to={`/user/${collection.user.id}`}>{collection.user.name}</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Collection