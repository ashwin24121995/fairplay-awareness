import { ArrowRight, Heart, Target, Users, Zap, Globe, BookOpen, Award, TrendingUp, CheckCircle, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function About() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

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

  const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const isExpanded = expandedFAQ === question;
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-400/30 transition-all">
        <button
          onClick={() => setExpandedFAQ(isExpanded ? null : question)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        >
          <span className="text-left font-semibold text-white">{question}</span>
          <ArrowRight className={`w-5 h-5 text-purple-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
        {isExpanded && (
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 text-gray-300 leading-relaxed">
            {answer}
          </div>
        )}
      </div>
    );
  };

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
              Discover the comprehensive story behind our mission to transform global understanding of fairplay, ethics, and integrity across all aspects of life. Learn how we're building a world where ethical behavior is the foundation of success.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Created This Section */}
      <section className="relative py-20 z-10" data-scroll-animate id="why-created">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible['why-created'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h2 className="text-5xl font-black mb-4">
                  <span className="text-gradient">Why We Created</span>
                  <br />
                  <span className="text-white">Fairplay Awareness</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">The Problem We Identified</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    In an increasingly complex world where competition, ambition, and success often overshadow ethical considerations, we recognized a critical gap: there was no comprehensive, accessible platform dedicated to teaching fairplay principles across all domains of human activity. From sports to gaming, business to education, each sector had isolated resources, but no unified approach existed.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">The Root Cause</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We observed that unethical behavior—from sports doping scandals to gaming cheating, business fraud, academic dishonesty, and interpersonal betrayals—stems not from malice, but often from a lack of understanding about fairplay's true value. People didn't fully grasp how fairness creates trust, drives sustainable success, and builds stronger communities. Many individuals simply didn't know better.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-3">Our Solution</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    That realization inspired us to create Fairplay Awareness: a global educational platform that makes ethical behavior accessible, understandable, and actionable for everyone, regardless of their background, profession, or life stage. We believe that when people truly understand the value of fairplay, they naturally choose to practice it.
                  </p>
                </div>
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
                      <p className="text-gray-300">We believe everyone deserves access to knowledge about ethical living. Education, not punishment, is the path to change.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Global Impact</h3>
                      <p className="text-gray-300">Our platform reaches learners across 150+ countries. Fairplay transcends borders, cultures, and languages.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Transformative Learning</h3>
                      <p className="text-gray-300">Interactive content that changes mindsets and drives real behavior change, not just theoretical knowledge.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Evidence-Based Approach</h3>
                      <p className="text-gray-300">All our content is grounded in research, real-world case studies, and proven ethical frameworks.</p>
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
                  To empower individuals and organizations worldwide with comprehensive knowledge about fairplay principles, enabling them to make ethical choices, build trust-based relationships, and create positive impact in their communities and industries.
                </p>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span>Make ethical education accessible to everyone, everywhere</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span>Transform understanding of fairplay across all five domains</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span>Drive measurable behavior change globally through education</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span>Create a network of ethical leaders and practitioners</span>
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
                  <p className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">✓</span>
                    <span>Fairplay becomes as natural as breathing</span>
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
              These principles guide every decision we make and every piece of content we create
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description: "Honesty and moral principles guide our work. We practice what we teach and hold ourselves to the highest standards.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Inclusivity",
                description: "Everyone deserves access to fairplay education regardless of background, age, profession, or economic status.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: BookOpen,
                title: "Excellence",
                description: "We deliver the highest quality content, research-backed learning experiences, and continuous improvement.",
                gradient: "from-pink-500 to-orange-500"
              },
              {
                icon: Award,
                title: "Impact",
                description: "Our success is measured by real behavior change, positive outcomes, and the communities we help build.",
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
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
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
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Fairplay Awareness was founded on the belief that ethical behavior is not innate—it's learned. Our founders, a diverse team of educators, athletes, business leaders, and ethicists, recognized that despite living in an interconnected world, there was no unified platform teaching fairplay principles comprehensively. Each domain (sports, gaming, business, education) had isolated resources, but no holistic approach existed.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The team spent months researching existing platforms, interviewing stakeholders across industries, and identifying the gaps. The conclusion was clear: people needed a single, trusted source for understanding fairplay across all aspects of their lives.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Creating a platform that could address fairplay across five completely different domains was no small task. How could we create content that resonated with professional athletes, casual gamers, business executives, students, and everyday people? How could we make complex ethical concepts accessible without oversimplifying them?
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We faced the challenge of balancing depth with accessibility, creating content that was both comprehensive and engaging, and ensuring that our platform could actually drive behavior change, not just provide information.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-400/30 rounded-xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">The Solution</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We developed a unique framework that combines:
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Deep Learning Content:</strong> 5,000-7,000 words per topic covering theory, practice, and real-world applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Interactive Quizzes:</strong> 10-15 questions per topic with immediate feedback to reinforce learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Real-World Case Studies:</strong> Examples from each domain showing both positive and negative outcomes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Practical Frameworks:</strong> Actionable steps users can apply immediately in their lives</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-xl p-8 backdrop-blur">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">The Impact</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Since launch, Fairplay Awareness has reached learners across 150+ countries. Our users report:
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>98% satisfaction rate among learners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>Measurable improvements in ethical decision-making</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>Organizations implementing fairplay principles report increased trust and reduced conflicts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>Young people showing stronger ethical foundations in their careers and personal lives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative py-20 z-10" data-scroll-animate id="difference">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-gradient">What Makes Us Different</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How Fairplay Awareness stands apart from other educational platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cross-Domain Approach",
                description: "We don't just teach fairplay in one area. We show how the same principles apply across sports, gaming, business, education, and everyday life. This holistic approach helps learners see the universal nature of ethical behavior.",
                icon: Globe
              },
              {
                title: "Depth Over Breadth",
                description: "Each topic receives 5,000-7,000 words of comprehensive content. We go deep into theory, practice, psychology, and real-world applications. No surface-level learning here.",
                icon: BookOpen
              },
              {
                title: "Interactive Learning",
                description: "Reading alone isn't enough. Our interactive quizzes, case studies, and practical frameworks ensure you don't just learn about fairplay—you practice it and internalize it.",
                icon: Lightbulb
              },
              {
                title: "Research-Backed",
                description: "All our content is grounded in academic research, psychological principles, and real-world case studies. We combine theory with practice for maximum impact.",
                icon: Award
              },
              {
                title: "Completely Free",
                description: "We believe ethical education should be accessible to everyone. There are no paywalls, no premium tiers, no hidden costs. Everyone gets full access to everything.",
                icon: Heart
              },
              {
                title: "No Login Required",
                description: "Start learning immediately. No account creation, no personal data collection. Just pure, accessible education about fairplay and ethics.",
                icon: Shield
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`group p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:bg-white/10 transition-all duration-700 ${isVisible['difference'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-3 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="relative py-20 z-10" data-scroll-animate id="faq">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about Fairplay Awareness
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem 
              question="What exactly is Fairplay Awareness?" 
              answer="Fairplay Awareness is a comprehensive educational platform dedicated to teaching ethical behavior and fairplay principles across five major domains: Sports, Gaming, Business, Education, and General Life. We provide deep, detailed content (5,000-7,000 words per topic), interactive quizzes, real-world case studies, and practical frameworks that help people understand and practice fairplay in their daily lives."
            />
            
            <FAQItem 
              question="Who should use Fairplay Awareness?" 
              answer="Everyone! Whether you're an athlete, gamer, business professional, student, parent, or just someone interested in ethics, this platform is for you. Our content is designed to be accessible to people of all ages and backgrounds. Students can learn about academic integrity, athletes about sportsmanship, business professionals about corporate ethics, and everyone can apply these principles to their personal relationships."
            />
            
            <FAQItem 
              question="Is Fairplay Awareness really free?" 
              answer="Yes, completely free! We believe ethical education should be accessible to everyone, regardless of their financial situation. There are no hidden fees, no premium tiers, no paywalls. All content is available to everyone at no cost. We're funded by our commitment to making the world a fairer place."
            />
            
            <FAQItem 
              question="Do I need to create an account?" 
              answer="No, you don't need to create an account or log in. You can access all content immediately without providing any personal information. We respect your privacy and believe learning should be friction-free. Just visit the platform and start exploring."
            />
            
            <FAQItem 
              question="How long does it take to complete a topic?" 
              answer="Each topic typically takes 30-45 minutes to complete thoroughly, depending on how deeply you engage with the material. The content includes: an introduction section, core concepts, real-world examples, an interactive quiz, and practical frameworks. You can take as much time as you need—there's no rush."
            />
            
            <FAQItem 
              question="Are there certificates or credentials?" 
              answer="Fairplay Awareness is an educational platform focused on personal growth and understanding, not formal credentialing. We don't issue certificates because our goal is to help you internalize fairplay principles and change your behavior, not to add credentials to your resume. However, the knowledge and ethical foundation you gain are invaluable in any context."
            />
            
            <FAQItem 
              question="Can organizations use this for training?" 
              answer="Absolutely! Many organizations use Fairplay Awareness for employee training and development. The content is comprehensive enough for professional settings while remaining accessible to everyone. If you're interested in organizational licensing or bulk access, please contact us at support@fairplayawareness.com."
            />
            
            <FAQItem 
              question="How is the content created?" 
              answer="Our content is created by a team of experts including educators, ethicists, business leaders, athletes, and researchers. Each topic goes through rigorous research, fact-checking, and real-world validation. We combine academic frameworks with practical examples to ensure the content is both theoretically sound and practically applicable."
            />
            
            <FAQItem 
              question="What if I disagree with some content?" 
              answer="We welcome feedback and different perspectives. Fairplay Awareness is built on the principle that ethical discussions should be open and inclusive. If you have concerns or alternative viewpoints, please share them with us at support@fairplayawareness.com. We're constantly learning and improving."
            />
            
            <FAQItem 
              question="How often is content updated?" 
              answer="We regularly review and update our content to reflect current events, new research, and evolving ethical challenges. Our team monitors developments in each domain and updates case studies and examples accordingly. The core principles of fairplay remain constant, but our application of them evolves with the world."
            />
            
            <FAQItem 
              question="Can I share this platform with others?" 
              answer="Yes, please! We encourage you to share Fairplay Awareness with friends, family, colleagues, and students. The more people who understand and practice fairplay, the better the world becomes. Share the link, tell people about it, and help build a global community committed to ethical behavior."
            />
            
            <FAQItem 
              question="What's your long-term vision?" 
              answer="Our vision is a world where fairplay is the foundation of all human interactions. We want to see fairplay principles integrated into school curricula, corporate training programs, sports organizations, and everyday conversations. We believe that when enough people understand and practice fairplay, it becomes the norm rather than the exception."
            />
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative py-20 z-10" data-scroll-animate id="impact">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-gradient">Our Impact So Far</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real numbers showing how Fairplay Awareness is making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Countries Reached", color: "from-blue-500 to-cyan-500" },
              { number: "10K+", label: "Active Learners", color: "from-purple-500 to-pink-500" },
              { number: "50+", label: "Quiz Questions", color: "from-pink-500 to-orange-500" },
              { number: "98%", label: "Satisfaction Rate", color: "from-orange-500 to-yellow-500" }
            ].map((stat, idx) => (
              <div key={idx} className={`group p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur text-center hover:bg-white/10 transition-all duration-700 ${isVisible['impact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.number}
                </div>
                <p className="text-gray-300 text-lg font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 z-10" data-scroll-animate id="cta">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">
              <span className="text-gradient">Join the Fairplay Movement</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of a global community committed to ethical behavior and fairness across all aspects of life. Start learning today and discover how fairplay can transform your personal and professional relationships.
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

      <Footer />
    </div>
  );
}
