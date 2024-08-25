import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostDetails(){
        const[van,setVan]=useOutletContext();
    return(
        <div>
            <br/><br/>
            <b>Name:</b>{van.name} <br/><br/>
            <b>Category:</b>{van.type}<br/><br/>
            <b>Description: </b>{van.description}
        </div>
    )
}