import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Layout from "./components/home components/Layout.jsx";
import About from "./components/home components/About.jsx";
import ZigZag from "./components/home components/ZigZag.jsx";
import HeroPage from "./components/home components/HeroPage.jsx";
import { RouterProvider } from "react-router-dom";
import Public_Layout from "./components/home components/Public_Layout.jsx";
import BetterTomorrow from "./components/home components/BetterTommorow.jsx";
import Footer from "./components/home components/Footer.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhedLayout from "./components/PHED Components/PhedLayout.jsx";
import Dashboard_PHED from "./components/PHED Components/Dashboard_PHED.jsx";
import ManageGpsPage from "./components/PHED Components/ManageGpsPage.jsx";
import UpdateGps from "./components/PHED Components/UpdateGps.jsx";
import AssestInventory from "./components/PHED Components/AssestInventory.jsx";
import GpAnnouncement from "./components/PHED Components/GpAnnouncement.jsx";
import ProfilePage_PHED from "./components/PHED Components/ProfilePage_PHED.jsx";
import AlertPage from "./components/PHED Components/AleartPage.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />

      {/* Public Layout Route */}
      {/* <Route path="/" element={<Public_Layout />} />
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="vision" element={<ZigZag />} />
        <Route path="contact" element={<BetterTomorrow />} />
      </Route> */}

      <Route path="/phed" element={<PhedLayout />}>
        <Route index  element={<Dashboard_PHED />} />
        <Route path="/phed/managegp" element={< ManageGpsPage/>}/>
        <Route path="/phed/managegp/:id" element={< UpdateGps/>}/>
        <Route path="/phed/assestinventory" element={< AssestInventory/>}/>
        <Route path="/phed/alerts" element={< AlertPage/>}/>
        <Route path="/phed/gpannouncement" element={< GpAnnouncement/>}/>
        <Route path="/phed/profile" element={< ProfilePage_PHED/>}/>
      </Route>

      <Route path="*" element={<PageNotFound />} /> 
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
