const testate_icons = {
    "CesenaToday": "https://www.cesenatoday.it/~shared/images/v2015/brands/citynews-cesenatoday.png",
    "Corriere Cesenate": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIWMx_mynMhe4ZbKw42a7sZEbKm8d4Lh3Tw&s",
    "Radio Studio Delta": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfnDaaV0Um7LHTk92ryH4GADvRp_sMYGoYA&s",
    "Resto del Carlino": "https://play-lh.googleusercontent.com/tVt4JnKwPGYnbcvyRfm6dD3JI_k-OEpU4w0H7BKNUoxuV-_QoedK1Jk37ApVW-6nl60=w240-h480-rw"
}

function getEvents()
{
    /*
        Array di oggetti contenenti tutte le informazioni di tutti gli eventi
    */
    const output = [
        {
            event_id: -1,
            event_name: "Notte Pitagorica",
            event_url: "",
            description: "Quando dai banchi di scuola la Matematica trasporta in luoghi oltre l'immaginazione.",
            date: "07 Maggio 2024",
            location: "Palazzo del Ridotto @ Cesena (FC)",
            thumbnail_src: "",
            volantino_src: "",
            yt_id: "nVibNQGm7Vg",
            yt_thumbnail: "",
            flickr_album_id: "72177720320089939",
            articoli: [
                {
                    journalIcon: "",
                    journal: "CesenaToday",
                    url: "https://www.cesenatoday.it/cronaca/2protagonistra-la-matemativa-un-successo-la-notte-pitagorica-all-itt-pascal.html",
                    title: `Protagonista la matematica, un successo la "Notte Pitagorica" all'Itt Pascal`,
                    date: "17/05/2024"
                },
                {
                    journalIcon: "",
                    journal: "Corriere Cesenate",
                    url: "https://www.corrierecesenate.it/notte-pitagorica-litt-pascal-grande-successo/",
                    title: `Notte Pitagorica, l'Itt Pascal: "Grande successo"`,
                    date: "16/05/2024"
                }
            ]
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
            flickr_album_id: "72177720320073362",
            articoli: [
                {
                    journalIcon: "",
                    journal: "Corriere Cesenate",
                    url: "https://www.corrierecesenate.it/Cesena/Gli-Itinerari-cosmici-del-Pascal-alla-Rocca-Malatestiana",
                    title: `Gli "Itinerari cosmici" del Pascal alla Rocca Malatestiana`,
                    date: "24/07/2024"
                },
                {
                    journalIcon: "",
                    journal: "Corriere Cesenate",
                    url: "https://www.corrierecesenate.it/i-pitagorici-dellitt-pascal-propongono-gli-itinerari-cosmici/",
                    title: `I Pitagorici dell'Itt Pascal propongono gli Itinerari cosmici`,
                    date: "29/07/2024"
                },
                {
                    journalIcon: "",
                    journal: "CesenaToday",
                    url: "https://www.cesenatoday.it/eventi/notte-pitagorica-astronomia-filosofia-e-arti-intrecciate-assieme-grazie-a-studenti-e-insegnanti-del-pascal.html",
                    title: `Itinerari Cosmici: astronomia, filosofia e arti intrecciate assieme grazie a studenti e insegnanti del Pascal`,
                    date: "24/07/2024"
                },
                {
                    journalIcon: "",
                    journal: "Corriere Cesenate",
                    url: "https://www.corrierecesenate.it/Cesena/In-tanti-alla-Notte-pitagorica-.-La-fotogallery",
                    title: `In tanti a "Itinerari Cosmici". La fotogallery`,
                    date: "31/07/2024"
                },
                {
                    journalIcon: "",
                    journal: "Radio Studio Delta",
                    url: "https://www.radiostudiodelta.it/events/itinerari-cosmici-alla-rocca-malatestiana/",
                    title: `Itinerari Cosmici alla Rocca Malatestiana`,
                    date: "28/07/2024"
                }
            ]
        },
        {
            event_id: -1,
            event_name: "Notte Pitagorica - Lions Edition",
            event_url: "",
            description: "Incursione alla conviviale del Lions Club Rubicone",
            date: "24 Gennaio 2025",
            location: "Hotel Savini @ Bellaria (RN)",
            thumbnail_src: "",
            volantino_src: "",
            yt_id: "",
            yt_thumbnail: "",
            flickr_album_id: "72177720323918596",
            articoli: [
                {
                    journalIcon: "",
                    journal: "Resto del Carlino",
                    url: "https://www.ilrestodelcarlino.it/cesena/cronaca/giovani-talenti-protagonisti-alla-notte-d0656d2e",
                    title: `Giovani talenti protagonisti alla Notte Pitagorica del Pascal`,
                    date: "26/01/2025"
                }
            ]
        },
        {
            event_id: -1,
            event_name: "Notte Pitagorica - Al Petrella",
            event_url: "",
            description: "L'eterno spettacolo della Matematica.",
            date: "05 Aprile 2025",
            location: "Teatro Petrella @ Longiano (FC)",
            thumbnail_src: "",
            volantino_src: "",
            yt_id: "JFehYjFWBGI",
            yt_thumbnail: "",
            flickr_album_id: "72177720325032120",
            articoli: [
                {
                    journalIcon: "",
                    journal: "Corriere Cesenate",
                    url: "https://www.corrierecesenate.it/la-notte-pitagorica-dellitt-pascal-al-teatro-petrella-di-longiano/",
                    title: `La “Notte Pitagorica” dell’Itt Pascal al teatro Petrella di Longiano`,
                    date: "03/04/2025"
                },
                {
                    journalIcon: "",
                    journal: "CesenaToday",
                    url: "https://www.cesenatoday.it/eventi/la-notte-pitagorica-del-istituto-pascal-comandini-in-scena-al-petrella-5-aprile.html",
                    title: `La Notte Pitagorica dell'istituto Pascal sbarca al Petrella di Longiano`,
                    date: "03/04/2025"
                }
            ]
        }

    ]

    let idx = 0
    output.forEach(evt => 
        {
            /* ESEMPIO: Notte Pitagorica - Lions Edition => notte-pitagorica---lions-edition */
            const eventCode = evt.event_name.trim().toLowerCase()
                .replaceAll(" ", "-")
            const eventDirectory = import.meta.env.BASE_URL + "rassegne".concat(`/${eventCode}`)
            
            evt.event_id = idx
            evt.event_url = eventCode
            evt.thumbnail_src = eventDirectory.concat("/thumbnail").concat("/cover.jpg")
            evt.volantino_src = eventDirectory.concat("/volantino").concat("/volantino.png")
            evt.yt_thumbnail = eventDirectory.concat("/yt-thumb").concat("/copertina.png")

            evt.articoli.forEach(art => {
                art.journalIcon = testate_icons[art.journal]
            }) 

            idx += 1
        })

    return output
} 

export default getEvents

export function getArticles() {
    return getEvents().map(evt => evt.articoli).flat()
}