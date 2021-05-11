
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  

  const handleClick = () => {
    props.setIsActive(!props.isActive)
  }
  
  return (
    <div className={props.isActive ? 'navbar' : 'navbar_small'}>
      <button type='button' className='menu' onClick={handleClick} >MENU</button>
        <Link to= '/AL' className='states'>Alabama</Link>
        <Link to= '/AK' className='states'>Alaska</Link>
        <Link to= '/AZ' className='states'>Arizona</Link>
        <Link to= '/AR' className='states'>Arkansas</Link>
        <Link to= '/CA' className='states'>California</Link>
        <Link to= '/CO' className='states'>Colorado</Link>
        <Link to= '/CT' className='states'>Connecticut</Link>
        <Link to= '/DE' className='states'>Delaware</Link>
        <Link to= '/FL' className='states'>Florida</Link>
        <Link to= '/GA' className='states'>Georgia</Link>
        <Link to= '/HI' className='states'>Hawaii</Link>
        <Link to= '/ID' className='states'>Idaho</Link>
        <Link to= '/IL' className='states'>Illinois</Link>
        <Link to= '/IN' className='states'>Indiana</Link>
        <Link to= '/IA' className='states'>Iowa</Link>
        <Link to= '/KS' className='states'>Kansas</Link>
        <Link to= '/KY' className='states'>Kentucky</Link>
        <Link to= '/LA' className='states'>Louisiana</Link>
        <Link to= '/ME' className='states'>Maine</Link>
        <Link to= '/MD' className='states'>Maryland</Link>
        <Link to= '/MA' className='states'>Massachusetts</Link>
        <Link to= '/MI' className='states'>Michigan</Link>
        <Link to= '/MN' className='states'>Minnesota</Link>
        <Link to= '/MS' className='states'>Mississippi</Link>
        <Link to= '/MO' className='states'>Missouri</Link>
        <Link to= '/MT' className='states'>Montana</Link>
        <Link to= '/NE' className='states'>Nebraska</Link>
        <Link to= '/NV' className='states'>Nevada</Link>
        <Link to= '/NH' className='states'>New Hampshire</Link>
        <Link to= '/NJ' className='states'>New Jersey</Link>
        <Link to= '/NM' className='states'>New Mexico</Link>
        <Link to= '/NY' className='states'>New York</Link>
        <Link to= '/NC' className='states'>North Carolina</Link>
        <Link to= '/ND' className='states'>North Dakota</Link>
        <Link to= '/OH' className='states'>Ohio</Link>
        <Link to= '/OK' className='states'>Oklahoma</Link>
        <Link to= '/OR' className='states'>Oregon</Link>
        <Link to= '/PA' className='states'>Pennsylvania</Link>
        <Link to= '/RI' className='states'>Rhode Island</Link>
        <Link to= '/SC' className='states'>South Carolina</Link>
        <Link to= '/SD' className='states'>South Dakota</Link>
        <Link to= '/TN' className='states'>Tennessee</Link>
        <Link to= '/TX' className='states'>Texas</Link>
        <Link to= '/UT' className='states'>Utah</Link>
        <Link to= '/VT' className='states'>Vermont</Link>
        <Link to= '/VA' className='states'>Virginia</Link>
        <Link to= '/WA' className='states'>Washington</Link>
        <Link to= '/WV' className='states'>West Virginia</Link>
        <Link to= '/WI' className='states'>Wisconsin</Link>
        <Link to= '/WY' className='states'>Wyoming</Link>
    </div>
  )
}
