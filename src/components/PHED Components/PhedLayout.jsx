import React from "react";
import Navbar from "./NavbarPHED";
import { Outlet } from "react-router";
import Footer_PHED from "../PHED Components/Footer_PHED";

function PhedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer_PHED />
    </>
  );
}

export default PhedLayout;
