import React from "react";

const features = [
  {
    id: 1,
    title: "High-Quality Paints & Materials",
    description:
      "We use premium quality paints and materials for a long-lasting finish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPS8OyfuKcPhrFkzZd6F6RMven9z5vqHQEA&s", // Replace with actual icon/image
  },
  {
    id: 2,
    title: "Experienced & Professional Team",
    description:
      "Our expert team ensures top-notch service with years of experience.",
    image: "https://thumbs.dreamstime.com/b/abstract-painting-soccer-team-running-ball-colorful-dynamic-sports-artwork-346538700.jpg", // Replace with actual icon/image
  },
  {
    id: 3,
    title: "Affordable Pricing & Transparent Quotes",
    description:
      "We offer competitive pricing with clear and honest cost estimates.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WuSFSBf92cSZLkrWiYZLzA1kUHDW_v6_3g&s", // Replace with actual icon/image
  },
  {
    id: 4,
    title: "On-Time Project Completion",
    description:
      "We value your time and ensure projects are completed as scheduled.",
    image: "https://t3.ftcdn.net/jpg/09/58/19/74/360_F_958197450_AQ0hG1lauSMdF9mOmXngNh5KY6ZvavWU.jpg", // Replace with actual icon/image
  },
  {
    id: 5,
    title: "Eco-Friendly & Safe Paints",
    description:
      "We use non-toxic, eco-friendly paints that are safe for you and your family.",
    image: "https://harmonypaintingdenver.com/wp-content/uploads/2023/12/Eco-Friendly-Paint.jpg", // Replace with actual icon/image
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-0 pb-8 bg-gray-100 mt-5">
      <div className="w-full mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent mb-3  py-3">
          Why Choose Us
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-sm p-2 text-center flex flex-col items-center transition transform duration-300 hover:scale-105"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto mb-4 h-36 object-cover bg-gray-200 rounded-md"
              />
              <h3 className="text-xl font-bold text-blue-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
