import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { Link } from 'react-router-dom';

  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      image: 'https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH', // Include the path to the image file
      date: '2023-12-15',
      content: 'Excellent products and great service! I love BreadBar!',
    },
    {
      id: 2,
      author: 'Jane Smith',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_x0_J-TG09A56fOMPOivSIi0XBAqzaYrzw&usqp=CAU', // Include the path to the image file
      date: '2023-12-14',
      content: 'The bread quality is superb. I highly recommend BreadBar to everyone.',
    },
    {
        id: 3,
        author: 'Michael Johnson',
        image: 'data:image/jpeg;base64,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',
        date: '2023-12-13',
        content: "BreadBar's artisan bread is a delightful experience. The variety is impressive, and the taste is unparalleled.",
      },
      {
        id: 4,
        author: 'Emily Davis',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyOaUlczXI4VffEI0B-xBhQB-0EObvthL1g&usqp=CAU',
        date: '2023-12-12',
        content: "I'm a regular customer, and I can't get enough of BreadBar's delicious bread. The quality is consistent, and the service is excellent.",
      },
      {
        id: 5,
        author: 'Robert Anderson',
        image: 'https://www.shutterstock.com/image-vector/default-avatar-profile-vector-user-260nw-1705357234.jpg',
        date: '2023-12-11',
        content: 'As a bread enthusiast, BreadBar has exceeded my expectations. The freshness and flavors are unmatched. Highly recommended!',
      },
    
  ];
  
const Reviews = () => {
  return (
    <React.Fragment>

      <Navbar />
      <div className="container mt-8 mx-auto min-h-screen my-5">
        <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
{reviews.map((review) => (
  <div key={review.id} className="bg-orange-200 p-6 rounded-lg shadow-md">
    {/* Display profile picture */}
    <img src={review.image} alt={`${review.author}'s profile`} className="w-10 h-10 rounded-full mb-2" />

    {/* Display author's name and other review details */}
    <h3 className="text-xl font-bold mb-2">{review.author}</h3>
    <p className="text-gray-600 mb-2">{review.date}</p>
    <p className="text-gray-800">{review.content}</p>
  </div>
))}

        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Reviews;
