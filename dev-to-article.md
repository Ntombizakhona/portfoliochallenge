*This is a submission for the [New Year, New You Portfolio Challenge Presented by Google AI](https://dev.to/challenges/new-year-new-you-google-ai-2025-12-31)*

## About Me

I'm Ntombizakhona Mabaso, a Cloud Engineer and Web Developer based in Johannesburg, South Africa. I'm passionate about building scalable cloud solutions and creating intelligent web experiences that bridge the gap between robust infrastructure and elegant user interfaces.

With this portfolio, I wanted to express my journey in tech—showcasing my certifications (including Google Cloud Professional Architect, AWS certifications, and Microsoft AI Fundamentals), my content creation across Medium, Dev.to, and even my Cloud Glossary Podcast on Spotify. Most importantly, I wanted visitors to interact with an AI version of me that could answer questions about my work 24/7.

## Portfolio

{% cloudrun portfoliochallenge-442244691747.us-east4.run.app dev %}

## How I Built It

### The Tech Stack

- **Frontend**: Next.js 14 with TypeScript and CSS Modules
- **AI Integration**: Google Gemini AI (via @google/generative-ai SDK)
- **Icons**: Lucide React for beautiful, consistent iconography
- **Deployment**: Google Cloud Run with Cloud Build CI/CD
- **Version Control**: GitHub with automated deployments

### The Development Process with Antigravity

What made this project unique was **building it entirely with Antigravity**, Google's AI coding assistant. Here's how the journey unfolded:

**1. Starting from an Idea**
I described my vision: a modern portfolio with an AI-powered chat widget that could represent me to visitors. Antigravity helped me scaffold the entire Next.js project structure.

**2. Designing the Experience**
Together, we created:
- A stunning hero section with animated typing effects
- A skills section with animated progress bars
- A certifications showcase displaying my cloud credentials
- A "Blogs & Articles" section linking to my content across platforms
- A light/dark theme toggle for accessibility
- Floating particle animations for that premium feel

**3. Building the AI Digital Twin**
The standout feature is the AI chat widget powered by **Google Gemini**. We created a system prompt that captures my personality, skills, and communication style. Now visitors can ask questions like "What certifications does Ntombi have?" or "Tell me about your cloud experience" and get responses as if they're talking to me!

**4. Feminizing the Design**
I wanted my portfolio to feel uniquely mine—so we customized the color scheme with rose, coral, and pink gradients that feel both professional and personal.

**5. Deploying to Cloud Run**
The deployment process was seamless. Antigravity helped me:
- Create an optimized multi-stage Dockerfile
- Set up `cloudbuild.yaml` for CI/CD
- Push to GitHub and configure automatic deployments
- Debug build issues in real-time

Every push to the `main` branch now triggers an automatic deployment to Cloud Run!

### Google AI Tools Used
- **Google Gemini API**: Powers the AI Digital Twin chat feature
- **Google Cloud Run**: Hosts the containerized Next.js application
- **Google Cloud Build**: Automates the CI/CD pipeline
- **Antigravity**: The AI coding assistant that helped me build everything from idea to prototype

## What I'm Most Proud Of

### 🤖 The AI Digital Twin
The chat widget isn't just a gimmick—it's genuinely useful. It knows about my certifications, projects, blogs, and personality. Visitors can have real conversations and learn about me even when I'm not available.

### ⚡ The Development Speed
What would have taken me weeks to build on my own took just a few sessions with Antigravity. From initial concept to deployed prototype, the AI assistant accelerated every step—writing components, debugging issues, configuring Docker, and setting up CI/CD.

### 🎨 The Aesthetic
The site doesn't just work—it looks premium. The rose-gradient color scheme, floating particles, smooth animations, and responsive design create an experience I'm genuinely proud to share.

### 📚 The Content Integration
I've been building in public for a while now—writing about cloud concepts, creating exam guides, and even hosting a podcast. This portfolio finally brings all that content together in one place, making it easy for visitors to explore my work across platforms.

### 🚀 The CI/CD Pipeline
Every `git push` automatically triggers a build and deployment. It's the kind of professional infrastructure that shows I practice what I preach as a Cloud Engineer.

---

*Building this portfolio taught me that AI coding assistants aren't replacing developers—they're supercharging us. Antigravity felt like pair programming with a senior engineer who never gets tired and knows every framework. The future of development is collaborative, and I'm excited to keep building!*

**Connect with me:**
- 🐙 [GitHub](https://github.com/ntombizakhona)
- 💼 [LinkedIn](https://linkedin.com/in/ntombizakhona)
- ✍️ [Medium](https://medium.com/@ntombizakhona)
- 🎧 [Podcast](https://open.spotify.com/show/2cjYlSlpvIRxLNFpT4jflP)
