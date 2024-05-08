import Header from "./components/Header";
import Footer from "./components/Footer";
import DescItem from "./components/DescItem";


function Item(){
    return(
        <>
            <Header/>
            <main>
                <DescItem />
            </main>
            <Footer/>
        </>
    )
}

export default Item;