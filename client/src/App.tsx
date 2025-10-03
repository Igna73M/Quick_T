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
          <Route path='/' element={<DashBoardLayoutHandle />}>
            <Route index element={<DashBoard />} />
            <Route path='buses' element={<Buses />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='analytics' element={<Analytics />} />
          </Route>
          <Route path='home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
