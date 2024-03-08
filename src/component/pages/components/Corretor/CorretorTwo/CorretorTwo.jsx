import './index.css'
import Colors from '../../../../common/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse} from '@fortawesome/free-solid-svg-icons';

export default function CorretorTwo(){
    return(
        <section className='pb-[30px]'>

            <ul className='flex items-center gap-2 pl-[20%] pt-[40px] ulCorretorTwo' style={{backgroundColor:'white'}}>
            <div className='flex items-center gap-2'>
                    <li><FontAwesomeIcon style={{color:Colors().navyBlue}} icon={faHouse} /></li>
                    <li className='relative liSecurityPhone flex items-center gap-1'><a href="#" style={{color:Colors().navyBlue}}>Seguro Celular</a></li>
                </div>
                <li className='relative liCorretor flex items-center gap-1'style={{color:Colors().blue}} >Localize um corretor</li>
            </ul>

        </section>
    )
}