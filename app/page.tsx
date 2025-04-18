"use client";

import { useState } from "react";
import { QuizCard } from "@/components/quiz/QuizCard";
import { quizQuestions, initialQuizState, type QuizState } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";

interface ExtendedQuizState extends QuizState {
  showExplanation: boolean;
}

const extendedInitialState: ExtendedQuizState = {
  ...initialQuizState,
  showExplanation: false,
};

export default function Home() {
  const [quizState, setQuizState] = useState<ExtendedQuizState>(extendedInitialState);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = answerIndex;

    const newScore = newAnswers.reduce((score, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);

    setQuizState((prev) => ({
      ...prev,
      answers: newAnswers,
      score: newScore,
      showExplanation: true,
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showExplanation: false,
      }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        isComplete: true,
      }));
    }
  };

  const handleRestart = () => {
    setQuizState(extendedInitialState);
  };

  const currentQuestion = quizQuestions[quizState.currentQuestionIndex];
  const isAnswered = quizState.answers[quizState.currentQuestionIndex] !== undefined;

  if (quizState.isComplete) {
    return (
      <main className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="quiz-title animate-float">
              Quiz Fullført! 🎉
            </h1>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-primary">
              Gratulerer!
            </p>
            <p className="text-xl">
              Din poengsum: <span className="font-bold text-primary">{quizState.score}</span> av {quizQuestions.length}
            </p>
          </div>
          <Button 
            onClick={handleRestart} 
            size="lg"
            className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Start På Nytt
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="relative">
            <h1 className="quiz-title animate-shine">
              PåskeQuiz
              <span className="animate-float inline-block ml-2">🐣</span>
            </h1>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            Spørsmål {quizState.currentQuestionIndex + 1} av {quizQuestions.length}
          </p>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ 
                width: `${((quizState.currentQuestionIndex + 1) / quizQuestions.length) * 100}%` 
              }}
            />
          </div>
        </div>

        <QuizCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedAnswer={quizState.answers[quizState.currentQuestionIndex]}
          showExplanation={quizState.showExplanation}
        />

        {isAnswered && (
          <div className="flex justify-end">
            <Button 
              onClick={handleNext} 
              size="lg"
              className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {quizState.currentQuestionIndex === quizQuestions.length - 1
                ? "Se Resultater"
                : "Neste Spørsmål"}
            </Button>
          </div>
        )}
      </div>
    </main>
  );
} 