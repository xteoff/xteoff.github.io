import Header from "./components/Header";
import Footer from "./components/Footer";
import CartIns from "./components/CartIns";

function ShoppingCard(){
    return(
        <div>
            <Header />
            <main className="bg-red-50">
                <CartIns/>
            </main>
            <Footer />
        </div>
    )
}

export default ShoppingCard;