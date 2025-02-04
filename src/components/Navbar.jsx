// import 'src/insex.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-gray-700">
          <a href="/">Food Ninja</a>
        </h1>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
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

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to={"/"} href="#" className="text-gray-700 font-bold hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/About"}  className="text-gray-700 hover:text-red-500">About</Link>
          </li>
          <li>
            <Link to={"/contant"} className="text-gray-700 hover:text-red-500">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
