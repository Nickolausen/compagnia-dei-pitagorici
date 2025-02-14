import Footer from "./Footer";

export default function DefaultLayout({ children }) {
    return <>
        <main className="px-3 px-md-5 mx-0 mx-md-5 d-flex flex-column justify-content-evenly">
            { children }
        </main>
        <Footer/>
    </>
}