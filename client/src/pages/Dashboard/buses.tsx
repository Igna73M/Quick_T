import { useState } from "react";
import { Pen, Trash, Bus, Plus } from "lucide-react";

function Buses() {
  const [buses, setBuses] = useState([
    {
      id: 101,
      route: "Kimironko → Nyabugogo",
      departure: "09:00 AM",
      seats: 45,
      plate: "RAB 123 A",
      busPark: "Kimironko",
    },
  ]);

  const [newBus, setNewBus] = useState({
    route: "",
    departure: "",
    seats: 45,
    plate: "",
    busPark: "",
  });

  const handleAddBus = () => {
    if (!newBus.plate || !newBus.departure || !newBus.busPark) return;
    const id = buses.length ? buses[buses.length - 1].id + 1 : 1;
    setBuses([...buses, { ...newBus, id }]);
    setNewBus({ route: "", departure: "", seats: 45, plate: "", busPark: "" });
  };

  return (
    <div className='p-4 dark:text-gray-200'>
      <h2 className='text-2xl font-bold mb-4'>Buses Management</h2>
      <p className='text-gray-600 dark:text-gray-400 mb-4'>
        Here you can add, edit, or remove buses.
      </p>

      {/* Add Bus Form */}
      <div className='bg-white dark:bg-gray-800 shadow rounded p-4 mb-6'>
        <h3 className='text-lg font-bold mb-3'></h3>
        <div className='flex flex-col md:flex-row gap-4'>
          <input
            type='text'
            placeholder='Bus Plate Number'
            className='border rounded px-2 py-1 flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600'
            value={newBus.plate}
            onChange={(e) => setNewBus({ ...newBus, plate: e.target.value })}
          />
          <input
            type='text'
            placeholder='Bus Park Name'
            className='border rounded px-2 py-1 flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600'
            value={newBus.busPark}
            onChange={(e) => setNewBus({ ...newBus, busPark: e.target.value })}
          />
          <input
            type='time'
            className='border rounded px-2 py-1 flex-1 dark:bg-gray-700 dark:text-white dark:border-gray-600'
            value={newBus.departure}
            onChange={(e) =>
              setNewBus({ ...newBus, departure: e.target.value })
            }
          />
          <button
            onClick={handleAddBus}
            className='px-3 py-1 bg-yellow-400 text-white rounded hover:bg-black transition flex items-center gap-2'
          >
            <Plus size={16} />
            <Bus size={20} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Bus List Table */}
      <div className='bg-white dark:bg-gray-800 shadow rounded p-4 overflow-x-auto'>
        <h3 className='text-lg font-bold mb-3'>Bus List</h3>
        <table className='w-full border-collapse min-w-[600px]'>
          <thead>
            <tr className='bg-gray-100 dark:bg-gray-700 text-left'>
              <th className='p-2 border dark:border-gray-600'>Bus ID</th>
              <th className='p-2 border dark:border-gray-600'>Bus Plate</th>
              <th className='p-2 border dark:border-gray-600'>Bus Park</th>
              <th className='p-2 border dark:border-gray-600'>Route</th>
              <th className='p-2 border dark:border-gray-600'>Departure</th>
              <th className='p-2 border dark:border-gray-600'>Seats</th>
              <th className='p-2 border dark:border-gray-600'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr
                key={bus.id}
                className='hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <td className='p-2 border dark:border-gray-600'>{bus.id}</td>
                <td className='p-2 border dark:border-gray-600'>{bus.plate}</td>
                <td className='p-2 border dark:border-gray-600'>
                  {bus.busPark}
                </td>
                <td className='p-2 border dark:border-gray-600 flex items-center gap-1'>
                  {bus.route} <Bus size={16} />
                </td>
                <td className='p-2 border dark:border-gray-600'>
                  {bus.departure}
                </td>
                <td className='p-2 border dark:border-gray-600'>{bus.seats}</td>
                <td className='p-2 border dark:border-gray-600 py-3 flex gap-2'>
                  <button className='px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
                    <Pen size={20} />
                  </button>
                  <button className='px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition'>
                    <Trash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Buses;
