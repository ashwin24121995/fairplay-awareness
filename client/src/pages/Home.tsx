import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Home Page - Fairplay Awareness
 * Design: Modern Minimalist with Ethical Geometry
 * Color Scheme: Teal (#0D7377) + Gold (#F4A261)
 * Typography: Poppins (headings) + Inter (body)
 */

export default function Home() {
  const topics = getAllTopics();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", message: "" });
      setContactSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Fairplay Awareness" className="w-10 h-10" />
            <h1 className="font-bold text-lg text-[#0D7377]">Fairplay Awareness</h1>
          </div>
          <div className="flex gap-4">
            <a href="#topics" className="text-sm font-medium text-foreground hover:text-[#0D7377] transition-colors">Topics</a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-[#0D7377] transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-[#0D7377] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D7377]/5 via-transparent to-[#F4A261]/5 py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#F4A261]/10 rounded-full border border-[#F4A261]/20">
                <span className="text-sm font-semibold text-[#0D7377]">Global Educational Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Promote <span className="text-[#0D7377]">Fairplay</span> Globally
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learn about ethical behavior and fairness across Sports, Gaming, Business, Education, and General Life. Interactive quizzes and deep learning content to transform your understanding of fairplay.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#topics">
                  <Button className="bg-[#0D7377] hover:bg-[#0D7377]/90 text-white gap-2">
                    Explore Topics <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Button variant="outline" className="border-[#0D7377] text-[#0D7377] hover:bg-[#0D7377]/5">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/hero-main.jpg" 
                alt="Fairplay Awareness Hero" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0D7377]/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Geometric Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/50" 
             style={{clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'}}></div>
      </section>

      {/* Features Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Fairplay Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fairplay is the foundation of trust, integrity, and sustainable success across all areas of life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Learning",
                description: "Comprehensive content covering 5,000-7,000 words per topic with real-world examples and best practices.",
                icon: "📚"
              },
              {
                title: "Interactive Quizzes",
                description: "Test your knowledge with 10-15 question quizzes featuring immediate feedback and detailed explanations.",
                icon: "🎯"
              },
              {
                title: "Global Reach",
                description: "Learn fairplay principles applicable across Sports, Gaming, Business, Education, and General Life.",
                icon: "🌍"
              }
            ].map((feature, idx) => (
              <div key={idx} className="fairplay-card p-8 text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#0D7377]">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section id="topics" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Our Topics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a topic to dive deep into fairplay principles and test your knowledge with interactive quizzes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {topics.map((topic) => (
              <Link key={topic.id} href={`/learn/${topic.id}`}>
                <a className="group cursor-pointer">
                  <div className="fairplay-card overflow-hidden h-full flex flex-col">
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#0D7377]/10 to-[#F4A261]/10">
                      <img 
                        src={topic.image} 
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D7377]/40 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-3xl">{topic.icon}</div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-[#0D7377] mb-2">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{topic.description}</p>
                      <Button 
                        className="w-full bg-[#0D7377] hover:bg-[#0D7377]/90 text-white gap-2"
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

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fairplay Awareness is dedicated to promoting ethical behavior and fairness globally. We believe that fairplay principles are fundamental to building trustworthy communities, sustainable organizations, and a just society.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through comprehensive education and interactive learning, we empower individuals to understand, value, and practice fairplay across all aspects of their lives—from sports and gaming to business, education, and everyday interactions.
              </p>
              <div className="pt-4">
                <h3 className="font-bold text-[#0D7377] mb-4">Our Values:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-[#F4A261] font-bold">✓</span>
                    <span>Integrity in all endeavors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F4A261] font-bold">✓</span>
                    <span>Respect for all individuals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F4A261] font-bold">✓</span>
                    <span>Transparent communication</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#F4A261] font-bold">✓</span>
                    <span>Commitment to education</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D7377]/10 to-[#F4A261]/10 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#F4A261]/20">
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-br from-[#0D7377]/5 to-[#F4A261]/5 rounded-xl">
                    <div className="text-4xl font-bold text-[#0D7377] mb-2">5</div>
                    <p className="text-muted-foreground">Fairplay Domains</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#0D7377]/5 to-[#F4A261]/5 rounded-xl">
                    <div className="text-4xl font-bold text-[#F4A261] mb-2">50+</div>
                    <p className="text-muted-foreground">Interactive Quizzes</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#0D7377]/5 to-[#F4A261]/5 rounded-xl">
                    <div className="text-4xl font-bold text-[#0D7377] mb-2">Global</div>
                    <p className="text-muted-foreground">Audience Reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-[#0D7377]/5 to-[#F4A261]/5">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="fairplay-card p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text"
                placeholder="Your name"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email"
                placeholder="your@email.com"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                placeholder="Your message..."
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7377] resize-none"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-[#0D7377] hover:bg-[#0D7377]/90 text-white gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </Button>
            {contactSubmitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Fairplay Awareness</h3>
              <p className="text-gray-400 text-sm">Promoting ethical behavior and fairness globally.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Topics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/learn/sports" className="hover:text-white transition-colors">Sports</a></li>
                <li><a href="/learn/gaming" className="hover:text-white transition-colors">Gaming</a></li>
                <li><a href="/learn/business" className="hover:text-white transition-colors">Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">More</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/learn/education" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="/learn/general-life" className="hover:text-white transition-colors">General Life</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Fairplay Awareness. All rights reserved. Promoting ethical behavior globally.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
