import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import type { CardCollection } from "../../models/card";
import { deleteBookmark, getCardCollectionById, postBookmark, postCard } from "../../api/cardsApi";
import style from "./Collection.module.css"
import Carousel from "../../components/Collection/Carousel";
import CategoryTag from "../../components/Categories/CategoryTag";
import CardModal from "../AddCard/CardModal";
import { LucideBookmark, LucideEllipsisVertical, LucideLibraryBig, LucidePlus } from "lucide-react";
import { useLoginContext } from "../../context/Login/LoginContext";
import { useToast } from "../../context/Toast/ToastContext";


const Collection = () => {

    const params = useParams()
    const collectionId = params.collectionId;

    const [collection, setCollection] = useState<CardCollection | null>(null);
    const [loading, setLoading] = useState(true);

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
            if (collection && loginInfo) {
                if (bookmark) {
                    await deleteBookmark(loginInfo.userId, collection.collectionId)
                    setBookmark(false)
                    addNotification({
                        id: "ioahf",
                        type: "SUCCESS",
                        message: "Bookmark removed!"
                    })
                } else {
                    await postBookmark(loginInfo.userId, collection.collectionId)
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
                    {loginInfo && <span onClick={handleBookmark}>{bookmark ? <LucideBookmark fill="black" /> : <LucideBookmark /> }</span>}
                </div>
                {loginInfo && (loginInfo.userId == collection.user.userId) ?
                    <Link className={style.allCards} to={`/collection/${collectionId}/cards`}><p>Alle Karten ansehen</p><LucideLibraryBig /></Link>
                    : <p>Diese Sammlung hat noch keine Karten.</p>
                }
            </div>

            <div className={style.categories}>
                {collection.categories.map((category) =>
                    <div key={category.value}>
                        <CategoryTag category={category} />
                    </div>
                )}
            </div>
            <Carousel collection={collection} />
            <div className={style.info}>
                
                <div className={style.profile}>
                    <h3>Ersteller</h3>
                    <div className={style.name}>
                        <img src="../src/assets/react.svg" />
                        <Link to={`/user/${collection.user.userId}`}>{collection.user.name}</Link>
                    </div>
                </div>
                <div className={style.desc}>
                    {collection.description ? <p>{collection.description}</p> : <p>Diese Sammlung hat keine Beschreibung.</p>}
                </div>
            </div>

        </div>
    )
}

export default Collection