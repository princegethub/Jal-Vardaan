import { useState } from "react";

import "./App.css";

import Button from './components/ui/Button';
import TopHeader from "./components/home components/topHeader";




import Navbar from "./components/home components/Navbar";
import HeroPage from "./components/home components/HeroPage";


function App() {

  
  return (
    <>

    <TopHeader/>
  

    <Navbar/>
    <HeroPage/>
    

    </>
  );
}

export default App;
