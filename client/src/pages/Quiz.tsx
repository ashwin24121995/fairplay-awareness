import { getTopic } from "@/lib/fairplayData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Link, useParams, useLocation } from "wouter";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Quiz Page - Advanced 3D Design
 * Interactive quiz with scoring and vibrant feedback
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Quiz Not Found</h1>
          <Link href="/">
            <a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Global Navigation */}
        <Navbar />

        {/* Results Section */}
        <section className="relative z-10 py-20 md:py-32">
          <div className="container max-w-2xl">
            <div className="text-center mb-12">
              <div className="inline-block mb-8 scale-pulse">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl font-black text-white">{percentage}%</div>
                    <div className="text-white text-sm mt-1 font-semibold">Score</div>
                  </div>
                </div>
              </div>
              <h1 className="text-5xl font-black text-white mb-4">Quiz Complete!</h1>
              <p className="text-2xl text-gray-300 mb-2">
                You answered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">{score}</span> out of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">{questions.length}</span> correctly.
              </p>
              
              {percentage === 100 && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-lg">
                  <p className="text-green-300 font-bold text-lg">🎉 Perfect Score! You're a fairplay expert!</p>
                </div>
              )}
              {percentage >= 80 && percentage < 100 && (
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 rounded-lg">
                  <p className="text-blue-300 font-bold text-lg">🌟 Excellent! You have a strong understanding of fairplay.</p>
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="mt-6 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/50 rounded-lg">
                  <p className="text-yellow-300 font-bold text-lg">👍 Good job! Consider reviewing the material for deeper understanding.</p>
                </div>
              )}
              {percentage < 60 && (
                <div className="mt-6 p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/50 rounded-lg">
                  <p className="text-orange-300 font-bold text-lg">📚 Keep learning! Review the content and try again.</p>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-3d p-8 bg-white/5 border border-white/10 backdrop-blur text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">{score}</div>
                <p className="text-gray-300 text-lg">Correct Answers</p>
              </div>
              <div className="card-3d p-8 bg-white/5 border border-white/10 backdrop-blur text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">{questions.length - score}</div>
                <p className="text-gray-300 text-lg">To Review</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 py-6 text-lg font-semibold shadow-lg"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Quiz
              </Button>
              <Link href={`/learn/${topic.id}`}>
                <a className="block">
                  <Button 
                    variant="outline"
                    className="w-full border-purple-400 text-purple-300 hover:bg-purple-500/20 py-6 text-lg font-semibold backdrop-blur"
                  >
                    Review Content
                  </Button>
                </a>
              </Link>
              <Link href="/">
                <a className="block">
                  <Button 
                    variant="outline"
                    className="w-full border-purple-400 text-purple-300 hover:bg-purple-500/20 py-6 text-lg font-semibold backdrop-blur"
                  >
                    Explore Other Topics
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Global Navigation */}
      <Navbar />

      {/* Quiz Section */}
      <section className="relative z-10 py-8 md:py-16">
        <div className="container max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-purple-300">Progress</span>
              <span className="text-sm text-gray-400">{currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden border border-white/20 backdrop-blur">
              <div 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full transition-all duration-300"
                style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="card-3d p-8 md:p-12 mb-8 bg-white/5 border border-white/10 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-black mb-8 text-white">
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
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 transform hover:scale-102 ${
                      showCorrect
                        ? "border-green-400 bg-gradient-to-r from-green-500/20 to-emerald-500/20 shadow-lg shadow-green-500/50"
                        : showIncorrect
                        ? "border-red-400 bg-gradient-to-r from-red-500/20 to-pink-500/20 shadow-lg shadow-red-500/50"
                        : isSelected && !showFeedback
                        ? "border-purple-400 bg-gradient-to-r from-purple-500/20 to-blue-500/20 shadow-lg shadow-purple-500/50"
                        : "border-white/20 hover:border-purple-400 hover:bg-white/5"
                    } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 font-bold transition-all ${
                        showCorrect
                          ? "border-green-400 bg-green-500 text-white"
                          : showIncorrect
                          ? "border-red-400 bg-red-500 text-white"
                          : isSelected
                          ? "border-purple-400 bg-purple-500 text-white"
                          : "border-gray-400 text-gray-400"
                      }`}>
                        {showCorrect && "✓"}
                        {showIncorrect && "✗"}
                        {!showFeedback && !isSelected && (idx + 1)}
                        {!showFeedback && isSelected && "✓"}
                      </div>
                      <span className="text-lg text-white font-medium">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-6 rounded-lg mb-8 border-2 ${
                isCorrect
                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400"
                  : "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400"
              }`}>
                <p className={`font-bold mb-2 text-lg ${isCorrect ? "text-green-300" : "text-red-300"}`}>
                  {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                </p>
                <p className={isCorrect ? "text-green-200" : "text-red-200"}>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {showFeedback && (
              <Button 
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white gap-2 py-6 text-lg font-semibold shadow-lg"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            )}
          </div>

          {/* Score Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-3d p-6 bg-white/5 border border-white/10 backdrop-blur text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">{score}</div>
              <p className="text-gray-300">Correct So Far</p>
            </div>
            <div className="card-3d p-6 bg-white/5 border border-white/10 backdrop-blur text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                {Math.round((score / (currentQuestion + 1)) * 100)}%
              </div>
              <p className="text-gray-300">Current Score</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
