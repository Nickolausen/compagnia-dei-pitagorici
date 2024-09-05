function get_DB_Eventi()
{
    const thumbnails_dir = "src\\assets\\imgs\\evt_thumbnails\\"
    const volantini_dir = "src\\assets\\imgs\\volantini\\"
    const yt_thumbnails = "src\\assets\\imgs\\yt_thumbnails\\"

    /*
        Array di oggetti contenenti tutte le informazioni di tutti gli eventi
    */
    const output = [
        {
            event_id: -1,
            event_name: "Notte Pitagorica",
            event_url: "",
            description: "Quando la Matematica trasporta in luoghi oltre l'immaginazione.",
            date: "07 Maggio 2024",
            location: "Palazzo del Ridotto @ Cesena (FC)",
            thumbnail_src: "",
            volantino_src: "",
            yt_id: "nVibNQGm7Vg",
            yt_thumbnail: "",
            flickr_album_id: "72177720320089939"
        },
        {
            event_id: -1,
            event_name: "Itinerari Cosmici",
            event_url: "",
            description: "Un viaggio ai confini dell'Universo",
            date: "29 Luglio 2024",
            location: "Rocca Malatestiana @ Cesena (FC)",
            thumbnail_src: "",
            volantino_src: "",
            yt_id: "ua4eGl-60rE",
            yt_thumbnail: "",
            flickr_album_id: "72177720320073362"
        }
    ]

    let idx = 0
    output.forEach(evt => 
        {
            evt.event_id = idx
            evt.event_url = evt.event_name.trim().toLowerCase().replace(" ", "-") /* ESEMPIO: Notte Pitagorica -> notte-pitagorica */
            evt.thumbnail_src = thumbnails_dir + evt.event_url.toUpperCase().replace("-", "_") + "_COVER.JPG"
            evt.volantino_src = volantini_dir + evt.event_url.toUpperCase().replace("-", "_") + "_Volantino.png"
            evt.yt_thumbnail = yt_thumbnails + "YT Thumbnail - " + evt.event_name.toUpperCase() + ".png" 

            idx += 1
        })

    return output
} 

export default get_DB_Eventi