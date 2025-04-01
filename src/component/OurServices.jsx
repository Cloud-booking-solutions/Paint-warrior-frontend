import React from "react";

const services = [
  {
    id: 1,
    title: "Interior Painting",
    description: "Enhance your home's beauty with high-quality interior painting in PCMC & Pune. Professional finish for elegance.",
    image: "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg",
  },
  {
    id: 2,
    title: "Exterior Painting",
    description: "Protect and refresh your property with expert exterior painting in Pimpri-Chinchwad & Pune. Weather-resistant.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNEpfcnDaDkFuCcGXk2IpwsVK_M1tC1WnEw&s",
  },
  {
    id: 3,
    title: "Commercial Painting",
    description: "Premium painting for offices, shops, and commercial spaces in PCMC & Pune. Efficient service.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezlscMXvx-Oobw8afvfDUjKlIToixmiGv7Q&s",
  },
  {
    id: 4,
    title: "Residential Painting",
    description: "Transform your home with expert residential painting in PCMC, Wakad & Pune. Long-lasting results.",
    image: "https://yespainter.com/wp-content/uploads/2017/03/exteriors-on-indian-home-design-modern-exterior-and-exterior-home-painting-pictures-kerala-min.jpg",
  },
  {
    id: 5,
    title: "Wallpaper Installation",
    description: "Stylish wallpaper installation for homes and offices in PCMC & Pune. Elegant designs for modern and classic interiors.",
    image: "https://i.ytimg.com/vi/OtIoHBGI3W0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBGcf4JJxy_26UHzVVDWuxYabojmg",
  },
];




const OurServices = () => {
  return (
    <section className="py-4 pb-8 bg-gray-100 mt-3">
      <div className="w-full mx-auto px-6">
        {/* Section Heading */}
        <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-4 ">
          Our Services
        </h2>
        <p className="text-blue-900 text-sm md:text-md lg:text-lg pb-4 text-center leading-relaxed">
          At <strong>Paint Warrior</strong>, we offer top-tier <strong>residential, commercial, and industrial painting services</strong> in <strong>Pune and PCMC</strong>,
          specializing in <strong>interior and exterior painting, waterproofing, texture finishes, and protective coatings</strong>. Located at <strong>D4, Near Nexa Showroom, Baner Road, Sakal Nagar, Aundh, Pune, MH-411007</strong>,
          we ensure high-quality, durable, and aesthetically pleasing paintwork tailored to your needs. Whether you're looking for <strong>wall painting, home renovation, office painting, or industrial coating solutions</strong>,
          Paint Warrior guarantees expert craftsmanship, premium materials, and long-lasting results. Transform your space with Pune’s trusted painting professionals!
        </p>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-2 text-center flex flex-col items-center transition transform duration-300 hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-2 h-36 w-full object-cover rounded-md"
              />
              <h3 className="text-lg lg:text-xl font-bold text-blue-900">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
