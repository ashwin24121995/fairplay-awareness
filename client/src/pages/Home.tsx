import { Link } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Mail, ArrowRight, Star, Zap, Target, Users, TrendingUp, Award, Sparkles, Heart, Globe, ChevronLeft, ChevronRight, Lightbulb, ChevronDown, Trophy, Gamepad2, Briefcase, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

/**
 * Modern Home Page - Fairplay Awareness
 * Design: Clean, modern with full-width hero and responsive layout
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
      description: "Learn ethical principles in competitive sports"
    },
    {
      image: "/sports-section.webp",
      title: "Gaming Ethics",
      description: "Master fair play in gaming communities"
    },
    {
      image: "/learning-section.webp",
      title: "Business Integrity",
      description: "Build ethical foundations for business success"
    },
    {
      image: "/community-section.webp",
      title: "Educational Values",
      description: "Develop character through education"
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
          className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        >
          <span className="text-left font-semibold text-white text-sm md:text-base">{question}</span>
          <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ml-2`} style={{transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}} />
        </button>
        {isExpanded && (
          <div className="px-4 md:px-6 py-3 md:py-4 border-t border-white/10 bg-white/5 text-gray-300 text-sm md:text-base">
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

      {/* Hero Section - Full Width Modern Design */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
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
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-900/70 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 border border-blue-400/40 rounded-full mb-4 md:mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs md:text-sm font-semibold text-blue-300">Global Educational Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 md:mb-6">
              <span className="block text-white mb-2">Promote</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Fairplay Globally</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-xl leading-relaxed">
              Master ethical behavior and fairness across Sports, Gaming, Business, Education, and General Life. Join thousands transforming their understanding.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="#topics" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 text-sm md:text-base">
                Start Learning <ArrowRight className="w-4 h-4" />
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 font-semibold rounded-lg transition-all text-sm md:text-base">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12">
              <div className="p-2 md:p-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg">
                <div className="text-lg md:text-2xl font-bold text-blue-400">5</div>
                <p className="text-xs md:text-sm text-gray-400 mt-1">Topics</p>
              </div>
              <div className="p-2 md:p-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg">
                <div className="text-lg md:text-2xl font-bold text-purple-400">50+</div>
                <p className="text-xs md:text-sm text-gray-400 mt-1">Quizzes</p>
              </div>
              <div className="p-2 md:p-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg">
                <div className="text-lg md:text-2xl font-bold text-pink-400">10K+</div>
                <p className="text-xs md:text-sm text-gray-400 mt-1">Learners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/40 w-2 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Topics Section */}
      <section className="relative py-12 md:py-20 z-10 overflow-hidden" id="topics">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4">Explore Our Topics</h2>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">Master fairplay principles across five essential domains of life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/learn/${topic.id}`}>
                <a className="group p-4 md:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-purple-400/50 rounded-xl transition-all hover:scale-105 hover:shadow-xl">
                  <div className="mb-3 md:mb-4">
                    {topic.icon === "Trophy" && <Trophy className="w-8 h-8 text-blue-400" />}
                    {topic.icon === "Gamepad2" && <Gamepad2 className="w-8 h-8 text-purple-400" />}
                    {topic.icon === "Briefcase" && <Briefcase className="w-8 h-8 text-pink-400" />}
                    {topic.icon === "BookOpen" && <BookOpen className="w-8 h-8 text-orange-400" />}
                    {topic.icon === "Globe" && <Globe className="w-8 h-8 text-cyan-400" />}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{topic.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 mb-4 line-clamp-2">{topic.description}</p>
                  <div className="flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all text-xs md:text-sm font-semibold">
                    Start Learning <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 md:py-20 z-10 overflow-hidden" id="features">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4">Why Choose Fairplay Awareness</h2>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">Comprehensive learning experience designed for everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl hover:border-purple-400/50 transition-all group">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 md:p-4 mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 md:py-20 z-10 overflow-hidden" id="stats">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 md:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl text-center hover:border-purple-400/50 transition-all">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 md:mb-3 text-purple-400" />
                <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-1 md:mb-2">{stat.value}</div>
                <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 md:py-20 z-10 overflow-hidden">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3 md:mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
            <FAQItem
              question="What is Fairplay Awareness?"
              answer="Fairplay Awareness is a comprehensive educational platform dedicated to teaching ethical behavior and fairness principles across five key domains: Sports, Gaming, Business, Education, and General Life."
            />
            <FAQItem
              question="Who should use this platform?"
              answer="Anyone interested in learning about fairness and ethics! Whether you're a student, athlete, gamer, professional, or just someone who values integrity, our content is designed for all ages and backgrounds."
            />
            <FAQItem
              question="Is the content really free?"
              answer="Yes! All our learning materials, quizzes, and resources are completely free. We believe fairplay education should be accessible to everyone."
            />
            <FAQItem
              question="How long does it take to complete a topic?"
              answer="Each topic contains 5,000-7,000 words of content and a 5-question quiz. Most users complete a topic in 20-30 minutes, but you can learn at your own pace."
            />
            <FAQItem
              question="Can I get a certificate?"
              answer="Currently, we focus on knowledge sharing rather than certifications. However, we track your progress and you can see which topics you've completed."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
