//task 🏆 Snack 1
//todo Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

let datoAPI: unknown;

if (typeof datoAPI === "string") {
    //todo Se è una stringa: stampala in maiuscolo
    console.log(datoAPI.toLocaleUpperCase())
} else if (typeof datoAPI === "number") {
    //todo Se è un numero: moltiplicalo per due e stampalo
    console.log(datoAPI * 2)
} else if (typeof datoAPI === "boolean") {
    //todo Se è un booleano: stampa “Sì” o “No” in base al suo valore
    //* datoAPI ? console.log(`YES`) : console.log(`NO`)
    console.warn(datoAPI ? "true" : "false")
} else if (datoAPI === null) {
    //BONUS Se è null: stampa “Il dato è vuoto”
    console.log(`il dato è vuoto`);
} else if (Array.isArray(datoAPI)) {
    //BONUS Se è un array: stampa la sua lunghezza
    console.log(datoAPI.length)
} else if (datoAPI instanceof Promise) {
    //BONUS Se è una Promise: attendi che si risolva e stampa il valore del resolve.
    datoAPI.then(value => console.log(value))
} else {
    //todo In tutti gli altri casi: stampa “Tipo non supportato”
    console.error(`TIPO NON SUPPORTATO`)
}

//task 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

type Dipendente = {
    //todo nome → stringa
    nome: string;
    // cognome → stringa
    cognome: string;
    //todo annoNascita → numero
    annoDiNascita: number;
    //todo sesso → Può essere solo "m" o "f".
    sesso: "m" | "f";
    //todo anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
    anniDiServizio: number[];

    //BONUS emailAziendale → Email assegnata al dipendente (non si può modificare)
    readonly emailAziendale: string;
    //BONUS contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.
    contratto: "indeterminato" | "freelance" | "determinato"
}


//task 🏆 Snack 3
// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:


// Developer
type Developer = Dipendente & {
    // livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
    livelloEsperienza: "junior" | "mid" | "senior";
    // linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
    linguaggi?: string[];
    // certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
    certificazioni: string[];
}

// ProjectManager
type ProjectManager = Dipendente & {
    //todo teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
    teamsize: number | null;
    //todo budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
    budgetGestito?: number;
    //todo stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
    stakeholderPrincipali: string[];
}


// 🎯 BONUS
// Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:
type Team = {
    // nome → Nome del team (stringa).
    nome: string,
    // progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
    progettoAttuale: string | null,
    // budget → Importo numerico del budget assegnato al team (sempre presente).
    budget: number,
    // membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).
    membri: [ProjectManager, Developer, ...Developer[]]
    //fix membri: [ProjectManager, [Developer, ...Developer[]]]

    //? Differenza
    // -Primo caso: Gli sviluppatori sono elencati direttamente nella tupla, subito dopo il Project Manager.
    // -Secondo caso: Gli sviluppatori sono raggruppati in un array come secondo elemento della tupla.
    //? Scegli quale usare in base a come vuoi accedere ai dati:
    // -Se vuoi accedere direttamente ai membri come `membri[1]`, `membri[2]`, ecc., usa la prima.
    // -Se vuoi che tutti i developer siano in un array separato, usa la seconda.
    //? In entrambi i casi, il primo elemento è sempre un `ProjectManager`. La differenza è solo nella struttura dei developer.
} 