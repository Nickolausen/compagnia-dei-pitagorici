import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import LoadingSpinner from "./LoadingSpinner";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";

function DelayedGallery(props) {
    const [ shouldRender, setShouldRender ] = useState(false)
    const [ index, setIndex ] = useState(-1)
    const [ auto, setAuto ] = useState(false)
    
    useEffect(() => 
        {
            const timeoutId = setTimeout(() => { setShouldRender(true) }, props.timeout)
            return () => clearTimeout(timeoutId)
        }, [])
    
    return <>
        { shouldRender ?
            <>
                <RowsPhotoAlbum 
                    key={10} photos={props.photos} 
                    targetRowHeight={props.targetRowHeight}
                    onClick={({ index: current }) => setIndex(current)}/> 
                
                <Lightbox
                    index={index}
                    slides={props.photos}
                    fullscreen={{ auto }}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    plugins={[Counter, Fullscreen]}
                    counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                />
            </> :
            <LoadingSpinner loadingMessage="Caricando tutte le foto..."></LoadingSpinner>
        }
    </>
}

export default DelayedGallery