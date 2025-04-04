import { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const fetchMedia = () => {
    axios
      .get("https://paint-warrior-backend.onrender.com/api/media")
      .then((response) => {
        setMedia(response.data);
      })
      .catch((error) => {
        console.error("❌ Error fetching media:", error);
      });
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleMediaClick = (mediaItem) => {
    setSelectedMedia(mediaItem);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="p-4 mt-20 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>

      {media.length === 0 ? (
        <p className="text-center text-gray-600">No media found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item) => {
            const isVideo = /\.(mp4|mov|avi)$/i.test(item.filename);

            return (
              <div
                key={item._id}
                className="border-2 border-yellow-500 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => handleMediaClick(item)}
              >
                {isVideo ? (
                  <video
                    src={`https://paint-warrior-backend.onrender.com/uploads/${item.filename}`}
                    className="w-full h-48 object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={`https://paint-warrior-backend.onrender.com/uploads/${item.filename}`}
                    alt="Uploaded"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white w-full max-w-3xl max-h-[90vh] p-4 rounded shadow-xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-800 hover:text-red-600"
              onClick={closeModal}
            >
              &times;
            </button>

            {/\.(mp4|mov|avi)$/i.test(selectedMedia.filename) ? (
              <video
                src={`https://paint-warrior-backend.onrender.com/uploads/${selectedMedia.filename}`}
                className="w-full max-h-[75vh] object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={`https://paint-warrior-backend.onrender.com/uploads/${selectedMedia.filename}`}
                alt="Selected"
                className="w-full max-h-[75vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
