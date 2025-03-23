export const urlFormatter = (server, id, secret) => `https://live.staticflickr.com/${server}/${id}_${secret}_b.jpg`

/**
 * Returns a promise that gets resolved only when all the photos are loaded.
 * 
 * @param {string} url 
 * @param {(server: string, id: string, secret: string) => string} photoUrlFormatter 
 * @returns 
 */
export default async function fetchPhotos(url, photoUrlFormatter) {
    const response = await fetch(url)
    const data = await response.json()
    return await Promise.all(
        data.photoset.photo.map(async (pic, idx) => {
            const picUrl = photoUrlFormatter(pic.server, pic.id, pic.secret);
            const res = new Image()
            res.src = picUrl
            res.setAttribute("alt", `Photo ${pic.id}`)
            return [ res, idx ]
        })
    )
}