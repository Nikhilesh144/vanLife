import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "./Navbar2";
import { authRequired } from "../../api";

export async function loader(){
     const a=  authRequired()
     return null;

}
export default function HostLayout(){
    return(

        <>
        <Navbar2/>
        <Outlet/>
        </>
    )
}