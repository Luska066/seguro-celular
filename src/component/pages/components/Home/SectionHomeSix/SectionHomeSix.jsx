// import './index.css'
import Colors from "../../../../common/Colors.jsx";

export default function SectionHomeSix(){
    return (
        <div className={`flex flex-col items-center bg-[${Colors().navyBlue}] py-[45px] pb-[70px] px-0`}>
            <h1 className='flex justify-center text-[44px] mb-[30px] pb-3 text-white relative titleSecurityPhone text-center'>Como acionar o seguro celular</h1>
            <div className='flex justify-evenly w-full flex-wrap '>
                <div className='flex flex-col items-center w-[170px] pt-[25px] whatBox'>
                    <img className='w-[90px]' src="https://www.zurich.com.br/pt-br/-/media/2B544832D2CB4EB9A925D69D103B9BEA.ashx" alt="" />
                    <strong className='text-[16px] text-white'>WhatsApp</strong>
                </div>
                <div className='flex flex-col items-center w-[170px] pt-[25px] chatBox'>
                    <img className='w-[90px]' src="https://www.zurich.com.br/pt-br/-/media/A1FE5A6436BE4B16B797236B4C248EF3.ashx" alt="" />
                    <strong className='text-[16px] text-white'>Chat on-line</strong>
                </div>
                <div className='flex flex-col items-center w-[170px] pt-[25px] spaceClientBox'>
                    <img className='w-[90px]' src="https://www.zurich.com.br/pt-br/-/media/19F3F9DB67964CE8B5BDBDF8B8181B7E.ashx" alt="" />
                    <strong className='text-[16px] text-white'>Espaço do Cliente</strong>
                </div>
                <div className='flex flex-col items-center w-[170px] pt-[25px]'>
                    <img className='w-[90px]' src="https://www.zurich.com.br/pt-br/-/media/0590FFBF542B4F43A28F5831B8B3479C.ashx" alt="" />
                    <strong className='text-[16px] text-white'>Central de atendimento</strong>
                </div>
            </div>
        </div>
    )
}