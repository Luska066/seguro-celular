import Footer from "../../Layout/Footer/Footer.jsx";
import Header from "../../Layout/Header/Header.jsx";
import SectionHomeTwo from "../components/Home/SectionHomeTwo/SectionHomeTwo.jsx";
import VantagensOne from "../components/Vantagens/VantagensOne/VantagensOne.jsx";
import VantagensTwo from "../components/Vantagens/VantagensTwo/VantagensTwo.jsx";

export default function VantagemMain(){
    return(
        <main>
            <Header/>
            <VantagensOne/>
            <VantagensTwo/>
            <SectionHomeTwo/>
            <Footer/>
        </main>
    )
}