import { useState } from "react";

import "./App.css";

import Button from './components/ui/Button';
import TopHeader from "./components/home components/topHeader";




import Navbar from "./components/home components/Navbar";
import HeroPage from "./components/home components/HeroPage";

import Archivement from "./components/home components/archivement";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router";

import About from "./components/home components/About";
import BetterTommorow from "./components/home components/BetterTommorow";
import ZigZag from "./components/home components/ZigZag";
import Footer from "./components/home components/Footer";


function App() {


  return (
    <>


    

    <TopHeader/>
  

    <Navbar/>
    <HeroPage/>
      <Archivement />
    <About/>
    <BetterTommorow/>
    <ZigZag/>
    <Footer/>

    </>
  );
}

export default App;
