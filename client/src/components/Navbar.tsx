import { Link, useLocation } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Search, X, ArrowRight, Trophy, Gamepad2, Briefcase, BookOpen, Globe, Menu } from "lucide-react";
import { useState } from "react";

/**
 * Modern Navbar Component - Fully Responsive
 * Design: Sleek, minimalist with gradient accents
 * Mobile: Hamburger menu with smooth animations
 * Desktop: Full horizontal navigation with search
 */

export default function Navbar() {
  const [location] = useLocation();
  const topics = getAllTopics();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof topics>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return <Trophy className="w-4 h-4 text-blue-400" />;
      case "Gamepad2":
        return <Gamepad2 className="w-4 h-4 text-purple-400" />;
      case "Briefcase":
        return <Briefcase className="w-4 h-4 text-pink-400" />;
      case "BookOpen":
        return <BookOpen className="w-4 h-4 text-orange-400" />;
      case "Globe":
        return <Globe className="w-4 h-4 text-cyan-400" />;
      default:
        return null;
    }
  };

  const hideSearch = location.startsWith("/learn") || location.startsWith("/quiz");

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/80 via-purple-900/80 to-slate-900/80 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl">
      <div className="container px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo Section */}
          <Link href="/">
            <a className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <img src="/logo-new.webp" alt="Fairplay" className="relative w-8 md:w-10 h-8 md:h-10 rounded-lg drop-shadow-lg" />
              </div>
              <div className="hidden sm:flex flex-col">
                <h1 className="font-bold text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Fairplay
                </h1>
                <p className="text-xs text-purple-300">Awareness</p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-8">
            {location !== "/about" && (
              <Link href="/about">
                <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </Link>
            )}
            {location === "/" && (
              <>
                <a href="#topics" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Topics
                </a>
                <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#stats" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Impact
                </a>
              </>
            )}
          </div>

          {/* Desktop Search - Right */}
          {!hideSearch && (
            <div className="hidden lg:block relative">
              <div className="relative flex items-center">
                <Search className="absolute left-3 w-4 h-4 text-purple-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/5 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all backdrop-blur w-48"
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

              {/* Search Results */}
              {showSearchResults && (
                <div className="absolute top-full right-0 mt-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-400/30 rounded-lg backdrop-blur shadow-2xl z-50 overflow-hidden w-64">
                  {searchResults.length > 0 ? (
                    <div className="max-h-64 overflow-y-auto">
                      {searchResults.map((result, idx) => (
                        <Link key={idx} href={`/learn/${result.id}`}>
                          <a
                            onClick={() => clearSearch()}
                            className="flex items-center gap-3 p-3 border-b border-white/10 hover:bg-white/10 transition-colors cursor-pointer group text-sm"
                          >
                            <div className="flex-shrink-0">{getIcon(result.icon)}</div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                                {result.title}
                              </h4>
                            </div>
                            <ArrowRight className="w-3 h-3 text-purple-400 flex-shrink-0" />
                          </a>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 text-center text-xs text-gray-400">No topics found</div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-purple-500/20 space-y-3">
            {/* Mobile Search */}
            {!hideSearch && (
              <div className="px-2 pt-3">
                <div className="relative flex items-center">
                  <Search className="absolute left-3 w-4 h-4 text-purple-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-purple-400/30 rounded-lg text-white placeholder-gray-300 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all backdrop-blur"
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

                {/* Mobile Search Results */}
                {showSearchResults && (
                  <div className="mt-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-400/30 rounded-lg backdrop-blur shadow-2xl z-50 overflow-hidden">
                    {searchResults.length > 0 ? (
                      <div className="max-h-48 overflow-y-auto">
                        {searchResults.map((result, idx) => (
                          <Link key={idx} href={`/learn/${result.id}`}>
                            <a
                              onClick={() => {
                                clearSearch();
                                setMobileMenuOpen(false);
                              }}
                              className="flex items-center gap-2 p-2 border-b border-white/10 hover:bg-white/10 transition-colors cursor-pointer group text-xs"
                            >
                              <div className="flex-shrink-0">{getIcon(result.icon)}</div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                                  {result.title}
                                </h4>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-2 text-center text-xs text-gray-400">No topics found</div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-1 px-2">
              {location !== "/about" && (
                <Link href="/about">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    About
                  </a>
                </Link>
              )}
              {location === "/" && (
                <>
                  <a
                    href="#topics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    Topics
                  </a>
                  <a
                    href="#features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    Features
                  </a>
                  <a
                    href="#stats"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    Impact
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
