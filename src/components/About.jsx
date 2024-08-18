import React from "react";
import Navbar from "./Navbar";
import aImg from "../components/images/image 54.png"
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function About(){
    return(
        <div>
         
            <div className="About--content">
                <img src={aImg} alt="" />
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br />
                (Hitch costs extra 😉)</p>
                <p>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="About--explore">
                <h1>Your destination is waiting.
                Your van is ready.</h1>
                <Link to="/vans">Explore your vans</Link>

            </div>
           
        </div>
    )
}