import { HashLink } from 'react-router-hash-link'
import styles from './EventCard.module.css'
import LoadingSpinner from './LoadingSpinner'
import { useState } from 'react'

function EventCard(props) {
    let [loaded, setLoaded] = useState(false)

    let thumbnail = new Image()
    thumbnail.src = props.thumbnail
    thumbnail.onload = () => { setLoaded(true) }

    return <div className="card w-100 border-0" style={{ width: "18rem" }}>
        {loaded ?
            <HashLink to={`${props.url}#rassegna`}>
                <div className="card text-bg-dark">
                    <img src={props.thumbnail} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column align-items-center justify-content-end w-100">
                        <div className='bg-dark bg-opacity-75 p-2 w-100 rounded'>
                            <h5 className={`${styles.custom_title} card-title`}>{props.title}</h5>
                            <p className={`${styles.custom_description} card-text text-white`}>
                                {props.description} - <span className="animated_link"> Clicca per vedere di più</span>
                            </p>
                        </div>
                    </div>
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