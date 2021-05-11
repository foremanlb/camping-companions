import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Campsites from './screens/Campsites/Campsites'
import { getCampsites } from './services/campsites'


function App() {
  const [isActive, setIsActive] = useState(false)
  const [campsites, setCampsites] = useState([])

  useEffect(() => {
    fetchCampsites()
  }, [])

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
          {/* <Switch> */}
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/:id'>
            <Campsites campsites={campsites}/>
            </Route>
          {/* </Switch> */}
        </div>
      </div>
    </div>
  );
}

export default App;
