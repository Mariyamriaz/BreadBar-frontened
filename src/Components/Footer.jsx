import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-orange-300 text-shadow-md  bottom-0  w-full fixed ">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <p className="text-white">© 2023 Your Company</p>
        </div>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="text-white hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white hover:underline">
            Terms of Service
          </a>
          <a href="/contact-us" className="text-white hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};


