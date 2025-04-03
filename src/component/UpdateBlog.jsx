import React, { useState } from "react";
import axios from "axios";

export default function UpdateBlog({ index, blogs, setBlogs }) {
  const [newTitle, setNewTitle] = useState(blogs[index].title);
  const [newContent, setNewContent] = useState(blogs[index].content);
  const [newImage, setNewImage] = useState(null);

  const handleUpdateBlog = async () => {
    const blogId = blogs[index]?._id;
    if (!blogId) return;

    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("content", newContent);
    if (newImage) {
      formData.append("image", newImage);
    }

    try {
      const response = await axios.put(
        `https://paint-warrior-backend.onrender.com/api/blogs/${blogId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setBlogs((prev) =>
        prev.map((blog, i) => (i === index ? response.data : blog))
      );
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-500 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Blog</h2>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2"
        placeholder="Enter blog title"
      />
      <textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 mb-3 h-32 resize-none focus:outline-none focus:ring-2"
        placeholder="Enter blog content"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewImage(e.target.files[0])}
        className="w-full mb-3"
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        onClick={handleUpdateBlog}
      >
        Update Blog
      </button>
    </div>
  );
}
