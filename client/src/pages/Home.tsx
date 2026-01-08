import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Mail, ArrowRight, Star, Zap, Target, Users, TrendingUp, Award, Sparkles, Heart, Globe, ChevronLeft, ChevronRight, Trophy, Gamepad2, Briefcase, BookOpen, Search, X } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof topics>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
    } else {
      const results = topics.filter((topic) =>
        topic.title.toLowerCase().includes(query.toLowerCase()) ||
        topic.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const heroSlides = [
    {
      image: "/hero-new.jpg",
      title: "Sports Fairplay",
      description: "Learn ethical principles in competitive sports, from amateur to professional levels. Discover how fairness drives excellence."
    },
    {
      image: "/sports-section.jpg",
      title: "Gaming Ethics",
      description: "Master fair play in gaming communities. Understand sportsmanship, respect, and integrity in digital competitions."
    },
    {
      image: "/learning-section.jpg",
      title: "Business Integrity",
      description: "Build ethical foundations for business success. Learn fairness principles that create lasting value and trust."
    },
    {
      image: "/community-section.jpg",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/logo-new.png" alt="Fairplay Awareness" className="w-16 h-16 drop-shadow-lg" />
            <div>
              <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Fairplay</h1>
              <p className="text-xs text-purple-200">Awareness</p>
            </div>
          </div>

          {/* Search Bar in Header */}
          <div className="relative flex-1 max-w-xs mx-8">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-purple-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-white/10 border border-purple-400/50 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all backdrop-blur"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Search Results Dropdown in Header */}
            {showSearchResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-400/30 rounded-lg backdrop-blur shadow-2xl z-50 overflow-hidden">
                {searchResults.length > 0 ? (
                  <div className="max-h-64 overflow-y-auto">
                    {searchResults.map((result, idx) => {
                      const getIcon = () => {
                        if (result.icon === "Trophy") return <Trophy className="w-4 h-4 text-blue-400" />;
                        if (result.icon === "Gamepad2") return <Gamepad2 className="w-4 h-4 text-purple-400" />;
                        if (result.icon === "Briefcase") return <Briefcase className="w-4 h-4 text-pink-400" />;
                        if (result.icon === "BookOpen") return <BookOpen className="w-4 h-4 text-orange-400" />;
                        if (result.icon === "Globe") return <Globe className="w-4 h-4 text-cyan-400" />;
                        return null;
                      };
                      return (
                        <Link key={idx} href={`/learn/${result.id}`}>
                          <a
                            onClick={() => clearSearch()}
                            className="flex items-center gap-3 p-3 border-b border-white/10 hover:bg-white/10 transition-colors cursor-pointer group text-sm"
                          >
                            <div className="flex-shrink-0">{getIcon()}</div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{result.title}</h4>
                            </div>
                            <ArrowRight className="w-3 h-3 text-purple-400 flex-shrink-0" />
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-3 text-center text-xs text-gray-400">
                    No topics found
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-6">
            <a href="#topics" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Topics</a>
            <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#stats" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Impact</a>
            <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel Slides */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 slide-in-up">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur">
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">✨ Global Educational Platform</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="text-gradient">Promote</span>
                <br />
                <span className="text-white">Fairplay</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Globally</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Master ethical behavior and fairness across Sports, Gaming, Business, Education, and General Life. Join thousands of learners transforming their understanding through interactive content and real-world applications.
              </p>

              {/* Quick Search Topic Buttons */}
              <div className="flex flex-wrap gap-3 justify-center pt-8">
                {topics.map((topic) => {
                  const getIcon = () => {
                    if (topic.icon === "Trophy") return <Trophy className="w-4 h-4" />;
                    if (topic.icon === "Gamepad2") return <Gamepad2 className="w-4 h-4" />;
                    if (topic.icon === "Briefcase") return <Briefcase className="w-4 h-4" />;
                    if (topic.icon === "BookOpen") return <BookOpen className="w-4 h-4" />;
                    if (topic.icon === "Globe") return <Globe className="w-4 h-4" />;
                    return null;
                  };
                  return (
                    <Link key={topic.id} href={`/learn/${topic.id}`}>
                      <a className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-purple-400/30 hover:border-purple-400/60 rounded-full text-sm font-medium text-white transition-all duration-300 group">
                        {getIcon()}
                        <span className="group-hover:text-purple-300 transition-colors">{topic.shortTitle}</span>
                      </a>
                    </Link>
                  );
                })}
              </div>

              <div className="flex gap-4 pt-8">
                <a href="#topics">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Explore All Topics <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-6 text-lg font-semibold backdrop-blur">
                  Learn More
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur">
                  <div className="text-2xl font-bold text-blue-400">5</div>
                  <p className="text-xs text-gray-400">Topics</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <p className="text-xs text-gray-400">Quizzes</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur">
                  <div className="text-2xl font-bold text-pink-400">10K+</div>
                  <p className="text-xs text-gray-400">Learners</p>
                </div>
              </div>
            </div>

            {/* Right Visual - Carousel Slides */}
            <div className="relative h-96 md:h-full flex flex-col items-center justify-center gap-6">
              {/* Main Slide */}
              <div className="relative w-full h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative float-animation h-full">
                  <img 
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].title}
                    className="rounded-3xl shadow-2xl w-full h-full object-cover border-2 border-purple-400/30 transition-all duration-700"
                  />
                  {/* Slide Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{heroSlides[currentSlide].title}</h3>
                      <p className="text-sm text-gray-200">{heroSlides[currentSlide].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators and Controls */}
              <div className="flex items-center justify-between w-full px-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-gradient-to-r from-blue-400 to-purple-400 w-8"
                          : "bg-white/30 w-2 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Counter */}
              <div className="text-center text-sm text-purple-300 font-semibold">
                {currentSlide + 1} / {heroSlides.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-20 z-10 overflow-hidden" data-scroll-animate id="about">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Visual Element */}
            <div className={`relative transition-all duration-1000 ${isVisible('about') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative h-96 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Fairplay</div>
                    <div className="text-2xl text-white font-bold">Global Awareness Initiative</div>
                    <div className="text-gray-300 text-sm">Promoting Ethical Behavior Worldwide</div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-purple-400/50 transition-all"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible('about') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div>
                <h2 className="text-5xl font-black mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Who We Are</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Fairplay Awareness is a global educational initiative dedicated to promoting ethical behavior and fairness across all aspects of life. We believe that integrity, honesty, and respect form the foundation of a thriving society.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-white/10 backdrop-blur">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  Our Mission
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  To empower individuals and organizations worldwide with the knowledge, skills, and values needed to practice fairplay in every aspect of their lives—from sports and gaming to business, education, and everyday interactions.
                </p>
              </div>

              {/* Core Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-400" />
                  Our Core Values
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="text-blue-400 font-bold mb-2">Integrity</div>
                    <p className="text-sm text-gray-300">Unwavering commitment to honesty and ethical conduct</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="text-purple-400 font-bold mb-2">Respect</div>
                    <p className="text-sm text-gray-300">Valuing others' rights and treating everyone fairly</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="text-pink-400 font-bold mb-2">Excellence</div>
                    <p className="text-sm text-gray-300">Striving for the highest standards in everything</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="text-orange-400 font-bold mb-2">Impact</div>
                    <p className="text-sm text-gray-300">Creating meaningful change in communities globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Detailed Content Section */}
      <section className="relative py-20 z-10" data-scroll-animate id="detailed-content">
        <div className="container">
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
              <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-white/10 backdrop-blur">
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
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-black mb-4">
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
        <div className="container">
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
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-black mb-4">
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10" data-scroll-animate>
        <div className="container">
          <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black mb-4">
                <span className="text-gradient">Get in</span> <span className="text-white">Touch</span>
              </h2>
              <p className="text-xl text-gray-300">Have questions? We'd love to hear from you.</p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6 p-8 bg-white/5 border border-white/10 backdrop-blur rounded-2xl">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold">
                {contactSubmitted ? "Message Sent! ✓" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Fairplay Awareness</h4>
              <p className="text-gray-400">Promoting ethical behavior and fairness globally.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Topics</h4>
              <ul className="space-y-2 text-gray-400">
                {topics.slice(0, 3).map((topic) => (
                  <li key={topic.id}><Link href={`/learn/${topic.id}`}><a className="hover:text-purple-400 transition-colors">{topic.title}</a></Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#stats" className="hover:text-purple-400 transition-colors">Impact</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fairplay Awareness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
