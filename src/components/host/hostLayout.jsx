import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";

export default function HostLayout(){
    return(

        <>
        <Navbar2/>
        <Outlet/>
        </>
    )
}