import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colors from "../../../../common/Colors";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
// import './index.css'
import ButtonCoteNow from "../../../../common/ButtonCoteNow";

export default function SectionHomeTwo(){
    return(
        <section className='flex justify-center flex-col h-[100%] pb-20'>
        <header
          className={`
        color-[${Colors().navyBlue}]
        flex flex-wrap flex-col items-center
        py-6 pt-20 gap-8
        `}>
          <h2 className={`
            text-[2.6em] 
            text-center
            text-[${Colors().navyBlue}]
            font-normal
            `}>
            Por que contratar um seguro para celular ?
          </h2>
          <h3 className={`
             text-[1.3em]
             text-center
             text-[${Colors().navyBlue}]
             font-light
             w-[55%]
          `}>
            O seguro Zurich Celular oferece coberturas completas para você usar seu celular com segurança e tranquilidade, em qualquer lugar do mundo.
          </h3>
        </header>
        <section className='flex items-center justify-center flex-col leading-7'>
          <section className='flex flex-wrap w-[65%] gap-x-16 gap-y-20 text-center items-center justify-center '>
            <article className='w-[320px] flex flex-col justify-center items-center gap-2'>
              <img style={{ height:'150px' }} src='https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/icon01.web' />
              <p className={`font-light color-[${Colors().navyBlue}] text-[20px]`}>
                Somos a seguradora líder de mercado em seguro celular, já são mais de 12 milhões de celulares protegidos!
              </p>
            </article>
            <article className='w-[320px] flex flex-col justify-center items-center gap-2'>
              <img style={{ height:'150px' }} src='https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/icon02.web' />
              <p className={`font-light color-[${Colors().navyBlue}] text-[20px]`}>
              Contratação 100% digital em poucos minutos
              </p>
            </article>
            <article className='w-[320px] flex flex-col justify-center items-center gap-2'>
              <img style={{ height:'150px' }} src='https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/icon03.web' />
              <p className={`font-light color-[${Colors().navyBlue}] text-[20px]`}>
              Proteção imediata, sem carência e com cobertura internacional
              </p>
            </article>
            <article className='w-[320px] flex flex-col justify-center items-center gap-2'>
              <img style={{ height:'150px' }} src='https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/icon04.web' />
              <p className={`font-light color-[${Colors().navyBlue}] text-[20px]`}>
              Flexibilidade para escolher o plano do jeito que mais combina com você
              </p>
            </article>
            <article className='w-[320px] flex flex-col justify-center items-center gap-2'>
              <img style={{ height:'150px' }} src='https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/icone-celulares-24meses.webp' />
              <p className={`font-light color-[${Colors().navyBlue}] text-[20px] w-[300px] paragraph5SectionHomeTwo`}>
              Proteção para celulares com até 24 meses de uso desde a data de compra
              </p>
            </article>
            <article className='w-[340px] flex flex-col justify-center items-center gap-2'>
              <img style={{ height:'150px' }} src='https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/icone-livewell.webp' />
              <p className={`font-light color-[${Colors().navyBlue}] text-[20px]`}>
                Acesso gratuito ao LiveWell, aplicativo de bem-estar que te conecta a um estilo de vida mais saudável !
              </p>
            </article>
          </section>
          <div className="py-10">
          <ButtonCoteNow py={15} />
        </div>
        </section>
      </section>
    )
}