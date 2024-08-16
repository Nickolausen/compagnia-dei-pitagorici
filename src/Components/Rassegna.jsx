import styles from './Rassegna.module.css'
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { useState, useEffect } from 'react';

function Rassegna(props) {   
    // const photos = []
    // imgs_src.forEach(element => {
    //     photos.push({src: element.src, width: element.width, height: element.height})
    // })
    return <div className="pt-5">
        <article>
            <p className="fs-5">{props.location} <span className='d-none d-sm-inline'>-</span> <br className='d-sm-none'></br> {props.data}</p>
            <h1>{props.title}</h1>
            <p className="fs-3 px-2">
            {props.description}
            </p>
        </article>

        <div className={styles.hero + " container-fluid px-0 py-3 mt-5"}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-8">
                        <h3>Video Live</h3>
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="rounded"
                                src="https://www.youtube.com/embed/ua4eGl-60rE?si=ZFpQtU_UfIBJB9mW" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="pt-4 pt-sm-0 col-12 col-sm-4">
                        <h3>Volantino</h3>
                        <img className="shadow-lg rounded img-fluid" src="src\assets\imgs\ITINERARI_COSMICI_Volantino.png"/>
                    </div>
                </div>
            </div>
        </div>

        <h2 className='mt-5'>Galleria</h2>
        <div className="container-fluid">
            {/* <RowsPhotoAlbum photos={photos}></RowsPhotoAlbum> */}
        </div>

        <p>Un evento in collaborazione con: </p>
        <div className="container">
            <div className="d-flex flex-row justify-content-center">
                <img className={styles.sponsor} src="src\assets\imgs\ca-2lines-h-b.png"></img>
                <img className={styles.sponsor} src="src\assets\imgs\elfifinpolologo.png"></img>
            </div>
        </div>
    </div>
}

export default Rassegna