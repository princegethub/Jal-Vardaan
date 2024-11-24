import { useState } from "react";

import "./App.css";

import Button from './components/ui/Button';
import TopHeader from "./components/home components/topHeader";




import Navbar from "./components/home components/Navbar";
import HeroPage from "./components/home components/HeroPage";
import Archivement from "./components/home components/archivement";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router";

function App() {


  return (
    <>


      <TopHeader />
      <Navbar />
      <HeroPage />
      <Archivement />

    </>
  );
}

export default App;
