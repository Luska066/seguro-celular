import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colors from '..//..//..//..//common/Colors'
import './index.css'
import { faArrowAltCircleLeft, faChevronRight, faDollar } from "@fortawesome/free-solid-svg-icons";

export default function SectionHomeThree(){
    return(
        <section className={`flex justify-center items-center bg-[${Colors().lightBlue}] py-10 flex-col`}>
            <header className=" text-[2.5em] text-center font-semibold w-[600px] pb-[20px] h1Plan">
                <h1 style={{ 
                    color:Colors().navyBlue
                 }}>Conheça nossos planos e escolha o que mais combina com você</h1>
            </header>
            <section  className="flex items-center flex-wrap justify-center w-full boxPlan">
                <article className="flex flex-row gap-6 border-r me-28 pe-28 border-blue-600 boxPlanArticle">
                    <div id='image'>
                        <img className="pt-[20px]" width={'80px'} src="https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/economic.webp"/>
                    </div>
                    <div id="plan">
                        <h3 className={`text-[2rem] font-[700] text-[${Colors().navyBlue}] `}>Plano Econômico:</h3>
                        <ul>
                            <li className={`flex gap-4 items-center text-[24px] text-[${Colors().navyBlue}]`}>
                            <FontAwesomeIcon 
                                className='text-[16px]'
                                color={Colors().blue}
                                icon={faChevronRight}/>
                                <span>Furto</span>
                            </li> 
                        
                            <li className={`flex gap-4 items-center text-[24px] text-[${Colors().navyBlue}]`}>
                            <FontAwesomeIcon 
                                className='text-[16px]'
                                color={Colors().blue}
                                icon={faChevronRight}/>
                                <span>Roubo</span>
                            </li>   
                        </ul>
                    </div>
                </article>
                <article className="flex flex-row gap-6 mt-6 box2PlanArticle">
                    <div id='image'>
                        <img className="pt-[20px]" width={'60px'} src="https://www.zurich.com.br/pt-br/-/media/project/zwp/brazil/Images/seguro-celular/v2/complete.webp"/>
                    </div>
                    <div id="plan" className="mt-2">
                        <h3 className={`text-[2rem] font-[700] text-[${Colors().navyBlue}] `}>Plano Econômico:</h3>
                        <ul>
                            <li className={`flex gap-4 items-center text-[24px] text-[${Colors().navyBlue}]`}>
                            <FontAwesomeIcon 
                                className='text-[16px]'
                                color={Colors().blue}
                                icon={faChevronRight}/>
                                <span>Furto</span>
                            </li> 
                        
                            <li className={`flex gap-4 items-center text-[24px] text-[${Colors().navyBlue}]`}>
                            <FontAwesomeIcon 
                                className='text-[16px]'
                                color={Colors().blue}
                                icon={faChevronRight}/>
                                <span>Roubo</span>
                            </li>   
                            <li className={`flex gap-4 items-center text-[24px] text-[${Colors().navyBlue}]`}>
                            <FontAwesomeIcon 
                                className='text-[16px]'
                                color={Colors().blue}
                                icon={faChevronRight}/>
                                <span>Danos materiais</span>
                            </li> 
                        </ul>
                    </div>
                </article>
               
            </section>
            <div 
            onClick={() => {
                window.location.href = "/seguro-celular/duvidas-frequentes"}}
            className={`
            flex items-center justify-center gap-2
            px-8 py-[12px] mt-2
            rounded-full
            font-normal text-[18px] text-white 
            bg-[${Colors().blue}]
            `}>
            <FontAwesomeIcon
                className='text-[16px]'
                color={'white'}
                icon={faChevronRight}
            />
            <span >Saiba mais</span>
        </div>
        </section>
    );
}