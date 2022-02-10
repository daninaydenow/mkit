import "./App.css";

import { Route, Routes } from "react-router-dom";

import Container from "@mui/material/Container";

import Navbar from "./Components/Navbar/Navbar";
import YourFavourites from "./Components/YourFavourites/YourFavourites";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<YourFavourites />} />
      </Routes>
    </div>
  );
}

export default App;
