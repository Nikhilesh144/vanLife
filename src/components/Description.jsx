import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useParams ,useLocation } from "react-router-dom";
import img from  "./images/Arrow 1.png"
import Footer from "./Footer";
export default function Description()
{
    const params=useParams()
   const[details,setDetails]=React.useState({});
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`).then(res=>res.json()).then(data=>setDetails(data.vans))
    },[])
    const location =useLocation()
    const search=location.state?.search||"";
    const backButton= location.state?.search ?`back to ${location.state.search.split("=")[1 ]}  vans`:"back to all vans" 

    return(
        <>
          
           {details? <div className="van-desc">
            <Link className="back"  to={`..?${search}`} relative="path"> {backButton}</Link>
           
            <img src={details.imageUrl} alt="" />
            <p className={`van-type ${details.type}`}> {details.type}</p>
            <h1>{details.name}</h1>
            <h4>{details.price}$/day</h4>
            <div className="description">
               <p> {details.description} </p>
            </div>

                    <Link className="rent-button">Rent This Van</Link>
            </div> :<h2>...Loading</h2>}

          
        </>
    )
}