import { Link } from 'react-router-dom'
import styles from './CardRassegna.module.css'

function CardRassegna(props) 
{
    return <div className="card w-100 border-0" style={{ width: "18rem" }}>
        <img src={props.thumbnail} className="card-img-top" alt="..." />
        <div className={styles.overlay + " card-body position-absolute bottom-0 start-50 translate-middle w-100 z-2"}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text text-white">
                {props.description} - 
                <Link to={`${props.url}`}> Scopri di più</Link>
            </p>
        </div>
  </div>
}

export default CardRassegna