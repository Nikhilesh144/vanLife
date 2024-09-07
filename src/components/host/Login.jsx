import React from "react";
import { useLoaderData } from "react-router-dom";

export  function loader({request}){
        
        return new URL(request.url).searchParams.get("message")
}
export default function Login(){
    const message=useLoaderData()
    const[formData,setFormData]=React.useState({email:"",password:""})

   
    function handleChange(e) {
        console.log(e)
        const {name,value}=e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(){
        console.log(formData)
    }

    return(

        <div className="Login">
            <h2>Sign in to your account</h2>
            {message && <p className="red">{message}</p> }
            <form action="">
            <input 
             type="email" 
             placeholder="Email"
             name="email"
             onChange={handleChange}
             value={formData.email}
             />
            <input 
             type="password"
             placeholder="Password"
             name="password"
             onChange={handleChange}
             value={formData.password}
             />
             </form>
            <button onClick={handleSubmit}>Sign in </button>
            <p>Don't have an account? <span> create one now</span></p>
        </div>
    )
}