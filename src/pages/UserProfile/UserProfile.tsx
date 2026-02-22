import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { User } from '../../models/user';
import { getUserById } from '../../api/userApi';
import type { CardCollection } from '../../models/card';
import { getCardCollectionById, getUserCardCollectionByUserId } from '../../api/cardsApi';
import CollectionGrid from '../../components/Collection/CollectionGrid';
import styles from "./UserProfile.module.css"
import { useLoginContext } from '../../context/LoginContext';
import LoggedInUserprofile from './LoggedInUserprofile';

const UserProfile = () => {
  const params = useParams();
  const userId = params.userId

  const [user, setUser] = useState<User | null>(null);
  const [collections, setCollections] = useState<CardCollection[]>([]);
  const [loading, setLoading] = useState(true);

  const {loginInfo, setLoginInfo} = useLoginContext();

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
    <>
    {loginInfo && loginInfo.userId === user.id ?  
    <LoggedInUserprofile collections={collections}/> : <div className={styles.profile}>

      <div className={styles.banner}>
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

    </div>}
     
    </>
   
  )
}

export default UserProfile