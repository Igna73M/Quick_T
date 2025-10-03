function Bookings() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Bookings</h2>
      <p className="text-gray-600 mb-4">
        Manage and track customer bookings here.
      </p>

      {/* Placeholder Table */}
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
              <td className="p-2 border">Alice</td>
              <td className="p-2 border">Bus 201</td>
              <td className="p-2 border">2025-10-02</td>
              <td className="p-2 border text-green-600">Confirmed</td>
            </tr>
            <tr>
              <td className="p-2 border">Bob</td>
              <td className="p-2 border">Bus 305</td>
              <td className="p-2 border">2025-10-03</td>
              <td className="p-2 border text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
