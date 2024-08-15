import styles from './Rassegna.module.css'

function Rassegna() {
    return <div className="pt-5">
        <p className="fs-4">Rocca Malatestiana @ Cesena (FC), 29 Luglio 2024</p>
        <h1>ITINERARI COSMICI</h1>
        <p className="fs-3">Dalla visione di <span className="fw-bold">Pitagora</span> al segreto di <span className="fw-bold">Copernico</span>, dall’ossessione di <span className="fw-bold">Schwarzschild</span> all’errore di <span className="fw-bold">Einstein</span>, fino agli orizzonti cosmologici e al dilemma di <span className="fw-bold">Archita</span>.</p>
        <hr />
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <h5>Video Live</h5>
                    <div className="ratio ratio-16x9">
                        <iframe
                            className="rounded"
                            src="https://www.youtube.com/embed/ua4eGl-60rE?si=ZFpQtU_UfIBJB9mW" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p className="pt-3 fs-5"><span className="fw-bold">Suggerimento</span>: Guardalo su YouTube per avere lo schermo intero!</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Volantino</h5>
                    <img className="shadow-lg rounded w-50" src="src\assets\imgs\ITINERARI_COSMICI_Volantino.png"/>
                </div>
            </div>
        </div>

        <p>Un evento in collaborazione con: </p>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className={styles.sponsor} src="src\assets\imgs\ca-2lines-h-b.png"></img>
                </div>
                <div className="col">
                    <img className={styles.sponsor} src="src\assets\imgs\elfifinpolologo.png"></img>
                </div>
            </div>
        </div>
    </div>
}

export default Rassegna