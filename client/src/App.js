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
import {getPosts} from './services/posts'


function App() {
  const [isActive, setIsActive] = useState(false)
  const [campsites, setCampsites] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchCampsites()
    fetchPosts()
  }, [])
  
  const fetchPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  const fetchCampsites = async () => {
    const data = await getCampsites()
    setCampsites(data)
  }

  return (
    <div className="App">
      <Header />
      <div className='navbar-container'>
        <Navbar isActive={isActive} setIsActive={setIsActive}/>
        <div className={isActive ? 'main-content' : 'main-content_large'}>
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
