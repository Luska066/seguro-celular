import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import SectionHomeTwo from "../components/Home/SectionHomeTwo/SectionHomeTwo";
import VantagensOne from "../components/Vantagens/VantagensOne/VantagensOne";
import VantagensTwo from "../components/Vantagens/VantagensTwo/VantagensTwo";

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