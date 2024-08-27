import React from "react";
import '../index.css';
import Navbar from "./Navbar";
import bg from "./images/homeBG.png";
import Footer from "./Footer";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export default function Home(){
    const style={
        height:"200px"
    }
    return(
        <div >
          
            <div  className="Home--content" >
                <h1>You got the travel plans, we  <br></br>got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans">Find your van </Link>
            </div>
            <div style={style}>

            </div>
            
        
        </div>
    )
}
