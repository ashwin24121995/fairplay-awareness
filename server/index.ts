import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Add proper HTTP headers for SEO and caching
  app.use((req, res, next) => {
    // Vary header - tells caches that content may differ by user agent
    res.setHeader('Vary', 'User-Agent, Accept-Encoding');
    
    // Cache-Control header - allow caching for 1 hour
    if (req.path.endsWith('.html') || req.path === '/') {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    } else if (req.path.match(/\.(js|css|woff2|webp|png|jpg|svg)$/)) {
      // Cache static assets for longer (1 year)
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    
    next();
  });

  app.use(express.static(staticPath));

  // Serve static files that should not be routed through React
  app.get("/sitemap.xml", (_req, res) => {
    res.setHeader("Content-Type", "application/xml");
    res.sendFile(path.join(staticPath, "sitemap.xml"));
  });

  app.get("/robots.txt", (_req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.sendFile(path.join(staticPath, "robots.txt"));
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (req, res) => {
    // Set headers for HTML responses
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Vary', 'User-Agent, Accept-Encoding');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    
    res.sendFile(path.join(staticPath, "index.html"));
  });
  

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
