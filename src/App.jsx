import { useState } from "react";

import "./App.css";

import Button from "./components/ui/Button";
import TopHeader from "./components/home components/topHeader";

import Navbar from "./components/home components/Navbar";
import NavbarPHED from "./components/PHED Components/NavbarPHED";
import HeroPage from "./components/home components/HeroPage";

import Archivement from "./components/home components/archivement";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router";

import About from "./components/home components/About";
import BetterTommorow from "./components/home components/BetterTommorow";
import ZigZag from "./components/home components/ZigZag";
import Footer from "./components/home components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SlickSlider from "./components/PHED Components/Slider";
import OurService from "./components/PHED Components/OurService";
import Footer_PHED from "./components/PHED Components/Footer_PHED.JSX";
import UserCard from "./components/PHED Components/UserCard";
import ManageGps_List from "./components/PHED Components/ManageGps_List";
import UpdateGps from "./components/PHED Components/UpdateGps";
import AssestInventory from "./components/PHED Components/AssestInventory";
import AlertPage from "./components/PHED Components/AleartPage";
import ManageGpPage from "./components/PHED Components/ManageGpPage";
import GpAnnouncement from "./components/PHED Components/GpAnnouncement";

function App() {


  return (
    <>


    
    <NavbarPHED/>
    {/* <SlickSlider/> */}
    {/* <div className="h-[17vh] py-5 bg-gradient-to-br from-[#3B82F6] via-[#60A5FA] to-[#1E3A8A] flex items-center justify-center">
      <UserCard
        name="Bhajanlal"
        id="PH1G6X4001"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/9c/Bhajan_Lal_Sharma_and_deputies_meets_VP_of_India.jpg" // Replace with actual image URL
      />
    </div> */}
    {/* <OurService/> */}


      {/* <UpdateGps/> */}
      {/* <Assest/> */}
      {/* <AssestInventory /> */}

      {/* <AlertPage/> */}
      {/* <ManageGpPage/> */}
      <GpAnnouncement/>
    <Footer_PHED/>
    {/* <TopHeader/>
  

    <Navbar/>
    <HeroPage/>
    <About/>
      <Archivement />
    <BetterTommorow/>
    <ZigZag/>
    <Footer/> */}

    </>
  );
}

export default App;
