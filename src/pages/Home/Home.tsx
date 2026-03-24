import { useEffect, useState } from "react"
import CollectionGrid from "../../components/Collection/CollectionGrid"
import { testCardCollections } from "../../test/testdata"
import styles from "./Home.module.css"
import { getPopularCollections } from "../../api/cardsApi"
import type { CardCollection } from "../../models/card"

const Home = () => {

  const [collections, setCollections] = useState<CardCollection[] | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const result = await getPopularCollections();
        setCollections(result);
      } catch (error) {
        console.log(error)
      }
    }
    load()
  }, [])

  return (
    <div className={styles.home}>
      <h1>Überschrift</h1>
      <h2>Überschrift</h2>

      <div className={styles.popular}>
        <h3>Popular Collections</h3>
        {collections && <CollectionGrid collections={collections} />}
      </div>

    </div>
  )
}

export default Home