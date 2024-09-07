import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import LoadingSpinner from "./LoadingSpinner";

function DelayedGallery(props) {
    const [ shouldRender, setShouldRender ] = useState(false)
    
    useEffect(() => 
        {
            const timeoutId = setTimeout(() => { setShouldRender(true) }, props.timeout)
            return () => clearTimeout(timeoutId)
        }, [])
    
    return <>
        { shouldRender ? 
            <RowsPhotoAlbum key={10} photos={props.photos} targetRowHeight={props.targetRowHeight}></RowsPhotoAlbum> : 
            <LoadingSpinner loadingMessage="Caricando tutte le foto..."></LoadingSpinner>
        }
    </>
}

export default DelayedGallery