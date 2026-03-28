import React, { useEffect, useState } from 'react'
import type { CardCollection } from '../../models/card'
import CollectionGrid from '../../components/Collection/CollectionGrid'
import { getSavedCollectionsByUserId } from '../../api/cardsApi'
import styles from "./LoggedInUserProfile.module.css"
import type { User } from '../../models/user'
import ProfileBanner from '../../components/Profile/ProfileBanner'

export default function LoggedInUserprofile({ user }: { user: User }) {
  const [savedCollections, setSavedCollections] = useState<CardCollection[]>([])

  const [showSaved, setShowSaved] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const collections = await getSavedCollectionsByUserId(user.userId)
        setSavedCollections(collections)
      } catch (error) {
        console.log(error)
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }
    load();
  }, [user])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Mein Konto</h1>
      <ProfileBanner username={user.name}/>
      <div className={styles.switch}>
        <span className={`${!showSaved && styles.show}`} onClick={() => setShowSaved(false)}>Meine Sammlungen</span>
        <span className={`${showSaved && styles.show}`} onClick={() => setShowSaved(true)}>Meine gespeicherten Sammlungen</span>
      </div>

      {showSaved ? (savedCollections && savedCollections.length !== 0 ? <CollectionGrid collections={savedCollections} /> : <p>Keine Sammlungen gespeichert</p>) :
        (user.collections && user.collections.length !== 0 ? <CollectionGrid collections={user.collections} /> : <p>Noch keine eigenen Sammlungen</p>)}
    </div>
  )
}