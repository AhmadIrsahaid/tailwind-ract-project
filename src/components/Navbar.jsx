import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-gray-700">
          <Link to="/">Food Ninja</Link>
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="nunito font-semibold text-gray-700 hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nunito text-gray-700 hover:text-red-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nunito text-gray-700 hover:text-red-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white px-6 pb-4 shadow-md`}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block text-gray-700 hover:text-red-500" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-gray-700 hover:text-red-500" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block text-gray-700 hover:text-red-500" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
