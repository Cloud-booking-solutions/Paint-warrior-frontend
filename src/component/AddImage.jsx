import React from "react";
import axios from "axios";

const AddMedia = ({ onUploadSuccess }) => {
  const handleUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*,video/*"; // Accept both images & videos
    
    fileInput.onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file); // Matches backend field name

      try {
        await axios.post("https://paint-warrior-backend.onrender.com/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        onUploadSuccess();
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };

    fileInput.click();
  };

  return (
    <button
      onClick={handleUpload}
      className="bg-green-500 text-white px-4 py-2 rounded mb-4"
    >
      Add Media (Image/Video)
    </button>
  );
};

export default AddMedia;
