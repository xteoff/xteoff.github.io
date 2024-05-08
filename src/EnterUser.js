import Header from "./components/Header";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";

function EnterUser() {
    return (
        <>
            <Header />
            <main className="bg-red-100">
                <LogIn/>
            </main>
            <Footer />
        </>
    );
}

export default EnterUser;