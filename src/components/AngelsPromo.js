import { Link } from "react-router-dom";

function AngelsPromo(){
  return(
    <promo className="flex gap-4 flex-col justify-center items-left text-white h-full py-40 px-20 bg-[url(ang.svg)] bg-right">
      <div className="gap-2">
        <div className="flex text-xl text-[rgb(169,96,97)] font-bold">
          новая коллекция
        </div>
        <div className="flex text-5xl text-[rgb(135,61,61)] font-bold">
          Little Angel
        </div>
        <div className="flex text-3xl font-normal">
          Вдохновленная<br></br> прекрасными ангельскими<br></br> созданиями и любовью<br></br> к себе
        </div>
      </div>
      <div>
        <button className="flex text-2xl p-4 border border-solid border-white rounded-full px-5 py-4
          hover:bg-[rgb(135,61,61)] hover:border-[rgb(135,61,61)] hover:ease-in-out duration-300 hover:text-black">
          <Link to="/collections">Заказать</Link>
        </button>
      </div>
    </promo>
  )
}

export default AngelsPromo;