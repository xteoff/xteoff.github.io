import { useState } from "react";

function CartIns(){
    const [count, setCount] = useState(1);

    function alr(){
        alert("Заказ оформляется! Спасибо, за покупку.");
    }
  
    function clickMinus() {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  
    function clickPlus(){
      if (count < 10) {
        setCount(count + 1);
      }
    }

    return(
        <inside className="flex flex-col container mx-auto py-8">
            <div className="flex justify-space-around border-black border-b gap-8 lg:gap-24 justify-center items-center text-2xl px-1 py-5 md:flex-nowrap flex-wrap">
                <div className="flex justify-center w-12">
                    <img src="media/close.svg" className="w-8 h-8 cursor-pointer" alt="x" />
                </div>
                <div className="h-60 flex-[1_1_100%] md:flex-initial md:h-40">
                    <img src="media/Angels/палетка.webp" className="w-full h-full object-contain rounded-xl" alt="" />
                </div>
                <div className="text-center w-full md:max-w-60 lg:w-auto">
                    9-Color Eyeshadow Palette
                </div>
                <div className="flex items-center place-self-center text-black tracking-[.25rem]
                    border-solid border-[rgb(135,61,61)] border rounded-xl text-2xl">
                  <p className={'pl-6 py-3 pr-6 rounded-l-xl transition-all' + (count <= 1 ? ' text-gray-600' : ' cursor-pointer hover:bg-[rgb(135,61,61)]')} onClick={clickMinus}>-</p>
                  <p className='px-4 py-3'>{count}</p>
                  <p className={'pl-6 py-3 pr-6 rounded-r-xl transition-all' + (count >= 10 ? ' text-gray-600' : ' cursor-pointer hover:bg-[rgb(135,61,61)]')} onClick={clickPlus}>+</p>
                </div>
                <div className="">
                    ₽&nbsp;{(4150 * count).toLocaleString().replace(/,/g, " ")}
                </div>
            </div>

            <div className="flex flex-row justify-end gap-6 pr-16 py-5">
                <div className="text-left font-extralight text-2xl">
                    Общая стоимость заказа:
                </div>
                <div className="text-rigth font-bold text-2xl text-[rgb(135,61,61)]">
                    ₽&nbsp;{(4150 * count).toLocaleString().replace(/,/g, " ")}
                </div>
            </div>

            <div className="">
                <div className="text-center font-extralight text-3xl py-5">
                    Укажите адрес доставки
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <input type="text" className="p-4 w-[188px] border bg-white rounded-lg" placeholder="Город" />
                            <input type="text" className="p-4 w-[188px] border bg-white rounded-lg" placeholder="Улица" />
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="text" className="p-4 w-[188px] border bg-white rounded-lg" placeholder="Дом" />
                            <input type="text" className="p-4 w-[188px] border bg-white rounded-lg" placeholder="Квартира" />
                        </div>
                    </form>
                    <div>
                        <button onClick={alr} className="w-64 p-4 border border-solid border-black rounded-full
                            hover:bg-[rgb(135,61,61)] hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                                Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </inside>
    )
}

export default CartIns;