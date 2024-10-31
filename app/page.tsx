"use client";
import { Ghost, Moon, Star } from 'lucide-react';
import { useState } from 'react';

const questions = [
  {
    question: "D'où vient la tradition d'Halloween ?",
    options: [
      "De la fête irlandaise Samhain",
      "D'une fête de pirates",
      "D'une fête du printemps",
      "D'une fête du Père Noël"
    ],
    correct: 0,
    explanation: "Halloween vient d'une ancienne fête irlandaise appelée Samhain qui marquait la fin de l'été !"
  },
  {
    question: "Pourquoi creuse-t-on des citrouilles à Halloween ?",
    options: [
      "Pour faire une soupe",
      "Pour faire une lanterne qui protège la maison",
      "Pour décorer le jardin",
      "Pour nourrir les oiseaux"
    ],
    correct: 1,
    explanation: "Les lanternes en citrouille étaient utilisées pour protéger les maisons des esprits pendant Halloween !"
  },
  {
    question: "Pourquoi dit-on 'des bonbons ou un sort' ?",
    options: [
      "Pour faire peur aux voisins",
      "Pour avoir plus de bonbons",
      "C'est une ancienne tradition d'échange",
      "Pour s'amuser entre amis"
    ],
    correct: 2,
    explanation: "C'est une tradition où les gens échangeaient de la nourriture contre des chansons et des prières !"
  },
  {
    question: "Quelle couleur représente Halloween avec le noir ?",
    options: [
      "Le rouge",
      "Le orange",
      "Le bleu",
      "Le vert"
    ],
    correct: 1,
    explanation: "Le orange des citrouilles et le noir de la nuit sont les couleurs traditionnelles d'Halloween !"
  },
  {
    question: "Quel légume utilisait-on avant les citrouilles ?",
    options: [
      "Des navets",
      "Des pommes",
      "Des carottes",
      "Des patates"
    ],
    correct: 0,
    explanation: "En Irlande, on creusait des navets car il n'y avait pas de citrouilles !"
  }
];

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