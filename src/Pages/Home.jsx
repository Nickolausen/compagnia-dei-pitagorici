import { useEffect } from 'react'
import './Home.module.css'

function Home() 
{
    useEffect(()=>{
        if(typeof window?.MathJax !== "undefined"){
          window.MathJax.typeset()
        }
      },[])
      
    return (
        <section className='d-flex justify-content-center align-items-center flex-column'>
            <h1>Compagnia dei Pitagorici</h1>
            <p className='fs-2 pt-2 lh-sm'>
                Quando dai banchi di scuola la <span className="fw-bold">Matematica</span><br></br>
                trasporta in luoghi oltre l'<span className="fw-bold">immaginazione</span>. 
            </p>
        </section>
    )
}

export default Home