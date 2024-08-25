import React from "react";
import { useOutletContext } from "react-router-dom";
export default  function HostPhotos(){
    const[van,setVan]=useOutletContext()
    const style={
        height:"90px",
        width:"90px",
        marginTop:"10px",
        borderRadius:"5px"


    }
    return(
        <div>
            <img style={style} src={van.imageUrl} alt="" />
        </div>
    )
}