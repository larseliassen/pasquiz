export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface RebusData {
  id: number;
  rebus: string;
  hint: string;
  svar: string;
}

export const rebus: RebusData = {
  id: 1,
  rebus: "Påskerebus #1",
  hint: "Tenk på noe gult som kommer om våren...",
  svar: "påskelilje"
};

export interface RebusQuestion {
  id: number;
  gåte: string;
  hint: string[];
  svar: string;
  nøkkelord: string;
  forklaring: string;
  bilde?: string;
}

export const rebusSpørsmål: RebusQuestion[] = [
  {
    id: 1,
    gåte: "I påskefjellet står jeg støtt,\nRød T på meg har mange møtt.\nNår du har funnet riktig ord,\nTa andre stavelse og gjør den stor.",
    hint: [
      "Tenk på hva du følger i påskefjellet",
      "Det er totalt 3 stavelser i ordet",
      "_ _ _ _ _ _ _ _"
    ],
    svar: "TURSTIER",
    nøkkelord: "STI",
    forklaring: "Turistforeningen merker turstier med rød T. Andre stavelse 'STI' er nøkkelordet som leder til neste gåte.",
    bilde: "/bilder/rebus1.svg"
  },
  {
    id: 2,
    gåte: "Med STI i tanke, søk et sted\nDer konger før har lagt seg ned.\nI Oslo finner du meg nå,\nHvor gamle steiner fortsatt står.",
    hint: [
      "Tenk på et gammelt byggverk i Oslo",
      "Stedet har med konger å gjøre",
      "Det slutter på '-kirke'"
    ],
    svar: "GAMLE AKER KIRKE",
    nøkkelord: "AKER",
    forklaring: "Gamle Aker kirke er Oslos eldste bygning, og STI + KIRKE ledet til dette historiske stedet.",
    bilde: "/bilder/rebus2.svg"
  },
  {
    id: 3,
    gåte: "AKER leder veien din,\nTil noe gult og superfint.\nEn drikk som bare finnes nå,\nNår påskesola skinner på.",
    hint: [
      "Tenk på en spesiell påskedrikk",
      "Navnet inneholder 'AKER'",
      "Det er en brus"
    ],
    svar: "SHAKER",
    nøkkelord: "SHAKE",
    forklaring: "Solo Super Shaker er en spesiell påskebrus. 'AKER' fra forrige svar ledet til denne påskedrikken.",
    bilde: "/bilder/rebus3.svg"
  },
  {
    id: 4,
    gåte: "SHAKE deg til et påskested,\nDer jazz og ski går hånd i hånd.\nI Østerdalen finner du,\nDen rette plassen - hvor er du?",
    hint: [
      "Tenk på en kjent skidestinasjon",
      "Stedet har en kjent påskejazzfestival",
      "Det ligger i Innlandet fylke"
    ],
    svar: "TRYSIL",
    nøkkelord: "SIL",
    forklaring: "Trysil er kjent for sin unike kombinasjon av skisport og påskejazz. 'SHAKE' ledet til dette sportsstedet.",
    bilde: "/bilder/rebus4.svg"
  },
  {
    id: 5,
    gåte: "Med SIL i hånden, søk et spor\nAv påskekrim fra tiden stor.\nEt tog ble plyndret denne natt,\nI hvilken by fant røvern' skatt?",
    hint: [
      "Tenk på Norges første påskekrim",
      "Byen ligger på vestkysten",
      "Toget skulle hit i 1923"
    ],
    svar: "BERGEN",
    nøkkelord: "BERG",
    forklaring: "'Bergenstoget plyndret i natt!' var Norges første påskekrim. 'SIL' fra forrige svar ledet til denne historiske krimgåten.",
    bilde: "/bilder/rebus5.svg"
  },
  {
    id: 6,
    gåte: "BERG tar deg til et hellig sted,\nDer påskeundre skjer der inne.\nEt krusifiks som svetter nå,\nI stavkirken du må det finne.",
    hint: [
      "Tenk på en kjent stavkirke",
      "Stedet er kjent for et mirakel",
      "Kirken ligger i Vestland fylke"
    ],
    svar: "RØLDAL",
    nøkkelord: "RØL",
    forklaring: "Røldal stavkirke er kjent for sitt 'svettende' krusifiks. 'BERG' ledet til dette mystiske stedet.",
    bilde: "/bilder/rebus6.svg"
  },
  {
    id: 7,
    gåte: "RØL gir deg neste nøkkel nå,\nEt påskegult symbol å få.\nI sjokolade pakket inn,\nEn liten sak med stor appell.",
    hint: [
      "Tenk på en kjent påskesjokolade",
      "Den har gul innpakning",
      "Perfekt på tur"
    ],
    svar: "KVIKKLUNSJ",
    nøkkelord: "KVIKK",
    forklaring: "Kvikklunsj er Norges ikoniske påskesjokolade. 'RØL' ledet til denne turklassikeren.",
    bilde: "/bilder/rebus7.svg"
  },
  {
    id: 8,
    gåte: "KVIKK fører deg til siste post,\nEn gåte fra en påskekost.\nI VG den sto år etter år,\nHva het den gule rebusens far?",
    hint: [
      "Tenk på VGs påskerebus",
      "Den startet på 1980-tallet",
      "Navnet har en bindestrek"
    ],
    svar: "GUL-E",
    nøkkelord: "PÅSKE",
    forklaring: "Gul-E var VGs legendariske påskerebus som startet i 1988. 'KVIKK' ledet til denne påsketradisjonen.",
    bilde: "/bilder/rebus8.svg"
  }
];

export interface RebusState {
  currentGåteIndex: number;
  løsteGåter: string[];
  visHint: boolean[];
  antallHintBrukt: number;
  erFerdig: boolean;
}

export const initialRebusState: RebusState = {
  currentGåteIndex: 0,
  løsteGåter: [],
  visHint: Array(rebusSpørsmål.length).fill(false),
  antallHintBrukt: 0,
  erFerdig: false,
}; 