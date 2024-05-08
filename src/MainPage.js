import Header from "./components/Header";
import Footer from "./components/Footer";
import AngelsPromo from "./components/AngelsPromo";
import MascaraPromo from "./components/MascaraPromo";
import SliderAng from "./components/SliderAng";
import Loyal from "./components/Loyal";
import GalleryCol from "./components/GalleryCol";

function MainPage() {
    return (
        <div className="w-full">
            <Header />
            <main className="bg-red-50">
                <AngelsPromo />
                <MascaraPromo />
                <SliderAng />
                <Loyal />
                <GalleryCol />
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;