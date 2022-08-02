import React, { useState } from 'react'

import { NavBar, SideBar, Footer, Banner, Products } from '../components/index'

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
      <Products id='products' />
      <Footer />
    </>
  )
}

export default Home
