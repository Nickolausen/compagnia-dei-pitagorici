import { useEffect, useState } from "react"
import getEvents from "../lib/db-eventi"
import './EventsList.module.css'
import EventCard from "./EventCard"

/**
 * UI Component to display events as list of cards
 * @returns UI Component to display events as list of cards
 */
export default function EventsList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const eventsCount = getEvents().length
        let fetchedCards = getEvents().map(evt =>
            <div key={evt.event_id} className="col-12 col-lg-6 d-flex justify-content-center">
                <EventCard
                    event_url={evt.event_url}
                    thumbnail={evt.thumbnail_src}
                    title={evt.event_name}
                    description={`${evt.location}, ${evt.date}`}
                    url={evt.event_url}>
                </EventCard>
            </div>
        )
        if (eventsCount % 2 !== 0) {
            fetchedCards.pop()
            fetchedCards.push(getEvents().map(evt => <div key={evt.event_id} className="col-12 d-flex justify-content-center">
                <EventCard
                    event_url={evt.event_url}
                    thumbnail={evt.thumbnail_src}
                    title={evt.event_name}
                    description={`${evt.location}, ${evt.date}`}
                    url={evt.event_url}>
                </EventCard>
            </div>).at(eventsCount - 1))
        }
        setCards(fetchedCards); // Aggiorniamo lo stato una sola volta
    }, []);

    return (
        <section id="rassegne" className='container-fluid d-flex flex-column pt-sm-5'>
            <h2 className="fs-1 pb-3 pt-5 text-center">I nostri eventi</h2>
            <div className="row gy-5">
                { cards }
            </div>
        </section>
    )
}