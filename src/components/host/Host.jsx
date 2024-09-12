import React from "react";
import bg from "../images/homeBG.png"
import {hostVans}   from "../../api.js"
import { defer,Await,useLoaderData, Link } from "react-router-dom";

export function loader(){
    const vans=hostVans()
    return defer({vans})



}

export default function Host(){
    const vanspromise=useLoaderData()
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
        <Link className="details" to="income"> Details</Link>
        </div>
      
        </div>
        <div className="Dashboard-child2" >
            <h3>
            Review score   <i className="fa-solid fa-star"></i>5.0/5
                
            </h3>
            <div>
          <Link className="details1" to="reviews"> Details</Link>
          </div>
        </div>
        <div className="host-vanslist">
            <h2 >your listed vans</h2>
            <Link to="vans">View all</Link>
        
    
            
        </div>
                   <div className="parent">
                <React.Suspense fallback={<h3>Fetching data..</h3>}>
                <Await resolve={vanspromise.vans}>
                    {(vans)=>{  
                        
                        const arr=vans.map(item=>{
                            return(
                                <div className="child">
                                <img src={item.imageUrl} alt="" />
                                <div>
                                <h4>{item.name}</h4>
                                <h5>{item.price}$/day</h5>
                                </div>
                               <div>
                              
                               </div>
                            </div>
                            )
                        })
                        return(
                            <>
                            {arr}
                            </>
                        )

                    }
                    
                    }


                </Await>
                </React.Suspense>
                </div> 
              
           
          
        </>
    )
}