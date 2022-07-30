import React, { useState } from 'react'

import { NavBar, SideBar, Footer, Banner } from '../components/index'

function Home () {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner />
      <h1>GAMER MARKET COLOMBIA</h1>
      <Footer />
    </>
  )
}

export default Home
