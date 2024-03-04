import './index.css'
import zBaloon from '..//..//..//..//..//assets/z-baloon.webp'
import nounApp from '../../../../../assets/noun-app-3165998.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Colors from '../../../../common/Colors'

export default function SectionHomeSeven(){
    return(
        <div className={`flex justify-center py-[70px] bg-[${Colors().lightBlue}] sectionSevenMainBox`}>

            <div className='flex gap-8 sectionSevenBox'>

                <div className='flex gap-6 sobreMainBox'>
                    <div><img width={'60px'} src={zBaloon} alt="" /></div>
                    <div 
                    
                    className='w-[330px] sobreBox'>
                        <h3 className={`text-[28px] mb-[5px] text-[${Colors().navyBlue}]`}>Sobre a Zurich</h3>
                        <p className={`text-[20px] mb-[16px] leading-[1.6] text-[${Colors().navyBlue}]`}>Quando o assunto é proteção, a Zurich tem
                            soluções de seguros para pessoas e empresas.
                            Há 150 anos, trabalha para estar entre as 
                            companhias mais responsáveis e de maior impacto no mundo.
                        </p>
                        <div 
                        onClick={() => {
                            window.location.href = "/seguro-celular/duvidas-frequentes"}}
                        className={`w-fit
                            flex items-center justify-center gap-2
                            px-8 py-[12px] mt-6
                            rounded-full
                            font-normal text-[18px] text-white 
                            bg-[${Colors().blue}]
                            `}>
                            <FontAwesomeIcon
                                className='text-[16px]'
                                color={'white'}
                                icon={faChevronRight}
                            />
                            <span>Saiba Mais</span>
                            </div>
                    </div>
                </div>

                <div className='border-l ml-10 pl-10 border-black flex gap-6 sustentabilidadeMainBox'>
                    <div><img width={'60px'} src={nounApp} alt="" /></div>
                    <div className='w-[350px] sustentabilidadeBox'>
                        <h3 className={`text-[28px] mb-[5px] text-[${Colors().navyBlue}]`}>Sustentabilidade</h3>
                        <p className={`text-[20px] mb-[16px] leading-[1.6] text-[${Colors().navyBlue}]`}>Ao contratar o seguro celular da Zurich você contribui com
                            diversas ações sustentáveis, incluindo o <strong>Projeto Floresta
                             Zurich</strong>, que visa trazer de volta à vida parte da Mata Atlântica
                            e o programa de <strong>Descarte responsável</strong>, que coleta e destina
                            corretamente produtos eletrônicos como celulares e carregadores.
                        </p>
                        <div 
                         onClick={() => {
                            window.location.href = "/seguro-celular/duvidas-frequentes"}}
                        className={`w-fit
                            flex items-center justify-center gap-2
                            px-8 py-[12px] mt-6
                            rounded-full
                            font-normal text-[18px] text-white 
                            bg-[${Colors().blue}]
                            `}>
                            <FontAwesomeIcon
                                className='text-[16px]'
                                color={'white'}
                                icon={faChevronRight}
                            />
                            <span>Saiba Mais</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}