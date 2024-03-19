import React from 'react'
import DuvidasHeader from '../components/Duvidas/DuvidasHeader/DuvidasHeader.jsx'
import Header from '../../Layout/Header/Header.jsx'
import DuvidasAccordions from '../components/Duvidas/DuvidasAccordions/DuvidasAccordions.jsx'
import Footer from '../../Layout/Footer/Footer.jsx'



function DuvidasMain() {

  return (
    <>
      <Header></Header>
      <DuvidasHeader></DuvidasHeader>
      <DuvidasAccordions/>
      <Footer></Footer>
    </>
  )
}

export default DuvidasMain