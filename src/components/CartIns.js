import { useState } from "react";

function CartIns(){
    const [count, setCount] = useState(1);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
        const openModal = () => {
            setModalIsOpen(true);
            document.body.style.overflow = "hidden";
        };
    
        const closeModal = () => {
            setModalIsOpen(false)
            document.body.style.overflow = "scroll";
        };
    
        const modalContent = (
            <div className="flex flex-col fixed top-0 w-[100vw] h-[100vh] justify-center items-center bg-[#00000080] z-10">
                <div className="bg-red-50 rounded-xl p-28 relative">
                    <div className="flex absolute top-16 right-16 justify-end cursor-pointer">
                        <img src="media/close.svg" className="w-8 h-8" alt="x" onClick={closeModal} />
                    </div>
                    <div className="flex gap-16 flex-col place-content-center justify-center">
                        <div className="flex justify-center text-center text-4xl text-black font-bold">
                            Заказ оформляется! <br/>Сумма вашего заказа составляет {(4150 * count).toLocaleString().replace(/,/g, " ")} ₽&nbsp;.
                        </div>
                    </div>
                </div>
            </div>
        );

    function clickMinus() {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  
    function clickPlus(){
        setCount(count + 1);
    }

    return(
        <m>
            <inside className="flex flex-col container mx-auto py-8">
                <div className="flex justify border-black border-b gap-24 items-center text-2xl px-1 py-5 flex-nowrap">
                    <div className="flex justify-center w-12">
                        <img src="media/close.svg" className="w-8 h-8 cursor-pointer" alt="x" />
                    </div>
                    <div className="h-40 flex-initial">
                        <img src="media/Angels/палетка.webp" className="w-full h-full object-contain rounded-xl" alt="" />
                    </div>
                    <div className="text-center w-auto">
                        9-Color Eyeshadow Palette
                    </div>
                    <div className="flex items-center place-self-center text-black tracking-[.25rem]
                        border-solid border-[rgb(135,61,61)] border rounded-xl text-2xl">
                    <p className={'pl-6 py-3 pr-6 rounded-l-xl transition-all select-none' + (count <= 1 ? ' text-gray-600' : ' cursor-pointer  hover:bg-[rgb(135,61,61)]')} onClick={clickMinus}>-</p>
                    <p className='px-4 py-3'>{count}</p>
                    <p className="pl-6 py-3 pr-6 rounded-r-xl transition-all cursor-pointer select-none hover:bg-[rgb(135,61,61)]" onClick={clickPlus}>+</p>
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
                            <button onClick={openModal} className="w-64 p-4 border border-solid border-black rounded-full
                                hover:bg-[rgb(135,61,61)] hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                                    Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </inside>
            {modalIsOpen ? modalContent : ""}
        </m>
    )
}

export default CartIns;