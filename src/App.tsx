import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user/:userId" element={<UserProfile />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
