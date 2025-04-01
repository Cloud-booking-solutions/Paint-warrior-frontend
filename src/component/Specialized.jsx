import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Specialized = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400">Why Choose <span className="text-yellow-500">Paint Warrior</span>?</h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Providing top-quality painting solutions with unmatched expertise and commitment.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Section - Image */}
          <div className="relative group">
            <img
              src="https://t3.ftcdn.net/jpg/02/19/32/56/360_F_219325675_XqslaLYxxbWz7HYcK7VTLmD1ml8JTj0q.jpg"
              alt="About Paint Warrior"
              className="rounded-2xl shadow-xl w-full transform group-hover:scale-105 transition duration-500"
            />
           
          </div>

          {/* Right Section - Text */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-orange-400">What Makes Us Stand Out?</h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "20+ Years of Industry Experience",
                "Highly Skilled & Certified Painters",
                "Eco-Friendly & Premium Paints",
                "Timely & Hassle-Free Services",
                "Affordable Pricing & Quality Assurance",
                "Customer-Centric Approach"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                  <CheckCircle className="text-yellow-500" size={28} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-10 bg-yellow-500 text-white p-6 lg:p-12 rounded-xl text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Expertise</h3>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            With over 20 years of experience, Paint Warrior has transformed countless homes and commercial spaces.
            Our dedicated team ensures high-quality results that last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specialized;
