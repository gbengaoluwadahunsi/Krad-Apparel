import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import bar from "../assets/images/bars-sort.svg";
import krad from '../assets/images/pics/krad.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  }

  const handleHome = () => {
    navigate("/")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="mx-auto flex justify-between items-center bg-slate-100 h-14 px-4 py-4 shadow-md fixed w-full z-50">
      <div className="font-bold cursor-pointer text-xl" onClick={handleHome}>
        <img src={krad} alt="Company logo" width={150} height={150} />
      </div>
      <div className="text-blue-600 space-x-6 hidden lg:block">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "py-1 px-6 font-extrabold hover:text-blue-800"
              : "py-1 px-6 font-semibold hover:text-blue-800"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "py-1 px-6 font-extrabold hover:text-blue-800"
              : "py-1 px-6 font-semibold hover:text-blue-800"
          }
          to="/aboutus"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "py-1 px-6 font-extrabold hover:text-blue-800"
              : "py-1 px-6 font-semibold hover:text-blue-800"
          }
          to="/catalogue"
        >
          Catalogue
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "py-1 px-6 font-extrabold hover:text-blue-800"
              : "py-1 px-6 font-semibold hover:text-blue-800"
          }
          to="/contact"
        >
          Get In Touch
        </NavLink>
      </div>
      {/* mobile menu */}
      <div ref={navRef} className="lg:hidden">
        {isOpen && (
          <div
            className="space-y-8 py-16 flex flex-col items-center absolute top-0 bg-slate-300 w-[40vh] h-[70vh] left-0 animate-slideIn"
            style={{ animation: "slideIn 0.5s ease forwards" }}
          >
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-6 font-bold fade-in nav-item-1 underline underline-offset-8 decoration-blue-500 decoration-4"
                  : "py-1 px-6 text- fade-in nav-item-1 underline underline-offset-8 decoration-4"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-6 font-bold fade-in nav-item- underline underline-offset-8 decoration-blue-500 decoration-4"
                  : "py-1 px-6 text-red-5000 fade-in nav-item-2 underline underline-offset-8 decoration-4"
              }
              to="/aboutus"
            >
              About
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-6 font-bold fade-in nav-item- underline underline-offset-8 decoration-blue-500 decoration-4"
                  : "py-1 px-6 text-red-5000 fade-in nav-item-2 underline underline-offset-8 decoration-4"
              }
              to="/catalogue"
            >
              Catalogue
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-6 font-bold fade-in nav-item-4 underline underline-offset-8 decoration-blue-500 decoration-4"
                  : "py-1 px-6 text-red-5000 fade-in nav-item-4 underline underline-offset-8 decoration-4"
              }
              to="/contact"
            >
              Get In Touch
            </NavLink>
          </div>
        )}
        <img
          src={bar}
          alt=""
          width={30}
          height={20}
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}