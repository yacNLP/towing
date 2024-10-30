import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./navbar.css"
import logo from "../../assets/logo-towing.png"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className='logo' />

        <div className="desktopMenu">
            <Link
                activeClass="active"
                to= "intro"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "desktopMenuListItem"
            >
                Accueil
            </Link>
            <Link
                activeClass="active"
                to= "services"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "desktopMenuListItem"
            >
                Nos services
            </Link>
            <Link
                activeClass="active"
                to= "aboutUs"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "desktopMenuListItem"
            >
                A propos de nous
            </Link>
            <Link
                activeClass="active"
                to= "contact"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "desktopMenuListItem"
            >
                Contact
            </Link>

        </div>

        <div className="mobMenu" onClick={toggleMenu}>☰</div>

        {isMenuOpen && (
        <div className="mobileMenu">
          <Link
                activeClass="active"
                to= "intro"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "mobileMenuItem"
                onClick={toggleMenu}
            >
                Accueil
            </Link>
            <Link
                activeClass="active"
                to= "services"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "mobileMenuItem"
                onClick={toggleMenu}
            >
                Nos services
            </Link>
            <Link
                activeClass="active"
                to= "aboutUs"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "mobileMenuItem"
                onClick={toggleMenu}
            >
                A propos de nous
            </Link>
            <Link
                activeClass="active"
                to= "contact"
                spy= {true}
                smooth= {true}
                offset={-100}
                duration={500}
                className = "mobileMenuItem"
                onClick={toggleMenu}
            >
                Contact
            </Link>
        </div>
      )}


    </div>
  )
}
