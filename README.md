# Compagnia dei Pitagorici - Portfolio

Questo sito web intende raccogliere tutti i contenuti relativi alle rassegne culturali organizzate dall'[Istituto Tecnico Tecnologico "Blaise Pascal" di Cesena](https://www.ispascalcomandini.it/) per crearne un archivio virtuale facilmente consultabile.

### Tecnologie utilizzate
La piattaforma non prevede nulla di back-end.
Per quanto riguarda il **front-end**:
- **ReactJS**
- **Javascript**
- Development server: **Vite**

Tutte le foto che **non** fanno parte della sezione 'Galleria' presente sulle pagine dedicate alla descrizione di una singola rassegna sono salvate in locale. Per le immagini della galleria si fa utilizzo di [Flick](https://www.flickr.com/), che mette a disposizione la sua API - [FlickrAPI](https://www.flickr.com/services/api/).
Il file `DB_Eventi.js` simula il database che raccoglie tutte le informazioni sulle rassegne svolte. Fino a quando si parla di un piccolo numero di rassegne non vale la pena di complicare la struttura del codice rispetto allo stato attuale.

> Si ringrazia per l'aiuto [Ludovico Maria Spitaleri](https://github.com/lspita), che ha contribuito a scegliere quale strategia adottare per effettuare il display delle foto.
