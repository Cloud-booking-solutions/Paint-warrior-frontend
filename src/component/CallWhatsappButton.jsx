import { PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";


const CallWhatsAppButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
      {/* Call Button */}
      <a
        href="tel:+917709409997"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
      >
        <PhoneCall size={24} />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917709409997"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      >
        <BsWhatsapp size={24}/>
      </a>
    </div>
  );
};

export default CallWhatsAppButtons;
