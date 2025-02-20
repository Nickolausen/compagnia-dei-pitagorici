import styles from './AboutUs.module.css'
import { useState } from 'react'

function AboutUs() {
    const [ photos, setPhotos ] = useState([])

    useState(() => {
        const fetchedPhotos = []
        for (let i = 0; i < 5; i++) {
            const imgPath = import.meta.env.BASE_URL.concat(`imgs\\about_us\\chi_siamo${i}.jpg`)
            fetchedPhotos.push(i === 2 ? 
                <div key={imgPath} className='col-12'>
                    <img className="img-fluid" src={imgPath}/>
                </div> : <div key={imgPath} className='col-12 col-xl-6'>
                    <img className="img-fluid" src={imgPath}/>
                </div>
            )
        }
        setPhotos(fetchedPhotos)
    })
    
    return (
        <section id="chi-siamo" className='container d-flex align-items-stretch py-5'>
            <div className="row">
                <div className="col-12 col-xl-5">
                <img className={styles.icon + " w-25 pt-3 exclude"} src={import.meta.env.BASE_URL + "imgs\\white_LOGO_PASCAL.png"}></img>
                <h2 className='text-center text-xl-start display-6 pb-3 pt-4'>Una "congregazione" <br /><span className='title-like display-3'>Made in Pascal</span></h2>
                <h3></h3>
                    <article className="fs-5 lh-md text-center text-xl-start">
                        <p className={styles.first_paragraph}>
                            <b className='title-like'>Notte Pitagorica</b> — un progetto che parte dai banchi di scuola per generare un movimento di idee costruttivo e innovativo 
                            sulla matematica e sulla sua applicazione nella realtà di ogni giorno.
                        </p>
                        <p> 
                            L'obiettivo è quello di divulgare la conoscenza 
                            scientifica in forma di spettacolo, unendo all’<b>indagine matematica</b> il fascino della <b>musica</b> e della <b>poesia</b>, 
                            suscitando nel pubblico quel senso di stupore 
                            che contraddistingue la <b>bellezza della scoperta</b>.
                        </p>
                        <p>
                            Protagonisti di questo viaggio sono <b>studenti</b> ed <b>ex studenti</b> del nostro istituto che, 
                            dialogando con i docenti, affrontano con <b>passione</b> e <b>competenza</b> questioni
                            scientifiche che riflettono la complessità del reale e le 
                            sfide della nostra contemporaneità.
                        </p>
                    </article>
                </div>
                <div className="col-12 col-xl-7 px-xl-5 d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row g-3">
                            { photos }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs