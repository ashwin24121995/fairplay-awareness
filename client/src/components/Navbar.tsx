import { Link, useLocation } from "wouter";
import { getAllTopics } from "@/lib/fairplayData";
import { Search, X, ArrowRight, Trophy, Gamepad2, Briefcase, BookOpen, Globe } from "lucide-react";
import { useState } from "react";

/**
 * Global Navbar Component
 * Design: Advanced 3D with gradient backgrounds and smooth animations
 * Used across all pages for consistent navigation
 */

export default function Navbar() {
  const [location] = useLocation();
  const topics = getAllTopics();
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
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container flex items-center justify-between py-3 md:py-4 px-4 md:px-0">
        {/* Logo Section */}
        <Link href="/">
          <a className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src="/logo-new.webp" alt="Fairplay Awareness" className="w-10 h-10 md:w-16 md:h-16 drop-shadow-lg" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-base md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Fairplay
              </h1>
              <p className="text-xs text-purple-200">Awareness</p>
            </div>
          </a>
        </Link>

        {/* Search Bar in Header - Hidden on Mobile */}
        {!hideSearch && (
          <div className="hidden md:block relative flex-1 max-w-xs mx-8">
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

            {/* Search Results Dropdown */}
            {showSearchResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-400/30 rounded-lg backdrop-blur shadow-2xl z-50 overflow-hidden">
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

        {/* Navigation Links - Responsive */}
        <div className="flex gap-3 md:gap-6 text-xs md:text-sm">
          {location !== "/about" && (
            <Link href="/about">
              <a className="font-medium text-white/80 hover:text-white transition-colors">
                About
              </a>
            </Link>
          )}
          {location === "/" && (
            <>
              <a href="#topics" className="font-medium text-white/80 hover:text-white transition-colors hidden sm:inline">
                Topics
              </a>
              <a href="#features" className="font-medium text-white/80 hover:text-white transition-colors hidden sm:inline">
                Features
              </a>
              <a href="#stats" className="font-medium text-white/80 hover:text-white transition-colors hidden sm:inline">
                Impact
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
