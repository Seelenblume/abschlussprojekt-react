import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'
import { Layout } from './components/Layout/Layout'

function App() {

  return (
    <>
      
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:userId" element={<UserProfile />} />
          </Routes>
          </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
