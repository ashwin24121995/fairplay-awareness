# Fairplay Awareness

A comprehensive global educational platform dedicated to promoting ethical behavior, fairness, and integrity across all domains of life.

## Features

- **5 Learning Domains**: Sports, Gaming, Business, Education, and General Life
- **Deep Detailed Content**: 5,000-7,000 words per topic
- **Interactive Quizzes**: 50+ questions with instant feedback
- **Modern 3D Design**: Advanced animations and vibrant visuals
- **Responsive Layout**: Works seamlessly on all devices
- **Search Functionality**: Quick topic discovery
- **FAQ Section**: Comprehensive answers to common questions

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Framer Motion
- **Build Tool**: Vite
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fairplay_awareness

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
fairplay_awareness/
├── client/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── lib/          # Utilities and data
│   │   ├── App.tsx       # Main app component
│   │   └── index.css     # Global styles
│   └── index.html        # HTML entry point
├── server/               # Express server
├── package.json
└── vite.config.ts        # Vite configuration
```

## Deployment

### Railway Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Railway
3. Set up environment variables if needed
4. Deploy with custom domain

### Environment Variables

No environment variables are required for basic functionality. The platform works entirely with static content.

## License

MIT

## Support

For questions or feedback, contact: support@fairplayawareness.com

---

**Fairplay Awareness** - Empowering Global Communities Through Ethical Education
