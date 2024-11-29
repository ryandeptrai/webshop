import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import ProtectedRoute from "./Component/ProtectedRoute"; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, protectedRoute }, index) => (
          <Route
            key={index}
            path={path}
            element={
              protectedRoute ? <ProtectedRoute element={element} /> : element
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
