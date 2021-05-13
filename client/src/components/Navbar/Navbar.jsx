
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  

  const handleClick = () => {
    props.setIsActive(!props.isActive)
  }
  
  return (
    <div className={props.isActive ? 'navbar' : 'navbar_small'}>
      <button type='button' className='menu' onClick={handleClick} >MENU</button>
        <Link to= '/states/AL' className='states' onClick={handleClick}>Alabama</Link>
        <Link to= '/states/AK' className='states' onClick={handleClick}>Alaska</Link>
        <Link to= '/states/AZ' className='states' onClick={handleClick}>Arizona</Link>
        <Link to= '/states/AR' className='states' onClick={handleClick}>Arkansas</Link>
        <Link to= '/states/CA' className='states' onClick={handleClick}>California</Link>
        <Link to= '/states/CO' className='states' onClick={handleClick}>Colorado</Link>
        <Link to= '/states/CT' className='states' onClick={handleClick}>Connecticut</Link>
        <Link to= '/states/DE' className='states' onClick={handleClick}>Delaware</Link>
        <Link to= '/states/FL' className='states' onClick={handleClick}>Florida</Link>
        <Link to= '/states/GA' className='states' onClick={handleClick}>Georgia</Link>
        <Link to= '/states/HI' className='states' onClick={handleClick}>Hawaii</Link>
        <Link to= '/states/ID' className='states' onClick={handleClick}>Idaho</Link>
        <Link to= '/states/IL' className='states' onClick={handleClick}>Illinois</Link>
        <Link to= '/states/IN' className='states' onClick={handleClick}>Indiana</Link>
        <Link to= '/states/IA' className='states' onClick={handleClick}>Iowa</Link>
        <Link to= '/states/KS' className='states' onClick={handleClick}>Kansas</Link>
        <Link to= '/states/KY' className='states' onClick={handleClick}>Kentucky</Link>
        <Link to= '/states/LA' className='states' onClick={handleClick}>Louisiana</Link>
        <Link to= '/states/ME' className='states' onClick={handleClick}>Maine</Link>
        <Link to= '/states/MD' className='states' onClick={handleClick}>Maryland</Link>
        <Link to= '/states/MA' className='states' onClick={handleClick}>Massachusetts</Link>
        <Link to= '/states/MI' className='states' onClick={handleClick}>Michigan</Link>
        <Link to= '/states/MN' className='states' onClick={handleClick}>Minnesota</Link>
        <Link to= '/states/MS' className='states' onClick={handleClick}>Mississippi</Link>
        <Link to= '/states/MO' className='states' onClick={handleClick}>Missouri</Link>
        <Link to= '/states/MT' className='states' onClick={handleClick}>Montana</Link>
        <Link to= '/states/NE' className='states' onClick={handleClick}>Nebraska</Link>
        <Link to= '/states/NV' className='states' onClick={handleClick}>Nevada</Link>
        <Link to= '/states/NH' className='states' onClick={handleClick}>New Hampshire</Link>
        <Link to= '/states/NJ' className='states' onClick={handleClick}>New Jersey</Link>
        <Link to= '/states/NM' className='states' onClick={handleClick}>New Mexico</Link>
        <Link to= '/states/NY' className='states' onClick={handleClick}>New York</Link>
        <Link to= '/states/NC' className='states' onClick={handleClick}>North Carolina</Link>
        <Link to= '/states/ND' className='states' onClick={handleClick}>North Dakota</Link>
        <Link to= '/states/OH' className='states' onClick={handleClick}>Ohio</Link>
        <Link to= '/states/OK' className='states' onClick={handleClick}>Oklahoma</Link>
        <Link to= '/states/OR' className='states' onClick={handleClick}>Oregon</Link>
        <Link to= '/states/PA' className='states' onClick={handleClick}>Pennsylvania</Link>
        <Link to= '/states/RI' className='states' onClick={handleClick}>Rhode Island</Link>
        <Link to= '/states/SC' className='states' onClick={handleClick}>South Carolina</Link>
        <Link to= '/states/SD' className='states' onClick={handleClick}>South Dakota</Link>
        <Link to= '/states/TN' className='states' onClick={handleClick}>Tennessee</Link>
        <Link to= '/states/TX' className='states' onClick={handleClick}>Texas</Link>
        <Link to= '/states/UT' className='states' onClick={handleClick}>Utah</Link>
        <Link to= '/states/VT' className='states' onClick={handleClick}>Vermont</Link>
        <Link to= '/states/VA' className='states' onClick={handleClick}>Virginia</Link>
        <Link to= '/states/WA' className='states' onClick={handleClick}>Washington</Link>
        <Link to= '/states/WV' className='states' onClick={handleClick}>West Virginia</Link>
        <Link to= '/states/WI' className='states' onClick={handleClick}>Wisconsin</Link>
        <Link to= '/states/WY' className='states' onClick={handleClick}>Wyoming</Link>
    </div>
  )
}
