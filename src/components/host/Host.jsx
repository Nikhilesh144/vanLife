import React from "react";
import bg from "../images/homeBG.png"
export default function Host(){
    return(
        <>
        <div className="Dashboard-welcome">
        <div className="Dashboard-child1" >
            <h2>
                Welcome!
            </h2>
            <p>income in last <span>30 days</span></p>
            <h1>
                $2,260
            </h1>

        </div>
        <div>
        <h4 className="details"> Details</h4>
        </div>
      
        </div>
        <div className="Dashboard-child2" >
            <h3>
            Review score  5.0/5
                
            </h3>
            <div>
          <h4 className="details1"> Details</h4>
          </div>
        </div>
        <div className="host-vanslist">
            <h2 >your listed vans</h2>
            <p>View all</p>
            <div className="child">
                <img src={bg} alt="" />
                <div>
                <h4>modest explorer</h4>
                <h5>$60/day</h5>
                </div>
               <div>
                <h4>Edit</h4>
               </div>
            </div>
             <div className="child" >
             <img src={bg} alt="" />
          
             </div>
    
            
        </div>
          
        </>
    )
}