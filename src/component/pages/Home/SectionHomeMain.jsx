import React, { useState } from 'react'
import './index.css'
import reactLogo from '..//..//..//assets/img01.webp'
import Header from '../../Layout/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Colors from '../../common/Colors'
import { faDollar, faPlus } from '@fortawesome/free-solid-svg-icons'
import ButtonCoteNow from '../../common/ButtonCoteNow';
import SectionHomeOne from '../components/Home/SectionHomeOne/SectionHomeOne'
import SectionHomeTwo from '../components/Home/SectionHomeTwo/SectionHomeTwo'
import { Accordion, AccordionDetails, AccordionSummary, Typography, colors } from '@mui/material'
import SectionHomeThree from '../components/Home/SectionHomeThree/SectionHomeThree'
import SectionHomeFour from '../components/Home/SectionHomeFour/SectionHomeFour'
import SectionHomeFive from '../components/Home/SectionHomeFive/SectionHomeFive'
import SectionHomeSix from '../components/Home/SectionHomeSix/SectionHomeSix'
import SectionHomeSeven from '../components/Home/SectionHomeSeven/SectionHomeSeven'
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