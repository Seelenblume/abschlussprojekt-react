import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { User } from '../../models/user';
import { getUserById } from '../../api/userApi';
import type { CardCollection } from '../../models/card';
import { getUserCardCollectionByUserId } from '../../api/cardsApi';
import CollectionGrid from '../../components/Collection/CollectionGrid';
import styles from "./UserProfile.module.css"
import LoggedInUserprofile from './LoggedInUserprofile';
import ProfileBanner from '../../components/Profile/ProfileBanner';
import { useLoginContext } from '../../context/Login/LoginContext';

const UserProfile = () => {
  const params = useParams();
  const userId = params.userId

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { loginInfo } = useLoginContext();

  useEffect(() => {
    async function loadUser() {
      if (!userId) return;
      try {
        const result = await getUserById(userId);
        setUser(result);
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    loadUser();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      {loginInfo && loginInfo.userId === user.userId ?
        <LoggedInUserprofile user={user} /> :

        <div className={styles.profile}>

          <ProfileBanner username={user.name} />
          <div className={styles.collections}>
            <h2>Sammlungen</h2>
            {user.collections && user.collections.length !== 0 ? <CollectionGrid collections={user.collections} /> : <p>Dieser User hat keine Sammlungen.</p>}
          </div>

        </div>}

    </>

  )
}

export default UserProfile