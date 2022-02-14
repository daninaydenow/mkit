import "./App.css";

import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Navbar from "./Components/Navbar/Navbar";
import YourFavourites from "./Components/YourFavourites/YourFavourites";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Logout from "./Components/Logout/Logout";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<YourFavourites />} />
          <Route path="/shows/:showId" element={<DetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
