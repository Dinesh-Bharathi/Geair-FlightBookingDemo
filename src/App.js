import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NoPage from "./components/pages/NoPage";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Box>
  );
}

export default App;
