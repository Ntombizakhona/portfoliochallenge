# AI Digital Twin Portfolio

An innovative personal portfolio website featuring an AI-powered chatbot that acts as a digital twin of the portfolio owner. Built with Next.js 14, TypeScript, and Google's Gemini AI.

## Features

- 🤖 **AI Digital Twin** - Interactive chatbot powered by Gemini AI
- ✨ **Modern UI** - Glassmorphism design with smooth animations
- 📱 **Responsive** - Works beautifully on all devices
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🚀 **Fast** - Optimized for performance with Next.js
- ☁️ **Cloud Ready** - Docker + Google Cloud Run deployment

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Gemini API key (get one at [aistudio.google.com](https://aistudio.google.com/))

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your Gemini API key to .env
# GEMINI_API_KEY=your_key_here

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Customization

### Personal Information

Edit `lib/portfolioData.ts` to customize:

- Your name, title, and bio
- Skills and proficiency levels
- Projects and experience
- Social media links
- AI personality traits

### Styling

The design system is in `app/globals.css`. Customize:

- Color palette (CSS custom properties)
- Typography
- Animations
- Glassmorphism effects

## Deployment

### Google Cloud Run

1. Set up Google Cloud project
2. Enable Cloud Build and Cloud Run APIs
3. Add `GEMINI_API_KEY` as a substitution variable in Cloud Build
4. Run: `gcloud builds submit --config cloudbuild.yaml`

### Manual Docker Build

```bash
docker build -t ai-portfolio .
docker run -p 8080:8080 -e GEMINI_API_KEY=your_key ai-portfolio
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **AI**: Google Gemini API
- **Styling**: CSS with custom properties
- **Icons**: Lucide React
- **Deployment**: Docker + Cloud Run

## License

MIT License - feel free to use this for your own portfolio!
