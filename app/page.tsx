"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { rebusSpørsmål, type RebusQuestion } from "@/lib/quiz-data";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<RebusQuestion>(rebusSpørsmål[0]);
  const [svar, setSvar] = useState("");
  const [feilmelding, setFeilmelding] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);

  function handleSvarSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (svar.toLowerCase().trim() === currentQuestion.svar.toLowerCase()) {
      setIsCorrect(true);
      setFeilmelding("");
    } else {
      setFeilmelding("Feil svar, prøv igjen!");
      setIsCorrect(false);
    }
  }

  function handleShowHint() {
    setShowHint(true);
    setHintsUsed(prev => prev + 1);
  }

  function handleRestart() {
    setCurrentQuestion(rebusSpørsmål[currentQuestion.id]);
    setSvar("");
    setFeilmelding("");
    setIsCorrect(false);
    setHintsUsed(0);
    setShowHint(false);
  }

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="quiz-title animate-shine">PåskeQuiz</h1>
      
      <Card className="w-full max-w-lg shadow-lg animate-float">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Rebus #{currentQuestion.id}</h2>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-lg font-mono mb-4 whitespace-pre-line">{currentQuestion.gåte}</p>
            {showHint && (
              <div className="text-sm text-muted-foreground italic space-y-2">
                {currentQuestion.hint.map((hint, index) => (
                  <p key={index}>Hint {index + 1}: {hint}</p>
                ))}
              </div>
            )}
          </div>

          {currentQuestion.bilde && (
            <div className="flex justify-center">
              <img 
                src={currentQuestion.bilde} 
                alt="Rebus bilde"
                className="rounded-lg max-h-48 object-contain"
              />
            </div>
          )}

          {isCorrect ? (
            <div className="text-center space-y-4">
              <p className="text-xl font-semibold text-green-600 dark:text-green-400">
                Gratulerer! Du klarte det{hintsUsed > 0 ? ` med ${hintsUsed} hint` : ""}!
              </p>
              <p className="text-sm text-muted-foreground">{currentQuestion.forklaring}</p>
              <Button onClick={handleRestart} variant="outline">
                Fortsett
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSvarSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  value={svar}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSvar(e.target.value)}
                  placeholder="Skriv ditt svar her..."
                  className="text-center"
                />
                {feilmelding && (
                  <p className="text-sm text-destructive text-center">
                    {feilmelding}
                  </p>
                )}
              </div>
              
              <div className="flex justify-center gap-2">
                <Button type="submit">
                  Sjekk svar
                </Button>
                {!showHint && (
                  <Button type="button" variant="outline" onClick={handleShowHint}>
                    Vis hint
                  </Button>
                )}
              </div>
            </form>
          )}
        </CardContent>

        <CardFooter className="justify-center text-sm text-muted-foreground">
          {hintsUsed > 0 && !isCorrect && (
            <p>Hint brukt: {hintsUsed}</p>
          )}
        </CardFooter>
      </Card>
    </main>
  );
} 