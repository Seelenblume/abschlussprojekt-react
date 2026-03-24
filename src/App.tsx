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
import { useEffect, useState } from 'react'
import type { LoginInfo } from './models/loginInfo'
import { getLogin } from './api/loginApi'
import AllCards from './pages/AllCards/AllCards'
import { LoginContext } from './context/Login/LoginContext'
import { useToast } from './context/Toast/ToastContext'

function App() {

  const [loginInfo, setLoginInfo] = useState<LoginInfo | false>(false);

  const { addNotification } = useToast()

  useEffect(() => {
        const f = async () => {
            try {
                const actLogin = await getLogin();
                setLoginInfo(actLogin);
            } catch (err) {
                setLoginInfo(false);
                addNotification({
                  id: "136",
                  message: "Something",
                  type: "ERROR",
                })
                console.log(err)
            }
        }
        f();
    }, [])

  return (
    <>
        <LoginContext.Provider value={{
          loginInfo: loginInfo,
          setLoginInfo: setLoginInfo
        }}>
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
        </LoginContext.Provider>
    </>
  )
}

export default App
