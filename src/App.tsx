import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
