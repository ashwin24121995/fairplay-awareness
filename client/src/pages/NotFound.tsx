import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * 404 Not Found Page
 * Design: Modern Minimalist with Ethical Geometry
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 blob" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="container max-w-2xl text-center relative z-10">
        <div className="mb-8 slide-in-up">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">404</h1>
          <h2 className="text-5xl font-black text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2 px-8 py-6 text-lg font-semibold shadow-lg">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>
            </a>
          </Link>
          <p className="text-gray-300 text-lg">
            Explore our fairplay topics and start learning about ethical behavior.
          </p>
        </div>
      </div>
    </div>
  );
}
