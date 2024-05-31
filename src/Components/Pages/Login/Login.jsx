import React, { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { login,signup } from '../../../firebase'
import netflix_spinner from '../../../assets/netflix_spinner.gif'

const Login = () => {

const [signState,setsignState]= useState("Sign In");

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[Password,setPassword]=useState("");
const [loading,setLoading] =useState(false);


const user_auth =async (event)=>{
  event.preventDefault();
  setLoading(true);
  if(signState==="Sign In"){
    await login(email,Password);
  }else{
    await signup(name,email,Password);
  }
  setLoading(false);
};


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"? <input 
           value={name} onChange={(event)=>{setName(event.target.value)}}  
           type="text" placeholder='Your Name' />:<></>}
          <input
           value={email} onChange={(event)=>{setEmail(event.target.value)}}
            type="text" placeholder='Email' />
          <input
           value={Password} onChange={(event)=>{setPassword(event.target.value)}}
            type="text" placeholder='Password' />
          <button onClick={user_auth} type='Submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>


        </form>
        <div className="form-switch">

          {signState==="Sign In"?
        <p>New to Netflix?<span onClick={()=>{setsignState("Sign Up")}}> Sign Up Now</span></p>:
        <p>Already have Account?<span onClick={()=>{setsignState("Sign In")}}> Sign In Now</span></p>


        }
          
        </div>
      </div>
    </div>
  )
}

export default Login