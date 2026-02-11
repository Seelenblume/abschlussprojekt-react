import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'
import { Layout } from './components/Layout/Layout'
import Collections from './pages/Collections/Collections'

function App() {

  return (
    <>
      
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collection/:collectionId" element={<Collections />} />
          </Routes>
          </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
