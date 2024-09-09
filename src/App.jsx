import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Footer from './Components/Footer'
import CardRassegna from './Components/CardRassegna'
import RassegnaDettaglio from './Components/RassegnaDettaglio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import get_DB_Eventi from './DB_Eventi'
import { useState, useEffect } from 'react'
import NotFound from './Pages/NotFound'
import { HashLink } from 'react-router-hash-link'
function App() {
  
  const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchedCards = get_DB_Eventi().map(evt => {
            return (<div key={evt.event_id} className="pt-3 col-12">
                <HashLink to={evt.event_url + "#rassegna"}>
                  <CardRassegna
                      thumbnail={evt.thumbnail_src}
                      title={evt.event_name}
                      description={`${evt.location}, ${evt.date}`}
                      url={evt.event_url}>
                  </CardRassegna>
                </HashLink>
            </div>)
        });
        setCards(fetchedCards); // Aggiorniamo lo stato una sola volta
    }, []);
    
  return (
    <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index path='/' element={<>
            <article id='home'>
              <Home/>
            </article>

            <AboutUs/>
        
            <article style={{minWidth:300}}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <hr className='w-100'/>
              </div>
            </article>
        
            <section id="rassegne" className='container-fluid d-flex justify-content-center align-items-center flex-column pt-sm-5'>
              <h2 className="fs-1 pb-3 pt-5">Ultime rassegne</h2>
              <div className="row">
                  {cards}
              </div>
            </section>
            <Footer/>
          </>}></Route>
          <Route path="/:event_url" element={<RassegnaDettaglio></RassegnaDettaglio>}></Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>        
    </Router>
  )
}

export default App