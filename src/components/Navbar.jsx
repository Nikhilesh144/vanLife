import React from "react";
import  logo from "./images/logog.png";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="Navbar">

            <div className="logo">  
                 <Link to="/"> <img  src={logo} alt="" /></Link>
            </div>
          <div className="links">

          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
          </div>
          



        </div>
    )
}