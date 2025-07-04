import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './EventDetails.module.css'
import "react-photo-album/rows.css";

import HomeLink from '../components/HomeLink';
import HorizontalRule from '../components/HorizontalRule';
import LoadingSpinner from '../components/LoadingSpinner';
import DelayedGallery from '../components/DelayedGallery';
import DefaultLayout from '../components/layout/DefaultLayout';
import NotFound from './NotFound';

import { getImageMetadata } from '../lib/utils';
import getEvents from '../lib/db-eventi';
import config from '../config.json'

function EventDetails() {
    const [ shouldRenderVideo, setShouldRenderVideo ] = useState(false)
    const [ rassegna, setRassegna ] = useState({})
    const [ photos, setPhotos ] = useState([])
    const [ volantinoLoaded, setVolantinoLoaded ] = useState(false)
    const { event_url } = useParams()

    /* Boolean flag to decide wether to display or not the photo gallery - turns 'True' when all the photos have been fetched */
    const [ allPhotosLoaded, setAllPhotosLoaded ] = useState(false)

    useEffect(() => 
        {
            let fetchedRassegna = undefined
            fetchedRassegna = getEvents().find((el) => el.event_url === event_url)
            
            if (fetchedRassegna === undefined)
                return <NotFound/>
            setRassegna(fetchedRassegna)
            setShouldRenderVideo(fetchedRassegna.yt_id.localeCompare("") !== 0)

            getImageMetadata(fetchedRassegna.volantino_src, (_) => {
                setVolantinoLoaded(true)
            })

            const baseURL = "https://www.flickr.com/services/rest/?"
            const requestURL = baseURL
                .concat(`method=flickr.photosets.getPhotos&`)
                .concat(`api_key=${config.API_KEY}&`)
                .concat(`photoset_id=${fetchedRassegna.flickr_album_id}&`)
                .concat(`user_id=${config.USER_ID}&`)
                .concat(`format=json&`)
                .concat(`nojsoncallback=1`)
            
            fetch(requestURL)
                .then((res) => res.json())
                .then(data => 
                    {
                        let fetchedPhotos = [];
                        getImageMetadata(fetchedRassegna.volantino_src, (_, img) => {
                            fetchedPhotos.push({
                                src: img.src,
                                width: img.naturalWidth,
                                height: img.naturalHeight
                            })
                        })

                        for (const pic of data.photoset.photo) 
                        {
                            getImageMetadata(`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`, (_, img) => {
                                fetchedPhotos.push({
                                    src: img.src,
                                    width: img.naturalWidth,
                                    height: img.naturalHeight
                                })
                            });
                        }

                        setPhotos(fetchedPhotos)
                        setAllPhotosLoaded(true)
                    })
                .catch(err => 
                    {
                        console.log(err)
                    })
        }, [])
    
    return <DefaultLayout>
        <div id='rassegna' className="container px-0 d-flex justify-content-center align-items-start">
            <button className='btn mt-4 mb-0 mb-xl-4 outline-0 border-0'>
                <HomeLink></HomeLink>
            </button>
        </div>
        <div className="container pt-5 pt-xl-0 text-center">
            <div className="row gy-5">
                <div className="col-12 col-xl-5 d-flex flex-column justify-content-center align-items-center align-items-xl-start text-xl-start">
                    <p className={styles.location_info + ' fs-6 text-center badge text-bg-primary lh-base'}>{rassegna.location},<br className='d-inline d-lg-none'></br> {rassegna.date}</p>
                    <h1 className={styles.main_title + ' pt-3 pt-xl-0'}>{rassegna.event_name}</h1>
                    <div className="d-flex w-100 justify-content-center align-items-center align-items-xl-start flex-column">
                        <hr className='w-100'/>
                    </div>
                    <p className="fs-2 px-2 px-md-0 fst-italic">{rassegna.description}</p>
                </div>
                <div className="col-12 col-xl-7 d-flex flex-column justify-content-center align-items-center">
                    {
                        volantinoLoaded ? 
                            <img className="shadow-lg rounded w-75 exclude" src={rassegna.volantino_src}/> :
                            <img className="shadow-lg rounded w-75 exclude" src={import.meta.env.BASE_URL + "Volantino_Loading.jpg"}/> 
                    }
                    <HorizontalRule/>
                </div>
                {
                    shouldRenderVideo && <>
                        <div className="col-12 col-xl-12 pt-5">
                            <h3>Registrazione dell'evento</h3>
                            <div className="ratio ratio-16x9">
                                <a href={'https://www.youtube.com/watch?v=' + rassegna.yt_id} target='_blank'>
                                    <img className='img-fluid rounded' src={rassegna.yt_thumbnail}></img>
                                    <img className={styles.yt_logo + ' position-absolute start-50 top-50 translate-middle exclude'} src={import.meta.env.BASE_URL + 'imgs/YT_logo.png'}></img>
                                </a>
                            </div>
                            <p className='pt-4 fs-5'>Clicca sull'immagine per visionare il video su <a className="animated_link" href={'https://www.youtube.com/watch?v=' + rassegna.yt_id} target='_blank'>Youtube</a>!</p>
                        </div>    
                    </>
                }
            </div>
        </div>
        <div className='pb-5 text-center'>
            <h2 className='pt-5 fs-1 pb-3'>Galleria</h2>
            <p>Clicca su un'immagine per aprirla nella galleria!</p>
            <div className="px-5"> 
                {
                    (!allPhotosLoaded) ? 
                    <LoadingSpinner loadingMessage="Chiedendo a Pitagora tutte le nostre foto..."></LoadingSpinner> : 
                    <DelayedGallery photos={photos} targetRowHeight={450} timeout={3500}></DelayedGallery>
                }
            </div>
        </div>
    </DefaultLayout>
}

export default EventDetails