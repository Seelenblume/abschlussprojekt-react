import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'
import { Layout } from './components/Layout/Layout'
import Collections from './pages/Collections/Collections'
import Collection from './pages/Collection/Collection'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import CreateCollection from './pages/CreateCollection/CreateCollection'
import { useEffect } from 'react'
import AllCards from './pages/AllCards/AllCards'
import { useLoginContext } from './context/Login/LoginContext'
import { LoginProvider } from './context/Login/LoginProvider'
import ToastContainer from './components/Toast/ToastContainer'
import { ToastProvider } from './context/Toast/ToastProvider'

function App() {


  const { getLogin } = useLoginContext()

  useEffect(() => {
    const f = async () => {
      getLogin()
    }
    f();
  }, [])

  return (
    <>

      <ToastProvider>
        <ToastContainer />
        <LoginProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:userId" element={<UserProfile />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collection/:collectionId" element={<Collection />} />
                <Route path="/collection/:collectionId/cards" element={<AllCards />} />
                <Route path="/collection/create" element={<CreateCollection />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </LoginProvider>

      </ToastProvider>
    </>
  )
}

export default App
