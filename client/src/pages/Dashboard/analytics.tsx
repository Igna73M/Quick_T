import { useState } from "react";

function Analytics() {
  const [dateRange, setDateRange] = useState("today");
  const [busPark, setBusPark] = useState("");
  const [route, setRoute] = useState("");
  const [appliedFilters, setAppliedFilters] = useState({ dateRange, busPark, route });

  const busParks = ["Kimironko", "Nyabugogo", "Remera"];
  const routes = ["Kimironko → Nyabugogo", "Remera → Kigali City", "Nyabugogo → Remera"];

  const applyFilters = () => {
    setAppliedFilters({ dateRange, busPark, route });
  };

  return (
    <div className="p-4 dark:text-gray-200">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        View system statistics, popular routes, and booking trends.
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4 items-start md:items-center">
        <select
          className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="thisMonth">This Month</option>
        </select>

        <select
          className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={busPark}
          onChange={(e) => setBusPark(e.target.value)}
        >
          <option value="">All Bus Parks</option>
          {busParks.map((park) => (
            <option key={park} value={park}>{park}</option>
          ))}
        </select>

        <select
          className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        >
          <option value="">All Routes</option>
          {routes.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <button
          className="px-4 py-1 bg-yellow-400 dark:bg-yellow-400 text-white dark:text-gray-900 rounded hover:bg-yellow-600 dark:hover:bg-yellow-300 transition"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border-2 border-black dark:bg-gray-800 shadow rounded p-4 h-64 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">
            [Bookings Over Time - {appliedFilters.dateRange}, {appliedFilters.busPark || "All Parks"}, {appliedFilters.route || "All Routes"}]
          </span>
        </div>
        <div className="bg-white border-2 border-black dark:bg-gray-800 shadow rounded p-4 h-64 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">
            [Popular Routes - {appliedFilters.dateRange}, {appliedFilters.busPark || "All Parks"}, {appliedFilters.route || "All Routes"}]
          </span>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
