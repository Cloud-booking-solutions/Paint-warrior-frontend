import { useState, useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import ImageManager from "../pages/ImageManager";
import BlogManager from "../pages/BlogManager";

export default function Admin() {
  const ADMIN_CREDENTIALS = { username: "admin", password: "admin" };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState("dashboard");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); 
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
    localStorage.removeItem("isLoggedIn"); 
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-96">
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">Admin Login</h2>
          
          {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
          
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // Show Admin Panel after successful login
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">Admin Panel</h1>

      <div className="flex gap-6 mb-6">
        <button onClick={() => setView("images")} className="bg-green-500 px-6 py-2 rounded">Manage Media</button>
        <button onClick={() => setView("blogs")} className="bg-purple-500 px-6 py-2 rounded">Manage Blogs</button>
        <button onClick={handleLogout} className="bg-red-500 px-6 py-2 rounded">Logout</button>
      </div>

      {view === "dashboard" && <Dashboard setView={setView} />}
      {view === "images" && <ImageManager />}
      {view === "blogs" && <BlogManager />}
    </div>
  );
}
