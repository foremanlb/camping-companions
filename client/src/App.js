import './App.css';
import { Route, Switch } from 'react-router-dom'
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


function App() {
  const [isActive, setIsActive] = useState(false)
  const [campsites, setCampsites] = useState([])
  const [posts, setPosts] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetchCampsites()
    fetchPosts()
    verify()
  }, [])
  
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
            <CampsiteDetails posts={posts}/>
          </Route>
          <Route path='/post/:id'>
            <Post />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
