import CollectionGrid from "../../components/Collection/CollectionGrid"
import { testCardCollections } from "../../test/testdata"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Überschrift</h1>
      <h2>Überschrift</h2>

      <div className={styles.popular}>
        <h3>Popular Collections</h3>
        <CollectionGrid collections={testCardCollections} />
      </div>

    </div>
  )
}

export default Home