import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteImage from "../component/DeleteImage";
import UpdateImage from "../component/UpdateImage";
import AddImage from "../component/AddImage";

const ImageManager = () => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState("image"); // Default to images

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await axios.get("https://paint-warrior-backend.onrender.com/api/media");
      console.log("Fetched media:", response.data);
      if (Array.isArray(response.data)) {
        setMedia(response.data);
      } else {
        console.error("Unexpected API response format", response.data);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const handleMediaClick = (mediaItem) => {
    if (mediaItem) {
      setSelectedMedia(mediaItem);
    }
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">
        Image & Video Manager
      </h1>

      {/* Upload Button */}
      <div className="mb-6">
        <AddImage onUploadSuccess={fetchMedia} />
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            mediaType === "image" ? "bg-yellow-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setMediaType("image")}
        >
          Images
        </button>
        <button
          className={`px-4 py-2 rounded ${
            mediaType === "video" ? "bg-yellow-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setMediaType("video")}
        >
          Videos
        </button>
      </div>

      {/* Media Grid */}
      {media.length === 0 ? (
        <p className="text-gray-400">No media found</p>
      ) : (
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {media
              .filter((item) =>
                mediaType === "image"
                  ? !/\.(mp4|mov|avi)$/i.test(item.filename)
                  : /\.(mp4|mov|avi)$/i.test(item.filename)
              )
              .map((item) => (
                <div
                  key={item._id}
                  className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => handleMediaClick(item)}
                  >
                    {mediaType === "video" ? (
                      <video
                        src={`https://paint-warrior-backend.onrender.com/${item.path}`}
                        className="w-full h-48 object-cover rounded-lg"
                        controls
                      />
                    ) : (
                      <img
                        src={`https://paint-warrior-backend.onrender.com/${item.path}`}
                        alt="Uploaded"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <UpdateImage
                      mediaId={item._id}
                      images={media}
                      setImages={setMedia}
                    />
                    <DeleteImage mediaId={item._id} setImages={setMedia} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Modal for Media Preview */}
      {selectedMedia && selectedMedia.filename && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <button
            className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={closeModal}
          >
            Close
          </button>
          <div
            className="bg-white p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/\.(mp4|mov|avi)$/i.test(selectedMedia.filename) ? (
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

export default ImageManager;
