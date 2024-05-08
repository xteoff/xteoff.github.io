import Header from "./components/Header";
import Footer from "./components/Footer";
import Sign from "./components/Sign";

function SignUp() {
    return (
        <>
            <Header />
            <main className="bg-red-100">
                <Sign/>
            </main>
            <Footer />
        </>
    );
}

export default SignUp;