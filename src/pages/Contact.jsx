import { CheckCircle, MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 pb-10 mt-2 bg-gray-100">
      <div className="max-w-full lg:mx-5 lg:px-6">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Get in touch with us for painting services and inquiries.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 mt-5 lg:mt-10 md:mx-4">
          {[{ icon: Phone, label: "Call Us", detail: "+91 7709409997" },
            { icon: Mail, label: "Email", detail: "paintwarrior9@gmail.com" },
            { icon: MapPin, label: "Visit Us", detail: "D4, near Nexa Showroom, Baner Road, Sakal Nagar, Aundh, Pune, MH-411007" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 mx-4 md:mx-0 shadow-lg rounded-lg flex flex-col items-center transition transform hover:scale-105 duration-300">
              <item.icon size={30} className="text-orange-500" />
              <p className="mt-3 text-lg font-semibold">{item.label}</p>
              <p className="text-gray-600 text-center">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Contact Form & Map Side by Side */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-xl rounded-lg h-full flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-3 rounded-full font-semibold flex items-center justify-center cursor-pointer space-x-2 hover:bg-orange-500 transition duration-300 shadow-md"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white p-6 shadow-xl rounded-lg h-full flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Location</h3>
            <iframe
              title="Google Maps Location"
              className="w-full h-96 border-1 border-orange-400"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5949327250755!2d73.8172566742381!3d18.5471982683622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6ad9301249%3A0xbed961ae25ab49d0!2sD4%2C%20Baner%20Rd%2C%20Sakal%20Nagar%2C%20Aundh%2C%20Pune%2C%20Maharashtra%20411007!5e0!3m2!1sen!2sin!4v1742456539017!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;