import HomeLink from '../components/HomeLink'
import styles from './NotFound.module.css'

function NotFound() 
{
    return <>
        <div className='position-absolute top-0 left-0'>
            <HomeLink classNames="pt-3 ps-3"></HomeLink>
        </div>
        <div className={styles.error_container + " exclude d-flex flex-column justify-content-center align-items-center"}>
            <img src={import.meta.env.BASE_URL + 'pitagora_bg-removed.png'} className={styles.pitagora + " w-50 pb-4"}></img>
            <h1>Attenzione!</h1>
            <p className='fs-4 pt-3 px-5'>Sembra che tu stia accedendo a risorse inesistenti... se cercavi i Teoremi di Euclide, <span className='fw-bold'>chiudi questo sito!</span></p>
            <p className='fst-italic badge bg-primary px-4'>Codice errore: 404 - Not Found</p>
        </div>
    </>
}

export default NotFound