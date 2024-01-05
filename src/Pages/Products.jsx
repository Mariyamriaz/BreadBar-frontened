import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { Img } from '../Components/Img';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

 
    
    
  

  useEffect(() => {
    // Fetch products from your backend API using Axios
    // Replace the URL with your actual backend API endpoint
    axios
      .get('http://localhost:5001/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  

  return (
    <React.Fragment>
      <div className="text-[30px] flex justify-center">
        𝓑𝓻𝓮𝓪𝓭𝓫𝓪𝓻
      </div>
      <nav className="flex gap-5 justify-between bg-orange-300 h-[60px] items-center shadow-md text-shadow-md font-serif sticky top-0 z-10">
        <div className="flex gap-5">
          <Link to="/">
            {/* logo */}
          </Link>
          <Link to="/">
            Home
          </Link>
          <Link to="/aboutus">
            AboutUs
          </Link>
          <Link to="/reviews">
            Reviews
          </Link>
        </div>
        {/* <div className="mx-4">
          <Link to="/login">
            Login
          </Link>
        </div> */}
        <Link to="/">
            Logout
          </Link>
        
      </nav>
      <div className="container mt-8 mx-auto min-h-screen my-5">
        <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-orange-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-green-600 font-bold mb-2">Price: ${product.price}</p>
              <p className="text-blue-600 mb-2">Availability: {product.availability} items</p>
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full addToCart cursor-pointer"
                onClick={() => {
                addToCart(item);
              }}
              >Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
