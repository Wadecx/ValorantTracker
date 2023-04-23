import React from 'react'
import './Assets/Navbar.css'

// Icons Import
import { SiValorant } from "react-icons/si";
import { RiDashboardFill } from "react-icons/ri";
import { RiSwordFill } from "react-icons/ri";
import { BsMapFill } from "react-icons/bs";
import { ImExit } from "react-icons/im";


const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">
            <SiValorant/>
        </div>

        <div className="menu">
            <ul>
              <li><RiDashboardFill/></li>
              <li><RiSwordFill/></li>
              <li><BsMapFill/></li>
            </ul>
        </div>

        <div className="exit">
            <ul>
              <li><ImExit/></li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar