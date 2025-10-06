import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardLayoutHandle from "./pages/Dashboard/dashboardlayout";
import DashBoard from "./pages/Dashboard/dashboard";
import Buses from "./pages/Dashboard/buses";
import Bookings from "./pages/Dashboard/bookings";
import Analytics from "./pages/Dashboard/analytics";
import HomePage from "./pages/Transport/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashBoardLayoutHandle />}>
            <Route index element={<DashBoard />} />
            <Route path='/dashboard/buses' element={<Buses />} />
            <Route path='/dashboard/bookings' element={<Bookings />} />
            <Route path='/dashboard/analytics' element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
