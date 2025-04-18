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
    question: "Hvilken dag feirer vi påskeaften?",
    options: [
      "Dagen før langfredag",
      "Dagen før 1. påskedag",
      "Dagen før skjærtorsdag",
      "Dagen før palmesøndag"
    ],
    correctAnswer: 1,
    explanation: "Påskeaften er dagen mellom langfredag og 1. påskedag."
  },
  {
    id: 2,
    question: "Hva symboliserer påskeegget?",
    options: [
      "Nytt liv og gjenfødelse",
      "Bare en morsom tradisjon",
      "Vårens ankomst",
      "Jesu oppstandelse"
    ],
    correctAnswer: 0,
    explanation: "Påskeegget er et eldgammelt symbol på nytt liv og gjenfødelse."
  },
  {
    id: 3,
    question: "Hvilken tradisjonell påskefarge representerer oppstandelsen?",
    options: [
      "Rød",
      "Gul",
      "Hvit",
      "Lilla"
    ],
    correctAnswer: 2,
    explanation: "Hvit representerer renhet og oppstandelse i påsketradisjonen."
  },
  {
    id: 4,
    question: "Hva er en tradisjonell påskeaktivitet i Norge?",
    options: [
      "Påskekrim",
      "Strandtur",
      "Blomsterplanting",
      "Rakettoppskyting"
    ],
    correctAnswer: 0,
    explanation: "Påskekrim er en unik norsk tradisjon som startet i 1923."
  },
  {
    id: 5,
    question: "Hvilken dag kalles 'den stille dag' i påsken?",
    options: [
      "Palmesøndag",
      "Langfredag",
      "Påskeaften",
      "2. påskedag"
    ],
    correctAnswer: 1,
    explanation: "Langfredag kalles 'den stille dag' og markerer dagen Jesus døde på korset."
  },
  {
    id: 6,
    question: "Hva er 'Kvikklunsj' mest kjent for i Norge?",
    options: [
      "Påskefrokost",
      "Turmat i påsken",
      "Påskemiddag",
      "Påskekveldsmat"
    ],
    correctAnswer: 1,
    explanation: "Kvikklunsj er kjent som den perfekte tursjokoladen, spesielt populær i påsken."
  },
  {
    id: 7,
    question: "Hvilken fugl forbindes ofte med påsken?",
    options: [
      "Påskekylling",
      "Påskehare",
      "Påskeand",
      "Påskekalkun"
    ],
    correctAnswer: 0,
    explanation: "Påskekyllingen symboliserer nytt liv og er et viktig påskesymbol."
  },
  {
    id: 8,
    question: "Hva er en tradisjonell påskedessert i Norge?",
    options: [
      "Pavlova",
      "Tilslørte bondepiker",
      "Karamellpudding",
      "Kvæfjordkake"
    ],
    correctAnswer: 1,
    explanation: "Tilslørte bondepiker er en tradisjonell norsk dessert som ofte serveres i påsken."
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