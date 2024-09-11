import { HashLink } from 'react-router-hash-link'
import styles from './CardRassegna.module.css'
import LoadingSpinner from './LoadingSpinner'
import { useState } from 'react'

function CardRassegna(props) 
{
    let [ loaded, setLoaded ] = useState(false)

    let thumbnail = new Image()
    thumbnail.src = props.thumbnail
    thumbnail.onload = () => { setLoaded(true) }
    
    return <div className="card w-100 border-0" style={{ width: "18rem" }}>
        { loaded ? 
            <>
                <img src={props.thumbnail} className="card-img-top" alt="..." />
                <div className={styles.overlay + " card-body position-absolute bottom-0 start-50 translate-middle w-100 z-2"}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-white">
                        {props.description} - <HashLink className="animated_link" to={`${props.url}#rassegna`}> Clicca per vedere di più</HashLink>
                    </p>
                </div>
            </> : 
            <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center pt-3 bg-primary text-white'>
                <LoadingSpinner loadingMessage="Caricando..."></LoadingSpinner>
            </div> 
        }
  </div>
}

export default CardRassegna