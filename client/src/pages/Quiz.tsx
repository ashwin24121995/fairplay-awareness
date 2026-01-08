import { useParams, useLocation } from "wouter";
import { getTopic } from "@/lib/fairplayData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * Quiz Page - Fairplay Awareness
 * Interactive quiz with immediate feedback and scoring
 * Design: Modern Minimalist with Ethical Geometry
 */

export default function Quiz() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const topic = getTopic(params.id || "");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  if (!topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Quiz Not Found</h1>
          <Link href="/">
            <a>
              <Button className="bg-[#0D7377] hover:bg-[#0D7377]/90 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const questions = topic.quiz;
  const question = questions[currentQuestion];
  const isAnswered = answered.includes(currentQuestion);
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleSelectAnswer = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswer(index);
      setShowFeedback(true);
      setAnswered([...answered, currentQuestion]);
      if (index === question.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnswered([]);
    setQuizComplete(false);
  };

  const percentage = Math.round((score / questions.length) * 100);

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
          <div className="container flex items-center justify-between py-4">
            <Link href="/">
              <a className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <ArrowLeft className="w-5 h-5 text-[#0D7377]" />
                <span className="font-semibold text-[#0D7377]">Home</span>
              </a>
            </Link>
            <h1 className="font-bold text-lg text-[#0D7377]">Quiz Results</h1>
            <div className="w-12"></div>
          </div>
        </nav>

        {/* Results Section */}
        <section className="py-20 md:py-32">
          <div className="container max-w-2xl">
            <div className="text-center mb-12">
              <div className="inline-block mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0D7377] to-[#F4A261] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white">{percentage}%</div>
                    <div className="text-white text-sm mt-1">Score</div>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
              <p className="text-xl text-muted-foreground mb-2">
                You answered {score} out of {questions.length} questions correctly.
              </p>
              
              {percentage === 100 && (
                <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-semibold">🎉 Perfect Score! You're a fairplay expert!</p>
                </div>
              )}
              {percentage >= 80 && percentage < 100 && (
                <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-700 font-semibold">🌟 Excellent! You have a strong understanding of fairplay.</p>
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-700 font-semibold">👍 Good job! Consider reviewing the material for deeper understanding.</p>
                </div>
              )}
              {percentage < 60 && (
                <div className="mt-6 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-orange-700 font-semibold">📚 Keep learning! Review the content and try again.</p>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="fairplay-card p-8 text-center">
                <div className="text-4xl font-bold text-[#0D7377] mb-2">{score}</div>
                <p className="text-muted-foreground">Correct Answers</p>
              </div>
              <div className="fairplay-card p-8 text-center">
                <div className="text-4xl font-bold text-[#F4A261] mb-2">{questions.length - score}</div>
                <p className="text-muted-foreground">To Review</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleRestart}
                className="w-full bg-[#0D7377] hover:bg-[#0D7377]/90 text-white gap-2 py-6 text-lg"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Quiz
              </Button>
              <Link href={`/learn/${topic.id}`}>
                <a className="block">
                  <Button 
                    variant="outline"
                    className="w-full border-[#0D7377] text-[#0D7377] hover:bg-[#0D7377]/5 py-6 text-lg"
                  >
                    Review Content
                  </Button>
                </a>
              </Link>
              <Link href="/">
                <a className="block">
                  <Button 
                    variant="outline"
                    className="w-full border-[#0D7377] text-[#0D7377] hover:bg-[#0D7377]/5 py-6 text-lg"
                  >
                    Explore Other Topics
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] text-white py-12 mt-16">
          <div className="container text-center text-gray-400">
            <p>&copy; 2026 Fairplay Awareness. Promoting ethical behavior globally.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href={`/learn/${topic.id}`}>
            <a className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-[#0D7377]" />
              <span className="font-semibold text-[#0D7377]">Back</span>
            </a>
          </Link>
          <h1 className="font-bold text-lg text-[#0D7377]">{topic.shortTitle} Quiz</h1>
          <div className="text-sm font-semibold text-[#0D7377]">
            {currentQuestion + 1}/{questions.length}
          </div>
        </div>
      </nav>

      {/* Quiz Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-[#0D7377]">Progress</span>
              <span className="text-sm text-muted-foreground">{currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#0D7377] to-[#F4A261] h-full transition-all duration-300"
                style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="fairplay-card p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#0D7377]">
              {question.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-4 mb-8">
              {question.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrectOption = idx === question.correctAnswer;
                const showCorrect = showFeedback && isCorrectOption;
                const showIncorrect = showFeedback && isSelected && !isCorrectOption;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      showCorrect
                        ? "border-green-500 bg-green-50"
                        : showIncorrect
                        ? "border-red-500 bg-red-50"
                        : isSelected && !showFeedback
                        ? "border-[#0D7377] bg-[#0D7377]/5"
                        : "border-border hover:border-[#0D7377] hover:bg-[#0D7377]/5"
                    } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                        showCorrect
                          ? "border-green-500 bg-green-500 text-white"
                          : showIncorrect
                          ? "border-red-500 bg-red-500 text-white"
                          : isSelected
                          ? "border-[#0D7377] bg-[#0D7377] text-white"
                          : "border-gray-300"
                      }`}>
                        {showCorrect && "✓"}
                        {showIncorrect && "✗"}
                        {!showFeedback && !isSelected && (idx + 1)}
                        {!showFeedback && isSelected && "✓"}
                      </div>
                      <span className="text-lg">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-6 rounded-lg mb-8 ${
                isCorrect
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}>
                <p className={`font-semibold mb-2 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                  {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                </p>
                <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {showFeedback && (
              <Button 
                onClick={handleNext}
                className="w-full bg-[#F4A261] hover:bg-[#F4A261]/90 text-white gap-2 py-6 text-lg"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            )}
          </div>

          {/* Score Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="fairplay-card p-6 text-center">
              <div className="text-3xl font-bold text-[#0D7377] mb-2">{score}</div>
              <p className="text-muted-foreground">Correct So Far</p>
            </div>
            <div className="fairplay-card p-6 text-center">
              <div className="text-3xl font-bold text-[#F4A261] mb-2">
                {Math.round((score / (currentQuestion + 1)) * 100)}%
              </div>
              <p className="text-muted-foreground">Current Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-16">
        <div className="container text-center text-gray-400">
          <p>&copy; 2026 Fairplay Awareness. Promoting ethical behavior globally.</p>
        </div>
      </footer>
    </div>
  );
}
