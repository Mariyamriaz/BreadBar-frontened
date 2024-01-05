import React, { useState } from "react"
import { Navbar } from "../Components/Navbar"
import { Link } from "react-router-dom"
import { Img } from "../Components/Img"
import { Footer } from "../Components/Footer"

import axios from "axios"
const Login = ()=>{
    const [email,setEmail] =  useState("")
    const [password,setPassword] =  useState("")
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5001/login");

    }
    return <React.Fragment>
        <Navbar/>
        <Img/>
       <div className="flex justify-center my-20">
       <form className="flex flex-col my-20 bg-orange-300 opacity-80 p-10 relative w-[50%] rounded-2xl" 
       onSubmit={submitHandler}>
            <input type="email" placeholder="email" className="p-2 my-1 border-[2px] rounded-md " value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" className="p-2 my-1 border-[2px]"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                <div className="flex justify-center my-1">
                {/* <button className= "text-shadow-md font-serif bg-orange-900 opacity-[80%] hover:opacity-[100%] text-white py-1 rounded-md h-[50px] w-[150px] scale-95 hover:scale-100 transition-all"type="submit">
                        Login
                        
                </button> */}
                <Link to={'/products'} 
                className=" flex justify-center items-center  text-shadow-md font-serif bg-orange-900 opacity-[80%] hover:opacity-[100%] text-white py-1 rounded-md h-[50px] w-[150px] scale-95 hover:scale-100 transition-all"type="submit">
                Login
                </Link>

                </div>
                <div className="flex justify-between my-1  text-black text-shadow-md font-serif ">
                    <Link to={'/forgotPassword'} className="scale-95 hover:scale-100 transition-all">
                    Forgot password?
                    </Link>
                    <Link to={'/signUp'} className="scale-95 hover:scale-100 transition-all">
                    Don't have an account? Sign Up
                    </Link>
                </div>
       </form>
       </div>
       <Footer/>
    </React.Fragment>
}
export default Login