import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      review: "Paint Warrior delivered an exceptional service! The painters were professional, punctual, and efficient. They paid close attention to every detail, ensuring a flawless finish. My home looks elegant and well-maintained. Highly recommend them for top-notch quality!",
    },
    {
      id: 2,
      name: "Sneha Patil",
      review: "The transformation was amazing! The painters were skilled and suggested great color combinations. They worked with precision and care, ensuring a smooth and even finish. My home now looks refreshed and beautiful with its new bright and welcoming look!",
    },
    {
      id: 3,
      name: "Amit Verma",
      review: "A seamless experience from start to finish! The team provided expert guidance and used high-quality paints. Their professionalism and attention to detail ensured a fantastic outcome. My walls now have a fresh and vibrant appeal, making my home lively!",
    },
    {
      id: 4,
      name: "Priya Desai",
      review: "Affordable and premium quality! The painters were polite, took time to understand my vision, and worked precisely. The process was smooth and well-managed. Now, my home looks fresh and vibrant, and I am truly impressed with their work and service!",
    },
    {
      id: 5,
      name: "Vikas Kulkarni",
      review: "Extremely satisfied with the painting job! The team was professional, worked with precision, and maintained cleanliness. The smooth and rich finish on my walls gives character to my space. I will definitely choose them again for future projects!",
    },
  ];
  
  

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer z-10 shadow-md"
    onClick={onClick}
  >
    <MdArrowForward size={24} className="text-orange-400" />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer z-10 shadow-md"
    onClick={onClick}
  >
    <MdArrowBack size={24} className="text-orange-400" />
  </div>
);

const ClientReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3, // Display 3 reviews at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-5 bg-gray-100 mt-5">
      <h2 className="text-4xl font-bold text-center text-orange-400 mb-2">
      Our Happy Clients
      </h2>
      <div className="max-w-7xl mx-auto px-4 relative">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="bg-white rounded-lg shadow-md p-6 h-auto flex flex-col justify-between">
                <p className="text-gray-700 italic">"{review.review}"</p>
                <p className="text-orange-500 font-semibold mt-4 text-right">
                  - {review.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientReviews;
