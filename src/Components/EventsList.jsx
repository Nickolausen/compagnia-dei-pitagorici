import { useEffect, useState } from "react";
import getEvents from "../lib/db-eventi";
import CardRassegna from "./CardRassegna";

/**
 * UI Component to display events as list of cards
 * @returns UI Component to display events as list of cards
 */
export default function EventsList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchedCards = getEvents().map(evt =>
            <div key={evt.event_id} className="pt-3 col-12 d-flex justify-content-center">
                <CardRassegna
                    event_url={evt.event_url}
                    thumbnail={evt.thumbnail_src}
                    title={evt.event_name}
                    description={`${evt.location}, ${evt.date}`}
                    url={evt.event_url}>
                </CardRassegna>
            </div>
        );
        setCards(fetchedCards); // Aggiorniamo lo stato una sola volta
    }, []);

    return (
        <section id="rassegne" className='container-fluid d-flex flex-column pt-sm-5'>
            <h2 className="fs-1 pb-3 pt-5">Ultime rassegne</h2>
            <div className="row">
                {cards}
            </div>
        </section>
    )
}