import Header from '../../Layout/Header/Header.jsx' 
import CoberturaOne from '../components/Coberturas/CoberturaOne/CoberturaOne'
import CoberturasTwo from "../components/Coberturas/CoberturasTwo/CoberturasTwo"
import SectionHomeThree from "../components/Home/SectionHomeThree/SectionHomeThree"
import CoberturasThree from "../components/Coberturas/CoberturasThree/CoberturasThree"
import CoberturasFour from "../components/Coberturas/CoberturasFour/CoberturasFour"
import CoberturasFive from "../components/Coberturas/CoberturasFive/CoberturasFive"
import SectionHomeFour from "../components/Home/SectionHomeFour/SectionHomeFour"
import Footer from "../../Layout/Footer/Footer"
import React from 'react'

export default function CoberturaMain(){
    return(
        <main>
            <Header/>
            <CoberturaOne/>
            <CoberturasTwo/>
            <SectionHomeThree/>
            <CoberturasThree/>
            <CoberturasFour/>
            <CoberturasFive/>
            <SectionHomeFour/>
            <Footer/>
        </main>
    )
}