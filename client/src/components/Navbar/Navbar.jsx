
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  

  const handleClick = () => {
    props.setIsActive(!props.isActive)
  }
  
  return (
    <div className={props.isActive ? 'navbar' : 'navbar_small'}>
      <button type='button' className='menu' onClick={handleClick} >MENU</button>
        <Link id= 'AL' className='states'>Alabama</Link>
        <Link id= 'AK' className='states'>Alaska</Link>
        <Link id= 'AZ' className='states'>Arizona</Link>
        <Link id= 'AR' className='states'>Arkansas</Link>
        <Link id= 'CA' className='states'>California</Link>
        <Link id= 'CO' className='states'>Colorado</Link>
        <Link id= 'CT' className='states'>Connecticut</Link>
        <Link id= 'DE' className='states'>Delaware</Link>
        <Link id= 'FL' className='states'>Florida</Link>
        <Link id= 'GA' className='states'>Georgia</Link>
        <Link id= 'HI' className='states'>Hawaii</Link>
        <Link id= 'ID' className='states'>Idaho</Link>
        <Link id= 'IL' className='states'>Illinois</Link>
        <Link id= 'IN' className='states'>Indiana</Link>
        <Link id= 'IA' className='states'>Iowa</Link>
        <Link id= 'KS' className='states'>Kansas</Link>
        <Link id= 'KY' className='states'>Kentucky</Link>
        <Link id= 'LA' className='states'>Louisiana</Link>
        <Link id= 'ME' className='states'>Maine</Link>
        <Link id= 'MD' className='states'>Maryland</Link>
        <Link id= 'MA' className='states'>Massachusetts</Link>
        <Link id= 'MI' className='states'>Michigan</Link>
        <Link id= 'MN' className='states'>Minnesota</Link>
        <Link id= 'MS' className='states'>Mississippi</Link>
        <Link id= 'MO' className='states'>Missouri</Link>
        <Link id= 'MT' className='states'>Montana</Link>
        <Link id= 'NE' className='states'>Nebraska</Link>
        <Link id= 'NV' className='states'>Nevada</Link>
        <Link id= 'NH' className='states'>New Hampshire</Link>
        <Link id= 'NJ' className='states'>New Jersey</Link>
        <Link id= 'NM' className='states'>New Mexico</Link>
        <Link id= 'NY' className='states'>New York</Link>
        <Link id= 'NC' className='states'>North Carolina</Link>
        <Link id= 'ND' className='states'>North Dakota</Link>
        <Link id= 'OH' className='states'>Ohio</Link>
        <Link id= 'OK' className='states'>Oklahoma</Link>
        <Link id= 'OR' className='states'>Oregon</Link>
        <Link id= 'PA' className='states'>Pennsylvania</Link>
        <Link id= 'RI' className='states'>Rhode Island</Link>
        <Link id= 'SC' className='states'>South Carolina</Link>
        <Link id= 'SD' className='states'>South Dakota</Link>
        <Link id= 'TN' className='states'>Tennessee</Link>
        <Link id= 'TX' className='states'>Texas</Link>
        <Link id= 'UT' className='states'>Utah</Link>
        <Link id= 'VT' className='states'>Vermont</Link>
        <Link id= 'VA' className='states'>Virginia</Link>
        <Link id= 'WA' className='states'>Washington</Link>
        <Link id= 'WV' className='states'>West Virginia</Link>
        <Link id= 'WI' className='states'>Wisconsin</Link>
      <Link id='WY' className='states'>Wyoming</Link>
    </div>
  )
}
