import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import YourFavourites from "./Components/YourFavourites/YourFavourites";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<YourFavourites />} />
        <Route path="/shows/:showId" element={<DetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
