import React from "react";
import { MapPin } from "lucide-react";

const serviceAreas = [
  ["Punawale", "Kalyani Nagar", "Hinjewadi", "Pimple Saudagar","Kharadi"],
  ["Tathawade", "Pashan", "Baner", "Kivale", "Pune" ],
  ["Koregaon Park", "Wakad", "Ravet", "Chinchwad", "And Many More"]
];

const ServiceArea = () => {
  return (
    <section className="py-5 pb-10 bg-gray-100 text-center mx-4">
      <h2 className="text-4xl font-bold text-orange-400 ">
        We Provide Our Professional Services In The Areas Of
      </h2>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {serviceAreas.map((column, index) => (
          <div key={index} className="space-y-4 ">
            {column.map((area, idx) => (
              <div key={idx} className="flex items-center justify-center bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition">
                <MapPin size={20} className="mr-2" /> {area}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceArea;
