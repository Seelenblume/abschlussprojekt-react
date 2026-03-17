import React from 'react'
import styles from "./ProfileBanner.module.css"

export default function ProfileBanner({username}: {username: string}) {
  return (
       <div className={styles.banner}>
        <div className={styles.gradient} />
        <div className={styles.info}>
          <img src="../src/assets/react.svg" className={styles.profilePic} />
          <h1>{username}</h1>
        </div>

      </div>
  )
}
