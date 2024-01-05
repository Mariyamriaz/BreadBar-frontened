import React from "react"
import { Navbar } from "../Components/Navbar"
import { Footer } from "../Components/Footer"
import { Img } from "../Components/Img"
const AboutUs = ()=>{
    return <React.Fragment>
        <Navbar/>
        <div>
        <img src="/Breads.jpg"
        className="h-[600px] w-full  shadow-md my-2 absolute opacity-[20%] " />
        </div>
        <div className="container mt-8 mx-auto relative">
        <h1 className="text-3xl font-bold mb-4 mx-2">About Us</h1>
        <p className="text-black mb-4 mx-5">
          Welcome to BreadBar, where the art of artisan baking comes to life. At BreadBar, we are passionate about crafting the finest breads using traditional techniques and high-quality ingredients. Our journey began with a simple yet profound belief – that the heart and soul of good bread lie in the hands of skilled artisans.

          Our artisan bakers bring a wealth of experience and dedication to the art of breadmaking. Each loaf is a labor of love, carefully crafted to perfection. We believe in the magic that happens when simple ingredients like flour, water, salt, and yeast come together with time and expertise.

          What sets BreadBar apart is our commitment to preserving the time-honored traditions of artisanal baking. We source the finest ingredients, prioritize craftsmanship, and embrace the slow fermentation process to create bread that is not only delicious but also nourishing.

          Whether it's the rustic allure of a sourdough boule, the delicate layers of a flaky croissant, or the comforting aroma of a freshly baked baguette, every product from BreadBar is a testament to our dedication to the art of baking.

          Join us on this journey as we celebrate the simple joy of breaking bread together. Explore our catalog of handcrafted breads, pastries, and more – each a masterpiece in its own right. Thank you for being part of our story, and we look forward to sharing the love of artisan baking with you.

          Savor the craftsmanship. Taste the tradition. Welcome to BreadBar.
        </p>
      </div>
        <Footer/>
    </React.Fragment>
}
export default AboutUs