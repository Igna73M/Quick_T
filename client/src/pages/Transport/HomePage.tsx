import { useState } from "react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<"today" | "parks" | "routes">(
    "today"
  );

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Hero Section */}
      <section className='bg-gray-100 flex-1 flex flex-col items-center justify-center text-center p-8'>
        <h2 className='text-4xl font-extrabold text-gray-900 mb-4'>
          Manage Your Trips, Save Time
        </h2>
        <p className='text-lg text-gray-600 mb-6 max-w-2xl'>
          Quick_T helps you track buses, plan routes, and never miss your ride
          again.
        </p>
        <div className='space-x-4'>
          <button className='px-6 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800'>
            Get Started
          </button>
          <button className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300'>
            Check Routes
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-12 px-6 bg-white'>
        <h3 className='text-2xl font-bold text-center mb-8'>Why Quick_T?</h3>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          <div className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-md'>
            <h4 className='font-semibold mb-2'>🚍 Real-time Tracking</h4>
            <p className='text-sm text-gray-600'>
              Always know where your bus is in real time.
            </p>
          </div>
          <div className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-md'>
            <h4 className='font-semibold mb-2'>📅 Smart Scheduling</h4>
            <p className='text-sm text-gray-600'>
              Plan and manage your trips efficiently.
            </p>
          </div>
          <div className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-md'>
            <h4 className='font-semibold mb-2'>⭐ Quality Service</h4>
            <p className='text-sm text-gray-600'>
              Improve passenger experience with better management.
            </p>
          </div>
          <div className='p-6 bg-gray-50 rounded-xl shadow hover:shadow-md'>
            <h4 className='font-semibold mb-2'>🛠️ Admin Dashboard</h4>
            <p className='text-sm text-gray-600'>
              Manage parks, timelines, and routes easily.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className='py-12 px-6 bg-gray-100'>
        <h3 className='text-2xl font-bold text-center mb-6'>Explore</h3>
        <div className='flex justify-center space-x-4 mb-6'>
          <button
            onClick={() => setActiveTab("today")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "today"
                ? "bg-blue-700 text-white"
                : "bg-white border"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setActiveTab("parks")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "parks"
                ? "bg-blue-700 text-white"
                : "bg-white border"
            }`}
          >
            Parks
          </button>
          <button
            onClick={() => setActiveTab("routes")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "routes"
                ? "bg-blue-700 text-white"
                : "bg-white border"
            }`}
          >
            Routes
          </button>
        </div>

        <div className='max-w-3xl mx-auto text-center bg-white p-6 rounded-lg shadow'>
          {activeTab === "today" && (
            <p>🚍 Today’s available trips and schedules will appear here.</p>
          )}
          {activeTab === "parks" && <p>🅿️ List of parks and terminals.</p>}
          {activeTab === "routes" && <p>🗺️ Available routes and maps.</p>}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
