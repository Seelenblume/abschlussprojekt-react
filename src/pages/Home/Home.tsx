import styles from "./Home.module.css"
import PopularCollectionsArea from '../../components/Home/PopularCollections/PopularCollectionsArea'

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Lerne Karten wie ein CHUD</h1>
      <h2>Mit unserer Baka lern app</h2>
      <PopularCollectionsArea />
    </div>
  )
}

export default Home