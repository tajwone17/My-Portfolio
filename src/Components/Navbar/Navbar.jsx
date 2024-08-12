import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import openMenu from '../../assets/menu_open.svg'
import closeMenu from '../../assets/menu_close.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const menuRef=useRef();
    const open_Menu=()=>{
        menuRef.current.style.right="0";
    }
    const close_Menu=()=>{
        menuRef.current.style.right="-350px";
    }
    return (
        <div className="navbar">
              <div className="logo-title">
                <h1>TAjWOnE</h1>
                <img src={theme_pattern} alt="" />
            </div>
            {/* <img src={logo} alt="" /> */}
            <img src={openMenu} onClick={open_Menu} className='nav-mob-open' alt="" />
            <ul ref={menuRef} className="nav-menu">
            <img src={closeMenu} onClick={close_Menu} className='nav-mob-close' alt="" />
                <li><AnchorLink className='anchor-link' href='#home' ><p onClick={() => setMenu("Home")}>Home</p></AnchorLink> {menu === "Home" ? <img src={underline} alt="" /> : <></>} </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'  ><p onClick={() => setMenu("About Me")} >About Me</p></AnchorLink>{menu === "About Me" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={() => setMenu("Services")} >Services</p></AnchorLink>{menu === "Services" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work' ><p onClick={() => setMenu("Portfolio")} >Portfolio</p></AnchorLink>{menu === "Portfolio" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={() => setMenu("Contact")} >Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt="" /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with Me</AnchorLink> </div>
        </div> 
    );
};

export default Navbar;