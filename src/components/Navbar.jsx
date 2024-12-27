import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../Redux/Slice/SearchSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  
  // Assuming `searchTerm` is stored in the Redux state
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-500">MyApp</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500 transition">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500 transition">About</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder="Search here"
            aria-label="Search input"
            className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none hover:border-blue-500 transition-all"
          />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
            {/* Replace with a menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
