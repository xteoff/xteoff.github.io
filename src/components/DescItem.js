import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Modal from 'react-modal';


function DescItem() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className="flex gap-7 flex-col place-content-center h-full justify-center py-20 sm:px-20 bg-red-50">
            <div className="flex absolute top-16 right-16 justify-end cursor-pointer">
                <img src="media/close.svg" className="w-8 h-8" alt="x" onClick={closeModal} />
            </div>
            <div className="flex gap-10 flex-col place-content-center justify-center">
                <div className="flex justify-center text-center text-4xl text-black font-bold">
                    Товар успешно добавлен в корзину!
                </div>
                <div className="flex justify-center">
                    <button className="flex justify-center w-64 p-4 border border-solid border-black rounded-full
                        hover:bg-[rgb(135,61,61)] hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                        <Link to="/shopping_card">
                            Перейти в корзину
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );


    let history = useNavigate();
    function handleClick() {
        history(-1);
    }

    return(
        <desc className="flex gap-4 flex-col justify-center min-h-[100vh] max-w-[100vw] py-20 sm:px-20 bg-red-50">
            <div className="flex justify-end cursor-pointer">
                <img src="media/close.svg" className="w-8 h-8" alt="x" onClick={handleClick} />
            </div>
            <div className="gap-9 items-center flex flex-col lg:flex-row justify-center flex-row text-center px-5 h-full">
                <div className="h-full lg:w-4/12">
                    <img src="media/Angels/палетка.webp" className="w-full h-full object-contain" alt="" />
                </div>
                <div className="flex flex-col justify-center items-start gap-4 lg:w-8/12">
                    <div className="flex text-left text-4xl text-black font-bold">
                        Палетка теней Little Angel 9-Color Eyeshadow Palette
                    </div>
                    <div className="text-xs text-[rgb(40,41,44)]">
                        Артикул: 43565545455778
                    </div>
                    <div className="flex flex-row gap-2 text-xl font-extralight">
                        4 150 р.   <div className="line-through text-gray-600">6 500 р.</div> 
                    </div>
                    <div className="text-red-50">
                        Текст
                    </div>
                    <div>
                        <button onClick={openModal}className="w-64 p-4 border border-solid border-black rounded-full
                            hover:bg-[rgb(135,61,61)] hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                                Добавить в корзину
                        </button>
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                            {modalContent}
                        </Modal>
                    </div>
                    <div className="flex flex-col text-left text-xl text-black font-extralight gap-3">
                        <div>
                            Вдохновленная средневековой готической архитектурой, упаковка отражает то, как солнечный свет проникает 
                            сквозь окно, выражая славу и священность. В центре изящно вырезанный молящийся ангел добавляет поэтической грации.
                        </div>
                        <div>
                            Эта палитра имеет стойкую, удобную в нанесении порошковую формулу. Благодаря высокой пигментации и универсальному 
                            выбору цветов он незаменим в различных случаях.
                        </div>
                        <div>
                            01  Edens Angel<br/>
                            02 Weeping Angel
                        </div>
                    </div>
                </div>
            </div>
        </desc>
    )
}


export default DescItem; 