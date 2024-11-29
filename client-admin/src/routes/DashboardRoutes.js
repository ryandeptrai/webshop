import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../component/ProtectedRoute";
import Dashboard from "../Component/Auth/Dashboard";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default DashboardRoutes;
