import { HashLink } from 'react-router-hash-link'
import styles from './EventCard.module.css'
import LoadingSpinner from './LoadingSpinner'
import { useState } from 'react'

function EventCard(props) 
{
    let [ loaded, setLoaded ] = useState(false)

    let thumbnail = new Image()
    thumbnail.src = props.thumbnail
    thumbnail.onload = () => { setLoaded(true) }
    
    return <div className="card w-100 border-0" style={{ width: "18rem" }}>
        { loaded ?
            <HashLink to={`${props.url}#rassegna`}>
                <img src={props.thumbnail} className="card-img-top exclude" alt="..."></img>
                <div className={`${styles.overlay} card-body position-absolute bottom-0 start-50 translate-middle w-100 z-2`}>
                    <h5 className="card-title h-6">{props.title}</h5>
                    <p className="card-text text-white fs-6">
                        {props.description} - <span className="animated_link"> Clicca per vedere di più</span>
                    </p>
                </div>
            </HashLink>
            : 
            <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center pt-3 bg-primary text-white'>
                <LoadingSpinner loadingMessage="Caricando..."></LoadingSpinner>
            </div> 
        }
  </div>
}

export default EventCard