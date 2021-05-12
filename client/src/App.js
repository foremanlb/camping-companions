import './App.css';
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Campsites from './screens/Campsites/Campsites'
import { getCampsites } from './services/campsites'
import CampsiteDetails from './screens/CampsiteDetails/CampsiteDetails'
import Post from './screens/Post/Post'
import { getPosts } from './services/posts'
import { verifyUser } from './services/auth'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Profile from './screens/Profile/Profile'



function App() {
  const [isActive, setIsActive] = useState(false)
  const [campsites, setCampsites] = useState([])
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [toggle, setToggle] = useState(false)
  

  useEffect(() => {
    fetchCampsites()
    fetchPosts()
    verify()
  }, [toggle])
  
  const fetchPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  const fetchCampsites = async () => {
    const data = await getCampsites()
    setCampsites(data)
  }

  const verify = async () => {
    let user = await verifyUser()
    setCurrentUser(user)
  }

  return (
    <div className="App">
      <Header />
      <div className='navbar-container'>
        <Navbar isActive={isActive} setIsActive={setIsActive}/>
        <div className={isActive ? 'main-content' : 'main-content_large'}>
          <Login currentUser={currentUser} verify={verify}/>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/states/:id'>
            <Campsites campsites={campsites}/>
          </Route>
          <Route path='/campsite/:id'>
            <CampsiteDetails posts={posts} setToggle={setToggle} toggle={toggle} currentUser={currentUser}/>
          </Route>
          <Route path='/post/:id'>
            <Post currentUser={currentUser}/>
          </Route>
          <Route path='/signup'>
            <SignUp verify={verify}/>
          </Route>
          <Route path='/profile'>
            <Profile posts={posts} currentUser={currentUser} />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
