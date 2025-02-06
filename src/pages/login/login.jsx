// Login.jsx
import Navbar from "../../components/Navbar";
import "../../index.css";
import Left from "./Left";
import Right from "./Right";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center py-20 px-4"
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          <Right />
          <Left />
        </div>
      </div>
    </div>
  );
};

export default Login;
