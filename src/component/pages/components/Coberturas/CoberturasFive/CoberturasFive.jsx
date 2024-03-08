import Colors from "../../../../common/Colors";
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'

export default function CoberturasFive(){
    return(
        <section className={`flex flex-col justify-center items-center py-[35px] bg-[white] sectionCoberturasFive`}>

            <div className="flex flex-col items-center text-center pb-[65px]">
                <h2 className={`text-[44px] pb-[20px] text-[${Colors().navyBlue}]`} >Vale a pena fazer seguro de celular?</h2>
                <h3 className={`text-[20px] w-[730px] text-[${Colors().navyBlue}] h3CoberturasFive`} >Compare os planos Econômico e Completo da Zurich com os outros seguros do mercado e escolha a melhor opção para você.</h3>
            </div>

            <div className=" tableCoberturasFive w-[950px] mb-[40px]">

                <table className="border-spacing-[4px] border-separate w-[950px] table">
                    <tr>
                        <td></td>
                        <td className={`text-[18px] text-center py-[20px] w-[250px] bg-[${Colors().blue}] text-[white]`}>
                            <span>Zurich Celular </span>
                            <br/>
                            <strong>Plano Econômico</strong>
                        </td>
                        <td className={`text-[18px] text-center py-[20px] w-[240px] bg-[${Colors().blue}] text-[white]`}>
                            <span>Zurich Celular</span>
                            <br/>
                            <strong>Plano Completo</strong>
                        </td>
                        <td className={`text-[18px] text-center w-[270px] text-[${Colors().navyBlue}]`}>
                            <strong>Outros seguros</strong>
                        </td>
                    </tr>

                    <tr>
                        <td className={`text-[18px] text-center w-[346px] p-[40px] bg-[${Colors().blue}] text-[white]`}><span>Cobre Furto?</span></td>
                        <td className={`text-center bg-[${Colors().lightBlue}]`}><FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faCheck} /></td>
                        <td className={`text-center bg-[${Colors().tdTableSecondColumn}]`}><FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faCheck} /></td>
                        <td className={`text-center p-[10px] bg-[${Colors().lightBlue}] text-[${Colors().navyBlue}]`}>
                            <FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faXmark} />
                            <br/>
                            <span className={`text-[18px] text-[${Colors().navyBlue}]`}>Poucas seguradoras cobrem furto simples.</span>
                        </td>
                    </tr>

                    <tr>
                        <td className={`text-[18px] text-center w-[346px] p-[30px] py-[40px] bg-[${Colors().blue}] text-[white]`}><span>Cobre Roubo?</span></td>
                        <td className={`text-center bg-[${Colors().lightBlue}]`}><FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faCheck} /></td>
                        <td className={`text-center bg-[${Colors().tdTableSecondColumn}]`}><FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faCheck} /></td>
                        <td className={`text-center bg-[${Colors().lightBlue}]`}><FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faCheck} /></td>
                    </tr>

                    <tr>
                        <td className={`text-[18px] text-center w-[346px] p-[30px] bg-[${Colors().blue}] text-[white]`}><span>Cobre Danos acidentais? Com cobertura para líquidos?</span></td>
                        <td style={{backgroundColor:Colors().lightBlue}} className="text-center"><FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faXmark} /></td>
                        <td className={`text-center bg-[${Colors().tdTableSecondColumn}]`}><FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faCheck} /></td>
                        <td className={`text-center p-[10px] bg-[${Colors().lightBlue}] text-[${Colors().navyBlue}]`}>
                            <FontAwesomeIcon className={`text-[22px] text-[${Colors().navyBlue}]`} icon={faXmark} />
                            <br/>
                            <span className={`text-[18px] text-[${Colors().navyBlue}]`}>Poucas seguradoras cobrem danos por líquido.</span> 
                        </td>
                    </tr>

                    <tr>
                        <td className={`text-[18px] text-center w-[346px] p-[40px] bg-[${Colors().blue}] text-[white]`}><span>Tem carência?</span></td>
                        <td className={`text-center text-[18px] bg-[${Colors().lightBlue}] text-[${Colors().navyBlue}]`}><span>Não. Ativação da proteção na hora.</span></td>
                        <td className={`text-center p-[8px] text-[18px] bg-[${Colors().tdTableSecondColumn}] text-[${Colors().navyBlue}]`}><span>Não. Ativação da proteção na hora.</span></td>
                        <td className={`text-center p-[10px] text-[18px] bg-[${Colors().lightBlue}] text-[${Colors().navyBlue}]`}><span>Em geral, tem carência de 30 dias.</span></td>
                    </tr>

                    <tr>
                        <td className={`text-[18px] text-center w-[346px] p-[40px] bg-[${Colors().blue}] text-[white]`}><span>Qual a abrangência?</span></td>
                        <td className={`text-center text-[18px] bg-[${Colors().lightBlue}] text-[${Colors().navyBlue}]`}><span>Proteção em todo o globo terrestre.</span></td>
                        <td className={`text-center p-[8px] text-[18px] bg-[${Colors().tdTableSecondColumn}] text-[${Colors().navyBlue}]`}><span>Proteção em todo o globo terrestre.</span></td>
                        <td className={`text-center p-[10px] text-[18px] bg-[${Colors().lightBlue}] text-[${Colors().navyBlue}]`}><span>Em geral, proteção nacional.</span></td>
                    </tr>

                </table>

            </div>

            
            <div 
            onClick={() => window.location.href = "https://segurocelular.zurich.com.br/partner/ab1c362a-bc06-46e4-9ec6-84e718672fed"} 
            className={`py-[13px] px-[25px] border border-solid border-[${Colors().blue}] border-2 w-fit rounded-[30px] flex gap-2 items-center`}>
                <FontAwesomeIcon style={{color:Colors().blue}} icon={faHeart} />
                <span style={{color:Colors().blue}}>Cote agora</span>
            </div>

        </section>
    )
}