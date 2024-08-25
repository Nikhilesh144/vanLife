import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostPricing(){
    const [van,setVan]=useOutletContext();


    return(
        <div>
            <h3>{van.price} $/day</h3>
        </div>
    )
}