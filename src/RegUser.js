import Header from "./components/Header";
import Footer from "./components/Footer";
import Registration from "./components/Registration";

function RegUser() {
    return (
        <>
            <Header />
            <main className="bg-red-100">
                <Registration/>
            </main>
            <Footer />
        </>
    );
}

export default RegUser;