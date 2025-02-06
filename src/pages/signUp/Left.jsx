// Left.jsx
import "../../index.css";

const Left = () => {
  return (
    <div className="w-full lg:w-1/2 py-16 px-12">
      <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6">Login</h2>
      <form action="#">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="mt-5">
          <button className="w-full bg-purple-500 py-3 text-white font-semibold rounded-lg hover:bg-purple-600 transition">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Left;
