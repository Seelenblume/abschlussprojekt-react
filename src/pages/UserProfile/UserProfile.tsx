import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { User } from '../../models/user';
import { getUserById } from '../../api/userApi';
import type { CardCollection } from '../../models/card';
import { getCardCollectionById, getUserCardCollectionByUserId } from '../../api/cardsApi';
import CollectionGrid from '../../components/Collection/CollectionGrid';
import styles from "./UserProfile.module.css"

const UserProfile = () => {
  const params = useParams();
  const userId = params.userId

  const [user, setUser] = useState<User | null>(null);
  const [collections, setCollections] = useState<CardCollection[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function load() {
      if (userId) {
        try {
          const result = await getUserById(userId);
          setUser(result);
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
    }
    load()
  }, [userId])

  useEffect(() => {
    async function load() {
      if (userId) {
        try {
          const collectionsResult = await getUserCardCollectionByUserId(userId)
          setCollections(collectionsResult)
        } catch (error) {
          console.log(error)
        }
      }
    }
    load()
  }, [userId])


  if (loading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return
  }

  return (
    <div className={styles.profile}>

      <div className={styles.banner}>
        <div className={styles.bannerImage}>
          <img src="../src/assets/wife.png"/>
        </div>
        <div className={styles.gradient} />
        <div className={styles.info}>
          <img src="../src/assets/react.svg" className={styles.profilePic} />
          <h1>{user.name}</h1>
        </div>

      </div>
      <div className={styles.collections}>
        <h2>Sammlungen</h2>
        {collections.length !== 0 ? <CollectionGrid collections={collections} /> : <p>Dieser User hat keine Sammlungen</p>}
      </div>

    </div>
  )
}

export default UserProfile