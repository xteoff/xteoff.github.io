import { Link } from "react-router-dom";


function Card({ img1, img2, price, text }) {
    return(
        <>
            <Link to = "/item" className="flex flex-col justify-center items-center cursor-pointer display-none-1st-img-on-hover">
                <div className="w-60">
                    <img src={img1} className="w-full h-full object-cover rounded-t-xl" alt="" />
                    <img src={img2} className="w-full h-full border border-[rgb(189,155,139)] object-cover rounded-t-xl" alt="" />
                </div>
                <div className="w-60 h-20 gap-2 items-center flex justify-center flex-col text-center border border-[rgb(189,155,139)] bg-[rgb(252,218,218)] px-7 rounded-b-xl">
                    <div>
                        {text} 
                    </div>
                    <div>
                        {price}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card;