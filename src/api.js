import { redirect } from "react-router-dom"

export async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
export async function callVans(id){
    //    await sleep(2000)
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
    const isLoggedin=localStorage.getItem("loggedIn");
    if(!isLoggedin){

     window.location.replace("/login?message=you must login first")
     return null

    }
    return null;
} 

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}