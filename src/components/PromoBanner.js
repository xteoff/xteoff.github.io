import { Link } from "react-router-dom";

function PromoBanner(){
    return(
        <promo className="flex gap-9 bg-cover flex-col justify-center items-center text-black h-fit py-20 px-20 bg-[url(pic.PNG)] bg-center">
            <div className="text-4xl text-center font-bold px-6">
                Эксклюзивная программа лояльности
            </div>
            <div className="flex text-2xl text-center font-ligth lg:px-24">
                Оформите подписку и получайте набор косметики каждый месяц. 
                Наполнение и количeство продуктов зависит от колличества и общей суммы ваших совершенных заказов за год. 
            </div>
            <div>
                <button className="flex text-2xl p-4 border border-solid border-black rounded-full px-5 py-4
                    hover:bg-[rgb(135,61,61)] hover:border-[rgb(135,61,61)] hover:ease-in-out duration-300 hover:text-black">
                    <Link to="/sign_up">
                        Присоединиться сейчас
                    </Link>
                </button>
            </div>
        </promo>
    )
}

export default PromoBanner;