import Header from "./components/Header";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";
import HowWorks from "./components/HowWorks";
import WhatsIn from "./components/WhatsIn";
import OtherThings from "./components/OtherThings";

function Promotions() {
    return (
        <div>
            <Header />
            <main className="bg-red-50">
                <PromoBanner/>
                <HowWorks/>
                <WhatsIn/>
                <OtherThings/>
            </main>
            <Footer />
        </div>
    );
}

export default Promotions;