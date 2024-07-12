import React from 'react'
import Navbar from '../../src/components/navbar/Navbar'
import './layout.scss'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div className='layout'>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="content">
            <Outlet />
        </div>
     </div>
  )
}

export default layout