import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import type { CardCollection } from '../../models/card';
import { getCollectionsBySearch } from '../../api/cardsApi';
import CollectionCompact from '../../components/Collection/CollectionCompact';
import { testCardCollections } from '../../test/testdata';
import styles from "./Collections.module.css"
import CollectionGrid from '../../components/Collection/CollectionGrid';

const Collections = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const [collections, setCollections] = useState<CardCollection[]>([]);
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
        <div className={styles.collections}>
            <CollectionGrid collections={collections}/>
        </div>
    )
}

export default Collections