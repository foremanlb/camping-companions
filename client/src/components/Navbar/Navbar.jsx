
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  

  const handleClick = () => {
    props.setIsActive(!props.isActive)
  }
  
  return (
    <div className={props.isActive ? 'navbar' : 'navbar_small'}>
      <button type='button' className='menu' onClick={handleClick} >MENU</button>
        <Link to= '/states/AL' className='states'>Alabama</Link>
        <Link to= '/states/AK' className='states'>Alaska</Link>
        <Link to= '/states/AZ' className='states'>Arizona</Link>
        <Link to= '/states/AR' className='states'>Arkansas</Link>
        <Link to= '/states/CA' className='states'>California</Link>
        <Link to= '/states/CO' className='states'>Colorado</Link>
        <Link to= '/states/CT' className='states'>Connecticut</Link>
        <Link to= '/states/DE' className='states'>Delaware</Link>
        <Link to= '/states/FL' className='states'>Florida</Link>
        <Link to= '/states/GA' className='states'>Georgia</Link>
        <Link to= '/states/HI' className='states'>Hawaii</Link>
        <Link to= '/states/ID' className='states'>Idaho</Link>
        <Link to= '/states/IL' className='states'>Illinois</Link>
        <Link to= '/states/IN' className='states'>Indiana</Link>
        <Link to= '/states/IA' className='states'>Iowa</Link>
        <Link to= '/states/KS' className='states'>Kansas</Link>
        <Link to= '/states/KY' className='states'>Kentucky</Link>
        <Link to= '/states/LA' className='states'>Louisiana</Link>
        <Link to= '/states/ME' className='states'>Maine</Link>
        <Link to= '/states/MD' className='states'>Maryland</Link>
        <Link to= '/states/MA' className='states'>Massachusetts</Link>
        <Link to= '/states/MI' className='states'>Michigan</Link>
        <Link to= '/states/MN' className='states'>Minnesota</Link>
        <Link to= '/states/MS' className='states'>Mississippi</Link>
        <Link to= '/states/MO' className='states'>Missouri</Link>
        <Link to= '/states/MT' className='states'>Montana</Link>
        <Link to= '/states/NE' className='states'>Nebraska</Link>
        <Link to= '/states/NV' className='states'>Nevada</Link>
        <Link to= '/states/NH' className='states'>New Hampshire</Link>
        <Link to= '/states/NJ' className='states'>New Jersey</Link>
        <Link to= '/states/NM' className='states'>New Mexico</Link>
        <Link to= '/states/NY' className='states'>New York</Link>
        <Link to= '/states/NC' className='states'>North Carolina</Link>
        <Link to= '/states/ND' className='states'>North Dakota</Link>
        <Link to= '/states/OH' className='states'>Ohio</Link>
        <Link to= '/states/OK' className='states'>Oklahoma</Link>
        <Link to= '/states/OR' className='states'>Oregon</Link>
        <Link to= '/states/PA' className='states'>Pennsylvania</Link>
        <Link to= '/states/RI' className='states'>Rhode Island</Link>
        <Link to= '/states/SC' className='states'>South Carolina</Link>
        <Link to= '/states/SD' className='states'>South Dakota</Link>
        <Link to= '/states/TN' className='states'>Tennessee</Link>
        <Link to= '/states/TX' className='states'>Texas</Link>
        <Link to= '/states/UT' className='states'>Utah</Link>
        <Link to= '/states/VT' className='states'>Vermont</Link>
        <Link to= '/states/VA' className='states'>Virginia</Link>
        <Link to= '/states/WA' className='states'>Washington</Link>
        <Link to= '/states/WV' className='states'>West Virginia</Link>
        <Link to= '/states/WI' className='states'>Wisconsin</Link>
        <Link to= '/states/WY' className='states'>Wyoming</Link>
    </div>
  )
}
