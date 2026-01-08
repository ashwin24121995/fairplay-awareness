import { Link } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";

export default function Footer() {
  const topics = getAllTopics();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-gradient-to-b from-white/5 to-slate-950 backdrop-blur py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-new.webp" alt="Fairplay Awareness" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="text-lg font-bold text-white">Fairplay</h3>
                <p className="text-xs text-gray-400">Awareness</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A global educational platform dedicated to promoting ethical behavior, fairness, and integrity across all domains of human activity.
            </p>
            <p className="text-xs text-gray-500">
              Empowering learners worldwide to make ethical choices and build trust-based communities.
            </p>
          </div>

          {/* Learning Domains */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Learning Domains</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {topics.map((topic) => (
                <li key={topic.id}>
                  <Link href={`/learn/${topic.id}`}>
                    <a className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {topic.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>About Us
                  </a>
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>FAQ
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>Features
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <p className="text-gray-400">📧 <strong>Email Support</strong></p>
              </li>
              <li>
                <a href="mailto:support@fairplayawareness.com" className="hover:text-purple-400 transition-colors duration-300">
                  support@fairplayawareness.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-gray-500">Available for inquiries, feedback, and suggestions</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-6 mb-8 backdrop-blur">
          <h4 className="text-sm font-bold text-blue-300 mb-3 uppercase tracking-wider">📋 Important Disclaimer</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Fairplay Awareness is an educational platform designed exclusively for informational purposes. All content, materials, learning modules, quizzes, and resources provided on this website are intended to promote understanding of fairplay principles, ethical behavior, and integrity across various domains of life.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            This platform does not provide professional advice of any kind, including but not limited to legal, medical, financial, business, or psychological guidance. The information presented is educational in nature and should not be considered as a substitute for professional consultation, expert advice, or official guidance from relevant authorities.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Users are solely responsible for how they interpret and apply the information from this platform. Fairplay Awareness assumes no liability for any actions taken based on the content provided. We encourage users to consult with qualified professionals for specific situations requiring expert guidance.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Fairplay Awareness. All rights reserved.</p>
            </div>
            <div className="text-center text-gray-500 text-xs">
              <p>Empowering Global Communities Through Ethical Education</p>
            </div>
            <div className="text-right text-gray-400 text-sm">
              <p>Made with <span className="text-red-500">❤</span> for a fairer world</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
