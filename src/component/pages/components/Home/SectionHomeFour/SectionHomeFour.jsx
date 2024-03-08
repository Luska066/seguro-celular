import { faDollar } from "@fortawesome/free-solid-svg-icons";
import ButtonCoteNow from '../../../../common/ButtonCoteNow';
import Colors from "../../../../common/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'

export default function SectionHomeFour() {
    return (
        <section className={`w-full bg-[${Colors().lightNavBlue}] flex items-center justify-start relative py-[40px] sectionSectionHomeFour`}>

            <article className="flex flex-col gap-8 justify-center w-[555px] flex-wrap pl-[20%] articleSectionHomeFour">
                <h1 className={`text-[${Colors().blue}] text-[45px] h-[150px] h1ArticleSectionHomeFour`}>Proteja seu celular com a Zurich em poucos passos:</h1>
                <ul className="flex flex-col  items-start gap-10">
                    <li className="flex items-center justify-center gap-6">
                        <div className='w-[50px]'>
                            <p className={`bg-[${Colors().blue}] flex items-center justify-center text-[white] text-[25px] w-[50px] h-[50px] rounded-full `}>1</p>
                        </div>
                        <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}] paragraphSectionHomeFour`}>Selecione marca, modelo e memória do seu aparelho de celular</p>
                    </li>
                    <li className="flex items-center justify-center gap-6">
                        <div className='w-[50px]'>
                            <p className={`bg-[${Colors().blue}] flex items-center justify-center text-[white] text-[25px] w-[50px] h-[50px] rounded-full `}>2</p>
                        </div>
                        <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}] paragraphSectionHomeFour`}>Escolha o plano (econômico ou completo)</p>
                    </li>
                    <li className="flex items-center justify-center gap-6">
                        <div className='w-[50px]'>
                            <p className={`bg-[${Colors().blue}] flex items-center justify-center text-[white] text-[25px] w-[50px] h-[50px] rounded-full `}>3</p>
                        </div>
                        <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}] paragraphSectionHomeFour`}>Preencha seus dados cadastrais</p>
                    </li>
                    <li className="flex items-center justify-center gap-6">
                        <div className='w-[50px]'>
                            <p className={`bg-[${Colors().blue}] flex items-center justify-center text-[white] text-[25px] w-[50px] h-[50px] rounded-full `}>4</p>
                        </div>
                        <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}] paragraphSectionHomeFour`}>Realize a vistoria do seu celular</p>
                    </li>
                    <li className="flex items-center justify-center gap-6">
                        <div className='w-[50px]'>
                            <p className={`bg-[${Colors().blue}] flex items-center justify-center text-[white] text-[25px] w-[50px] h-[50px] rounded-full `}>5</p>
                        </div>
                        <p className={`text-[24px] w-[480px] font-semilight text-[${Colors().navyBlue}] paragraphSectionHomeFour`}>Com a vistoria aprovada, preencha os dados para pagamento e pronto!</p>
                    </li>
                </ul>
                <div className=" flex justify-center flex-col items-center pt-2 gap-4">
                    <h3 className={`text-[30px] font-normal text-[${Colors().blue}] text-center`}> Simples, prático e seguro.</h3>
                    <div className="py-2">
                        <ButtonCoteNow py={15} />
                    </div>
                </div>
            </article>

            <img className="rounded-full w-[850px] absolute right-[0] top-[0] imgSectionFour" src="https://www.zurich.com.br/-/media/project/zwp/brazil/images/seguro-celular/bannersecundario.webp?h=100%25&w=auto&rev=438446be9d9646c69817999b03d56a9c&hash=BAB2F60AF051527EE1A3645691285136')" />

        </section>
    )
}