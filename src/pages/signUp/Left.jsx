// Left.jsx
import "../../index.css";
import {
  doSignInWithEmailAndPassword,
  doSignInwithGoogle,
} from "../../firebace/auth"; // Fixed import path
import { useAuth } from "../Context/index  ";
import { useState } from "react";
import { Navigate } from "react-router";

const Left = () => {
  const { userLoggingIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Fixed typo

  // Email/Password Sign-in
  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (err) {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      }
    }
  };

  // Google Sign-in
  const isGoogleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInwithGoogle();
      } catch (err) {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      }
    }
  };

  // Redirect if user is logged in
  if (userLoggingIn) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">
        Login
      </h2>
      {errorMessage && (
        <p className="text-red-500 text-center mb-4">{errorMessage}</p>
      )}
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full bg-blue-500 py-3 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            disabled={isSigningIn}
          >
            {isSigningIn ? "Signing in..." : "Login"}
          </button>
        </div>
      </form>
      <div className="mt-5">
        <button
          onClick={isGoogleSignIn}
          className="w-full bg-red-500 py-3 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          disabled={isSigningIn}
        >
          {isSigningIn ? "Signing in..." : "Login with Google"}
        </button>
      </div>
    </div>
  );
};

export default Left;
