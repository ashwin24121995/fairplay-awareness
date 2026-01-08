import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * 404 Not Found Page
 * Design: Modern Minimalist with Ethical Geometry
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D7377]/5 to-[#F4A261]/5 flex items-center justify-center">
      <div className="container max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[#0D7377] mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <a>
              <Button className="bg-[#0D7377] hover:bg-[#0D7377]/90 text-white gap-2 px-8 py-6 text-lg">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>
            </a>
          </Link>
          <p className="text-muted-foreground">
            Explore our fairplay topics and start learning about ethical behavior.
          </p>
        </div>
      </div>
    </div>
  );
}
