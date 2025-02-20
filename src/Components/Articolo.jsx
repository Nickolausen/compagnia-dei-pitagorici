import styles from './Articolo.module.css'

export default function Articolo({ journalIcon, title, url, journal, date }) 
{
    return <>
        <div className="container w-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7 w-75">
                    <div className="bg-transparent card h-100">
                        <div className="card-body p-5">
                            <div className="text-center mb-4 pb-2">
                            <img
                                src={journalIcon}
                                alt="Bulb"
                                width={100}
                                className="rounded-4"
                            />
                            </div>
                            <figure className="text-center mb-0">
                            <blockquote className="blockquote">
                                <p className="pb-0">
                                    <i className={styles.virgolette + " fa fa-quote-left fa-xs"} /> <span className="display-4 lead font-italic text-white">
                                        { title }
                                    </span> <i className={styles.virgolette + " fa fa-quote-right fa-xs"} />
                                </p>
                            </blockquote>
                                <figcaption className="mb-0">
                                    <a href={url} target='_blank' className='animated_link fs-6'>
                                        <cite title={journal}>{journal}, {date}</cite>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}