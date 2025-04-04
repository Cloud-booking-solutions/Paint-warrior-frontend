// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import IMG1 from "../assets/images/slider-images/Slider-img1.jpg";
// import IMG2 from "../assets/images/slider-images/Slider-img2.jpeg";
// import IMG3 from "../assets/images/slider-images/Slider-img3.jpg";
// import IMG4 from "../assets/images/slider-images/Slider-img4.webp";
// import IMG5 from "../assets/images/slider-images/Slider-img5.jpeg";
// import IMG6 from "../assets/images/slider-images/Slider-img6.jpg";
// import IMG7 from "../assets/images/slider-images/Slider-img7.avif";
// import IMG8 from "../assets/images/slider-images/Slider-img8.jpg";
// import IMG9 from "../assets/images/slider-images/Slider-img9.jpeg";
// import IMG10 from "../assets/images/slider-images/Slider-img10.avif";

// const sliderContent = [
//   // { image: IMG1, title: "Professional Home Painting Services", subtitle: "Enhance your home's beauty with high-quality paints and expert craftsmanship." },
  
//   // { image: IMG7, title: "Waterproof & Anti-Moisture Paints", subtitle: "Protect your walls from leaks, moisture, and fungal growth." },
//   { image: IMG7, title: "Give Your Walls a Fresh New Look in PCMC!", subtitle: "Expert painting that adds beauty and durability to your spaces in PCMC." },

//   // { image: IMG10, title: "Luxury Finishes & Designer Painting", subtitle: "Exclusive finishes for an elegant and sophisticated interior." },
// ];

// const HomeSlider = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 4000,
//     fade: true,
//     arrows: false,
//   };

//   return (
//     <div className="w-full h-auto lg:h-[480px] overflow-hidden relative">
//       <Slider {...settings}>
//         {sliderContent.map((slide, index) => (
//           <div key={index} className="w-full md:h-[400px] lg:h-[480px] relative">
//             <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-opacity-30 w-full md:h-[400px] lg:h-[480px]"></div>
//             <div
//   data-aos="fade-up"
//   className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 text-white text-center px-6 md:px-12"
// >
//   <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 drop-shadow-lg w-full">
//     {slide.title}
//   </h1>
//   <p className="text-md md:text-lg mt-2 drop-shadow-md w-full">
//     {slide.subtitle}
//   </p>
// </div>

//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HomeSlider;
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import IMG1 from "../assets/images/slider-images/Slider-img1.jpg";
import IMG2 from "../assets/images/slider-images/Slider-img2.jpeg";
import IMG3 from "../assets/images/slider-images/Slider-img3.jpg";
import IMG4 from "../assets/images/slider-images/Slider-img4.webp";
import IMG5 from "../assets/images/slider-images/Slider-img5.jpeg";
import IMG6 from "../assets/images/slider-images/Slider-img6.jpg";
import IMG7 from "../assets/images/slider-images/Slider-img7.avif";
import IMG8 from "../assets/images/slider-images/Slider-img8.jpg";
import IMG9 from "../assets/images/slider-images/Slider-img9.jpeg";
import IMG10 from "../assets/images/slider-images/Slider-img10.avif";

const sliderContent = [
  {
    image: IMG7,
    title: "Give Your Walls a Fresh New Look in PCMC!",
    subtitle:
      "Expert painting that adds beauty and durability to your spaces in PCMC.",
  },
];

const HomeSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="w-full h-auto lg:h-[480px] overflow-hidden relative">
      <Slider {...settings}>
        {sliderContent.map((slide, index) => (
          <div key={index} className="w-full md:h-[400px] lg:h-[480px] relative">
            <img
              src={slide.image}
              alt={slide.title}
              style={{ filter: 'blur(3px)' }}
              className="w-full h-full object-cover filter"
            />
            <div className="absolute inset-0  bg-opacity-50 w-full md:h-[400px] lg:h-[480px]"></div>
            <div
              data-aos="fade-up"
              className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 text-white text-center px-6 md:px-12"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 drop-shadow-lg w-full">
                {slide.title}
              </h1>
              <p className="text-md md:text-lg mt-2 drop-shadow-md w-full">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;

