import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* 1️⃣ About Company */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-3">
            Paint Warrior
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Transforming spaces with expert painting services. We specialize in high-quality interior, exterior, 
            and industrial painting solutions in Pune & PCMC.
          </p>
        </div>

        {/* 2️⃣ Quick Links (Navigation) */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-yellow-300 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Contact Information */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-3">
            Contact Us
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex justify-center md:justify-start items-center">
              <Phone size={18} className="mr-2 text-yellow-500" /> +91 7709409997
            </p>
            <p className="flex justify-center md:justify-start items-center">
              <Mail size={18} className="mr-2 text-yellow-500" /> paintwarrior9@gmail.com
            </p>
            <p className="flex justify-center md:justify-start items-start">
              <MapPin size={20} className="mr-2 text-yellow-500" />
              D4, Near Nexa Showroom, Baner Road, Sakal Nagar, Aundh, Pune, MH-411007
            </p>
          </div>
        </div>
      </div>

      {/* 4️⃣ Social Media Links (Centered with Circle Background) */}
      <div className="flex justify-center space-x-5 mt-8">
        {[
          { icon: <Facebook size={18} />, link: "https://facebook.com", color: "bg-blue-600" },
          { icon: <Instagram size={18} />, link: "https://instagram.com", color: "bg-pink-500" },
          { icon: <Linkedin size={18} />, link: "https://linkedin.com", color: "bg-blue-700" },
          { icon: <Twitter size={18} />, link: "https://twitter.com", color: "bg-blue-400" },
          { icon: <Youtube size={18} />, link: "https://youtube.com", color: "bg-red-500" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color} text-white hover:opacity-80 transition duration-300`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* 5️⃣ SEO Keywords & Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">
          House Painting, Wall Painting, Industrial Painting, Interior Painting, Exterior Painting, 
          Professional Painters, Residential Painting, Commercial Painting, Affordable Painting Services, 
          Home Decor Painting, Painting Contractors in PCMC, Pimpri-Chinchwad Painting Services, 
          Office Painting in PCMC, Best Painters in PCMC, Waterproofing Services PCMC, 
          Texture Painting PCMC, Apartment Painting PCMC, Villa Painting PCMC.
        </p>
        <p className="text-sm text-white mt-2">
  © 
  {/* {new Date().getFullYear()} */} 2025
   Paint Warrior. All Rights Reserved.  
  Developed by <span className="font-medium text-white">Cloud Booking Software Solutions</span>.
</p>

      </div>
    </footer>
  );
};

export default Footer;