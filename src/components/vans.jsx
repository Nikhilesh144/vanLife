import React from "react";
import Navbar from "./Navbar";
import bg from "./images/homeBG.png";
import { useEffect,useState } from "react";
import VanItem from "./VanItem";
import Footer from "./Footer";
import { Link  } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function Vans(){

    const [vans,setVans]=React.useState([]);
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
      const[searchParams,setSearchParams]=useSearchParams()
      const typeFilter=searchParams.get("type")
      console.log(typeFilter)
      const displayedVans=typeFilter?vans.filter((van)=>van.type===typeFilter):vans
      const vansarr= displayedVans.map(van=>{
        return(
           
          <Link    aria-label={`View details for ${van.name}, 
          priced at $${van.price} per day`} to={`${van.id}`} state={ {search:searchParams.toString()} }>
            <VanItem 
             key={van.id} 
             name={van.name}
             price={van.price}
             description={van.description}
             type={van.type}
             image={van.imageUrl}   />
            </Link>
           
        )
    })

    return(
        <div >
        
            <div className="van-content">
                <h1>
                  Explore our van options
                </h1>
              <div className="filters">
                <Link className={`van simple ${typeFilter==="simple"?"selected":null}`}    to="?type=simple">simple</Link>
                <Link className={`van luxury ${typeFilter==="luxury"?"selected":null}`}    to="?type=luxury" >Luxury</Link>
                <Link  className={`van rugged ${typeFilter==="rugged"?"selected":null}`}    to="?type=rugged" >Rugged</Link>
               { typeFilter? <Link   className={""}   to=".">clear</Link>:null}
              </div>
            </div>
            <div className=" vans-list">
       {vansarr}
             </div>
         
        </div>
        
    )
}