import { Outlet } from "react-router-dom";
import { SiderBar } from "./sidebar";
import { NavDashBoard } from "./navdashboard";

function DashBoardLayoutHandle() {
  return (
    <div className="flex h-screen">
      <SiderBar />
      <div className="flex flex-col flex-1">
        <NavDashBoard />
        <main className="flex-1 p-4 bg-white border-2 border-amber-400">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashBoardLayoutHandle;
