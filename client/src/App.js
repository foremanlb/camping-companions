import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Campsites from './screens/Campsites/Campsites'

function App() {
  const [isActive, setIsActive ] = useState(false)

  return (
    <div className="App">
      <Header />
      <container className='navbar-container'>
        <Navbar isActive={isActive} setIsActive={setIsActive}/>
        <div className={isActive ? 'main-content' : 'main-content_large'}>
          {/* <Switch> */}
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/:id'>
              <Campsites />
            </Route>
          {/* </Switch> */}
        </div>
      </container>
    </div>
  );
}

export default App;
