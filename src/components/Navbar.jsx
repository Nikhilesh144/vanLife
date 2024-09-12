import React from "react";
import  logo from "./images/logog.png";
import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
export default function Navbar(){
    function logout(){
        if(localStorage.getItem("loggedIn")){
        localStorage.removeItem("loggedIn");
        }
        else{
            window.location.replace("/login")
        }
    }
    return(
        <div className="Navbar">

            <div className="logo">  
                 <NavLink to="/"> <img  src={logo} alt="" /></NavLink>
            </div>
          <div className="links">
          <NavLink className={({isActive})=>isActive?"styled":null} to="/host">Host</NavLink>
          <NavLink className={({isActive})=>isActive?"styled":null} to="/about">About</NavLink>
          <NavLink className={({isActive})=>isActive?"styled":null} to="/vans">Vans</NavLink>
          <i className="fa-regular fa-circle-user" ></i>
          <button className="button" onClick={logout}>{localStorage.getItem("loggedIn")?"Logout":"Login"}</button>

          </div>
          



        </div>
    )
}