import React from "react";
import {useEffect} from "react";
import { Link ,useLoaderData,defer, Await} from "react-router-dom";
import { authRequired, hostVans } from "../../api";

export async function loader(){
    authRequired()
    const vans=hostVans()
    return defer({vans})

    
}
export default function HostVans(){
  
    const hostVanspromise=useLoaderData();
    // console.log (hostVans)
    
        // React.useEffect(()=>{
        //     fetch("/api/host/vans")
        //     .then(res=>res.json())
        //     .then(data=>setHostVans(data.vans))

        // },[])
    


    return(
        <>
                
        {
        <div className="Hvans">
             <h1> your listed vans</h1>    
            <React.Suspense fallback={<h2 className="loader">Fetching your vans..</h2>}>
            <Await resolve={hostVanspromise.vans}>
                {(hostVans)=>{

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
            {vanElement}
            </>
         )       }}
            </Await>
            </React.Suspense>
        </div>
        
        }
        </>
    )
}