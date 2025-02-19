import styles from './AboutUs.module.css'
import { useState } from 'react';
import { getImageMetadata } from '../lib/utils';
import DelayedGallery from './DelayedGallery';

function AboutUs() 
{
    const [ photos, setPhotos ] = useState([])
    
    useState(() => {
        let fetchedPhotos = []
        for (let i = 0; i < 5; i++) 
        {
            let imgPath = import.meta.env.BASE_URL + 'imgs\\about_us\\chi_siamo' + i + '.JPG'
            getImageMetadata(imgPath, (_, img) => {
                fetchedPhotos.push({
                    src: img.src,
                    width: img.naturalWidth,
                    height: img.naturalHeight
                })
            })
        }

        setPhotos(fetchedPhotos)
    })
    
    return (
        <section id="chi-siamo" className='container d-flex align-items-stretch py-5'>
            <div className="row">
                <div className="col-12 col-xl-5">
                <img className={styles.icon + " w-25 pt-3 exclude"} src={import.meta.env.BASE_URL + "imgs\\white_LOGO_PASCAL.png"}></img>
                <h2 className='text-center text-xl-start display-4 pb-3 pt-4'>Una "congregazione" Made in Pascal</h2>
                    <article className="fs-4 lh-md text-center text-xl-start">
                        <p>
                            Il progetto della “<b><i>Notte Pitagorica</i></b>” parte dai banchi di scuola per generare un movimento di idee costruttivo e innovativo 
                            sulla matematica e sulla sua applicazione nella realtà di ogni giorno. L'obiettivo è quello di divulgare la conoscenza 
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
                    <DelayedGallery photos={photos} targetRowHeight={300} timeout={3500}/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs