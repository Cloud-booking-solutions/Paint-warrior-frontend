import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import PaintwarrierLogo from '../assets/images/Paint-warrier-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  return (
    <nav className="fixed top-0 w-full py-4 px-5 bg-gradient-to-r from-orange-100 via-orange-200 to-yellow-300 shadow-md z-50">

  <div className="container mx-auto flex justify-between items-center px-4">
    
   
    <Link to="/">
      <img 
        src={PaintwarrierLogo} 
        alt="Paint Warrior Logo" 
        className="h-8 sm:h-8 md:h-10 lg:h-12 w-auto sm:w-[44px] md:w-[52px] lg:w-[60px]" 
      />
    </Link>

  
    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={30} className="text-orange-600" /> : <Menu size={30} className="text-orange-600" />}
    </button>

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-5 uppercase"> {/* Reduced space-x-6 to space-x-5 */}
      {["Home", "About", "Services", "Gallery", "Blog", "Contact Us", "Admin"].map((item) => {
        const path = `/${item.toLowerCase().replace(/\s+/g, "-") === "home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <li key={item}>
            <Link
              to={path}
              className={`${
                location.pathname === path
                  ? "text-orange-600 font-bold"
                  : "text-gray-800 hover:text-orange-600 transition duration-300"
              }`}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <ul className="md:hidden flex flex-col items-center text-gray-800 space-y-4 p-4 bg-white">
      {["Home", "About", "Services", "Gallery", "Blog", "Contact Us", "Admin"].map((item) => {
        const path = `/${item.toLowerCase().replace(/\s+/g, "-") === "home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <li key={item}>
            <Link
              to={path}
              className={`${
                location.pathname === path
                  ? "text-orange-600 font-bold"
                  : "text-gray-800 hover:text-orange-600 transition duration-300"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  )}
</nav>


  );
};

export default Navbar;
