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
import Layout from "./components/Layout.jsx";
import About from "./components/home components/About.jsx";
import ZigZag from "./components/home components/ZigZag.jsx";
import HeroPage from "./components/home components/HeroPage.jsx";
import { RouterProvider } from "react-router-dom";
import Public_Layout from "./components/home components/Public_Layout.jsx";
import BetterTomorrow from "./components/home components/BetterTommorow.jsx";
import Footer from "./components/home components/Footer.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Layout Route */}
      {/* <Route path="/" element={<Public_Layout />}/>    */}
      <Route path="/" element={<App />}/>   

      {/* Main Application Layout */}
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="vision" element={<ZigZag />} />
        <Route path="contact" element={<BetterTomorrow />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
