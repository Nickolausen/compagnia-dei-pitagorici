import styles from './AboutUs.module.css'
import { RowsPhotoAlbum } from 'react-photo-album'
import "react-photo-album/rows.css";

function AboutUs() 
{
    return (
        <section id="chi-siamo" className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="ps-0 px-lg-5 mx-3 mx-lg-0">
                        <div className='d-flex flex-column justify-content-center align-items-center px-0'>
                            {/* <img className="w-25 py-3" src="src\assets\imgs\tetraktys_nowriting.png"></img> */}
                            <img className={styles.icon + " w-25 pt-3 exclude"} src={import.meta.env.BASE_URL + "\\imgs\\white_LOGO_PASCAL.png"}></img>
                            <hr className='w-100'/>
                        </div>
                        <h2 className='fs-1 py-3'>Una "congregazione" Made in Pascal</h2>
                        <p className="fs-4 lh-md mt-5">
                            <p>
                                La <span className="fw-bold">Compagnia dei Pitagorici</span> affonda le proprie radici 
                                nell'<span className="fw-bold">Istituto Tecnico Tecnologico "Blaise Pascal" di Cesena</span> ed è composta da docenti, studenti ed ex studenti della nostra scuola. 
                            </p>
                            <p>La nostra missione è semplice: diffondere la <span className='fw-bold'>passione</span> per la <span className='title-like'>matematica</span> e, più in generale, l'<span className='fw-bold'>amore</span> per la <span className='title-like'>conoscenza</span>.</p> 
                            <p>
                                Non sempre si riesce a cogliere la bellezza di una disciplina attraverso i banchi di scuola, 
                                per cui le nostre rassegne propongono una chiave di lettura <span className="fw-bold">leggera</span> <span className="fst-italic">(ma non banale!)</span> di concetti più disparati: Matematica, Letteratura, Musica, Informatica, Astronomia...</p>
                            <p className='pt-4'>Per partecipare ai nostri eventi occorre seguire una sola regola: <br></br><span className="title-like">non parlare di cose pitagoriche al buio</span>!</p>
                        </p>
                    </div>
                </div>
                <div className="col-12 pt-5">
                    <div className="container-fluid px-0">
                        <div className="row g-3">
                            <div className="col-md-6 col-12">
                                <img className="w-100" src={import.meta.env.BASE_URL + '\\imgs\\chi_siamo0.JPG'}></img>
                            </div>
                            <div className="col-md-6 col-12">
                                <img className="w-100" src={import.meta.env.BASE_URL + '\\imgs\\chi_siamo1.JPG'}></img>
                            </div>
                        </div>
                        <div className="row g-3 pt-3">
                            <div className="col-12 col-md-12 col-lg-4">
                                <img className="w-100" src={import.meta.env.BASE_URL + '\\imgs\\chi_siamo2.JPG'}></img>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <img className="w-100" src={import.meta.env.BASE_URL + '\\imgs\\chi_siamo3.JPG'}></img>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <img className="w-100" src={import.meta.env.BASE_URL + '\\imgs\\chi_siamo4.JPG'}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs