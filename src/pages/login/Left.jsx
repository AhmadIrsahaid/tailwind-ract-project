// Left.jsx
import "../../index.css";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">Register</h2>
      <p className="text-center text-gray-600 mb-6">
        Create your account. It’s free and only takes a minute.
      </p>
      <form action="#">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400 w-full"
          />
          <input
            type="text"
            placeholder="Surname"
            className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-purple-400 w-full"
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mt-4 flex items-center">
          <input type="checkbox" className="border border-gray-400 mr-2" />
          <span className="text-gray-600">
            I accept the{" "}
            <a href="#" className="text-purple-500 font-semibold hover:underline">
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="#" className="text-purple-500 font-semibold hover:underline">
              Privacy Policy
            </a>
          </span>
        </div>
        <div className="mt-6">
          <button className="w-full bg-purple-500 py-3 text-white font-semibold rounded-lg hover:bg-purple-600 transition">
            Register Now
          </button>
        </div>
        <div className="mt-4 text-center">
          <Link
            to="/signup"
            className="block w-full border border-gray-300 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Left;

