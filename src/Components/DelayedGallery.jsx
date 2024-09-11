import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function DelayedGallery(props) {
    const [ shouldRender, setShouldRender ] = useState(false)
    const [ index, setIndex ] = useState(-1)
    const [ auto, setAuto ] = useState(false)
    
    /* ZOOM Plugin Params */
    const [ animationDuration, setAnimationDuration ] = useState(500);
    const [ maxZoomPixelRatio, setMaxZoomPixelRatio ] = useState(2);
    const [ zoomInMultiplier, setZoomInMultiplier ] = useState(2);
    const [ doubleTapDelay, setDoubleTapDelay ] = useState(300);
    const [ doubleClickDelay, setDoubleClickDelay ] = useState(300);
    const [ doubleClickMaxStops, setDoubleClickMaxStops ] = useState(2);
    const [ keyboardMoveDistance, setKeyboardMoveDistance ] = useState(50);
    const [ wheelZoomDistanceFactor, setWheelZoomDistanceFactor ] = useState(100);
    const [ pinchZoomDistanceFactor, setPinchZoomDistanceFactor ] = useState(100);
    const [ scrollToZoom, setScrollToZoom ] = useState(true);

    /* THUMBNAILS Plugin Params */
    const [ position, setPosition ] = useState("bottom");
    const [ width, setWidth ] = useState(120);
    const [ height, setHeight ] = useState(80);
    const [ border, setBorder ] = useState(0);
    const [ borderRadius, setBorderRadius ] = useState(4);
    const [ padding, setPadding ] = useState(4);
    const [ gap, setGap ] = useState(10);
    const [ preload, setPreload ] = useState(2);
    const [ showToggle, setShowToggle ] = useState(true);


    /* SLIDESHOW Plugin Params */
    const [autoplay, setAutoplay] = useState(false);
    const [delay, setDelay] = useState(3000);
    
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
                    plugins={[Counter, Fullscreen, Zoom, Thumbnails, Slideshow]}
                    animation={{ zoom: animationDuration }}
                    counter={{ container: { className: "fs-6", style: { top: 0, bottom: "unset" } } }}
                    carousel={{ preload }}
                    slideshow={{ autoplay, delay }}
                    zoom={{
                        maxZoomPixelRatio,
                        zoomInMultiplier,
                        doubleTapDelay,
                        doubleClickDelay,
                        doubleClickMaxStops,
                        keyboardMoveDistance,
                        wheelZoomDistanceFactor,
                        pinchZoomDistanceFactor,
                        scrollToZoom,
                      }}
                    thumbnails={{
                        position,
                        width,
                        height,
                        border,
                        borderRadius,
                        padding,
                        gap,
                        showToggle,
                        }}
                />
            </> :
            <LoadingSpinner loadingMessage="Caricando tutte le foto..."></LoadingSpinner>
        }
    </>
}

export default DelayedGallery