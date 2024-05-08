import { Link as RouterLink } from "react-router-dom";

const links = [
  {
      href: "/",
      text: "Главная",
  },
  {
      href: "/collections",
      text: "Колекции",
  },
  {
      href: "/promotions",
      text: "Акции",
  },
  {
      href: "/enter",
      text: "Вход",
  },
  {
      href: "/shopping_card",
      text: "Корзина",
  },
];

const sogl = [
  {
      href: "/zatrolen_loh",
      text: "Политика конфиденциальности",
  },
  {
      href: "/zatrolen_loh",
      text: "Условия",
  },
  {
      href: "/zatrolen_loh",
      text: "Политика использования файлов cookie",
  },
];


function Footer() {
  const linksJsx = links.map(
    (elem, i) => {
        return (<Link key={i} href={elem.href} text={elem.text} />)
    }
  ); 

  const soglJsx = sogl.map(
    (elem, i) => {
        return (<Link key={i} href={elem.href} text={elem.text} />)
    }
  ); 

  return(
    <footer className="flex gap-3 flex-col justify-center items-center bg-[rgb(217,217,217)] h-72 px-20">
        <div>
          <div className="font-medium text-lg">
            Подписаться на рассылку:
          </div>
          <div className="flex gap-4"> 
            <input type="email" className="p-4 w-96 border border-solid border-black rounded-lg" placeholder="Электронный адрес" />
            <button className="p-4 border border-solid border-black rounded-lg hover:bg-[rgb(237,230,221)] hover:ease-in-out duration-300">Отправить</button>
          </div>
        </div>
        <div className="flex flex-row gap-8 cursor-pointer">
          <img src="/media/icons/vk2.png" alt="" />
          <img src="/media/icons/youtube2.png" alt="" />
          <img src="/media/icons/inst2.png" alt="" />
        </div>
        <div className="flex gap-8 text-center">
          {linksJsx}
        </div>
        <div className="flex gap-8 text-xs text-center">
          {soglJsx}
        </div>
        <div className="text-xs text-center">
          © 2024, все права защищенны
        </div>
    </footer>
  )
}

function Link({ href, text }) {
  return (
      <RouterLink className="flex text-black hover:text-gray-600 hover:underline underline-offset-2" to={href}>{text}</RouterLink>
  );
}

export default Footer;