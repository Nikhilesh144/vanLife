import React from "react";
import { Link } from "react-router-dom";
export default function Navbar2(){
    return(
        <>
        <div className="host-nav">
            <Link to="/host">Dashboard </Link>
            <Link to="/host/income"> income</Link>
            <Link to="/host/vans"> vans </Link>
            <Link to ="/host/reviews"> reviews</Link>
        </div>
        </>
    )
}