import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Keeping the same icons

const partners = [
  { id: 1, logo: "https://tradebrains.in/wp-content/uploads/2021/03/Asian-Paints-case-Study-Fundamentals-Porter-SWOT-Analysis-cover.jpg" },
  { id: 2, logo: "https://static.startuptalky.com/2022/11/Berger-Lewis-StartupTalky-1.png" },
  { id: 3, logo: "https://static.startuptalky.com/2024/10/Top-Paints-In-India-JSW-Paints-StartupTalky.jpg" },
  { id: 4, logo: "https://static.startuptalky.com/2022/07/Indigo-Paints-Top-10-Paint-Brands-India-StartupTalky.jpg" },
  { id: 5, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUbOWHaxF0qAYil4EKAmoUrrj5upLtn80BA&s" },
  { id: 6, logo: "https://images.tpointtech.com/top10-technologies/images/top-10-paint-companies-in-india4.png" },
  { id: 7, logo: "https://images.tpointtech.com/top10-technologies/images/top-10-paint-companies-in-india8.png" },
];

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <MdArrowForward size={20} className="text-orange-400" /> {/* Increased size */}
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <MdArrowBack size={20} className="text-orange-400" /> {/* Increased size */}
    </div>
  );
};

const ServicePartner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-3 pb-6 bg-gray-100 mt-5">
      <h2 className="text-4xl font-bold text-center text-orange-400 mb-3">
        Our Service Partners
      </h2>
      <div className="max-w-7xl mx-auto px-4 relative">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="p-3">
              <div className="flex justify-center items-center bg-white rounded-lg shadow-md p-4">
                <img
                  src={partner.logo}
                  alt={`Partner ${partner.id}`}
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicePartner;
