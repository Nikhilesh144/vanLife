import { redirect } from "react-router-dom"

export async function callVans(id){

    const url=id?`/api/vans/${id}`:"/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {

            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    else{
    const data = await res.json()
    return data.vans
    }

}

export async function hostVans(id){

    const url=id?`/api/host/vans/${id}`:"/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    else{
    const data = await res.json()
    return data.vans
    }

}

export function authRequired(){
    const isLoggedin=false;
    if(!isLoggedin){

     window.location.replace("/login?message=you must login first")
     return null

    }
    return null;
} 