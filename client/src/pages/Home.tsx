import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Mail, ArrowRight, Star, Zap, Target, Users, TrendingUp, Award, Sparkles, Heart, Globe } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Enhanced 3D Home Page - Fairplay Awareness
 * Design: Advanced 3D with vibrant gradients, scroll animations, and multiple engaging sections
 */

export default function Home() {
  const topics = getAllTopics();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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
          <div className="flex gap-6">
            <a href="#topics" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Topics</a>
            <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#stats" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Impact</a>
            <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Effect */}
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

              <div className="flex gap-4 pt-4">
                <a href="#topics">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Explore Topics <ArrowRight className="w-5 h-5" />
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

            {/* Right Visual */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative float-animation">
                <img 
                  src="/hero-new.jpg" 
                  alt="Fairplay Awareness Hero" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover border-2 border-purple-400/30"
                  style={{transform: `translateY(${scrollY * 0.1}px)`}}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-900/40 to-transparent"></div>
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

      {/* Sports Fairplay Section */}
      <section className="py-20 relative z-10" data-scroll-animate>
        <div className="container">
          <div className={`transition-all duration-1000 ${isVisible('sports-section') ? 'opacity-100' : 'opacity-0'}`} id="sports-section">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-black">
                  <span className="text-gradient">Sports</span> <span className="text-white">Fairplay</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Learn the principles of fair competition, respect, and integrity in sports. Understand how fairplay creates better athletes and stronger communities.
                </p>
                <Link href="/learn/sports">
                  <a>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 px-8 py-6 text-lg font-semibold">
                      Explore Sports Fairplay <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="relative h-80">
                <img 
                  src="/sports-section.jpg" 
                  alt="Sports Fairplay" 
                  className="rounded-3xl shadow-2xl w-full h-full object-cover border-2 border-purple-400/30"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Growth Section */}
      <section className="py-20 relative z-10" data-scroll-animate>
        <div className="container">
          <div className={`transition-all duration-1000 ${isVisible('learning-section') ? 'opacity-100' : 'opacity-0'}`} id="learning-section">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 order-2 md:order-1">
                <img 
                  src="/learning-section.jpg" 
                  alt="Learning & Growth" 
                  className="rounded-3xl shadow-2xl w-full h-full object-cover border-2 border-purple-400/30"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-5xl font-black">
                  <span className="text-white">Learning</span> <span className="text-gradient">&amp; Growth</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Develop your understanding through interactive quizzes and comprehensive content. Track your progress and grow your knowledge with our structured learning paths.
                </p>
                <Link href="/learn/education">
                  <a>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white gap-2 px-8 py-6 text-lg font-semibold">
                      Start Learning <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 relative z-10" data-scroll-animate>
        <div className="container">
          <div className={`transition-all duration-1000 ${isVisible('community-section') ? 'opacity-100' : 'opacity-0'}`} id="community-section">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-black">
                  <span className="text-gradient">Community</span> <span className="text-white">&amp; Connection</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Join a global community of learners committed to fairplay. Connect with others, share experiences, and build a network of ethical practitioners worldwide.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white gap-2 px-8 py-6 text-lg font-semibold">
                    Join Community <Users className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="relative h-80">
                <img 
                  src="/community-section.jpg" 
                  alt="Community" 
                  className="rounded-3xl shadow-2xl w-full h-full object-cover border-2 border-purple-400/30"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 relative z-10" data-scroll-animate>
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-black mb-4">
              <span className="text-white">Our</span> <span className="text-gradient">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`card-3d p-8 bg-gradient-to-br ${stat.color} opacity-10 hover:opacity-20 border border-white/10 backdrop-blur text-center group transition-all duration-700 ${isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} p-3 group-hover:scale-110 transition-transform`}>
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

      {/* Topics Grid */}
      <section id="topics" className="py-20 relative z-10" data-scroll-animate>
        <div className="container">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible('topics') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-black mb-4">
              <span className="text-white">Explore</span> <span className="text-gradient">Topics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose a domain and dive deep into fairplay principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {topics.map((topic, idx) => (
              <Link key={topic.id} href={`/learn/${topic.id}`}>
                <a className={`group cursor-pointer h-full transition-all duration-700 ${isVisible('topics') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${idx * 100}ms`}}>
                  <div className="card-3d overflow-hidden h-full flex flex-col bg-white/5 border border-white/10 hover:border-purple-400/50">
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <img 
                        src={topic.image} 
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-4xl group-hover:scale-125 transition-transform">{topic.icon}</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">{topic.title}</h3>
                      <p className="text-sm text-gray-400 mb-4 flex-1">{topic.description}</p>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 font-semibold"
                        size="sm"
                      >
                        Learn & Quiz <ArrowRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10" data-scroll-animate>
        <div className="container max-w-2xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-black mb-4">
              <span className="text-white">Get In</span> <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="card-3d p-8 bg-white/5 border border-white/10 backdrop-blur space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Name</label>
              <input 
                type="text"
                placeholder="Your name"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Email</label>
              <input 
                type="email"
                placeholder="your@email.com"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Message</label>
              <textarea 
                placeholder="Your message..."
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </Button>
            {contactSubmitted && (
              <div className="p-4 bg-green-500/20 border border-green-400/50 rounded-lg text-green-300 text-sm font-semibold text-center">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur border-t border-white/10 py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Fairplay Awareness</h3>
              <p className="text-gray-400 text-sm">Promoting ethical behavior and fairness globally.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Topics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/learn/sports" className="hover:text-white transition-colors">Sports</a></li>
                <li><a href="/learn/gaming" className="hover:text-white transition-colors">Gaming</a></li>
                <li><a href="/learn/business" className="hover:text-white transition-colors">Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">More</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/learn/education" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="/learn/general-life" className="hover:text-white transition-colors">General Life</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Fairplay Awareness. All rights reserved. Promoting ethical behavior globally.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
