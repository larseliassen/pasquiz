export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Hvilken spesiell påskekrim-tradisjon startet med en avisannonse i 1923?",
    options: [
      "En serie med påskekrim på NRK",
      "Melkekartonger med mordgåter",
      "Bergenstoget plyndret i natt!",
      "Den første påskekrimfestivalen"
    ],
    correctAnswer: 2,
    explanation: "I 1923 plasserte Gyldendal en annonse på forsiden av Aftenposten som så ut som en ekte nyhetsoverskrift: 'Bergenstoget plyndret i natt!' Dette var faktisk reklame for en kriminalroman og markerte starten på den norske påskekrim-tradisjonen."
  },
  {
    id: 2,
    question: "Hva er 'Gul-E', og når ble denne påsketradisjonen introdusert i Norge?",
    options: [
      "En påskerebus fra 1980-tallet",
      "Kvikk Lunsj sin maskot fra 1970",
      "NRKs påskeegg fra 1990",
      "En påskeøl lansert i 1960"
    ],
    correctAnswer: 0,
    explanation: "Gul-E var en påskerebus som ble introdusert av VG i 1988. Den ble raskt en populær påsketradisjon der familier kunne løse rebuser og gåter sammen i påskeferien."
  },
  {
    id: 3,
    question: "Hvilken unik påsketradisjon har Norges teknisk-naturvitenskapelige universitet (NTNU)?",
    options: [
      "Påskeprofessoren kler seg ut som kylling",
      "Studentene bygger verdens største påskeegg",
      "Påskenøtter i matematikk sendes til alle studenter",
      "UKA arrangerer påskerevy"
    ],
    correctAnswer: 2,
    explanation: "NTNU har en tradisjon hvor matematikkprofessorene lager spesielle 'påskenøtter' - matematiske gåter med påsketema som sendes ut til studentene i påskeferien."
  },
  {
    id: 4,
    question: "Hva er spesielt med 'påskebrus', og når ble den først introdusert?",
    options: [
      "Den er farget gul med naturlige fargestoffer",
      "Den inneholder appelsinsmak og ekstra sukker",
      "Den har gult lokk istedenfor rødt",
      "Den selges kun i påsken og har hemmelig oppskrift"
    ],
    correctAnswer: 3,
    explanation: "Påskebrus er en unik norsk tradisjon som startet på 1950-tallet. Solo Super og andre brusmerker lager spesielle påskeversjoner med hemmelige oppskrifter som kun selges i påskesesongen."
  },
  {
    id: 5,
    question: "Hvilken spesiell påsketradisjon har Røldal stavkirke?",
    options: [
      "Midnattsmesse med fakler",
      "Helbredende krusifiks som svetter",
      "Påskeegg gjemt i kirken",
      "Påskesalmene synges baklengs"
    ],
    correctAnswer: 1,
    explanation: "Røldal stavkirke har et unikt krusifiks som ifølge tradisjonen svetter hver langfredag. I middelalderen valfarten folk dit for helbredelse, og tradisjonen lever fortsatt i dag."
  },
  {
    id: 6,
    question: "Hva er den mystiske historien bak 'påskeharen' i norsk tradisjon?",
    options: [
      "Den stammer fra norrøn mytologi",
      "Den er egentlig en tysk tradisjon",
      "Den er basert på samisk folklore",
      "Den ble oppfunnet av godteriprodusenter"
    ],
    correctAnswer: 1,
    explanation: "Påskeharen er faktisk en tysk tradisjon fra 1600-tallet som kom til Norge via Danmark. Den har ingen rot i norsk folklore, men ble populær her på 1900-tallet gjennom kommersielle påskeprodukter."
  },
  {
    id: 7,
    question: "Hvilken uvanlig påsketradisjon har Trysil?",
    options: [
      "Påskeskirenn i badstue",
      "Påskejazz i skibakken",
      "Reinsdyrkappløp på langfredag",
      "Midnattssol-festival i påsken"
    ],
    correctAnswer: 1,
    explanation: "Trysil har arrangert 'Ski & Jazz' siden 1973, hvor jazz spilles i skibakken under påsken. Dette har blitt en unik tradisjon som kombinerer skiglede med levende musikk i påskesolen."
  },
  {
    id: 8,
    question: "Hva er 'Påskemarsipanen', og hvorfor er den spesiell?",
    options: [
      "En marsipangris med påskepynt",
      "Marsipan laget av påskenøtter",
      "Gul marsipan med appelsinsmak",
      "Norges første marsipanfigur"
    ],
    correctAnswer: 2,
    explanation: "Påskemarsipanen er en spesiell variant som ble introdusert av Nidar på 1960-tallet. Den har en unik gul farge og appelsinsmak som skiller den fra vanlig marsipan, og har blitt et ikonisk påskegodt i Norge."
  }
];

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  isComplete: boolean;
}

export const initialQuizState: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  isComplete: false,
}; 