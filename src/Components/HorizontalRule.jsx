export default function HorizontalRule(props) {
    return <>
        <div className={props.classNames + " d-flex w-100 justify-content-center align-items-center flex-column"}>
            <hr className='w-100'/>
        </div>
    </>
}