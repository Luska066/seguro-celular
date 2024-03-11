// import './index.css'
import Colors from '../../../../common/Colors'
import furtoIcon from '../../../../../assets/icone-furto2.webp'
import rouboIcon from '../../../../../assets/icone-roubo.webp'
import danosIcon from '../../../../../assets/icone-danos.webp'

export default function CoberturasThree(){
    return(
        <section className='flex justify-center pb-[40px] pt-[20px]' style={{backgroundColor:Colors().lightBlue}}>

            <div className='flex gap-6 cardBoxCoberturaThree'>

                <div className='flex gap-6'>
                    <div><img width={'75px'} src={furtoIcon} alt="" /></div>
                    <div className='inf1CoberturaThree w-[275px]'>
                        <strong className='text-[23px]' style={{color:Colors().strongBlueCoberturas}}>Furto</strong>
                        <p className='text-[20px]'>Furto simples - Quando o celular é levado e não há vestígios do crime,
                            ou seja, naqueles casos em que o aparelho é furtado de cima de uma mesa
                            sem que o segurado perceba.Furto qualificado – Quando o celular é levado, mas
                            existem vestígios do crime ocorrido, como um corte na bolsa ou um vidro do
                            carro quebrado.
                        </p>
                    </div>
                </div>

                <div className='flex gap-6'>
                    <div><img width={'75px'} src={rouboIcon} alt="" /></div>
                    <div className='inf2CoberturaThree w-[275px]'>
                        <strong className='text-[23px]' style={{color:Colors().strongBlueCoberturas}}>Roubo</strong>
                        <p className='text-[20px]'>Quando o celular é levado mediante ameaça física e verbal ou uso de força bruta,
                            por exemplo, ser abordado/ameaçado pelo assaltante que leva o seu celular.
                        </p>
                    </div>
                </div>

                <div className='flex gap-6'>
                    <div><img width={'75px'} src={danosIcon} alt="" /></div>
                    <div className='inf3CoberturaThree w-[275px]'>
                        <strong className='text-[23px]' style={{color:Colors().strongBlueCoberturas}}>Danos acidentais por queda e líquidos</strong>
                        <p className='text-[20px]'>Quando o celular sofre um dano acidental decorrente de queda e colisão ou derramamento
                            de líquidos que torne o aparelho inutilizável.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}