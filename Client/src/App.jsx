import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/dashboard/Layout";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Dashboard from "./pages/dashboard/dashPage/Dashboard";
import Users from "./pages/dashboard/dashPage/Users";
import UserLeads from "./pages/dashboard/dashPage/UserLeads";
import AdminAuth from "./pages/AdminAuth";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />


      {/* 🔥 Root redirect */}
      <Route path="/" element={<Navigate to="/" replace />} />

      {/* 🔓 Public Route */}
      <Route path="/admin/login" element={<AdminAuth />} />

      {/* 🔐 Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        {/* Default */}
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="leads" element={<UserLeads />} />
        <Route path="admin" element={<Navigate to="/dashboard" replace />} />
      </Route>

      {/* ❌ Unknown route */}
      <Route path="*" element={<Navigate to="/admin/login" />} />

    </Routes>
  );
}

export default App;