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
          "id": 1,
          "gåte": "Før han forsvant, spiste han en typisk norsk frokost – med denne typen fisk på bordet. Men en uåpnet boks ble liggende igjen. Hva slags fisk var det?",
          "hint": ["Påleggsfisk", "Ofte i glass eller boks", "Flere varianter – tomat, sennep, sur"],
          "svar": "SILD",
          "nøkkelord": "SIL",
          "forklaring": "Silda ble ikke spist. Noe avbrøt frokosten – kanskje han måtte gå i hast?"
        },
        {
          "id": 2,
          "gåte": "Ved siden av tallerkenen hans lå det en halv appelsin. En kjerne var borte – og funnet i askebegeret. Hva slags frukt hadde han spist?",
          "hint": ["Typisk påskefrukt", "Oransje", "Spises i solveggen"],
          "svar": "APPELSIN",
          "nøkkelord": "SIN",
          "forklaring": "Appelsinen tyder på at han planla å dra ut – kanskje på tur i solveggen?"
        },
        {
          "id": 3,
          "gåte": "Politiet finner et krøllete papir i peisen. En liste – med navn. Men ett navn er krysset ut. Hvilken type gjenstand ble trolig brent?",
          "hint": ["Brukes til å notere mistenkte", "Lages i krimbøker", "Har oversikt"],
          "svar": "LISTE",
          "nøkkelord": "STE",
          "forklaring": "Listen over mistenkte er delvis brent. Noen prøver å skjule motivet?"
        },
        {
          "id": 4,
          "gåte": "Utenfor hytta finner de ferske spor i snøen – men kun ett par. De leder til skogkanten og tilbake. Hva har etterlatt disse?",
          "hint": ["Brukes på beina", "Vanlig på påsketur", "Settes igjen spor i snøen"],
          "svar": "SKI",
          "nøkkelord": "SKI",
          "forklaring": "Bare én person har gått ut og tilbake. Offer eller gjerningsperson?"
        },
        {
          "id": 5,
          "gåte": "I en av hyttas kroker ligger et halvspist egg. Skallet er knekt, men plommen er urørt. Det ser ut som om han ble avbrutt. Hva slags mat er det?",
          "hint": ["Kommer fra høna", "Symbol på påske", "Kokes til frokost"],
          "svar": "EGG",
          "nøkkelord": "EGG",
          "forklaring": "Han hadde ikke rukket å spise ferdig. Tiden forsvant brått."
        },
        {
          "id": 6,
          "gåte": "På et fjellbord ved hytta står en termos. Den er fortsatt lunken. Men innholdet er ikke kakao, som man skulle tro. Det lukter sterkt. Hva kan det være?",
          "hint": ["Varmt å drikke", "Lages av bønner", "Sort og bitter"],
          "svar": "KAFFE",
          "nøkkelord": "KAF",
          "forklaring": "Han skulle ut og nyte kaffe – men kom aldri så langt."
        },
        {
          "id": 7,
          "gåte": "I sofaen ligger en bok oppslått. Den er tykk, gul og med store bokstaver. Det ser ut som han nettopp hadde lest. Hva slags bok var det?",
          "hint": ["Påsketradisjon", "Norsk fenomen", "Selges på bensinstasjoner"],
          "svar": "PÅSKEKRIM",
          "nøkkelord": "KRIM",
          "forklaring": "Han leste krim før han forsvant. Kan historien ha inspirert noen?"
        },
        {
          "id": 8,
          "gåte": "Politiet finner en sjokoladebit i gangen – delvis smeltet. Den har kjent innpakning: rød og gull, fire striper. Hvilken sjokolade er det?",
          "hint": ["Turklassiker", "Deles i fire", "Norsk merkevare"],
          "svar": "KVIKKLUNSJ",
          "nøkkelord": "LUNSJ",
          "forklaring": "Noen har hatt med seg kvikklunsj på vei ut – kanskje han ble lokket ut?"
        },
        {
          "id": 9,
          "gåte": "Et gammelt brettspill ligger på bordet. En av brikkene er fjernet. Det er ikke tilfeldig – den manglende brikken bærer initialene til den savnede. Hva slags aktivitet er dette?",
          "hint": ["Spilles i hytter", "Ofte krangel om regler", "Har terning"],
          "svar": "SPILL",
          "nøkkelord": "PILL",
          "forklaring": "Et symbolsk trekk? Noen varslet at han var 'ute av spillet'?"
        },
        {
          "id": 10,
          "gåte": "Et brev er funnet bak peisen. Skriften er ustø. Det står: 'Han visste for mye om __________'. Ordet er revet av, men starter med 'a'.",
          "hint": ["Kriminelt", "Kan skjules i regnskap", "Ofte pengebasert"],
          "svar": "AVSLØRINGEN",
          "nøkkelord": "AVS",
          "forklaring": "Han hadde funnet ut noe. Et avslørende bevis? Et motiv?"
        },
        {
          "id": 11,
          "gåte": "Et fingeravtrykk finnes på termosen. Det matcher ingen i familien – men en av de andre gjestene. Hva kalles en slik ledetråd?",
          "hint": ["Politiet elsker dette", "Brukes i etterforskning", "Unikt for hver person"],
          "svar": "AVTRYKK",
          "nøkkelord": "TRYK",
          "forklaring": "Et tydelig bevis – noen andre har vært på kjøkkenet mens offeret forsvant."
        },
        {
          "id": 12,
          "gåte": "Siste side i påskekrim-boka var revet ut – men politiet finner den i lommen hans. På siden er en setning understreket: 'Morderen er alltid den man minst venter...'. Hvem var det?",
          "hint": ["Uventet", "Skjult hele tiden", "Muligens motiv: sjalusi"],
          "svar": "HUSHJELPEN",
          "nøkkelord": "HJELP",
          "forklaring": "Hushjelpen var ikke på noen liste. Hun så og visste mer enn hun burde – og handlet før hun selv ble avslørt."
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