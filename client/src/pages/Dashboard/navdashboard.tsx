import { Bell, Search, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function NavDashBoard() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow px-6 py-3 flex justify-between items-center">
      {/* Left: Page Title */}
      <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200">Dashboard</h1>

      {/* Right: Search + Notifications + Profile + Dark Mode Toggle */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 pl-10 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <span className="absolute left-2 top-1.5 text-gray-400 dark:text-gray-300">
            <Search size={20} />
          </span>
        </div>

        {/* Notifications */}
        <button className="relative hover:text-yellow-500 transition text-gray-700 dark:text-gray-200">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded hover:text-yellow-400 dark:hover: bg-white transition"
        >
          {darkMode ? <Sun size={25} /> : <Moon size={25} />}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded transition">
          <img
            src="https://via.placeholder.com/32"
            alt="Admin"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600 dark:text-gray-200 font-medium">Admin</span>
        </div>
      </div>
    </nav>
  );
}
