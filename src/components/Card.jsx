import PropTypes from "prop-types";

const Card = ({ foodName, time = "25 min", image, alt }) => {
  return (
    <div>
      <div className="card">
        <img
          src={image}
          alt={alt}
          className="w-full h-32 sm:h48 object-cover"
        />
        <div className="m-4">
          <span className="font-bold">{foodName} </span>
          <span className="block text-gray-500 text-sm">Recipe by Mario</span>
        </div>
        <div className="badge">
          <svg
            className="w-5 inline-block size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  foodName: PropTypes.string.isRequired,
  time: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Card;
