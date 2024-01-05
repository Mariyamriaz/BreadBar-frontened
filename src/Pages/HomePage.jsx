import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../Components/Navbar";
import { Img } from "../Components/Img";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Img />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[45%] left-[1%] transform -translate-x-1/7 -translate-y-1/2 text-white font-serif text-[60px] transition-all w-[70%] flex flex-wrap text-shadow-md mx-4 "
      >
        Rise and Shine with Fresh-Baked Goodness!
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" absolute top-[62%] left-[25%] transform -translate-x-1/7 -translate-y-1/2 bg-orange-500 opacity-[80%] hover:opacity-[100%] text-white font-serif text-shadow-md px-4 py-2 rounded-full scale-95 hover:scale-100 transition-all shadow-md h-[50px] w-[180px]"
      >
        <Link to={'/recipes'} className="flex justify-center">
          Explore More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container flex items-center py-8 absolute top-[115%] bg-orange-100"
      >
        {/* Left Text */}
        <div className="w-1/2 pr-8 mx-4">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-4 "
          >
            𝓑𝓻𝓮𝓪𝓭𝓫𝓪𝓻
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-700 mb-4"
          >
            Savor the artistry of breadmaking at BreadBar, where our commitment
            to excellence and love for the craft come together, creating moments
            of joy with every slice.
          </motion.p>
        </div>

        {/* Right Image */}
        <div className="w-2/4 mx-4 my-2 ">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/Breadcut.jpg"
            alt="Right Image"
            className="w-full h-auto rounded"
          />
        </div>
      </motion.div>

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
