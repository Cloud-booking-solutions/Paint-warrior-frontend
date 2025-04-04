import { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState("image");

  const fetchMedia = () => {
    axios
      .get("https://paint-warrior-backend.onrender.com/api/media")
      .then((response) => {
        console.log(`✅ Received ${response.data.length} media files from DB`);
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
    <div className="p-5 mt-20 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Gallery</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            mediaType === "image"
              ? "bg-yellow-500 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setMediaType("image")}
        >
          Images
        </button>
        <button
          className={`px-4 py-2 rounded ${
            mediaType === "video"
              ? "bg-yellow-500 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setMediaType("video")}
        >
          Videos
        </button>
      </div>

      {/* Media Grid */}
      {media.length === 0 ? (
        <p className="text-center">No media found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media
            .filter((item) =>
              mediaType === "image"
                ? !/\.(mp4|mov|avi)$/i.test(item.filename)
                : /\.(mp4|mov|avi)$/i.test(item.filename)
            )
            .map((item) => (
              <div
                key={item._id}
                className="border-2 border-yellow-500 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleMediaClick(item)}
              >
                {mediaType === "video" ? (
                  <video
                    src={`https://paint-warrior-backend.onrender.com/${item.path}`}
                    className="w-full h-48 object-cover"
                    controls
                  />
                ) : (
                  <img
                    src={`https://paint-warrior-backend.onrender.com/${item.path}`}
                    alt={item.filename || "Uploaded Image"}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
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
                src={`https://paint-warrior-backend.onrender.com/${selectedMedia.path}`}
                className="w-full max-h-[75vh] object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={`https://paint-warrior-backend.onrender.com/${selectedMedia.path}`}
                alt={selectedMedia.filename || "Selected Media"}
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
