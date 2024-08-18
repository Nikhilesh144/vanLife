import React from "react";
import { Outlet } from "react-router-dom";

import HostNav from "./hostNav";
export default function HostLayout(){
    return(

        <>
        <HostNav/>
        <Outlet/>
        </>
    )
}