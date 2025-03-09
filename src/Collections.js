import Header from "./components/Header";
import Footer from "./components/Footer";
import BannerAng from "./components/BannerAng";
import BannerSwan from "./components/BannerSwan";
import BannerMermaid from "./components/BannerMermaid";

function Collections() {
    return (
        <>
            <Header />
            <main className="bg-red-50">
                <BannerAng/>
                <BannerSwan/>
                <BannerMermaid/>
            </main>
            <Footer />
        </>
    );
}


export default Collections;