import { Link } from "react-router-dom"
import React from "react"


export const Navbar = ()=>{
    return (
    <>
    <div className="text-[30px] flex justify-center">
        𝓑𝓻𝓮𝓪𝓭𝓫𝓪𝓻
        </div>
    <nav className="flex gap-5 justify-between bg-orange-300 h-[60px] items-center shadow-md text-shadow-md font-serif sticky top z-10">
        
        <div className=" flex gap-5">
        <Link to={"/"}>
        {/* logo */}
        </Link>
        <Link to={"/"}>
        Home
        </Link>
        <Link to={"/aboutus"}>
        AboutUs
        </Link>
        <Link to={"/reviews"}>
        Reviews
        </Link>
        
        </div>
        {/* <Link to={"/signUp"}>
        Sign Up
        </Link> */}
    
        <div className="mx-4">
        <Link to={"/login"}>
        Login
        </Link>
        </div>
        
    </nav>
    </>
)}