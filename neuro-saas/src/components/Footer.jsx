import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 px-6 mt-10">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-600">
          NeuroSaaS
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0 text-gray-600">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} NeuroSaaS. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;