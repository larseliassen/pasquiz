"use client";

import { useState } from "react";
import { QuizCard } from "@/components/quiz/QuizCard";
import { quizQuestions, initialQuizState, type QuizState } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>(initialQuizState);

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
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        isComplete: true,
      }));
    }
  };

  const handleRestart = () => {
    setQuizState(initialQuizState);
  };

  const currentQuestion = quizQuestions[quizState.currentQuestionIndex];
  const isAnswered = quizState.answers[quizState.currentQuestionIndex] !== undefined;

  if (quizState.isComplete) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-3xl font-bold">Quiz Fullført! 🎉</h1>
          <p className="text-xl">
            Din poengsum: {quizState.score} av {quizQuestions.length}
          </p>
          <Button onClick={handleRestart} size="lg">
            Start På Nytt
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">PåskeQuiz 🐣</h1>
          <p className="text-muted-foreground">
            Spørsmål {quizState.currentQuestionIndex + 1} av {quizQuestions.length}
          </p>
        </div>

        <QuizCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedAnswer={quizState.answers[quizState.currentQuestionIndex]}
        />

        {isAnswered && (
          <div className="flex justify-end">
            <Button onClick={handleNext} size="lg">
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