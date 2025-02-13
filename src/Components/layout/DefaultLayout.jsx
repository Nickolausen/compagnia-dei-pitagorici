import Footer from "./Footer";

export default function DefaultLayout({ children }) {
    return <>
        <main className="px-5 mx-5">
            {children}
        </main>
        <Footer/>
    </>
}