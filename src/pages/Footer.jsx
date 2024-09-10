// src/components/Footer.jsx

import { NavLink, useNavigate } from "react-router-dom";
import krad from '../assets/images/pics/krad.png'

import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'




const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/")
  }
  return (
    <div className=" w-full bg-slate-800 flex flex-wrap px-8 py-12 text-white justify-between">
  {/* Logo and tagline */}
  <div className="w-full md:w-1/4 mb-6 md:mb-0">
    <div className="flex flex-col justify-between">
      <div className="font-bold  cursor-pointer text-xl" onClick={handleHome}>
        <img src={krad} alt="Company logo" width={150} height={150} />
      </div>
      <p>Tailoring excellence since 2024</p>
    </div>
  </div>

  {/* Quick Links */}
  <div className="w-full md:w-1/4 mb-6 flex flex-col justify-start  md:mb-0">
    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
    <div className="space-y-2 flex  flex-col  ">
      <NavLink className="hover:text-royalBlue transition duration-300" to="/">
        Home
      </NavLink>
      <NavLink className="hover:text-royalBlue transition duration-300" to="/catalogue">
        Catalogue
      </NavLink>
      <NavLink className="hover:text-royalBlue transition duration-300" to="/services">
        Services
      </NavLink>
      <NavLink className="hover:text-royalBlue transition duration-300" to="/contact">
        Contact
      </NavLink>
    </div>
  </div>

  {/* Contact Information */}
  <div className="w-full md:w-1/4 mb-6 md:mb-0">
    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
    <p>123 Fashion Street, Styleville</p>
    <p>Email: info@kradapparel.com</p>
    <p>Phone: (123) 456-7890</p>
  </div>

  {/* Social Media Links */}
  <div className="w-full md:w-1/4">
    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" className="w-6 h-6 hover:animate-bounce" />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="X" className="w-6 h-6 hover:animate-bounce" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="w-6 h-6 hover:animate-bounce" />
      </a>
    </div>
  </div>
</div>

  );
};

export default Footer;
