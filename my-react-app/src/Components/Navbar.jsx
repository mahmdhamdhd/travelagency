import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the mobile menu

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h3 className="text-2xl font-bold">Travel</h3>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 text-sm font-bold items-center">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">Home</Link>
          <Link to="/Gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">Gallery</Link>
          <Link to="/Contact" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">Contact</Link>
          <Link to="/About" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">About</Link>
          <Link to="/Login" className="py-2 px-6 border bg-gray-300 rounded">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 py-4 bg-white">
          <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">Home</Link>
          <Link to="/Gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">Gallery</Link>
          <Link to="/Contact" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">Contact</Link>
          <Link to="/About" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded">About</Link>
          <Link to="/Login" className="py-2 px-6 border bg-gray-300 rounded">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
