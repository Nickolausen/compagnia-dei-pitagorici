import styles from './HomeHero.module.css'
import Particles from './third-party/Particles/Particles'

function HomeHero() {
    return (
        <>
            <section id='home' className={styles.main_container + 'z-1 text-center d-flex justify-content-center align-items-center flex-column'}>
                <Particles
                    className={"bg-transparent position-absolute z-1"}
                    particleColors={['#1b0066', '#33138a', '#f6f6f6', '#1a015e']}
                    particleCount={400}
                    particleSpread={20}
                    speed={0.1}
                    particleBaseSize={200}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={true}
                />
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