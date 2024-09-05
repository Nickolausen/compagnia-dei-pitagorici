import './Footer.module.css'

function Footer() 
{
    return <footer className="container-fluid p-5 mt-5 d-flex justify-content-center align-items-center">
        <span>Handmade with &lt;3 by 
            <a className='text-decoration-none' href='https://github.com/Nickolausen'> Nicholas Magi</a> & 
            <a className='text-decoration-none' href='https://github.com/lspita'> Ludovico Maria Spitaleri </a>  
        </span>
    </footer>
}

export default Footer