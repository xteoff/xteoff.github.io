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

// function Modal(){
//     return(
//         <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-red-100">
//             <div>
//                 123123
//             </div>
//         </div>
//     )
// }

export default Collections;