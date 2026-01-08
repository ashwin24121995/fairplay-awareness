import { Link, useLocation } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Search, X, ArrowRight, Trophy, Gamepad2, Briefcase, BookOpen, Globe, Menu } from "lucide-react";
import { useState } from "react";

/**
 * Global Navbar Component - Redesigned
 * Design: Clean, balanced layout with better spacing
 * Features: Hamburger menu for mobile, responsive design, search functionality
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

  // Hide search on learn and quiz pages
  const hideSearch = location.startsWith("/learn") || location.startsWith("/quiz");

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/80 via-purple-900/80 to-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between py-3 md:py-4 gap-4">
          {/* Logo Section */}
          <Link href="/">
            <a className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <img src="/logo-new.webp" alt="Fairplay Awareness" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
                  Fairplay
                </h1>
                <p className="text-xs text-purple-200 leading-tight">Awareness</p>
              </div>
            </a>
          </Link>

          {/* Center Navigation Links - Desktop Only */}
          <div className="hidden md:flex gap-1 lg:gap-2 items-center">
            {location !== "/about" && (
              <Link href="/about">
                <a className="px-3 py-2 font-medium text-xs lg:text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                  About
                </a>
              </Link>
            )}
            {location === "/" && (
              <>
                <a href="#topics" className="px-3 py-2 font-medium text-xs lg:text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                  Topics
                </a>
                <a href="#features" className="px-3 py-2 font-medium text-xs lg:text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                  Features
                </a>
                <a href="#stats" className="px-3 py-2 font-medium text-xs lg:text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                  Impact
                </a>
              </>
            )}
          </div>

          {/* Right Section - Search + Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-3 ml-auto">
            {/* Desktop Search Bar - Hidden on Mobile */}
            {!hideSearch && (
              <div className="hidden lg:block relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-3 w-4 h-4 text-purple-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-48 pl-10 pr-10 py-2 bg-white/10 border border-purple-400/50 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all backdrop-blur"
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

                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-400/30 rounded-lg backdrop-blur shadow-2xl z-50 overflow-hidden">
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {/* Mobile Search */}
            {!hideSearch && (
              <div className="mb-4 mt-4 px-2">
                <div className="relative flex items-center">
                  <Search className="absolute left-3 w-4 h-4 text-purple-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 bg-white/10 border border-purple-400/50 rounded-lg text-white placeholder-gray-300 text-xs focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all backdrop-blur"
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
                    className="font-medium text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all text-sm"
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
                    className="font-medium text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all text-sm"
                  >
                    Topics
                  </a>
                  <a
                    href="#features"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all text-sm"
                  >
                    Features
                  </a>
                  <a
                    href="#stats"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all text-sm"
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
