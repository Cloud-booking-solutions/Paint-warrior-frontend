import { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState("image"); // Default: Show images

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
    <div className="p-5 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center pt-[5px]">Gallery</h2>

      {/* Buttons to switch between Images and Videos */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${mediaType === "image" ? "bg-yellow-500 text-white" : "bg-gray-300"}`}
          onClick={() => setMediaType("image")}
        >
          Images
        </button>
        <button
          className={`px-4 py-2 rounded ${mediaType === "video" ? "bg-yellow-500 text-white" : "bg-gray-300"}`}
          onClick={() => setMediaType("video")}
        >
          Videos
        </button>
      </div>

      {media.length === 0 ? (
        <p>No media found</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {media
            .filter((item) =>
              mediaType === "image"
                ? !item.filename.endsWith(".mp4") &&
                  !item.filename.endsWith(".mov") &&
                  !item.filename.endsWith(".avi")
                : item.filename.endsWith(".mp4") ||
                  item.filename.endsWith(".mov") ||
                  item.filename.endsWith(".avi")
            )
            .map((item) => (
              <div
                key={item._id}
                className="border-2 border-yellow-500 rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
                onClick={() => handleMediaClick(item)}
              >
                {mediaType === "video" ? (
                  <video
                    src={`https://paint-warrior-backend.onrender.com/${item.path}`}
                    className="w-[500px] h-[300px] p-2"
                    controls
                  />
                ) : (
                  <img
                    src={`https://paint-warrior-backend.onrender.com/${item.path}`}
                    alt={item.filename || "Uploaded Image"}
                    className="w-[350px] h-[250px] p-2"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
        </div>
      )}

      {selectedMedia && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          {/* Close Button Positioned Above */}
          <button
            className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={closeModal}
          >
            Close
          </button>

          {/* Media Container */}
          <div
            className="bg-white p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.filename.endsWith(".mp4") ||
            selectedMedia.filename.endsWith(".mov") ||
            selectedMedia.filename.endsWith(".avi") ? (
              <video
                src={`https://paint-warrior-backend.onrender.com/${selectedMedia.path}`}
                className="w-[500px] h-[400px]"
                controls
                autoPlay
              />
            ) : (
              <img
                src={`https://paint-warrior-backend.onrender.com/${selectedMedia.path}`}
                alt={selectedMedia.filename || "Selected Media"}
                className="w-[600px] h-[350px]"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
