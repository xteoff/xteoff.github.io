function OtherThings(){
    return(
        <inside className="flex flex-col gap-5 justify-center items-center py-8 px-20">
            <div className="text-4xl text-center font-extralight px-6">
                Другие акции
            </div>

            <div className="flex flex-col gap-8">
                <promo className="flex flex-col lg:flex-row justify-center text-black lg:h-[400px] px-5 lg:px-16">
                    <div className="w-full">
                        <img src="/media/pal.SVG" className="w-full h-full object-cover rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" alt="" />
                    </div>
                    <div className="w-full gap-6 items-center flex justify-center flex-col text-center bg-red-100 py-16 px-16 
                        rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl">
                        <div className="text-4xl font-bold text-stone-950">
                            СКИДКА 15% <br/>НА ПЕРВЫЙ ЗАКАЗ
                        </div>
                    </div>
                        
                </promo>

                <promo className="flex flex-col lg:flex-row justify-center text-black lg:h-[400px] px-5 lg:px-16">
                    <div className="w-full">
                        <img src="/media/Mascara.PNG" className="w-full h-full object-cover rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl" alt="" />
                    </div>
                    <div className="w-full gap-6 items-center flex justify-center flex-col text-center bg-red-100 px-16 py-16
                    rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl">
                        <div className="text-4xl font-bold text-stone-950">
                            Chocolate wonder-shop mascara
                        </div>
                        <div className="text-3xl font-extralight">
                            В подарок при покупке от<br/>11 000р 
                        </div>
                    </div>    
                </promo>
            </div>
        </inside>
    )
}

export default OtherThings;