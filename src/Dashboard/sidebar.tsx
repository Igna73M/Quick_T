import { NavLink } from "react-router-dom";
import { BusFront, PhoneCall, Presentation, LayoutDashboard, LogOut } from "lucide-react";

export function SiderBar() {
  return (
    <div className="w-64 h-screen bg-yellow-500 flex flex-col p-4 opacity-90">
      {/* Logo / App Name */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Quick-T Admin</h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded text-white ${
              isActive ? "bg-black" : "hover:bg-black"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/buses"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded text-white ${
              isActive ? "bg-black" : "hover:bg-black"
            }`
          }
        >
          <BusFront size={20} />
          Buses
        </NavLink>

        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded text-white ${
              isActive ? "bg-black" : "hover:bg-black"
            }`
          }
        >
          <PhoneCall size={20} />
          Bookings
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded text-white ${
              isActive ? "bg-black" : "hover:bg-black"
            }`
          }
        >
          <Presentation size={20} />
          Analytics
        </NavLink>
      </nav>

      {/* Logout button */}
      <div>
        <button className="flex items-center gap-2 w-[10rem] bg-white  border-2 border-black text-red-600 font-semibold py-2 rounded hover:bg-black hover:border-2 hover:border-white">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
