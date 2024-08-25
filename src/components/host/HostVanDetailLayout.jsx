import React from "react";
import { Outlet,NavLink  } from "react-router-dom";
export default function HostVanDetailLayout(){
    return(
        <div>
            <NavLink to="/details">Details</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/photos">Photos</NavLink>
        </div>
    )
}