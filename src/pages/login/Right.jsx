// Right.jsx
import "../../index.css";
import image from "../../images/Register-Background.png";

const Right = () => {
  return (
    <div
      className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-white text-3xl font-bold mb-3">Welcome</h1>
      <p className="text-white leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        suspendisse aliquam varius rutrum purus maecenas ac{" "}
        <a href="#" className="text-purple-300 font-semibold hover:underline">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Right;

