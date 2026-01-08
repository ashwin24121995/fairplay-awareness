import { useParams, useLocation } from "wouter";
import { getTopic } from "@/lib/fairplayData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Learning Page - Fairplay Awareness
 * Displays deep detailed content for each fairplay topic
 * Design: Modern Minimalist with Ethical Geometry
 */

export default function Learn() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const topic = getTopic(params.id || "");

  if (!topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
          <p className="text-muted-foreground mb-6">The topic you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-[#0D7377]" />
              <span className="font-semibold text-[#0D7377]">Back</span>
            </a>
          </Link>
          <h1 className="font-bold text-lg text-[#0D7377]">{topic.title}</h1>
          <div className="w-12"></div>
        </div>
      </nav>

      {/* Hero Section with Topic Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={topic.image} 
          alt={topic.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D7377]/80 via-[#0D7377]/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{topic.icon}</span>
              <h1 className="text-5xl font-bold text-white">{topic.title}</h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl">{topic.description}</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0D7377]">Introduction</h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {topic.sections.introduction}
            </p>
          </div>

          {/* Core Concepts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0D7377]">Core Concepts</h2>
            <div className="space-y-4">
              {topic.sections.coreConcepts.map((concept, idx) => (
                <div key={idx} className="fairplay-card p-6 border-l-4 border-l-[#F4A261]">
                  <p className="text-muted-foreground leading-relaxed">{concept}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0D7377]">Real-World Examples</h2>
            <div className="space-y-4">
              {topic.sections.realWorldExamples.map((example, idx) => {
                const isGood = example.startsWith("Good Example");
                return (
                  <div 
                    key={idx} 
                    className={`fairplay-card p-6 border-l-4 ${isGood ? 'border-l-green-500 bg-green-50/30' : 'border-l-red-500 bg-red-50/30'}`}
                  >
                    <p className="text-muted-foreground leading-relaxed">{example}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0D7377]">Best Practices</h2>
            <div className="space-y-4">
              {topic.sections.bestPractices.map((practice, idx) => (
                <div key={idx} className="fairplay-card p-6">
                  <p className="text-muted-foreground leading-relaxed">{practice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0D7377]">Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              {topic.sections.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="fairplay-card p-6 bg-orange-50/30 border-l-4 border-l-orange-400">
                  <p className="text-muted-foreground leading-relaxed">{mistake}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="mb-16 bg-gradient-to-br from-[#0D7377]/10 to-[#F4A261]/10 rounded-xl p-8 border border-[#F4A261]/20">
            <h2 className="text-3xl font-bold mb-6 text-[#0D7377]">Why It Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {topic.sections.whyItMatters}
            </p>
          </div>

          {/* Quiz CTA */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">Test Your Knowledge</h3>
            <p className="text-muted-foreground mb-6">
              Take the interactive quiz to test your understanding of {topic.shortTitle} fairplay.
            </p>
            <Link href={`/quiz/${topic.id}`}>
              <a>
                <Button className="bg-[#F4A261] hover:bg-[#F4A261]/90 text-white gap-2 px-8 py-6 text-lg">
                  Start Quiz <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-16">
        <div className="container">
          <div className="text-center">
            <Link href="/">
              <a className="text-white hover:text-[#F4A261] transition-colors font-semibold mb-4 inline-block">
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
