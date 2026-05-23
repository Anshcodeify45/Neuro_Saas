import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Users from "./components/dashboard/User";
import Analytics from "./components/dashboard/Analytics";
import Settings from "./components/dashboard/Settings";

import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LANDING PAGE */}
        <Route path="/" element={<Home />} />

        {/* DASHBOARD LAYOUT WRAPPER */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* DEFAULT DASHBOARD PAGE */}
          <Route index element={<Dashboard />} />

          {/* INNER PAGES */}
          <Route path="users" element={<Users />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;