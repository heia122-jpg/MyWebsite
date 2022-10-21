import React from 'react'
import { Link } from 'react-router-dom'
import '../../components.style.css' //STYLES MODULES / CSS MODULES

const NavBar = () => {
  return (
    <nav className='pt-5 bxshdw'>
        <ul>
            <li className='inline pr-5'>
                <Link to='/reg' className='undecor fw-bolder'>Creat Account</Link>
            </li>
            <li className='inline pr-5'> 
                <Link to='/login' className='undecor fw-bolder'>Log In</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
