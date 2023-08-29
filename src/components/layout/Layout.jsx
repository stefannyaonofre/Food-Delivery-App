import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../navbar/Navbar';

const Layout = () => {
    const location = useLocation();
  const path = location.pathname;
  return (
    <div>
        <Outlet/>
        {(path ==='/home' || path ==='/search'|| path ==='/orders' || path ==='/profile') ? (
         <Navbar/>
        ) : (
        ""
        )}
    </div>
  )
}

export default Layout