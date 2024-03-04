import './index.css'
import Colors from '../../../../common/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse} from '@fortawesome/free-solid-svg-icons';

export default function CoberturasTwo(){
    return(
        <section>

            <ul className='flex items-center gap-2 pl-[20%] pt-[40px] ulCoberturasTwo' style={{backgroundColor:Colors().lightBlue}}>
                <div className='flex items-center gap-2 divUlCoberturasTwo'>
                    <li><FontAwesomeIcon style={{color:Colors().navyBlue}} icon={faHouse} /></li>
                    <li className='relative liSecurityPhone flex items-center gap-1'><a href="#" style={{color:Colors().navyBlue}}>Seguro Celular</a></li>
                </div>
                <li className='relative liCoberturas flex items-center gap-1'style={{color:Colors().blue}} >Coberturas</li>
            </ul>

        </section>
    )
}