import { useEffect } from 'react'
import styles from './Home.module.css'

function Home() 
{     
    return (
        <section className={styles.main_tetraktys + ' d-flex justify-content-center align-items-center flex-column'}>
            <img className={'w-75 w-md-50 exclude'} src='src\assets\imgs\tetraktys_nowriting.png'></img>
            <h1 className={styles.main_title + ' pt-4'}>Compagnia dei Pitagorici</h1>
            <p className='fs-1 pt-2 lh-sm'>
                Errare humanum est, perseverare... <span className='fw-bold'>pytagoricum</span>!
            </p>
        </section>
    )
}

export default Home