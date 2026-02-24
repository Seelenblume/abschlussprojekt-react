import React, { useEffect, useState } from 'react'
import type { CardCollection } from '../../models/card'
import CollectionGrid from '../../components/Collection/CollectionGrid'
import { getSavedCollectionsByUserId } from '../../api/cardsApi'
import styles from "./LoggedInUserProfile.module.css"
import type { User } from '../../models/user'
import ProfileBanner from '../../components/Profile/ProfileBanner'

export default function LoggedInUserprofile({ collections, user }: { collections: CardCollection[], user: User }) {

  const [savedCollections, setSavedCollections] = useState<CardCollection[]>([])

  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    async function load() {
      try {

        const collections = await getSavedCollectionsByUserId(user.id)
        setSavedCollections(collections)
      } catch (error) {
        console.log(error)
      }
    }
    load();
  }, [user])

  return (
    <div>
      <h1>My Account</h1>
      <ProfileBanner username={user.name}/>
      <div className={styles.switch}>
        <span className={`${!showSaved && styles.show}`} onClick={() => setShowSaved(false)}>My collections</span>
        <span className={`${showSaved && styles.show}`} onClick={() => setShowSaved(true)}>My saved collections</span>
      </div>

      {showSaved ? <CollectionGrid collections={savedCollections} /> :
        <CollectionGrid collections={collections} />}
    </div>
  )
}