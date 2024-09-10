import styles from './Articolo.module.css'

export default function Articolo(props) 
{
    return <>
        <figure class={styles.articolo_container + " text-center w-75 p-5 rounded-3 h-100 d-flex flex-column justify-content-center"}>
            <blockquote class="blockquote fs-4 mb-0">
                {props.title}
            </blockquote>
            <figcaption class="blockquote-footer mt-3">
                <a href={props.articolo_url} target='_blank' className='fs-6'>
                    <cite title={props.testata}>{props.testata}, {props.data}</cite>
                </a>
            </figcaption>
        </figure>
    </>
}