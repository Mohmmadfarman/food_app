import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/Store";

function Navbar({setlogin}) {
  const [menu, setmenu] = useState("home");
  const {gettotal,count}=useContext(StoreContext)

  function fun(){
    setlogin(true)
  }
  return (
    <div className="navbar">
      <Link to={'/'}><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to={'/'}
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#appdownload"
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a href="#footer"
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
        <Link to={'/card'}> <div className="">
            
            <img src={assets.basket_icon} alt="" />
            </div></Link>
          {
            count>0&&<div className={gettotal()===0?"": 'dot'}>
                <div>{count}</div>
            </div>
          }
        </div>
        <button className="sign" onClick={fun} >sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
