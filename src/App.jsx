import { useState } from "react";

import "./App.css";
import Navbar from "./components/home components/Navbar";
import HeroPage from "./components/home components/HeroPage";

function App() {
  console.log("hello");
  
  return (
    <>
    <Navbar/>
    <HeroPage/>
    
    </>
  );
}

export default App;
