import './App.css'
import Home from './Pages/Home'
import Rassegne from './Pages/Rassegne'
import AboutUs from './Pages/AboutUs'
import Rassegna from './Components/Rassegna'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <article>
        <Home></Home>
      </article>
        <AboutUs></AboutUs>
      <article>
        <Rassegne></Rassegne>
      </article>

      <Rassegna
        title="Itinerari Cosmici"
        location="Rocca Malatestiana @ Cesena (FC)"
        data="29 Luglio 2024"
        description="Dalla visione di Pitagora al segreto di Copernico, dall’ossessione di Schwarzschild all’errore di Einstein, fino agli orizzonti cosmologici e al dilemma di Archita."
        folder_name="itinerari_cosmici"
        ></Rassegna>

      <Footer></Footer>
    </>
  )
}

export default App
