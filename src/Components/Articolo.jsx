import styles from './Articolo.module.css'

export default function Articolo(props) 
{
    return <>
        <div className={"container py-4 h-100"}>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7 w-75">
                    <div className={styles.articolo_container + " card h-100"} style={{ borderRadius: 15 }}>
                        <div className="card-body p-5">
                            <div className="text-center mb-4 pb-2">
                            <img
                                src={props.testata_icon}
                                alt="Bulb"
                                width={100}
                                className="rounded-4"
                            />
                            </div>
                            <figure className="text-center mb-0">
                            <blockquote className="blockquote">
                                <p className="pb-3">
                                    <i className={styles.virgolette + " fa fa-quote-left fa-xs"} /> <span className="fs-4 lead font-italic text-white">
                                        {props.title}
                                    </span> <i className={styles.virgolette + " fa fa-quote-right fa-xs"} />
                                </p>
                            </blockquote>
                                <figcaption className="blockquote-footer mb-0">
                                    <a href={props.articolo_url} target='_blank' className='animated_link fs-6'>
                                        <cite title={props.testata}>{props.testata}, {props.data}</cite>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    // return <>
    //     <figure class={styles.articolo_container + " text-center w-75 p-5 rounded-3 h-100 d-flex flex-column justify-content-center"}>
    //         <blockquote class="blockquote fs-4 mb-0">
    //             {props.title}
    //         </blockquote>
    //         <figcaption class="blockquote-footer mt-3">
    //             <a href={props.articolo_url} target='_blank' className='animated_link fs-6'>
    //                 <cite title={props.testata}>{props.testata}, {props.data}</cite>
    //             </a>
    //         </figcaption>
    //     </figure>
    // </>
}