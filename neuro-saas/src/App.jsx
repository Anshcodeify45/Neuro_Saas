import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Users from "./components/dashboard/User";
import Analytics from "./components/dashboard/Analytics";
import Settings from "./components/dashboard/Settings";

import DashboardLayout from "./pages/DashboardLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/dashboard/Profile";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-950">
      <BrowserRouter>
        <Routes>

          {/* LANDING PAGE */}
          <Route
            path="/"
            element={
              <div className="w-full overflow-x-hidden">
                <Home />
              </div>
            }
          />

          {/* REGISTER PAGE */}
          <Route
            path="/register"
            element={
              <div className="w-full min-h-screen overflow-x-hidden">
                <Register />
              </div>
            }
          />

          {/* LOGIN PAGE */}
          <Route
            path="/login"
            element={
              <div className="w-full min-h-screen overflow-x-hidden">
                <Login />
              </div>
            }
          />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="w-full min-h-screen overflow-hidden">
                  <DashboardLayout />
                </div>
              </ProtectedRoute>
            }
          >
            {/* DEFAULT DASHBOARD PAGE */}
            <Route index element={<Dashboard />} />

            {/* INNER PAGES */}
            <Route
              path="profile"
              element={<Profile />}
            />

            <Route
              path="users"
              element={<Users />}
            />

            <Route
              path="analytics"
              element={<Analytics />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;