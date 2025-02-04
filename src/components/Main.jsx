import Card from "./Card";
import stew from "../images/stew.jpg";
import noodles from "../images/noodles.jpg";
import tofu from "../images/curry.jpg";
import Hesder from "./Hesder";
import { Link } from "react-router-dom";
// import '../src/index.css';

const Main = () => {
  return (
    <div className="font-nunito">
      <main className="px-16 py-6 bg-gray-100 min-h-screen">
        {/* Navbar */}
        <div className="flex justify-end space-x-4">
          <Link  className="btn text-red-500 hover:underline hover:text-red-600 " to="/Login">
            Login
          </Link>
          <Link  className="btn text-red-500 hover:underline hover:text-red-600" to="/signup">
            Sign up
          </Link>
        </div>

        {/* Header */}
        <Hesder />

        {/* Latest Recipes Section */}
        <section className="mt-12 gride grid-cols-3">
          <h4 className="font-bold text-lg border-b pb-2 border-gray-200">
            Latest Recipes
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card foodName="5 Bean Chili Stew" image={stew} alt="stew" />
            <Card foodName="Veg Noodles" image={noodles} alt="noodles" />
            <Card foodName="Tofu Curry" image={tofu} alt="tofu" />
          </div>
        </section>

        {/* Most Popular Section */}
        <section className="mt-12">
          <h4 className="font-bold text-lg border-b pb-2 border-gray-200">
            Most Popular
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Add popular recipes here */}
          </div>
        </section>

        {/* Load More Button */}
        <div className="mt-12 flex justify-center">
          <button className="load-btn">
            Load more
          </button>
        </div>
      </main>
    </div>
  );
};

export default Main;
