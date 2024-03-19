import Colors from "../../../../common/Colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import './index.css'
import ButtonCoteNow from "../../../../common/ButtonCoteNow";
import React from 'react'

export default function CoberturasFour(){
    return(
        <div className='flex flex-col items-center pb-[50px] boxCoberturasFour' style={{backgroundColor:Colors().lightBlue}}>
                <h2 className='text-[44px] h2CoberturasFour pb-[20px] text-center' style={{color:Colors().navyBlue}}>O que não cobrimos</h2>
                <p className='text-[20px] mb-[16px] pCoberturasFour' style={{color:Colors().navyBlue}}>Aparelhos com mais de dois anos da data da compra e não disponíveis no cotador</p>
                <div className="py-5">
                    <ButtonCoteNow py={15}/>
                </div>
               
            </div>
    )
}