"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion, QuizState, initialQuizState } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (answerIndex: number) => void;
  isAnswered: boolean;
  selectedAnswer?: number;
}

export function QuizCard({ question, onAnswer, isAnswered, selectedAnswer }: QuizCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    onAnswer(index);
    setIsRevealed(true);
  };

  const getOptionStyle = (index: number) => {
    if (!isAnswered) return "";
    if (index === question.correctAnswer) {
      return "bg-green-100 dark:bg-green-900 border-green-500";
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-red-100 dark:bg-red-900 border-red-500";
    }
    return "opacity-50";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className={cn(
              "w-full text-left justify-start h-auto py-4 px-6 font-normal",
              getOptionStyle(index)
            )}
            onClick={() => handleAnswerClick(index)}
            disabled={isAnswered}
          >
            {option}
          </Button>
        ))}
      </CardContent>
      {isRevealed && (
        <CardFooter className="flex flex-col items-start p-6 bg-muted/50">
          <p className="text-sm text-muted-foreground">
            {question.explanation}
          </p>
        </CardFooter>
      )}
    </Card>
  );
} 