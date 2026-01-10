import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distPublicDir = path.resolve(projectRoot, 'dist', 'public');

/**
 * Pre-render script for Static Site Generation (SSG)
 * Generates static HTML files for all routes to fix Google Ads cloaking issues
 */

async function prerender() {
  console.log('🔨 Starting pre-render process...');

  // List of all routes to pre-render
  const routes = [
    '/',
    '/about',
    '/learn/sports-fairplay',
    '/learn/gaming-fairplay',
    '/learn/business-fairplay',
    '/learn/education-fairplay',
    '/learn/general-fairplay',
  ];

  try {
    // Ensure dist/public exists
    await fs.ensureDir(distPublicDir);

    // Create a temporary HTML file with meta tags for each route
    for (const route of routes) {
      const routePath = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
      const filePath = path.join(distPublicDir, routePath);

      // Ensure directory exists
      await fs.ensureDir(path.dirname(filePath));

      // Read the base index.html
      const baseHtml = await fs.readFile(path.join(distPublicDir, 'index.html'), 'utf-8');

      // Add route-specific meta tags
      let enhancedHtml = baseHtml;

      // Add canonical tag
      const canonicalTag = `<link rel="canonical" href="https://fairplayawareness.com${route}" />`;

      // Route-specific meta descriptions and titles
      const routeMeta = getRouteMeta(route);

      // Insert canonical and route-specific meta tags
      enhancedHtml = enhancedHtml.replace(
        '<title>Fairplay Awareness - Promote Ethical Behavior Globally</title>',
        `<title>${routeMeta.title}</title>`
      );

      enhancedHtml = enhancedHtml.replace(
        '<meta name="description" content="Learn about fairplay and ethical behavior across Sports, Gaming, Business, Education, and General Life. Interactive quizzes and deep learning content." />',
        `<meta name="description" content="${routeMeta.description}" />`
      );

      // Add canonical tag before closing head
      enhancedHtml = enhancedHtml.replace(
        '</head>',
        `${canonicalTag}\n    ${getOpenGraphTags(route)}\n  </head>`
      );

      // Add structured data (Schema.org)
      enhancedHtml = enhancedHtml.replace(
        '<div id="root"></div>',
        `<script type="application/ld+json">${JSON.stringify(getStructuredData(route))}</script>\n    <div id="root"></div>`
      );

      // Write the enhanced HTML
      await fs.writeFile(filePath, enhancedHtml);
      console.log(`✅ Pre-rendered: ${route}`);
    }

    console.log('✨ Pre-render complete!');
  } catch (error) {
    console.error('❌ Pre-render failed:', error);
    process.exit(1);
  }
}

function getRouteMeta(route) {
  const metaMap = {
    '/': {
      title: 'Fairplay Awareness - Promote Ethical Behavior Globally',
      description: 'Learn about fairplay and ethical behavior across Sports, Gaming, Business, Education, and General Life. Interactive quizzes and deep learning content.',
    },
    '/about': {
      title: 'About Fairplay Awareness - Our Mission & Team',
      description: 'Discover the story behind Fairplay Awareness, our mission to promote ethical behavior globally, and meet our team of educators and experts.',
    },
    '/learn/sports-fairplay': {
      title: 'Sports Fairplay - Learn Ethical Behavior in Sports',
      description: 'Comprehensive guide to fairplay principles in sports, including sportsmanship, integrity, and ethical conduct.',
    },
    '/learn/gaming-fairplay': {
      title: 'Gaming Fairplay - Learn Ethical Gaming Principles',
      description: 'Explore fairplay principles in gaming, including anti-cheat ethics, fair competition, and community respect.',
    },
    '/learn/business-fairplay': {
      title: 'Business Fairplay - Learn Corporate Ethics',
      description: 'Understand fairplay principles in business, including corporate integrity, ethical leadership, and honest practices.',
    },
    '/learn/education-fairplay': {
      title: 'Education Fairplay - Learn Academic Integrity',
      description: 'Learn about fairplay in education, including academic honesty, plagiarism prevention, and ethical learning practices.',
    },
    '/learn/general-fairplay': {
      title: 'General Fairplay - Learn Ethical Living',
      description: 'Discover fairplay principles for everyday life, including honesty, respect, and ethical decision-making.',
    },
  };

  return metaMap[route] || metaMap['/'];
}

function getOpenGraphTags(route) {
  const ogMap = {
    '/': {
      ogTitle: 'Fairplay Awareness - Promote Ethical Behavior Globally',
      ogDescription: 'Learn about fairplay and ethical behavior across multiple domains.',
      ogImage: 'https://fairplayawareness.com/logo-new.webp',
    },
    '/about': {
      ogTitle: 'About Fairplay Awareness',
      ogDescription: 'Our mission to promote ethical behavior globally.',
      ogImage: 'https://fairplayawareness.com/logo-new.webp',
    },
  };

  const og = ogMap[route] || ogMap['/'];
  return `<meta property="og:title" content="${og.ogTitle}" />
    <meta property="og:description" content="${og.ogDescription}" />
    <meta property="og:image" content="${og.ogImage}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${og.ogTitle}" />
    <meta name="twitter:description" content="${og.ogDescription}" />`;
}

function getStructuredData(route) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fairplay Awareness',
    url: 'https://fairplayawareness.com',
    description: 'A comprehensive educational platform dedicated to promoting ethical behavior and fairness',
    publisher: {
      '@type': 'Organization',
      name: 'Fairplay Awareness',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fairplayawareness.com/logo-new.webp',
      },
    },
  };

  if (route === '/') {
    return {
      ...baseStructuredData,
      '@type': 'WebPage',
    };
  }

  if (route === '/about') {
    return {
      ...baseStructuredData,
      '@type': 'AboutPage',
    };
  }

  if (route.startsWith('/learn/')) {
    return {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: route.replace('/learn/', '').replace(/-/g, ' '),
      url: `https://fairplayawareness.com${route}`,
      educationalLevel: 'All',
      learningResourceType: 'Course',
    };
  }

  return baseStructuredData;
}

// Run pre-render
prerender().catch(console.error);
