// Portfolio Data - Customize this with your own information
export const portfolioData = {
    personal: {
        name: "Ntombizakhona Mabaso",
        title: "Cloud Engineer & Web Developer",
        tagline: "Building scalable cloud solutions and intelligent web experiences",
        bio: "I'm a passionate Cloud Engineer and Web Developer based in Johannesburg, South Africa. I specialize in designing and implementing scalable cloud infrastructure, building modern web applications, and integrating AI-powered solutions. With expertise in cloud platforms and full-stack development, I bridge the gap between robust infrastructure and elegant user experiences.",
        location: "Johannesburg, South Africa",
        email: "ntombizakhonamabaso@gmail.com",
        avatar: "/avatar.png",
        social: {
            github: "https://github.com/ntombizakhona",
            linkedin: "https://linkedin.com/in/ntombizakhona",
            twitter: "https://twitter.com/NtombizakhonaX",
            medium: "https://medium.com/@ntombizakhona",
        },
    },

    personality: {
        traits: [
            "Passionate about cloud technologies and automation",
            "Detail-oriented problem solver",
            "Collaborative team player",
            "Continuous learner embracing new technologies",
        ],
        communicationStyle: "Friendly, professional, and conversational. I enjoy explaining technical concepts in simple terms and helping others understand cloud and web technologies. I'm direct but approachable.",
        interests: [
            "Cloud Architecture & Infrastructure",
            "Artificial Intelligence & Machine Learning",
            "Web Development & Modern Frameworks",
            "DevOps & Automation",
        ],
    },

    skills: {
        frontend: [
            { name: "React/Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "CSS/Tailwind", level: 88 },
            { name: "HTML5/Accessibility", level: 92 },
            { name: "JavaScript", level: 95 },
        ],
        backend: [
            { name: "Node.js/Express", level: 88 },
            { name: "Python/FastAPI", level: 82 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "REST/GraphQL APIs", level: 90 },
        ],
        tools: [
            { name: "Git/GitHub", level: 92 },
            { name: "Docker/K8s", level: 78 },
            { name: "Google Cloud", level: 82 },
            { name: "CI/CD Pipelines", level: 85 },
            { name: "AI/ML Integration", level: 75 },
        ],
    },

    projects: [
        {
            id: 1,
            title: "AI-Powered Analytics Dashboard",
            description: "A real-time analytics dashboard with AI-driven insights, natural language queries, and predictive analytics. Built with Next.js and integrated with multiple data sources.",
            technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Chart.js"],
            highlights: [
                "Processes 10M+ events daily",
                "Natural language query interface",
                "Real-time data visualization",
            ],
            liveUrl: "https://analytics-demo.example.com",
            sourceUrl: "https://github.com/alexchen/analytics-dashboard",
            image: "/projects/analytics.png",
            featured: true,
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description: "A modern e-commerce platform with headless CMS, payment integration, and personalized recommendations powered by machine learning.",
            technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redis"],
            highlights: [
                "99.9% uptime SLA",
                "Sub-second page loads",
                "AI product recommendations",
            ],
            liveUrl: "https://shop-demo.example.com",
            sourceUrl: "https://github.com/alexchen/ecommerce",
            image: "/projects/ecommerce.png",
            featured: true,
        },
        {
            id: 3,
            title: "Developer Collaboration Tool",
            description: "Real-time code collaboration platform with integrated video chat, code review, and AI-powered code suggestions.",
            technologies: ["Next.js", "WebRTC", "Socket.io", "Monaco Editor", "OpenAI"],
            highlights: [
                "Real-time collaboration",
                "AI code completion",
                "Integrated video conferencing",
            ],
            liveUrl: "https://collab-demo.example.com",
            sourceUrl: "https://github.com/alexchen/dev-collab",
            image: "/projects/collab.png",
            featured: true,
        },
        {
            id: 4,
            title: "Smart Home IoT Hub",
            description: "IoT platform for smart home automation with voice control, energy monitoring, and predictive maintenance alerts.",
            technologies: ["React Native", "Node.js", "MQTT", "InfluxDB", "TensorFlow Lite"],
            highlights: [
                "Voice-controlled automation",
                "Energy consumption insights",
                "Mobile and web apps",
            ],
            liveUrl: "https://smarthome-demo.example.com",
            sourceUrl: "https://github.com/alexchen/smart-home",
            image: "/projects/smarthome.png",
            featured: false,
        },
    ],

    experience: [
        {
            title: "Cloud Engineer",
            company: "Current Role",
            period: "Present",
            description: "Designing and implementing cloud infrastructure solutions and developing web applications.",
            achievements: [
                "Architecting scalable cloud solutions",
                "Implementing CI/CD pipelines and automation",
                "Building modern web applications with AI integration",
            ],
        },
    ],

    education: [],

    certifications: [
        "Google Cloud Professional Architect",
        "AWS Certified Developer Associate",
        "AWS Solutions Architect Associate",
        "AWS AI Practitioner",
        "AWS Cloud Practitioner",
        "Microsoft AI Fundamentals",
    ],

    blogs: [
        {
            id: 1,
            title: "Cloud Glossary for Beginners",
            description: "A comprehensive glossary of cloud computing terms to help beginners understand the fundamentals.",
            platform: "Medium",
            url: "https://ntombizakhona.medium.com/list/cloud-glossary-for-beginners-528956a3c181",
        },
        {
            id: 2,
            title: "Building in Public",
            description: "Documenting my journey of learning and building projects in public.",
            platform: "Dev.to",
            url: "https://dev.to/ntombizakhona/series/35291",
        },
        {
            id: 3,
            title: "Cloud Practitioner Exam Guide",
            description: "A complete guide to help you prepare for and pass the AWS Cloud Practitioner exam.",
            platform: "Dev.to",
            url: "https://dev.to/ntombizakhona/series/34703",
        },
        {
            id: 4,
            title: "AI Practitioner Exam Guide",
            description: "Everything you need to know to prepare for the AWS AI Practitioner certification.",
            platform: "Dev.to",
            url: "https://dev.to/ntombizakhona/series/34979",
        },
        {
            id: 5,
            title: "Cloud Snippets",
            description: "Quick cloud tips and insights shared daily on Threads.",
            platform: "Threads",
            url: "https://www.threads.com/@ntombizakhonamabaso",
        },
        {
            id: 6,
            title: "Cloud Glossary Podcast",
            description: "Listen to cloud computing concepts explained in an easy-to-understand podcast format.",
            platform: "Spotify",
            url: "https://open.spotify.com/show/2cjYlSlpvIRxLNFpT4jflP",
        },
    ],
};

// System prompt for AI Digital Twin
export const getSystemPrompt = () => {
    const { personal, personality, skills, projects, experience } = portfolioData;

    return `You are the AI Digital Twin of ${personal.name}, a ${personal.title}. You represent them in conversations with portfolio visitors.

PERSONALITY & COMMUNICATION:
${personality.communicationStyle}
Key traits: ${personality.traits.join(', ')}
Interests: ${personality.interests.join(', ')}

BACKGROUND:
${personal.bio}

SKILLS:
Frontend: ${skills.frontend.map(s => `${s.name} (${s.level}%)`).join(', ')}
Backend: ${skills.backend.map(s => `${s.name} (${s.level}%)`).join(', ')}
Tools: ${skills.tools.map(s => `${s.name} (${s.level}%)`).join(', ')}

FEATURED PROJECTS:
${projects.filter(p => p.featured).map(p => `
- ${p.title}: ${p.description}
  Tech: ${p.technologies.join(', ')}
  Highlights: ${p.highlights.join(', ')}
`).join('')}

EXPERIENCE:
${experience.map(e => `
- ${e.title} at ${e.company} (${e.period}): ${e.description}
`).join('')}

GUIDELINES:
1. Respond as if you ARE ${personal.name}, using first person ("I", "my", "me")
2. Be helpful, friendly, and professional
3. If asked about something not in your knowledge, gracefully redirect to direct contact: ${personal.email}
4. Keep responses concise but informative
5. Show enthusiasm about your work and technologies
6. Don't make up information - stick to what's provided above
7. If asked about availability for work, encourage them to reach out via email

CONTACT:
Email: ${personal.email}
GitHub: ${personal.social.github}
LinkedIn: ${personal.social.linkedin}`;
};

export type Project = typeof portfolioData.projects[0];
export type Skill = { name: string; level: number };
export type Experience = typeof portfolioData.experience[0];
