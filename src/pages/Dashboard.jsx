import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center p-6">
      {/* <h1 className="text-4xl font-bold mb-6 text-yellow-400">Admin Dashboard</h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/images")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          style={{ width: "200px", height: "60px", fontSize: "18px" }}
        >
          Manage Images
        </button>

        <button
          onClick={() => navigate("/blogs")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
          style={{ width: "200px", height: "60px", fontSize: "18px" }}
        >
          Manage Blogs
        </button>
      </div> */}
    </div>
  );
}
