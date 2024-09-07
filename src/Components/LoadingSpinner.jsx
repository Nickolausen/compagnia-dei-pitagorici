import styles from "./LoadingSpinner.module.css"

function LoadingSpinner(props) 
{
    return <>
        <img className={styles.spinner + ' exclude'} src={import.meta.env.BASE_URL + '/tetraktys_nowriting.png'}></img>
        <p className='pt-4'>{props.loadingMessage}</p>
    </>
}

export default LoadingSpinner