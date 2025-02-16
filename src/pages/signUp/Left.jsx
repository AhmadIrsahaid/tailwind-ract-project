// Left.jsx
import "../../index.css";
import {AuthContext} from "../../Context/AuthContext"
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
// import { Navigate } from "react-router";

const Left = () => {
  const [email, setEmail] = useState(""); 

  const navgate = useNavigate();
const Login = useContext(AuthContext)
  const handelLogin = () => {
    const userData = {email};
    Login(userData);
    navgate("/welcom")
  }

  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">
        Login
      </h2>
    
      <form >
        <div className="mb-4">
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div className="mt-5">
          <button
          onClick={handelLogin}
            type="submit"
            className="w-full bg-blue-500 py-3 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            
          >
            {"Login"}
          </button>
        </div>
      </form>
    
    </div>
  );
};

export default Left;
