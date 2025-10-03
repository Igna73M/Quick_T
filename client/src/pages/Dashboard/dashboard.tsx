 
 
function DashBoard() {
  return (
    <div className="p-4">
      {/* Page Title */}
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Total Buses</h3>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Bookings</h3>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Routes</h3>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Users</h3>
          <p className="text-2xl font-bold">80</p>
        </div>
      </div>

      {/* Recent Bookings (Placeholder Table) */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-bold mb-3">Recent Bookings</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Bus</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">John Doe</td>
              <td className="p-2 border">Bus 101</td>
              <td className="p-2 border">2025-10-02</td>
              <td className="p-2 border text-green-600">Confirmed</td>
            </tr>
            <tr>
              <td className="p-2 border">Jane Smith</td>
              <td className="p-2 border">Bus 203</td>
              <td className="p-2 border">2025-10-01</td>
              <td className="p-2 border text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashBoard;
