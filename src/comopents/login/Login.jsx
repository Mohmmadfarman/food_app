import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

function Login({setlogin}) {
 const[currentstate,setcurrentstate]=useState('Login')

 function hide(){
    // alert("h")
    setlogin(false)
 }

  return (
    <div className='login'>
      <form className='login-container'>
        <div className="login-title">
            <h2 style={{color:'black'}}>{currentstate}</h2>
            <img onClick={hide} src={assets.cross_icon} alt="" />

        </div>
        <div className="login-input">
            {
                currentstate==='Login'?<></>:
                <input type="text" placeholder='Your name' required/>
            }
            
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required />
        </div>
    <button>{currentstate==='Sign Up'?'Create account':'Login'}</button>

    <div className="login-condition">
        <input type="checkbox" />
        <p>By continuing, i agree to the terms of use & privacy policy</p>
    </div>
    {
        currentstate==='Login'?  <p>Create a new account? <span onClick={()=>setcurrentstate('Sign Up')} >Click here</span></p>
        :  <p onClick={()=>setcurrentstate('Login')}>Alraedy have an account? <span>Login here</span></p>
    }
  
  
      </form>
      
    </div>
  )
}

export default Login
