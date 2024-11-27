import React from 'react'
import Navbar from './components/GPS Components/Navbar_GPS'
import Footer_PHED from './components/FooterLoginKeBaadWala'
import Dashboard_Gps from './components/GPS Components/Dashboard_Gps'
import ManageConsumerPage from './components/GPS Components/ManageConsumerPage'

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Dashboard_Gps/> */}
      <ManageConsumerPage/>
      <Footer_PHED/>
    </div>
  )
}

export default App
