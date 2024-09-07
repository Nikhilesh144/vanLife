import React from "react";
import {useEffect} from "react";
import { Link ,useLoaderData} from "react-router-dom";
import { authRequired, hostVans } from "../../api";

export async function loader(){
    authRequired()
    return hostVans()

    
}
export default function HostVans(){
  
    const hostVans=useLoaderData();
    
        // React.useEffect(()=>{
        //     fetch("/api/host/vans")
        //     .then(res=>res.json())
        //     .then(data=>setHostVans(data.vans))

        // },[])
    
    
       const vanElement=hostVans.map((van)=>{
        return(
            
            <Link className="HvanLink" to={`/host/vans/${van.id}`}>
            <div className="hostVanList" key={van.id}>
                <img src={van.imageUrl} alt="" />
                <div>
                    <h2>{van.name}</h2>
                    <p>{van.price}$/day</p>
                </div>
            </div>
            </Link>
        )
       })

    return(
        <>
                
        {
        <div className="Hvans">
             <h1> your listed vans</h1>    
            
            {vanElement}
        </div>
        
        }
        </>
    )
}