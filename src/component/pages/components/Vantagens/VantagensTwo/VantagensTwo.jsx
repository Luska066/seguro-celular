// import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../../../common/Colors';

export default function VantagensTwo(){
    return(
        <section>
            
            <ul className='flex items-center gap-2 pl-[20%] pt-[40px] ulVantagensTwo' style={{backgroundColor:'white'}}>
            <div className='flex items-center gap-2'>
                    <li><FontAwesomeIcon style={{color:Colors().navyBlue}} icon={faHouse} /></li>
                    <li className='relative liSecurityPhone flex items-center gap-1'><a href="#" style={{color:Colors().navyBlue}}>Seguro Celular</a></li>
                </div>
                <li className='relative liVantagens flex items-center gap-1'style={{color:Colors().blue}} >Vantagens</li>
            </ul>

        </section>
    )
}