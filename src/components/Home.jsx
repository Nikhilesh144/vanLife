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
                <div className="home--section">
                <h2>Make your trip memorable with your loved ones</h2>
              <img src="https://cdn.pixabay.com/photo/2019/06/25/04/01/wedding-4297343_1280.jpg" alt="" />
                <img src="https://images.pexels.com/photos/6946134/pexels-photo-6946134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/2224742/pexels-photo-2224742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            </div>
       
            
            
        
        </div>
    )
}
