import React, { useState } from "react"
import { Navbar } from "../Components/Navbar"
import { Link } from "react-router-dom"
import { Img } from "../Components/Img"
import { Footer } from "../Components/Footer"
const ForgotPassword = ()=>{
    const [email,setEmail] =  useState("")
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5001//resetPassword/:id");

    }
    return <React.Fragment>
        <Navbar/>
        <Img/>
       <div className="flex justify-center my-20">
       <form className="flex flex-col my-20 bg-orange-300 opacity-80  transition-all p-10 relative w-[50%] rounded-2xl" onSubmit={submitHandler}>
            <input type="email" placeholder="email" className="p-2 my-1 border-[2px] rounded-md" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <div className="flex justify-center my-1">
                <button className="text-shadow-md font-serif bg-orange-900 opacity-[80%] hover:opacity-[100%] text-white py-1 rounded-md h-[50px] w-[150px]
                scale-95 hover:scale-100 transition-all" type="submit">
                        Reset Password
                </button>
                </div>
                <div className="flex justify-between my-1  font-serif text-shadow-md ">
                    <Link to={'/login'} className="scale-95 hover:scale-100 transition-all">
                    Login
                    </Link>
                    <Link to={'/signUp'} className="scale-95 hover:scale-100 transition-all">
                    Create account
                    </Link>
                </div>
       </form>
       </div>
       <Footer/>
    </React.Fragment>
}
export default ForgotPassword