// import './index.css'
import Colors from '../../../../common/Colors'

export default function CorretorThree(){
    return(
        <section className='flex justify-center pb-[30px] sectionCorretorThree'>
            <div className={`flex justify-center w-[1080px] border-b border-solid border-[${Colors().lightFooterBlue}] lineBoxCorretorThree`}>
                <span className={`p-[10px] py-[20px] border-b-2 border-solid border-[${Colors().navyBlue}]`}>Corretores</span>
            </div>
        </section>
    )
}