import styles from './Footer.module.css'
import HomeLink from './HomeLink'

function Footer(props) 
{
    return <footer className={styles.cst_footer + " " + props.classNames + " container-fluid p-5 mt-5"}>
        <div className="row">
            <div className="col-12">
                <span>Handmade with &lt;3 by 
                    <a className='text-decoration-none' href='https://github.com/Nickolausen'> Nicholas Magi</a> & 
                    <a className='text-decoration-none' href='https://github.com/lspita'> Ludovico Maria Spitaleri </a>  
                </span>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <HomeLink></HomeLink>
            </div>
            <hr className='d-lg-none my-4 opacity-50 px-5'/>
            <div className="col-12 col-lg-4">
                <img src={import.meta.env.BASE_URL + '/tetraktys_nowriting.png'} className='w-25 exclude'></img>
                <h3 className='pt-3'>Compagnia dei Pitagorici</h3>
                <p>Errare humanum est, perseverare... <span className='fw-bold'>pytagoricum</span>!</p>
            </div>
            <hr className='d-lg-none my-4 opacity-50 px-5'/>
            <div className="col-12 col-lg-4">
                <a href="https://www.ispascalcomandini.it/" target='_blank'>
                    <img src={import.meta.env.BASE_URL + '/imgs/white_LOGO_PASCAL.png'} className='w-50 exclude'></img>
                </a>
            </div>
        </div>
        
    </footer>
}

export default Footer