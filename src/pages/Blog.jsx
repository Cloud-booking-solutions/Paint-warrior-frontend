import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch("https://paint-warrior-backend.onrender.com/api/blogs") // Fetch blogs from backend
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-16">
        Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Blog Image */}
            <img
              src={`https://paint-warrior-backend.onrender.com${blog.image}`}
              className="w-full"
            />

            {/* Blog Content */}
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 line-clamp-3">{blog.content}</p>
              <p className="text-sm text-gray-500 mt-3">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
