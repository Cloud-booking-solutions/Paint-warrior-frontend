import { Link } from "react-router-dom";
import HomeSlider from "../component/HomeSlider";
import WhyChooseUs from "../component/WhyChooseUs";
import OurServices from "../component/OurServices";
import ServicePartner from "../component/ServicePartner";
import ServiceArea from "../component/ServiceArea";
import ClientReviews from "../component/ClientReview";

const Home = () => {
  return (
    <div className="text- py-10 ">
      <HomeSlider />

     
      <div className="w-full px-10 py-2 pb-4 text-center bg-gradient-to-r from-white via-orange-100 to-yellow-200 shadow-md">
  {/* Title */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
    Welcome to Paint Warrior
  </h1>

  {/* Subtitle */}
  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4 font-medium">
    Transforming Walls with Colors!
  </p>
</div>
<div className=" mt-0">
<OurServices/>
</div>
      <WhyChooseUs />
      <div className=" mt-5">
     <ServiceArea/>
     </div>
     <ClientReviews/>
      <ServicePartner/>
    </div>
  );
};

export default Home;
