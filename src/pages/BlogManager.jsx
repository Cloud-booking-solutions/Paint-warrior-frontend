import React, { useEffect, useState } from "react";
import axios from "axios";
import AddBlog from "../component/AddBlog";
import UpdateBlog from "../component/UpdateBlog";
import DeleteBlog from "../component/DeleteBlog";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(blogs);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://paint-warrior-backend.onrender.com/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 w-full">
      <div className="w-full mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          📖 Blog Manager
        </h1>

        {/* Add Blog Section */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow">
          <AddBlog onUploadSuccess={fetchBlogs} />
        </div>

        {/* Blog List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                key={blog._id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-transform transform "
              >
                {/* Blog Image */}
                {blog.image && (
                  <img src={`https://paint-warrior-backend.onrender.com${blog.image}`} className="w-full h-48 object-cover" />

                )}

                {/* Blog Content */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-md line-clamp-3">
                  {blog.content}
                </p>

                {/* Blog Actions */}
                <div className="mt-4 flex space-x-3">
                  <button className="px-5 py-2 rounded-md transition duration-300">
                    <UpdateBlog
                      index={index}
                      blogs={blogs}
                      setBlogs={setBlogs}
                    />
                  </button>
                  <button className="px-5 py-2 rounded-md transition duration-300">
                    <DeleteBlog
                      index={index}
                      blogs={blogs}
                      setBlogs={setBlogs}
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No blogs available. Start by adding one! 😊
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
