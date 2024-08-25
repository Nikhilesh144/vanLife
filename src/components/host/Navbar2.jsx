import React from "react";
import { NavLink} from "react-router-dom";
export default function Navbar2(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return(
        <>
        <div className="host-nav">
            <NavLink  end  style={({ isActive }) => isActive ? activeStyles : null}  to=".">Dashboard </NavLink>
            <NavLink   style={({ isActive }) => isActive ? activeStyles : null}  to="income"> income</NavLink>
            <NavLink    style={({ isActive }) => isActive ? activeStyles : null} to="vans"> vans </NavLink>
            <NavLink    style={({ isActive }) => isActive ? activeStyles : null}  to ="reviews"> reviews</NavLink>
        </div>
        </>
    )
}  