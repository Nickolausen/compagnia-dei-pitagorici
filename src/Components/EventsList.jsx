import { useEffect, useState } from "react";
import getEvents from "../lib/db-eventi";
import { HashLink } from "react-router-hash-link";
import CardRassegna from "./CardRassegna";

export default function EventsList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
      const fetchedCards = getEvents().map(evt => {
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
      <section id="rassegne" className='container-fluid d-flex justify-content-center align-items-center flex-column pt-sm-5'>
          <h2 className="fs-1 pb-3 pt-5">Ultime rassegne</h2>
          <div className="row">
              {cards}
          </div>
      </section>
    )
}