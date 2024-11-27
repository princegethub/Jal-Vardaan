import React from 'react'
import Navbar from './components/GPS Components/Navbar_GPS'
import Footer_PHED from './components/FooterLoginKeBaadWala'
import Dashboard_Gps from './components/GPS Components/Dashboard_Gps'
import ManageConsumer from './components/GPS Components/MangeConsumerPage'

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Dashboard_Gps/> */}
      <ManageConsumer/>
      <Footer_PHED/>
    </div>
  )
}

export default App
