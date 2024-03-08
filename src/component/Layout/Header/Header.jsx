import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faBars, faDollar, faFileCircleCheck, faGlobe, faLocationArrow, faMobileScreenButton, faQuestionCircle, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import Colors from '../../common/Colors';
import { useEffect, useState } from 'react'
import ButtonCoteNow from '../../common/ButtonCoteNow';

export default function Header({styled}) {
    
    return (
        <header className='flex flex-row items-center justify-between px-6 py-2' style={styled}>
            <img src='https://www.zurich.com.br/-/media/project/zwp/shared/zurich-logo-blue.svg?mw=1450&rev=-1&hash=9C43F588F204AC2EE4EFE4AAB67C2F0F' style={{ width: "150px" }}   onClick={() => window.location.href="/"}/>
            <nav id='nav-bar' className="gap-10 flex pe-12 md:max-">
                <div className={`
                    flex items-center gap-2 
                    font-light text-[18px]
                    text-[${Colors().blue}]
                    `}
                    onClick={() => window.location.href="/seguro-celular/vantagens"}
                    >
                    <FontAwesomeIcon
                        className='text-[16px]'
                        color={Colors().blue}
                        icon={faShieldHalved}
                    />
                    <span className="text-span-header">Vantagens</span>
                </div>
                <div className={`
                    flex items-center 
                    gap-2 
                    font-light text-[18px] text-[${Colors().blue}]
                    `}
                    onClick={() => window.location.href="/seguro-celular/coberturas"}
                    >
                    <FontAwesomeIcon
                        className='text-[16px]'
                        color={Colors().blue}
                        icon={faGlobe}
                    />
                    <span className="text-span-header">Coberturas</span>
                </div>
                <div className={`
                    flex items-center gap-2 
                    font-light text-[18px] text-[${Colors().blue}]
                    `}
                    onClick={() => window.location.href="https://www.zurich.com.br/pt-br/seguro-celular/condicoes-gerais"} 
                    >
                    
                    <FontAwesomeIcon
                        className='text-[16px]'
                        color={Colors().blue}
                        icon={faFileCircleCheck}
                    />
                    <span className="text-span-header">Termos</span>
                </div>
                <div className={`
                    flex items-center gap-2 
                    font-light text-[18px] text-[${Colors().blue}]
                    `}
                    onClick={() => window.location.href="/seguro-celular/duvidas-frequentes"} 
                    >
                    <FontAwesomeIcon
                        className='text-[16px]'
                        color={Colors().blue}
                        icon={faQuestionCircle}
                    />
                    <span className="text-span-header">Dúvidas frequentes</span>
                </div>
                <div className={`
                    flex items-center gap-2 
                    font-light text-[18px] text-[${Colors().blue}]
                    `}
                    onClick={() => window.location.href="/seguro-celular/localize-um-corretor"} 
                    >
                     <FontAwesomeIcon
                        className='text-[16px]'
                        color={Colors().blue}
                        icon={faLocationArrow}
                    />
                    <span className="text-span-header">Localize um corretor</span>
                </div>
                <ButtonCoteNow py={'12'}/>
            </nav>
            <nav id='burger-bar' className='pe-4 items-center justify-center'>
                    <FontAwesomeIcon
                        className='text-[30px]'
                        color={Colors().blue}
                        icon={faBars}
                    />
            </nav>
        </header>
    )
}