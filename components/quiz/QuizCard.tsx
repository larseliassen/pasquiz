"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (answerIndex: number) => void;
  isAnswered: boolean;
  selectedAnswer?: number;
  showExplanation: boolean;
}

export function QuizCard({ 
  question, 
  onAnswer, 
  isAnswered, 
  selectedAnswer,
  showExplanation 
}: QuizCardProps) {
  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    onAnswer(index);
  };

  const getOptionStyle = (index: number) => {
    if (!isAnswered) return "hover:bg-primary/5 hover:border-primary/50";
    if (index === question.correctAnswer) {
      return "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300";
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300";
    }
    return "opacity-50";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto transition-all duration-300 hover:shadow-lg">
      <CardHeader className="space-y-4">
        <CardTitle className="text-2xl font-bold text-center leading-tight">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className={cn(
              "w-full text-left justify-start h-auto py-6 px-6 text-lg font-medium transition-all duration-200",
              "hover:scale-[1.02] active:scale-[0.98]",
              getOptionStyle(index)
            )}
            onClick={() => handleAnswerClick(index)}
            disabled={isAnswered}
          >
            <span className="mr-4 text-muted-foreground">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </Button>
        ))}
      </CardContent>
      {showExplanation && (
        <CardFooter className="flex flex-col items-start p-6 bg-muted/50 rounded-b-xl border-t">
          <p className="text-base text-muted-foreground leading-relaxed">
            {question.explanation}
          </p>
        </CardFooter>
      )}
    </Card>
  );
} 