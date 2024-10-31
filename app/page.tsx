"use client";
import { Ghost, Moon, Star } from 'lucide-react';
import { useState } from 'react';
import { questions } from './questions';



const HalloweenQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setGameOver(false);
  };

  return (
    <div className="w-full min-h-screen bg-purple-900 p-4 relative overflow-hidden">
      {/* Étoiles d'arrière-plan */}
      {[...Array(20)].map((_, i) => (
        <Star
          key={i}
          className="absolute text-yellow-200 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
          size={16}
        />
      ))}

      {/* Contenu principal */}
      <div className="max-w-3xl mx-auto relative z-10">
        {!gameOver ? (
          <>
            {/* Progression */}
            <div className="bg-orange-500 text-white p-4 rounded-t-lg text-center">
              <h2 className="text-xl font-bold">Question {currentQuestion + 1}/{questions.length}</h2>
              <div className="mt-2">Score: {score} points</div>
            </div>

            {/* Question */}
            <div className="bg-purple-800 text-white p-6 shadow-xl">
              <h3 className="text-2xl mb-8 text-center">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showExplanation && handleAnswer(index)}
                    className={`p-4 rounded-lg text-left transition-colors ${selectedAnswer === null
                      ? 'bg-purple-700 hover:bg-purple-600'
                      : index === questions[currentQuestion].correct
                        ? 'bg-green-600'
                        : selectedAnswer === index
                          ? 'bg-red-600'
                          : 'bg-purple-700'
                      } ${showExplanation ? 'cursor-default' : 'hover:bg-purple-600'}`}
                    disabled={showExplanation}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Explication */}
              {showExplanation && (
                <div className="mt-6">
                  <div className="bg-orange-500 p-4 rounded-lg text-white">
                    {questions[currentQuestion].explanation}
                  </div>
                  <button
                    onClick={nextQuestion}
                    className="mt-4 w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600"
                  >
                    Question suivante
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Écran de fin */
          <div className="bg-purple-800 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              Quiz terminé ! 🎃
            </h2>
            <p className="text-xl mb-6">
              Tu as obtenu {score} points sur {questions.length} !
            </p>
            <button
              onClick={restartGame}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Rejouer
            </button>
          </div>
        )}
      </div>

      {/* Décorations */}
      <Ghost className="absolute bottom-4 left-4 text-white animate-bounce" size={48} />
      <Moon className="absolute top-4 right-4 text-yellow-200" size={64} />
      <Ghost className="absolute top-4 left-4 text-white animate-bounce" size={48} />
    </div>
  );
};

export default HalloweenQuiz;