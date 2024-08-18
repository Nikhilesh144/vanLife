import React from "react";
import Navbar from "./Navbar";
import bg from "./images/homeBG.png";
import { useEffect,useState } from "react";
import VanItem from "./VanItem";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Vans(){

    const [vans,setVans]=React.useState([]);
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
      
    return(
        <div>
        
            <div className="van-content">
                <h1>
                  Explore our van options
                </h1>
                <ul>
                    <li>Simple</li>
                    <li>Luxury</li>
                    <li>Rugged</li>
                    <li>clear filters</li>
                </ul>
            </div>
            <div className=" vans-list">
       { vans.map(van=>{
                return(
                   
                  <Link    aria-label={`View details for ${van.name}, 
                  priced at $${van.price} per day`} to={`/vans/${van.id}`}>
                    <VanItem 
                     key={van.id} 
                     name={van.name}
                     price={van.price}
                     description={van.description}
                     type={van.type}
                     image={van.imageUrl}   />
                    </Link>
                   
                )
            })}
             </div>
         
        </div>
        
    )
}