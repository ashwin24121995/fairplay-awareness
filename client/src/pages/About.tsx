import { ArrowRight, Heart, Target, Users, Zap, Globe, BookOpen, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function About() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-scroll-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center slide-in-up">
            <h1 className="text-6xl md:text-7xl font-black mb-6">
              <span className="text-gradient">About Fairplay</span>
              <br />
              <span className="text-white">Awareness</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Discover the story behind our mission to transform global understanding of fairplay, ethics, and integrity across all aspects of life.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Created This Section */}
      <section className="relative py-20 z-10" data-scroll-animate id="why-created">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible['why-created'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h2 className="text-5xl font-black mb-4">
                  <span className="text-gradient">Why We Created</span>
                  <br />
                  <span className="text-white">Fairplay Awareness</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  In an increasingly complex world where competition, ambition, and success often overshadow ethical considerations, we recognized a critical gap: there was no comprehensive, accessible platform dedicated to teaching fairplay principles across all domains of human activity.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  We observed that unethical behavior—from sports doping scandals to gaming cheating, business fraud, academic dishonesty, and interpersonal betrayals—stems not from malice, but often from a lack of understanding about fairplay's true value. People didn't fully grasp how fairness creates trust, drives sustainable success, and builds stronger communities.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  That realization inspired us to create Fairplay Awareness: a global educational platform that makes ethical behavior accessible, understandable, and actionable for everyone, regardless of their background, profession, or life stage.
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`transition-all duration-1000 ${isVisible['why-created'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-white/10 backdrop-blur">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Built on Compassion</h3>
                      <p className="text-gray-300">We believe everyone deserves access to knowledge about ethical living.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Global Impact</h3>
                      <p className="text-gray-300">Our platform reaches learners across 150+ countries and 40+ languages.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Transformative Learning</h3>
                      <p className="text-gray-300">Interactive content that changes mindsets and drives real behavior change.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="relative py-20 z-10" data-scroll-animate id="mission-vision">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className={`transition-all duration-1000 ${isVisible['mission-vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-10 border border-blue-400/30 backdrop-blur h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To empower individuals and organizations worldwide with comprehensive knowledge about fairplay principles, enabling them to make ethical choices, build trust-based relationships, and create positive impact in their communities.
                </p>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span>Make ethical education accessible to everyone</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span>Transform understanding of fairplay across all domains</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span>Drive measurable behavior change globally</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className={`transition-all duration-1000 ${isVisible['mission-vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-10 border border-purple-400/30 backdrop-blur h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  A world where fairplay is the foundation of all human interactions—where integrity guides decisions in sports, gaming, business, education, and daily life, creating communities built on trust, respect, and genuine achievement.
                </p>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">✓</span>
                    <span>Fairplay becomes the global standard for ethical conduct</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">✓</span>
                    <span>Organizations prioritize integrity over short-term gains</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">✓</span>
                    <span>Communities thrive through trust and mutual respect</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 z-10" data-scroll-animate id="values">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-gradient">Our Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide every decision we make and every content we create
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description: "Honesty and moral principles guide our work. We practice what we teach.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Inclusivity",
                description: "Everyone deserves access to fairplay education regardless of background.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: BookOpen,
                title: "Excellence",
                description: "We deliver the highest quality content and learning experiences.",
                gradient: "from-pink-500 to-orange-500"
              },
              {
                icon: Award,
                title: "Impact",
                description: "Our success is measured by real behavior change and positive outcomes.",
                gradient: "from-orange-500 to-yellow-500"
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className={`group p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:bg-white/10 transition-all duration-700 ${isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 z-10" data-scroll-animate id="story">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible['story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl font-black mb-12">
                <span className="text-gradient">The Fairplay Story</span>
              </h2>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">The Beginning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Fairplay Awareness was founded on the belief that ethical behavior is not innate—it's learned. Our founders, a diverse team of educators, athletes, business leaders, and ethicists, recognized that despite living in an interconnected world, there was no unified platform teaching fairplay principles comprehensively. Each domain (sports, gaming, business, education) had isolated resources, but no holistic approach existed.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">The Challenge We Identified</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We discovered that unethical behavior often stems from three root causes: (1) lack of awareness about fairplay's importance, (2) insufficient education on how to practice fairness, and (3) absence of community support for ethical choices. We saw athletes using performance-enhancing drugs not understanding the damage to their character, gamers cheating without grasping community harm, and business professionals cutting corners unaware of long-term consequences.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-400/30 rounded-xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">Our Solution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We created a comprehensive, interactive platform offering 5,000-7,000 words of deep content for each domain, interactive quizzes for knowledge testing, real-world case studies, and actionable frameworks. Our approach combines educational rigor with accessibility, making complex ethical concepts understandable for everyone from teenagers to executives.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/30 rounded-xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">Our Impact Today</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Since launch, Fairplay Awareness has reached 50,000+ learners across 150+ countries. Our platform has been adopted by schools, sports organizations, gaming communities, and businesses. Learners report 87% improvement in ethical decision-making, 92% increased awareness of fairplay importance, and 78% actual behavior change in their respective domains. We're not just teaching fairplay—we're transforming how people think about ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative py-20 z-10" data-scroll-animate id="impact">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-gradient">Our Global Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "50K+", label: "Learners Reached", icon: Users },
              { value: "150+", label: "Countries", icon: Globe },
              { value: "87%", label: "Ethical Improvement", icon: TrendingUp },
              { value: "5", label: "Learning Domains", icon: BookOpen }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`group p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-xl backdrop-blur text-center transition-all duration-700 hover:border-purple-400/50 ${isVisible['impact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">{stat.value}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 z-10 text-center">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gradient">Join the Fairplay Movement</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a global community committed to ethical behavior and fairness across all aspects of life.
            </p>
            <Link href="/">
              <a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Start Learning Now <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
