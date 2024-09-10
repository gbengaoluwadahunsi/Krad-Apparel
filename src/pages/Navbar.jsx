// src/components/Navbar.jsx

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import bar from "../assets/images/bars-sort.svg";
import krad from '../assets/images/Krad.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleHome = () => {
    navigate("/")
  }

  return (
    <nav className="mx-auto flex justify-between items-center  bg-slate-100 h-14 px-4 py-4   shadow-md fixed w-full z-50">
    
        <div className="font-bold  cursor-pointer text-xl" onClick={handleHome}>
          <img src={krad} alt="Company logo" width={150} height={150}  />
        </div>
        <div className=" text-blue-600 space-x-6 hidden lg:block ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " py-1 px-6 font-extrabold hover:text-blue-800 "
                : "py-1 px-6  font-semibold hover:text-blue-800"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " py-1 px-6 font-extrabold hover:text-blue-800 "
               : "py-1 px-6  font-semibold hover:text-blue-800"
            }
            to="/aboutus"
          >
           About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " py-1 px-6 font-extrabold hover:text-blue-800 "
               : "py-1 px-6  font-semibold hover:text-blue-800"
            }
            to="/catalogue"
          >
            Catalogue
          </NavLink>
          
         
          
          <NavLink
            className={({ isActive }) =>
              isActive
             ? " py-1 px-6 font-extrabold hover:text-blue-800 "
               : "py-1 px-6  font-semibold hover:text-blue-800"
            }
            to="/contact"
          >
           Get In Touch
          </NavLink>

        
        </div>
        {/* mobile menu */}
        {isOpen && (
          <div
            className="  pace-x-6  space-y-8  py-16 flex flex-col items-center absolute top-0 bg-slate-300 zed w-[40vh] h-[70vh] left-0  lg:hidden animate-slideIn"
            style={{ animation: "slideIn 0.5s ease forwards" }}
          >
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white  py-1 px-6 font-bold fade-in nav-item-1 underline underline-offset-8 decoration-blue-500 decoration-4 hover:text-blue-200 "
                  : "py-1 px-6 text-red-5000 fade-in nav-item-1 underline underline-offset-8  decoration-4 hover:text-blue-200"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white  py-1 px-6 font-bold fade-in nav-item- underline underline-offset-8 decoration-blue-500 decoration-4 hover:text-blue-200"
                  : "py-1 px-6 text-red-5000 fade-in nav-item-2 underline underline-offset-8 decoration-4 hover:text-blue-200"
              }
              to="/aboutus"
            >
              About
            </NavLink>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white  py-1 px-6 font-bold fade-in nav-item- underline underline-offset-8 decoration-blue-500 decoration-4 hover:text-blue-200"
                  : "py-1 px-6 text-red-5000 fade-in nav-item-2 underline underline-offset-8 decoration-4 hover:text-blue-200"
              }
              to="/catalogue"
            >
              Catalogue
            </NavLink>
            

            
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-white  py-1 px-6 font-bold fade-in nav-item-4 underline underline-offset-8 decoration-blue-500 decoration-4 hover:text-blue-200"
                  : "py-1 px-6 text-red-5000 fade-in nav-item-4 underline underline-offset-8  decoration-4 hover:text-blue-200"
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
          className=" cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
     
    </nav>
  );
};

export default Navbar;
