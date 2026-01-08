import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Mail, ArrowRight, Star, Zap, Target, Users, TrendingUp, Award, Sparkles, Heart, Globe, ChevronLeft, ChevronRight, Lightbulb, ChevronDown, Trophy, Gamepad2, Briefcase, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

/**
 * Enhanced 3D Home Page - Fairplay Awareness
 * Design: Advanced 3D with carousel slides, detailed content, and vibrant visuals
 */

export default function Home() {
  const topics = getAllTopics();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);

  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);



  const heroSlides = [
    {
      image: "/hero-new.webp",
      title: "Sports Fairplay",
      description: "Learn ethical principles in competitive sports, from amateur to professional levels. Discover how fairness drives excellence."
    },
    {
      image: "/sports-section.webp",
      title: "Gaming Ethics",
      description: "Master fair play in gaming communities. Understand sportsmanship, respect, and integrity in digital competitions."
    },
    {
      image: "/learning-section.webp",
      title: "Business Integrity",
      description: "Build ethical foundations for business success. Learn fairness principles that create lasting value and trust."
    },
    {
      image: "/community-section.webp",
      title: "Educational Values",
      description: "Develop character through education. Explore how fairness shapes better learning environments and futures."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(Array.from(prev).concat(entry.target.id)));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll("[data-scroll-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", message: "" });
      setContactSubmitted(false);
    }, 3000);
  };

  const stats = [
    { icon: Users, label: "Global Learners", value: "10K+", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "Topics Covered", value: "5", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, label: "Quiz Questions", value: "50+", color: "from-orange-500 to-red-500" },
    { icon: Star, label: "Satisfaction Rate", value: "98%", color: "from-green-500 to-emerald-500" },
  ];

  const features = [
    { icon: Sparkles, title: "Deep Learning", description: "5,000-7,000 words of comprehensive content per topic", gradient: "from-blue-500 to-cyan-500" },
    { icon: Target, title: "Interactive Quizzes", description: "10-15 question quizzes with immediate feedback", gradient: "from-purple-500 to-pink-500" },
    { icon: Globe, title: "Global Reach", description: "Learn fairplay principles applicable across all areas", gradient: "from-orange-500 to-red-500" },
  ];

  const isVisible = (id: string) => Array.from(visibleSections).includes(id);

  const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const isExpanded = expandedFAQ === question;
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-400/30 transition-all">
        <button
          onClick={() => setExpandedFAQ(isExpanded ? null : question)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        >
          <span className="text-left font-semibold text-white">{question}</span>
          <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        {isExpanded && (
          <div className="px-6 py-4 border-t border-white/10 bg-white/5 text-gray-300">
            {answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section - Modern Split Layout */}
      <section className="relative pt-8 md:pt-12 pb-12 md:pb-20 overflow-hidden">
        <div className="container relative z-10 px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 border border-blue-400/40 rounded-full w-fit">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                <span className="text-xs md:text-sm font-semibold text-blue-300">Global Educational Platform</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-2 md:mb-4">
                  <span className="block text-white">Promote</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Fairplay</span>
                  <span className="block text-white">Globally</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-lg">
                Master ethical behavior and fairness across Sports, Gaming, Business, Education, and General Life. Join thousands of learners transforming their understanding through interactive content and real-world applications.
              </p>

              {/* Quick Topic Buttons */}
              <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4">
                {topics.map((topic) => {
                  const getIcon = () => {
                    if (topic.icon === "Trophy") return <Trophy className="w-3 h-3 md:w-4 md:h-4" />;
                    if (topic.icon === "Gamepad2") return <Gamepad2 className="w-3 h-3 md:w-4 md:h-4" />;
                    if (topic.icon === "Briefcase") return <Briefcase className="w-3 h-3 md:w-4 md:h-4" />;
                    if (topic.icon === "BookOpen") return <BookOpen className="w-3 h-3 md:w-4 md:h-4" />;
                    if (topic.icon === "Globe") return <Globe className="w-3 h-3 md:w-4 md:h-4" />;
                    return null;
                  };
                  return (
                    <Link key={topic.id} href={`/learn/${topic.id}`}>
                      <a className="inline-flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-purple-400/30 hover:border-purple-400/60 rounded-full text-xs font-medium text-white transition-all duration-300">
                        {getIcon()}
                        <span>{topic.shortTitle}</span>
                      </a>
                    </Link>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
                <a href="#topics" className="inline-flex items-center justify-center gap-2 px-5 md:px-7 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 text-sm md:text-base">
                  Start Learning <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-5 md:px-7 py-2.5 md:py-3 border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 font-semibold rounded-lg transition-all text-sm md:text-base">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 pt-4 md:pt-6">
                <div className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-lg text-center">
                  <div className="text-base md:text-xl font-bold text-blue-400">5</div>
                  <p className="text-xs text-gray-400 mt-0.5">Topics</p>
                </div>
                <div className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-lg text-center">
                  <div className="text-base md:text-xl font-bold text-purple-400">50+</div>
                  <p className="text-xs text-gray-400 mt-0.5">Quizzes</p>
                </div>
                <div className="p-2 md:p-3 bg-white/5 border border-white/10 rounded-lg text-center">
                  <div className="text-base md:text-xl font-bold text-pink-400">10K+</div>
                  <p className="text-xs text-gray-400 mt-0.5">Learners</p>
                </div>
              </div>
            </div>

            {/* Right Visual - Carousel */}
            <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 order-1 md:order-2">
              {/* Carousel Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                {/* Slides */}
                {heroSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Slide Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
                      <h3 className="text-base md:text-xl font-bold mb-1">{slide.title}</h3>
                      <p className="text-xs md:text-sm text-gray-200">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="absolute -bottom-12 md:-bottom-14 left-0 right-0 flex items-center justify-between px-0 md:px-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <div className="flex gap-1 md:gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 md:h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-gradient-to-r from-blue-400 to-purple-400 w-6 md:w-8"
                          : "bg-white/30 w-1.5 md:w-2 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-10 md:py-20 z-10 overflow-hidden" data-scroll-animate id="about">
        <div className="container px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left - Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible('about') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Who We Are</span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                  Fairplay Awareness is a comprehensive global educational initiative dedicated to promoting ethical behavior, fairness, and integrity across all aspects of human life. We believe that ethical conduct, honesty, and mutual respect form the unshakeable foundation of a thriving, equitable, and sustainable society.
                </p>
                <p className="text-base text-gray-400 leading-relaxed">
                  Founded on the principle that fairplay transcends sports and extends into every domain of human interaction, we have developed an innovative, evidence-based learning platform that empowers individuals, teams, and organizations to understand and practice ethical principles in real-world contexts.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-4 md:p-8 border border-white/10 backdrop-blur">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  Our Mission
                </h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  To empower individuals, teams, and organizations worldwide with comprehensive knowledge, practical skills, and deeply rooted values needed to practice fairplay consistently in every aspect of their lives—from competitive sports and gaming to business operations, educational environments, and everyday personal interactions.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  We believe that when people understand and embrace fairplay principles, they become agents of positive change in their communities, inspiring others to act with integrity.
                </p>
              </div>

              {/* Vision Statement */}
              <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl p-4 md:p-8 border border-white/10 backdrop-blur">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  Our Vision
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  A world where fairplay is the universal standard where individuals make ethical decisions instinctively, organizations operate with transparency and integrity, and communities thrive through mutual respect and cooperation.
                </p>
              </div>

              {/* Core Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-400" />
                  Our Core Values
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group">
                    <div className="text-blue-400 font-bold mb-2 group-hover:text-blue-300 transition-colors">Integrity</div>
                    <p className="text-sm text-gray-300">Unwavering commitment to honesty, transparency, and ethical conduct in all dealings</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group">
                    <div className="text-purple-400 font-bold mb-2 group-hover:text-purple-300 transition-colors">Respect</div>
                    <p className="text-sm text-gray-300">Valuing others' rights, dignity, and perspectives while treating everyone fairly and equitably</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group">
                    <div className="text-pink-400 font-bold mb-2 group-hover:text-pink-300 transition-colors">Excellence</div>
                    <p className="text-sm text-gray-300">Striving for the highest standards in content quality, learning outcomes, and organizational practices</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group">
                    <div className="text-orange-400 font-bold mb-2 group-hover:text-orange-300 transition-colors">Impact</div>
                    <p className="text-sm text-gray-300">Creating measurable, meaningful change in communities and transforming ethical understanding globally</p>
                  </div>
                </div>
              </div>

              {/* Why Fairplay Matters */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  Why Fairplay Matters
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span><strong>Builds Trust:</strong> Fairplay creates an environment of trust and psychological safety where people feel valued and respected</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">•</span>
                    <span><strong>Enhances Performance:</strong> Teams that practice fairplay achieve better results through improved collaboration and morale</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-400 font-bold">•</span>
                    <span><strong>Develops Character:</strong> Learning fairplay principles develops resilience, empathy, and strong moral character</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span><strong>Creates Sustainable Growth:</strong> Organizations built on fairplay experience sustainable, ethical growth and positive reputation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Dynamic Visuals and Graphs */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Impact Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all group">
                  <div className="text-3xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">50K+</div>
                  <div className="text-sm text-gray-300">Learners Worldwide</div>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-3 w-full"></div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all group">
                  <div className="text-3xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform">150+</div>
                  <div className="text-sm text-gray-300">Countries Reached</div>
                  <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mt-3 w-full"></div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl p-6 border border-pink-400/30 hover:border-pink-400/60 transition-all group">
                  <div className="text-3xl font-black text-pink-400 mb-2 group-hover:scale-110 transition-transform">10K+</div>
                  <div className="text-sm text-gray-300">Quizzes Completed</div>
                  <div className="h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mt-3 w-full"></div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/60 transition-all group">
                  <div className="text-3xl font-black text-orange-400 mb-2 group-hover:scale-110 transition-transform">98%</div>
                  <div className="text-sm text-gray-300">Satisfaction Rate</div>
                  <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-3 w-full"></div>
                </div>
              </div>

              {/* Animated Progress Bars */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-white">Learning Engagement</h3>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Sports Fairplay</span>
                    <span className="text-sm text-blue-400 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full transition-all duration-1000" style={{width: '92%', animation: 'pulse 2s ease-in-out infinite'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Gaming Ethics</span>
                    <span className="text-sm text-purple-400 font-bold">87%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-full rounded-full transition-all duration-1000" style={{width: '87%', animation: 'pulse 2s ease-in-out infinite 0.2s'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Business Integrity</span>
                    <span className="text-sm text-pink-400 font-bold">94%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-full rounded-full transition-all duration-1000" style={{width: '94%', animation: 'pulse 2s ease-in-out infinite 0.4s'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Educational Values</span>
                    <span className="text-sm text-orange-400 font-bold">89%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-full rounded-full transition-all duration-1000" style={{width: '89%', animation: 'pulse 2s ease-in-out infinite 0.6s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Detailed Content Section */}
      <section className="relative py-20 z-10" data-scroll-animate id="detailed-content">
        <div className="container px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Detailed Description */}
            <div className="space-y-6 slide-in-up">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Why Fairplay Matters</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Fairplay is not just a concept—it's a foundation for building trust, respect, and excellence in every aspect of life. Whether in sports competitions, gaming communities, business environments, educational institutions, or daily interactions, fairness creates the conditions for genuine achievement and human flourishing.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/30 backdrop-blur hover:bg-blue-500/20 transition-all">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">🏆 Personal Growth</h3>
                  <p className="text-gray-300">Fairplay principles develop character, integrity, and resilience. They teach us to compete with honor and collaborate with respect.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-400/30 backdrop-blur hover:bg-purple-500/20 transition-all">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">🌍 Community Building</h3>
                  <p className="text-gray-300">When fairness guides our actions, we create communities where everyone feels valued, respected, and motivated to contribute their best.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-lg border border-pink-400/30 backdrop-blur hover:bg-pink-500/20 transition-all">
                  <h3 className="text-lg font-bold text-pink-400 mb-2">💡 Long-term Success</h3>
                  <p className="text-gray-300">Organizations and individuals built on fairplay principles achieve sustainable success, stronger relationships, and greater impact.</p>
                </div>
              </div>
            </div>

            {/* Right - Visual Statistics */}
            <div className="space-y-6 slide-in-up">
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-4 md:p-8 border border-white/10 backdrop-blur">
                <h3 className="text-2xl font-bold mb-6 text-white">Impact of Fairplay</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Trust & Integrity</span>
                      <span className="text-blue-400 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full" style={{width: '98%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Community Engagement</span>
                      <span className="text-purple-400 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full" style={{width: '95%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Performance Excellence</span>
                      <span className="text-pink-400 font-bold">92%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-full" style={{width: '92%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Sustainable Growth</span>
                      <span className="text-orange-400 font-bold">89%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10 backdrop-blur">
                <p className="text-gray-200 leading-relaxed">
                  <span className="text-cyan-400 font-bold">"Fairplay is not about winning at all costs—it's about winning the right way."</span> Our platform equips you with the knowledge and skills to navigate complex ethical situations and make decisions that align with your values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with 3D Cards */}
      <section id="features" className="py-20 relative z-10" data-scroll-animate>
        <div className="container px-4 md:px-0">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-gradient">Why Choose</span> <span className="text-white">Fairplay?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive learning with interactive experiences designed for global impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className={`group card-3d p-8 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-all duration-700 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics Grid Section - Enhanced Design */}
      <section id="topics" className="py-20 relative z-10" data-scroll-animate>
        <div className="container px-4 md:px-0">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible('topics') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-6xl font-black mb-6">
              <span className="text-gradient">Explore</span> <span className="text-white">Our</span> <span className="text-gradient">Topics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master ethical behavior across 5 comprehensive domains. Each module contains 5,000-7,000 words of deep content, interactive quizzes, and real-world applications designed to transform your understanding of fairplay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {topics.slice(0, 2).map((topic, idx) => (
              <Link key={idx} href={`/learn/${topic.id}`}>
                <a className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${isVisible('topics') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:from-blue-500/40 group-hover:via-purple-500/40 group-hover:to-pink-500/40 transition-all duration-700"></div>
                  
                  {/* Border */}
                  <div className="absolute inset-0 border-2 border-gradient rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{borderImage: 'linear-gradient(135deg, #3b82f6, #a855f7, #ec4899) 1'}}></div>
                  
                  {/* Content */}
                  <div className="relative p-10 h-full flex flex-col justify-between backdrop-blur">
                    <div>
                      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                        {topic.icon === "Trophy" && <Trophy className="w-16 h-16 text-blue-400" />}
                        {topic.icon === "Gamepad2" && <Gamepad2 className="w-16 h-16 text-purple-400" />}
                        {topic.icon === "Briefcase" && <Briefcase className="w-16 h-16 text-pink-400" />}
                        {topic.icon === "BookOpen" && <BookOpen className="w-16 h-16 text-orange-400" />}
                        {topic.icon === "Globe" && <Globe className="w-16 h-16 text-cyan-400" />}
                      </div>
                      <h3 className="text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">{topic.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{topic.description}</p>
                      
                      {/* Topic Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur border border-white/10">
                          <div className="text-2xl font-bold text-blue-400">5K+</div>
                          <p className="text-xs text-gray-400">Words</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur border border-white/10">
                          <div className="text-2xl font-bold text-purple-400">10+</div>
                          <p className="text-xs text-gray-400">Quizzes</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur border border-white/10">
                          <div className="text-2xl font-bold text-pink-400">30min</div>
                          <p className="text-xs text-gray-400">Avg Time</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-purple-400 font-semibold">Start Learning</span>
                      <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* Smaller Cards for Remaining Topics */}
          <div className="grid md:grid-cols-3 gap-6">
            {topics.slice(2).map((topic, idx) => (
              <Link key={idx + 2} href={`/learn/${topic.id}`}>
                <a className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ${isVisible('topics') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${(idx + 2) * 100}ms`}}>
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 group-hover:from-purple-500/40 group-hover:via-pink-500/40 group-hover:to-orange-500/40 transition-all duration-700"></div>
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between backdrop-blur border border-white/10 rounded-xl group-hover:border-purple-400/50 transition-all duration-700">
                    <div>
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                        {topic.icon === "Trophy" && <Trophy className="w-12 h-12 text-blue-400" />}
                        {topic.icon === "Gamepad2" && <Gamepad2 className="w-12 h-12 text-purple-400" />}
                        {topic.icon === "Briefcase" && <Briefcase className="w-12 h-12 text-pink-400" />}
                        {topic.icon === "BookOpen" && <BookOpen className="w-12 h-12 text-orange-400" />}
                        {topic.icon === "Globe" && <Globe className="w-12 h-12 text-cyan-400" />}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{topic.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">{topic.description}</p>
                    </div>
                    
                    {/* Mini Stats */}
                    <div className="flex gap-2 text-xs text-gray-400 pt-4 border-t border-white/10">
                      <span>📚 5K+ words</span>
                      <span>•</span>
                      <span>❓ 10+ Q's</span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 relative z-10" data-scroll-animate>
        <div className="container px-4 md:px-0">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-gradient">Our</span> <span className="text-white">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`group p-8 bg-white/5 border border-white/10 backdrop-blur rounded-xl hover:bg-white/10 transition-all duration-700 text-center ${isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} p-3 mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <a href="#topics">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Explore All 5 Topics <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-10 md:py-20 z-10 overflow-hidden" data-scroll-animate id="faq">
        <div className="container px-4 md:px-0">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Frequently Asked Questions</span>
              </h2>
              <p className="text-gray-300 text-lg">Find answers to common questions about Fairplay Awareness</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What is Fairplay Awareness?",
                  answer: "Fairplay Awareness is a comprehensive global educational platform dedicated to promoting ethical behavior, fairness, and integrity across all domains of life including sports, gaming, business, education, and general life interactions.",
                  icon: "🎯"
                },
                {
                  question: "Who can use this platform?",
                  answer: "Our platform is designed for anyone interested in learning about fairplay principles - students, professionals, athletes, gamers, business leaders, educators, and anyone committed to promoting ethical behavior in their communities.",
                  icon: "👥"
                },
                {
                  question: "Is the platform completely free?",
                  answer: "Yes! All content, learning modules, and interactive quizzes are completely free and accessible to everyone worldwide. We believe ethical education should be universally available.",
                  icon: "💰"
                },
                {
                  question: "How long does each topic take to complete?",
                  answer: "Each topic contains 5,000-7,000 words of deep detailed content and typically takes 20-30 minutes to read thoroughly. Interactive quizzes add another 10-15 minutes. You can learn at your own pace.",
                  icon: "⏱️"
                },
                {
                  question: "Can I download certificates after completing quizzes?",
                  answer: "Currently, you receive instant feedback and scores on quizzes. We're working on adding downloadable certificates for quiz completion to help you showcase your achievements.",
                  icon: "📜"
                },
                {
                  question: "How many topics are available?",
                  answer: "We currently offer 5 comprehensive topics: Sports Fairplay, Gaming Ethics, Business Integrity, Educational Values, and General Life Fairplay. We're continuously adding new content.",
                  icon: "📚"
                },
                {
                  question: "Do I need to create an account?",
                  answer: "No account is required! You can access all content immediately. However, we're developing optional accounts to track your progress and save your quiz scores.",
                  icon: "🔐"
                },
                {
                  question: "How can I contact you for feedback or suggestions?",
                  answer: "You can use our Contact form on this page to send us messages, feedback, or suggestions. We value your input and use it to continuously improve our platform.",
                  icon: "📧"
                }
              ].map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
