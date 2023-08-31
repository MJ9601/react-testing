import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack width="96vw">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
