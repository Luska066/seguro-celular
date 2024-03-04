import DuvidasHeader from '../components/Duvidas/DuvidasHeader/DuvidasHeader'
import Header from '../../Layout/Header/Header'
import DuvidasAccordions from '../components/Duvidas/DuvidasAccordions/DuvidasAccordions'
import Footer from '../../Layout/Footer/Footer'



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