import { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);


  const fetchImages = () => {
    axios.getaxios.get("https://paint-warrior-server.onrender.com/api/images")
      .then((response) => {
        console.log(`✅ Received ${response.data.length} images from DB`);
        setImages(response.data);
      })
      .catch((error) => {
        console.error("❌ Error fetching images:", error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-5 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center pt-[5px]">Gallery</h2>

      
      {images.length === 0 ? (
        <p>No images found</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image) => (
            <div 
              key={image._id} 
              className="border-2 border-yellow-500 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img 
                src={`http://localhost:5000/${image.path}`} 
                alt={image.filename || "Uploaded Image"} 
                className="w-full h-full p-4 object-cover" 
              />
            </div>
          ))}
        </div>
      )}

     
      {selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-white p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={`http://localhost:5000/${selectedImage.path}`} 
              alt={selectedImage.filename || "Selected Image"} 
              style={{
                width: "100%",  
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
