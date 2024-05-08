import { Link } from "react-router-dom";

function Registration(){
    return(
        <enter className="flex flex-col justify-center items-center py-28 px-20 gap-4">
            <div className="text-[rgb(135,61,61)] text-center font-bold text-2xl">
                РЕГИСТРАЦИЯ НА <br/>ПРОГРАММУ ЛОЯЛЬНОСТИ
            </div>
            <div className="gap-6">
                <form className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <input type="text" className="p-4 w-[188px] border bg-white rounded-lg" placeholder="Имя" />
                        <input type="text" className="p-4 w-[188px] border bg-white rounded-lg" placeholder="Фамилия" />
                    </div>
                    <input type="email" className="p-4 w-96 border bg-white rounded-lg" placeholder="Электронный адрес" />
                    <input type="tel" className="p-4 w-96 border bg-white rounded-lg" placeholder="Номер телефона"
                        pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?" required></input>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center text-xs pl-1 text-[rgb(40,41,44)]">
                Регистрируясь, Вы соглашаетесь с
                <div className="flex flex-row gap-2">
                    <input type="checkbox" className="p-4" placeholder="Условиями и Политикой конфиденциальности"/>
                        <Link to="/zatrolen_loh">Условиями</Link>и<Link to="/zatrolen_loh">Политикой конфиденциальности</Link>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="w-64 p-4 border border-solid border-black rounded-lg 
                    hover:bg-[rgb(135,61,61)] hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                    <Link to="/promotions">
                        Зарегистрироваться
                    </Link>
                </button>
            </div>
        </enter>
    )
}

export default Registration;