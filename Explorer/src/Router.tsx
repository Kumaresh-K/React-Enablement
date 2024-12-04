import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DestinationProfile from "./pages/DestinationProfile/DestinationProfile";
import "./App.css";
import Root from "./Root";
import PageDown from "./components/PageDown/PageDown";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "places/:name", element: <DestinationProfile /> },
      { path: "hotels", element: <PageDown /> },
      { path: "bike-rentals", element: <PageDown /> },
      { path: "restaurants", element: <PageDown /> },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
]);

export default router;
