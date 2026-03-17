import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import type { CardCollection, CardCollectionShort } from '../../models/card';
import { getCollectionsBySearch } from '../../api/cardsApi';
import CollectionGrid from '../../components/Collection/CollectionGrid';

const Collections = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const [collections, setCollections] = useState<CardCollectionShort[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            if (query) {
                try {
                    const result = await getCollectionsBySearch(query);
                    setCollections(result);
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }
        }
        load()
    }, [query])

    if (loading) {
        return <p>Loading...</p>
    }

    if (!collections) {
        return
    }

    return (
        <div>
            <CollectionGrid collections={collections}/>
        </div>
    )
}

export default Collections