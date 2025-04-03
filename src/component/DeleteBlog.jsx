import React from "react";
import axios from "axios";

export default function DeleteBlog({ index, blogs, setBlogs }) {
  const handleDeleteBlog = async () => {
    const blogId = blogs[index]?._id;
    if (!blogId) return;

    try {
      await axios.delete(`https://paint-warrior-backend.onrender.com/api/blogs/${blogId}`);
      setBlogs((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={handleDeleteBlog}>Delete</button>;
}