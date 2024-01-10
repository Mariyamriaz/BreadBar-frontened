import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";
import { Img } from "../Components/Img";
import { Footer } from "../Components/Footer";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [file, setFile] = useState();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("username", userName);
    formData.set("avatar", file);
    formData.set("email", email);
    formData.set("password", password);

    try {
      await axios.post("http://localhost:5001/register", formData, {
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent);
        },
      });

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You can now log in with your credentials.",
      });

      // Optionally, you can redirect the user to the login page
      // history.push("/login");
    } catch (error) {
      // Handle registration error
      console.error("Error during registration:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "An error occurred during registration. Please try again.",
      });
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <Img />
      <div className="flex justify-center my-20">
        <form
          className="flex flex-col my-20 bg-orange-300 opacity-80 p-10 relative w-[50%] rounded-2xl"
          encType="multipart/form-data"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="username"
            className="p-2 my-1 border-[2px] rounded-md"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            className="p-2 my-1 border-[2px] rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="p-2 my-1 border-[2px] rounded-md "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="file"
            name="avatar"
            // value={file}
            id="avatar"
            onChange={handleFile}
            accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
          />
          <div className="flex justify-center my-1">
            <button
              className="text-shadow-md font-serif bg-orange-900 opacity-[80%] hover:opacity-[100%] text-white py-1 rounded-md h-[50px] w-[150px]
                scale-95 hover:scale-100 transition-all"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-between my-1 text-black text-shadow-md font-serif">
            <Link to={"/forgotPassword"} className="scale-95 hover:scale-100 transition-all">
              Forgot password?
            </Link>
            <Link to={"/login"} className="scale-95 hover:scale-100 transition-all">
              Already have an account? SignIn
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default SignUp;
