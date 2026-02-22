import React from 'react'
import Navbar from '../NavBar/NavBar'
import styles from "./Layout.module.css"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    <main>
      <div className={styles.layout}>
        {children}
      </div>
    </main>
    </>
  )
}

