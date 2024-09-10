import { HashLink } from "react-router-hash-link"

function HomeLink(props)
{
    return <>
        <HashLink to="/#home" className={props.classNames + " text-start d-flex flex-column align-items-center"}>
            <p className="mb-0"><i className="fa fa-home fs-2"></i></p>
            <p className="py-0 my-0 1 fs-6">Torna alla Home</p>
        </HashLink>
    </>
}

export default HomeLink