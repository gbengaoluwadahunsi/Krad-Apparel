

// eslint-disable-next-line react/prop-types
const Button = ({ label }) => {
  return (
    <div className="hero-text mt-6 px-12 py-3 bg-blue-600 w-fit cursor-pointer  text-white rounded-full shadow-lg hover:bg-blue-400  hover:w-60 ease-out  duration-300">
      {label}
    </div>
  );
};

export default Button;
