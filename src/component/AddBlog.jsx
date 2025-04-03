import React, { useState } from "react";
import axios from "axios";
import { FiUpload } from "react-icons/fi";

const AddBlog = ({ onUploadSuccess }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const response = await axios.post("https://paint-warrior-backend.onrender.com/api/blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response:", response.data);

      onUploadSuccess();
      setTitle("");
      setContent("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error adding blog:", error.response?.data || error.message);
      setError("Failed to upload. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white text-black shadow-lg rounded-xl p-6 mt-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add New Blog</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title"
        autoComplete="off"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 transition placeholder-gray-500"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your content here..."
        autoComplete="off"
        rows="4"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3 transition placeholder-gray-500"
      />

      <label className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition">
        <FiUpload className="text-blue-500 text-xl mr-2" />
        <span className="text-gray-600">Upload Image</span>
        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
      </label>

      {preview && (
        <div className="mt-3">
          <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-lg shadow" />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`w-full ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white font-semibold py-3 rounded-lg mt-4 transition`}
      >
        {loading ? "Publishing..." : "Publish Blog"}
      </button>
    </div>
  );
};

export default AddBlog;
