import React, { useState } from 'react';
import './navbar.scss';
import Logo from '../../Assets/images/Logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='Navbar'>
        <div className="container">
          <div className="nav-logo">
            <Link to="/"><img src={Logo} alt="logo" /></Link>
          </div>

          <ul className="list">
            <li>
              <Link to="/" className={location.pathname === "/" ? 'ahref active' : 'ahref'}>Home</Link>
            </li>
            <li>
              <Link to="/Movies" className={location.pathname === "/Movies" ? 'ahref active' : 'ahref'}>Movies & Shows</Link>
            </li>
            <li>
              <Link to="/Support" className={location.pathname === "/Support" ? 'ahref active' : 'ahref'}>Support</Link>
            </li>
            <li>
              <Link to="/Subscriptions" className={location.pathname === "/Subscriptions" ? 'ahref active' : 'ahref'}>Subscriptions</Link>
            </li>
          </ul>

          <div className="nav-icons">
            <Link to={'/Search'}><IoSearchOutline className='icon' /></Link>
            <IoMdNotificationsOutline className='icon' />
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <HiOutlineMenuAlt3 />
          </div>
        </div>
      </div>

      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <IoCloseCircleOutline 
          className='closeBtn' 
          onClick={() => setMenuOpen(false)} 
        />
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Movies" onClick={() => setMenuOpen(false)}>Movies & Shows</Link></li>
          <li><Link to="/Support" onClick={() => setMenuOpen(false)}>Support</Link></li>
          <li><Link to="/Subscriptions" onClick={() => setMenuOpen(false)}>Subscriptions</Link></li>
        </ul>
        <div className="sidebar-icons">
         <Link to={'/Search'}><IoSearchOutline className='icon' /></Link> 
          <IoMdNotificationsOutline className='icon' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
