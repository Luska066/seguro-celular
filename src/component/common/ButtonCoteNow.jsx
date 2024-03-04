import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colors from "./Colors";

export default function ButtonCoteNow({px=8,py=8}) {
    console.log(py)
    return (
        <button 
        onClick={() => {
            window.location.href = "https://segurocelular.zurich.com.br/partner/ab1c362a-bc06-46e4-9ec6-84e718672fed"}}
        className={`
            flex items-center gap-2
            px-${px} py-[${py}px]
            rounded-full
            font-light text-[18px] text-white 
            bg-[${Colors().blue}]
            `}>
            <FontAwesomeIcon
                className='text-[16px]'
                color={'white'}
                icon={faDollar}
            />
            <span className="text-span-header">Cote agora</span>
        </button>
    )
}