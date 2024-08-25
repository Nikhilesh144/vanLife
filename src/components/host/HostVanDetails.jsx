import React from "react";
import { useParams } from "react-router-dom";
import { NavLink,Link , Outlet} from "react-router-dom";
export default function HostVanDetails(){
    const[van,setVan]=React.useState({})
    const params=useParams();
    React.useEffect(()=>{
            fetch(`/api/host/vans/${params.id}`)
            .then(res=>res.json())
            .then(data=>setVan(data.vans[0]))
    },[])
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    // console.log(van.id)
    return(
        
        <div className="HvanDesc-container">
                  <Link className="back" to=".."relative="path" > Back to all vans</Link>

            <div className="HvanDetails">
                <img src={van.imageUrl} alt="" />
                <div >
                    <p className={`van-type ${van.type}`} >{van.type}</p>
                    <h4>{van.name}</h4>
                    <h3>{van.price}$/day</h3>
                </div>
            </div>
            <div className="hostVanDetails">
            <NavLink
            end
          style={({ isActive }) => isActive ? activeStyles : null}
            to=".">Details</NavLink>
            <NavLink 
       style={({ isActive }) => isActive ? activeStyles : null}
            to="pricing">Pricing</NavLink>
            <NavLink 
           style={({ isActive }) => isActive ? activeStyles : null}
            to="photos">Photos</NavLink>
        </div>
            <Outlet context={[van,setVan]}/>
            </div>
           
    )
}