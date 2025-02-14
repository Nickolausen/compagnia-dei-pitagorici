import styles from './HomeHero.module.css'

function HomeHero() {     
    return (
        <>
            <section id='home' className={styles.main_container + 'z-1 d-flex justify-content-center align-items-center flex-column'}>
                <img className={styles.main_tetraktys + ' exclude'} src={import.meta.env.BASE_URL + 'imgs\\tetraktys_nowriting.png'}></img>
                <h1 className={styles.main_title + ' pt-4'}>Compagnia dei Pitagorici</h1>
                <p className='fs-1 pt-2 lh-sm px-3 px-md-0'>
                    Errare humanum est, perseverare... <span className='fw-bold'>pytagoricum</span>!
                </p>
            </section>
        </>
    )
}

export default HomeHero