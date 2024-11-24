import React from 'react'
import TopHeader from './home components/topHeader'
import HeroPage from './home components/HeroPage'
import { Outlet } from 'react-router'
import Footer from './home components/Footer'
import Navbar from './home components/Navbar'

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
