import HomePage from "./pages/HomePage/HomePage";
import DestinationProfile from "./pages/DestinationProfile/DestinationProfile";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PageDown from "./components/PageDown/PageDown";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/places/:name" element={<DestinationProfile />} />
        <Route path="/hotels" element={<PageDown />} />
        <Route path="/bike-rentals" element={<PageDown />} />
        <Route path="/restaurants" element={<PageDown />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
