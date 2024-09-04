import { useState, useEffect } from "react"
import CardRassegna from "../Components/CardRassegna"

const event_ids = [
    "NOTTE_PITAGORICA",
    "ITINERARI_COSMICI"
] 

const events = [
    {
        id: 0,
        thumbnail_src: "",
        title: "Notte Pitagorica",
        location: "Palazzo Del Ridotto @ Cesena (FC)",
        date: "07 Maggio 2024",
        link: ""
    },
    {
        id: 1,
        thumbnail_src: "",
        title: "Itinerari Cosmici",
        location: "Rocca Malatestiana @ Cesena (FC)",
        date: "29 Luglio 2024",
        link: ""
    }
]

function Rassegne() 
{
    let idx = 0
    event_ids.forEach(event_id => {
            events[idx].thumbnail_src = "src\\assets\\imgs\\" + event_id + "_COVER.JPG"
            idx += 1
        }
    )

    const cards = events.map(evt => 
        {
            return (
            <div key={evt.id} className="pt-3 col-12">
                <CardRassegna
                    thumbnail={evt.thumbnail_src} 
                    title={evt.title}
                    description={`${evt.location}, ${evt.date}`}></CardRassegna>
            </div> )
        }).reverse()
    
    return (
        <section id="rassegne" className='container-fluid d-flex justify-content-center align-items-center flex-column pt-sm-5'>
            <h2 className="fs-1 pb-3 pt-5">Ultime rassegne</h2>
            <div className="row">
                {cards}
            </div>
        </section>
    )
}

export default Rassegne