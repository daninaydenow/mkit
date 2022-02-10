import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import YourFavourites from "./Components/YourFavourites/YourFavourites";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<YourFavourites />} />
        <Route path="/shows/:showId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
