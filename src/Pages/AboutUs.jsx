import styles from './AboutUs.module.css'

function AboutUs() 
{
    return (
        <section id="chi-siamo" className='container-fluid mt-5 pt-5'>
            <div className={styles.row + " row"}>
                <div className="col-12 col-lg-5 d-flex flex-column align-items-end justify-content-center">
                    <div className="ps-0 px-lg-5 w-auto mx-3 mx-lg-0 text-start">
                        <div className='d-flex flex-row justify-content-center justify-content-lg-start align-items-center px-0'>
                            <img className="w-25 py-3" src="src\assets\imgs\tetraktys_nowriting.png"></img>
                            <img className="w-25 py-3" src="src\assets\imgs\white_LOGO_PASCAL.png"></img>
                        </div>
                        <h2 className='fs-2'>Chi siamo</h2>
                        <p className="fs-5 lh-md mt-3">
                            <p>
                                La <span className="fw-bold">Compagnia dei Pitagorici</span> affonda le proprie radici 
                                nell'<span className="fw-bold">Istituto Tecnico Tecnologico "Blaise Pascal" di Cesena</span> ed è composta da docenti, studenti ed ex studenti della nostra scuola. 
                            </p>
                            <p>La nostra missione è semplice: diffondere la <span className='fw-bold'>passione</span> per la <span className='title-like'>matematica</span> e, più in generale, l'<span className='fw-bold'>amore</span> per la <span className='title-like'>conoscenza</span>.</p> 
                            <p>
                                Non sempre si riesce a cogliere la bellezza di una disciplina attraverso i banchi di scuola, 
                                per cui le nostre rassegne propongono una chiave di lettura <span className="fw-bold">leggera</span> <span className="fst-italic">(ma non banale!)</span> di concetti più disparati: Matematica, Letteratura, Musica, Informatica, Astronomia...</p>
                            </p>
                        <p className="fs-5">Per partecipare ai nostri eventi occorre seguire una sola regola:</p> 
                        <p className='pb-3 fs-4'><span className="title-like">non parlare di cose pitagoriche al buio</span>!</p>
                    </div>
                </div>
                <div className={styles.carousel_cell + " col-12 col-lg-7 d-flex align-items-center justify-content-center flex-column"}>
                <div
                    id="carouselExampleAutoplaying"
                    className="carousel slide"
                    data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="src\assets\imgs\chi_siamo1.JPG" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="src\assets\imgs\chi_siamo2.JPG" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="src\assets\imgs\chi_siamo3.JPG" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs