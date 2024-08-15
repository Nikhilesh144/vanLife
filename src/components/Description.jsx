import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import img from  "./images/Arrow 1.png"
import Footer from "./Footer";
export default function Description()
{
    const params=useParams()
   const[details,setDetails]=React.useState({});
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`).then(res=>res.json()).then(data=>setDetails(data.vans))
    },[])

    return(
        <>
            <Navbar/>
           {details? <div className="van-desc">
            <Link className="back" to="/vans"> Back to all vans</Link>
           
            <img src={details.imageUrl} alt="" />
            <p className={`van-type ${details.type}`}> {details.type}</p>
            <h1>{details.name}</h1>
            <h4>{details.price}$/day</h4>
            <h5 className="description">
                {details.description}
            </h5>

                    <Link className="rent-button">Rent This Van</Link>
            </div> :<h2>...Loading</h2>}

            <Footer/>
        </>
    )
}