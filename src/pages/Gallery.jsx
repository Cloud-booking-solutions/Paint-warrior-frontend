import { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const fetchMedia = () => {
    axios
      .get("https://paint-warrior-backend.onrender.com/api/media")
      .then((response) => {
        console.log("✅ Media from API:", response.data);
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
    <div className="p-5 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center pt-[5px]">Gallery</h2>

      {media.length === 0 ? (
        <p className="text-center text-gray-600">No media found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item) => {
            const isVideo =
              item.filename.endsWith(".mp4") ||
              item.filename.endsWith(".mov") ||
              item.filename.endsWith(".avi");

            return (
              <div
                key={item._id}
                className="border-2 border-yellow-500 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleMediaClick(item)}
              >
                {isVideo ? (
                  <video
                    src={`https://paint-warrior-backend.onrender.com/uploads/${item.filename}`}
                    className="w-full h-48 object-cover p-2"
                    controls
                  />
                ) : (
                  <img
                    src={`https://paint-warrior-backend.onrender.com/uploads/${item.filename}`}
                    alt={item.filename || "Uploaded Image"}
                    className="w-full h-48 object-cover p-2"
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
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white max-w-full max-h-full p-4 rounded shadow-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            {selectedMedia.filename.endsWith(".mp4") ||
            selectedMedia.filename.endsWith(".mov") ||
            selectedMedia.filename.endsWith(".avi") ? (
              <video
                src={`https://paint-warrior-backend.onrender.com/uploads/${selectedMedia.filename}`}
                className="w-full max-h-[80vh] rounded"
                controls
                autoPlay
              />
            ) : (
              <img
                src={`https://paint-warrior-backend.onrender.com/uploads/${selectedMedia.filename}`}
                alt={selectedMedia.filename || "Selected Media"}
                className="w-full max-h-[80vh] object-contain rounded"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
