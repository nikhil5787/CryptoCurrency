import React, { useState } from 'react'
import "./Login.css"


export const Login = () => {
  const [action,SetAction]=useState("Sign Up");

  

 

  return (
    
    <div className='container'>
      <h1>{action}</h1>
    <div className='login'>
      {action==="Login"?<div></div>:   <input type='text' placeholder="Username" />}
   
      <input type='email' placeholder="Email ID" />
      <input type='password' placeholder="Password" />
    </div>
    {action==="Sign Up"?<div></div>: <div className='forgot_password'>Forgot Password?<span>Click here!</span></div>}
   
    <div className='submit_container'>
        <div  onClick={()=>SetAction("Sign Up")} className={action==="Login"?" submit grey":"submit"}>Sign Up</div>
        <div  onClick={()=>SetAction("Login")} className={action==="Sign Up"?" submit grey":"submit"}>Login</div>

    </div>
  </div>
   
  )
}
