import React, { useState } from 'react'
import './index.css'
import Header from '../../Layout/Header/Header.jsx'
import SectionHomeOne from '../components/Home/SectionHomeOne/SectionHomeOne.jsx'
import SectionHomeTwo from '../components/Home/SectionHomeTwo/SectionHomeTwo.jsx'
import SectionHomeThree from '../components/Home/SectionHomeThree/SectionHomeThree.jsx'
import SectionHomeFour from '../components/Home/SectionHomeFour/SectionHomeFour.jsx'
import SectionHomeFive from '../components/Home/SectionHomeFive/SectionHomeFive.jsx'
import SectionHomeSix from '../components/Home/SectionHomeSix/SectionHomeSix.jsx'
import SectionHomeSeven from '../components/Home/SectionHomeSeven/SectionHomeSeven.jsx'
import Footer from '../../Layout/Footer/Footer'

export default function SectionHomeMain(){
   
    return (
        <main className='flex flex-col border '>
            <Header styled={{ backgroundColor: 'white', zIndex: 2 }} />
            <SectionHomeOne />
            <SectionHomeTwo />
            <SectionHomeThree />
            <SectionHomeFour />
            <SectionHomeFive/>
            <SectionHomeSix/>
            <SectionHomeSeven/>
            <Footer/>
        </main>
    )
}