import { getTopic } from "@/lib/fairplayData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams, useLocation } from "wouter";
import Navbar from "@/components/Navbar";

/**
 * Learning Page - Advanced 3D Design
 * Displays deep detailed content with vibrant gradients and animations
 */

export default function Learn() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const topic = getTopic(params.id || "");

  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Topic Not Found</h1>
          <p className="text-gray-300 mb-6">The topic you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={topic.image} 
          alt={topic.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl drop-shadow-lg">{topic.icon}</span>
              <h1 className="text-5xl font-black text-white drop-shadow-lg">{topic.title}</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-2xl drop-shadow-lg">{topic.description}</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-16 card-3d p-8 bg-white/5 border border-white/10 backdrop-blur slide-in-up">
            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Introduction</h2>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
              {topic.sections.introduction}
            </p>
          </div>

          {/* Core Concepts */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Core Concepts</h2>
            <div className="space-y-4">
              {topic.sections.coreConcepts.map((concept, idx) => (
                <div key={idx} className="card-3d p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-l-blue-400 border border-white/10 backdrop-blur">
                  <p className="text-gray-300 leading-relaxed">{concept}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Real-World Examples</h2>
            <div className="space-y-4">
              {topic.sections.realWorldExamples.map((example, idx) => {
                const isGood = example.startsWith("Good Example");
                return (
                  <div 
                    key={idx} 
                    className={`card-3d p-6 border-l-4 backdrop-blur ${
                      isGood 
                        ? 'border-l-green-400 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20' 
                        : 'border-l-red-400 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-400/20'
                    }`}
                  >
                    <p className="text-gray-300 leading-relaxed">{example}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Best Practices</h2>
            <div className="space-y-4">
              {topic.sections.bestPractices.map((practice, idx) => (
                <div key={idx} className="card-3d p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/20 backdrop-blur">
                  <p className="text-gray-300 leading-relaxed">{practice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              {topic.sections.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="card-3d p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-l-red-400 border border-red-400/20 backdrop-blur">
                  <p className="text-gray-300 leading-relaxed">{mistake}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="mb-16 card-3d p-8 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-xl border border-purple-400/30 backdrop-blur">
            <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Why It Matters</h2>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
              {topic.sections.whyItMatters}
            </p>
          </div>

          {/* Quiz CTA */}
          <div className="text-center py-8 card-3d p-8 bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-3xl font-black mb-4 text-white">Test Your Knowledge</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Take the interactive quiz to test your understanding of {topic.shortTitle} fairplay.
            </p>
            <Link href={`/quiz/${topic.id}`}>
              <a>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Start Quiz <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur border-t border-white/10 py-12 mt-16">
        <div className="container">
          <div className="text-center">
            <Link href="/">
              <a className="text-white hover:text-purple-400 transition-colors font-semibold mb-4 inline-block">
                ← Back to Home
              </a>
            </Link>
            <p className="text-gray-400">&copy; 2026 Fairplay Awareness. Promoting ethical behavior globally.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
