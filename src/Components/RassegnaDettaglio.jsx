import styles from './RassegnaDettaglio.module.css'
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useState, useEffect } from 'react';
import get_DB_Eventi from '../DB_Eventi';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import HomeLink from './HomeLink';

function RassegnaDettaglio() {     
    const [rassegna, setRassegna] = useState({})
    const { event_url } = useParams()

    useEffect(() => 
        {
            let fetchedRassegna = get_DB_Eventi().find((el) => el.event_url === event_url)
            setRassegna(fetchedRassegna)
        }, [])

    return <>
        <HomeLink></HomeLink>
        <article className='pt-3 mt-4'>
            <p className='fs-5'>{rassegna.location},<br className='d-inline d-md-none'></br> {rassegna.date}</p>
            <h1>{rassegna.event_name}</h1>
            <p className="fs-2 px-2 px-md-0 fst-italic">{rassegna.description}</p>
        </article>
        <div className="d-flex w-100 justify-content-center align-items-center flex-column">
            <hr className='w-100'/>
        </div>
        <div className="container-fluid pt-4">
             <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8">
                        <h3>Video Live</h3>
                        <div className="ratio ratio-16x9">
                            <a href={'https://www.youtube.com/watch?v=' + rassegna.yt_id} target='_blank'>
                                <img className='img-fluid rounded' src={rassegna.yt_thumbnail}>
                                </img>
                                <img className={styles.yt_logo + ' position-absolute start-50 top-50 translate-middle exclude'} src='src/assets/imgs/YT_logo.png'></img>
                            </a>
                        </div>
                        <p className='pt-4 fs-5'>Clicca sull'immagine per visionarlo su YouTube!</p>
                    </div>
                    <div className="pt-4 pt-sm-0 col-12 col-sm-4">
                        <h3>Volantino</h3>
                        <img className="shadow-lg rounded img-fluid" src={rassegna.volantino_src}/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="d-flex w-100 justify-content-center align-items-center flex-column">
                <hr className='w-100'/>
            </div>
            <h2 className='pt-5 fs-1'>Galleria</h2>
        </div>
        <Footer></Footer>
    </>
}

export default RassegnaDettaglio