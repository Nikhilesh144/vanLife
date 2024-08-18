import React from "react";
import bg from "./images/homeBG.png";
import { Link } from "react-router-dom";
export default function  VanItem(props){
    return(
         
        <div   className="van-item">
        
            <img src={props.image}alt="" />
            <div className="van-details">
              <div>
                 <h4 className="van-name">{props.name}</h4>
                 <p className={`van-type ${props.type} ` }> {props.type}</p>
             </div>
            <div className="van-pricing">
                <h4>{props.price} <br /><span>/day</span></h4>
           
            </div>


        </div>
       </div>
   
    )
}