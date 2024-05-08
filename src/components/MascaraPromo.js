import { Link } from "react-router-dom";

function MascaraPromo(){
    return(
        <promo className="flex flex-col lg:flex-row justify-center text-black lg:h-[500px] py-20 px-5 lg:px-20">
            <div className="w-full">
                <img src="/media/Mascara.PNG" className="w-full h-full object-cover rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" alt="" />
            </div>
            <div className="w-full gap-4 items-center flex justify-center flex-col text-center bg-red-100 px-16 
            rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl py-16">
                <div className="text-4xl font-bold text-stone-950">
                    Chocolate wonder-shop mascara
                </div>
                <div className="text-xl font-extralight">
                    В подарок при покупке от<br/>11 000р 
                </div>
                <div className="flex text-xl">
                    <button className="flex p-4 border border-solid border-black rounded-full px-4 py-3
                        hover:bg-slate-100 hover:ease-in-out duration-300 hover:border-black hover:text-black">
                        <Link to="/collections">
                            Начать покупки
                        </Link>
                    </button>
                </div>
            </div>    
        </promo>
    )
}

export default MascaraPromo;