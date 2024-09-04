import { useEffect } from 'react'
import './Home.module.css'

function Home() 
{     
    return (
        <section className='d-flex justify-content-center align-items-center flex-column'>
            <img className='w-75 w-md-50 exclude' src='src\assets\imgs\tetraktys_nowriting.png'></img>
            <h1 className='pt-4'>Compagnia dei Pitagorici</h1>
            <p className='fs-2 pt-2 lh-sm'>
                Quando dai banchi di scuola la <span className="fw-bold">Matematica </span><br className='d-none d-sm-inline'></br>
                trasporta in luoghi oltre l'<span className="fw-bold">immaginazione</span>. 
            </p>
        </section>
    )
}

export default Home