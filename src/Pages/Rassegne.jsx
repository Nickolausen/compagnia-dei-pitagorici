import { useState, useEffect } from "react"
import { gapi } from "gapi-script"

const event_ids = [
    "notte_pitagorica".toUpperCase(),
    "itinerari_cosmici".toUpperCase()
] 

function Rassegne() 
{
    const [thumbnails, setThumbnails] = useState([])

    const addElement = (newElement) => {
        setThumbnails([...thumbnails, newElement])
    }

    return (
        <section id="rassegne" className='d-flex justify-content-center align-items-center flex-column pt-sm-5 pt-lg-0'>
            <h2 className="fs-1">Le ultime rassegne</h2>

            <div id="carouselExampleCaptions" className="d-none d-sm-inline carousel slide">
            <div className="carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                />
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.googleapis.com/drive/v2/files/1RhzZCAOJtc7xb8zhvGv9pKScEWaQ8t0z?key=AIzaSyCh-HLHmDeh6SaGrEtzVCeWFooviJN2T5o&alt=media&source=downloadUrl" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>ITINERARI COSMICI</h5>
                        <p>Rocca Malatestiana @ Cesena (FC), 29 Luglio 2024 - <span className="fst-italic">Scopri di più</span></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="src\assets\imgs\notte_pit1.JPG" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>NOTTE PITAGORICA</h5>
                        <p>Palazzo del Ridotto @ Cesena (FC), 07 Maggio 2024 - <span className="fst-italic">Scopri di più</span></p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </section>
    )
}

export default Rassegne