import React from 'react'
import './Navbar.scss'
import Logo from '../../Assets/images/Logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="container">
            <div className="nav-logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="list">
              <li><Link to="/" className='ahref'>Home</Link></li>
              <li><Link  to="Movies" className='ahref'>Movies & Shows</Link></li>
              <li><Link   className='ahref'>Support</Link></li>
              <li><Link   className='ahref'>Subscriptions</Link></li>
            </ul>
            <div className="nav-icons">
              <IoSearchOutline className='icon'/>
              <IoMdNotificationsOutline className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar