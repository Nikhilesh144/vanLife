import React from "react";
import Navbar from "./Navbar";
import bg from "./images/homeBG.png";
import { useEffect,useState } from "react";
import VanItem from "./VanItem";
import Footer from "./Footer";
import { Link, renderMatches  } from "react-router-dom";
import { useSearchParams ,useLoaderData,defer ,Await} from "react-router-dom";
import { callVans, hostVans } from "../api";

 export function loader(){
  const vansPromise=callVans()
  return defer({vans:vansPromise})
}
export default function Vans(){
                           
    // const [vans,setVans]=React.useState([]);
    const [loader,setLoader]=React.useState(false)
    const[error,setError]=React.useState(null)
    const vansPromise=useLoaderData()
    const[searchParams,setSearchParams]=useSearchParams()
    const typeFilter=searchParams.get("type")
    
    
    

    // React.useEffect(() => {
    //   setLoader(true)
    //   async function loadvans() {
    //     try{
    //       const data= await  callVans();
    //       setVans(data)
    //     }
    //     catch(err){
    //       setError(err)
    //     }
    //     finally{
    //       setLoader(false)
    //     }
    //   }
    //   loadvans()
    // }, [])
    
  


    if(loader){
      return <h1 aria-live="polite">...Loading</h1>
      
    }
    if(error){
      return(
        <h1 aria-live="assertive">{error.message}</h1>
      )
    }
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
                  <React.Suspense fallback={<h2 className="loader">Loading Vans ..</h2>}>
                  <Await resolve={vansPromise.vans}>
                    {(vans)=>{
                      
                      
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
                        <>
                        {vansarr}
                        </>
                      )
                    }}


                  </Await>
                  </React.Suspense>
             </div>
         
        </div>
        
    )
}