import React from "react";
import  logo from "./images/logog.png";
import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="Navbar">

            <div className="logo">  
                 <NavLink to="/"> <img  src={logo} alt="" /></NavLink>
            </div>
          <div className="links">
          <NavLink className={({isActive})=>isActive?"styled":null} to="/host">Host</NavLink>
          <NavLink className={({isActive})=>isActive?"styled":null} to="/about">About</NavLink>
          <NavLink className={({isActive})=>isActive?"styled":null} to="/vans">Vans</NavLink>
          </div>
          



        </div>
    )
}