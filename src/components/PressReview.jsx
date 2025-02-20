import { useState } from 'react'
import Articolo from './Articolo'
import styles from './PressReview.module.css'
import { useEffect } from 'react'
import { getArticles } from '../lib/db-eventi'

export default function PressReview() {
    const [articles, setArticles] = useState([])
    const [firstArticle, setFirstArticle] = useState({})

    useEffect(() => {
        setArticles(getArticles().slice(1, getArticles().length))
        setFirstArticle(getArticles().at(0))
    }, [])
    return <section id="dicono-di-noi" className={`${styles.main_section} pt-5 d-flex flex-column align-items-center justify-content-end`}>
        <h2 className="fs-1">Rassegna stampa</h2>
        <div id="carouselExample" className={`${styles.article_carousel} carousel slide`} data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className={`${styles.article} carousel-item active`}>
                    <Articolo {...firstArticle} />
                </div>
                {articles.map(art =>
                    <div key={art.url} className={`${styles.article} carousel-item`}>
                        <Articolo {...art} />
                    </div>)}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <img className={`${styles.pythagora} w-50 exclude opacity-75`} src={import.meta.env.BASE_URL.concat("imgs\\pitagora_dancing.png")} />
    </section>
}