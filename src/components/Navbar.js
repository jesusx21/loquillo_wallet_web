import React, { useState } from 'react';
import classNames from 'classnames';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { SidebarItems } from './SidebarItems';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    console.log({ sidebar })
    setSidebar(!sidebar);
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>

        <nav className={classNames('nav-menu', { 'active': sidebar })}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {
              SidebarItems.map((item, index) => {
                return (
                  <li key={index} className={item.className} onClick={showSidebar}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
