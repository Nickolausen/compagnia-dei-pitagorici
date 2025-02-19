import Footer from "./Footer";
import Particles from "../third-party/Particles/Particles";

export default function DefaultLayout({ children }) {
    return <>
        <main className="z-n1 px-3 px-md-5 mx-0 mx-md-5 d-flex flex-column justify-content-evenly">
            { children }
        </main>
        <Footer/>
    </>
}