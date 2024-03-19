// import './index.css'
import Colors from '../../../../common/Colors.jsx'
import vantagensWoman from '../../../../../assets/vantagens-woman.png'
import React from 'react'

export default function VantagensOne(){
    return(
        <header className='flex justify-center items-center gap-[80px] pt-[10px] headerVantagensOne' style={{backgroundColor:Colors().strongBlueCoberturas}}>

            <div className='titleVantagensOne'>
                <h1 className='text-[40px] mb-[8px]' style={{color:'white'}}>Vantagens do Seguro Celular Zurich</h1>
            </div>

            <div className='flex boxStyleVantagensOne'>
                <img className='rounded-full w-[200px]' src={vantagensWoman} alt="" />
                <div className="self-end relative right-[40px] imgStyleBoxVantagensOne">
                    <svg className='imgStyleVantagensOne' class="image-shapes" xmlns="http://www.w3.org/2000/svg" width="200.483" height="119.655" viewBox="0 0 200.483 119.655">
                        <g id="Grupo_60" data-name="Grupo 60" transform="translate(-12374.086 -7538.65)">
                            <circle id="Elipse_6" data-name="Elipse 6" cx="12" cy="12" r="12" transform="translate(12374.086 7633.477)" fill="#56ADE0"></circle>
                            <circle id="Elipse_7" data-name="Elipse 7" cx="22" cy="25" r="23" transform="translate(12441.086 7608.477)" fill="#DDE4E3"></circle>
                            <path id="Trazado_21" data-name="Trazado 21" d="M12464.086,7599.968a40.29,40.29,0,1,0-56.977,56.977Z" fill="#DAD2BD"></path>
                            <path id="Trazado_22" data-name="Trazado 22" d="M12574.568,7656.994a23.016,23.016,0,1,0-46.03,0Z" fill="#27366b"></path>
                            <path id="Trazado_23" data-name="Trazado 23" d="M12520.531,7658.305a69.868,69.868,0,1,0-98.806-98.805Z" fill="#56ade0"></path>
                        </g>
                    </svg>
                </div>
            </div>

        </header>
    )
}