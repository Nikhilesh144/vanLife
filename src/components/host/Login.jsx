import React from "react";
import { useLoaderData ,useNavigate,Form, redirect, useActionData,useNavigation} from "react-router-dom";
import { loginUser } from "../../api";

export  function loader({request}){
        
        return new URL(request.url).searchParams.get("message")
}
export async function action( {request}){
     const fd= await  request.formData()
     const email=fd.get("email")
     const password=fd.get("password")
     try{ 
    const login= await loginUser({email,password})
            localStorage.setItem('loggedIn',true)
            window.location.replace("/host")
       return  null
     }
     catch(err){
        return err;
     }
    
    
}
export default function Login(){
    const message=useLoaderData()
    // const[formData,setFormData]=React.useState({email:"",password:""})
    const status=useNavigation().state
    const error= useActionData();
   
    // function handleChange(e) {
    //     // console.log(e)
    //     const {name,value}=e.target;
    //     setFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }
    // const navigate=useNavigate()
    // function handleSubmit(){
    //     setFormData("submitting")
    //     setError(null)
    //     loginUser(formData).then(data=>{
    //         navigate("/host",{replace:true})
    //     })
    //     .catch(err=>setError(err))
    //     .finally(()=>  setFormData("idle"))
       
    // }

    return(

        <div className="Login">
            <h2>Sign in to your account</h2>
            {error&& <p className="red">{error.message}</p>}
            {message && <p className="red">{message}</p> }
            <Form method="POST" replace>
            <input 
             type="email" 
             placeholder="Email"
             name="email"
            
             />
            <input 
             type="password"
             placeholder="Password"
             name="password"
            
             />
               <button 
            disabled={status==="submitting"?true :false} 
            >
                {status==="submitting"?"Logging in..":"Login"} </button>
             </Form>
          
            <p>Don't have an account? <span> create one now</span></p>
        </div>
    )
}