import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <>
      <button
        className="btn-scrollTop text-blue-900"
        style={{ display: isVisible ? "block" : "none" }}
        onClick={goTop}
      >
        <FaArrowCircleUp className=" bg-fucsia-800" />
      </button>
    </>
  );
};

export default ScrollUp;
