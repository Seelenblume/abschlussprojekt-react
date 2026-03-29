import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import type { CardCollection } from '../../models/card';
import { getCollectionsByCategory, getCollectionsBySearch } from '../../api/cardsApi';
import CollectionGrid from '../../components/Collection/CollectionGrid';

const Collections = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const category = searchParams.get("category");

    const [collections, setCollections] = useState<CardCollection[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function load() {
        setLoading(true);
        try {
            let result: CardCollection[] = [];

            if (query) {
                result = await getCollectionsBySearch(query);
            } else if (category) {
                result = await getCollectionsByCategory(category);
            }

            setCollections(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    load();
}, [query, category]);


    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {collections.length === 0 ? <p>Keine Sammlungen gefunden.</p> : <CollectionGrid collections={collections} />}
        </div>
    )
}

export default Collections