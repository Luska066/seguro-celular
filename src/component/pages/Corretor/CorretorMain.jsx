import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import CorretorOne from "../components/Corretor/CorretorOne/CorretorOne";
import CorretorThree from "../components/Corretor/CorretorThree/CorretorThree";
import CorretorTwo from "../components/Corretor/CorretorTwo/CorretorTwo";

export default function CorretorMain(){
    return(
        <main>
            <Header/>
            <CorretorOne/>
            <CorretorTwo/>
            <CorretorThree/>
            <Footer/>
        </main>
    )
}