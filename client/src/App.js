import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import YourFavourites from "./Components/YourFavourites/YourFavourites";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<YourFavourites />} />
        <Route path="/shows/:showId" element={<DetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
