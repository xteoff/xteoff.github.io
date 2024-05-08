import { Link } from "react-router-dom";

function GalleryCol(){
    return(
        <gallery className="flex flex-col justify-center items-center pb-8 px-20 gap-5">
            <div className="text-center font-extralight text-4xl pb-5">
                Коллекции
            </div>
            <div className="flex flex-col md:flex-row gap-3"> 
                <div className="display-none-1st-img-on-hover">
                    <img src="/media/Coll1.SVG" className="h-fit rounded-2xl" alt="" />
                    <img src="/media/Coll1_dop.SVG" className="h-fit rounded-2xl object-cover" alt="" />
                </div>
                <div className="display-none-1st-img-on-hover">
                    <img src="/media/Coll2.SVG" className="h-fit rounded-2xl" alt="" />
                    <img src="/media/Coll2_dop.SVG" className="h-fit rounded-2xl object-cover" alt="" />
                </div>
                <div className="display-none-1st-img-on-hover">
                    <img src="/media/Coll3.SVG" className="h-fit rounded-2xl" alt="" />
                    <img src="/media/Coll3_dop.SVG" className="h-fit rounded-2xl object-cover" alt="" />
                </div>
            </div>
            <div>
                <button className="flex font-extralight text-2xl p-4 border border-solid border-black rounded-full px-5 py-3
                hover:bg-[rgb(135,61,61)] hover:border-[rgb(135,61,61)] hover:ease-in-out duration-300 hover:text-black">
                    <Link to="/collections">
                        Начать покупки
                    </Link>
                </button>
            </div>
        </gallery>
    )
}

export default GalleryCol;