import { portfolioData } from './portfolioData';

interface FallbackResponse {
    response: string;
    matched: boolean;
}

const { personal, skills, certifications, blogs, experience, projects, github, personality } = portfolioData;

// Each rule: array of keyword patterns (any match triggers it) + response builder
const rules: { patterns: RegExp[]; response: () => string }[] = [
    // Greetings
    {
        patterns: [/\b(hi|hello|hey|howdy|greetings|sup)\b/i, /what'?s up/i],
        response: () =>
            `Hi there! 👋 I'm ${personal.name}'s AI assistant. I can tell you about my skills, certifications, projects, blog posts, GitHub repos, and more. What would you like to know?`,
    },
    // Skills
    {
        patterns: [/skill/i, /tech/i, /stack/i, /frontend/i, /backend/i, /what.*(do|can) you (do|use|know)/i, /tools/i, /languages? you/i],
        response: () => {
            const fmt = (list: { name: string; level: number }[]) =>
                list.map(s => s.name).join(', ');
            return `Here's a snapshot of my skills:\n\n**Frontend:** ${fmt(skills.frontend)}\n**Backend:** ${fmt(skills.backend)}\n**Tools & DevOps:** ${fmt(skills.tools)}\n\nI'm always learning and adding to this list!`;
        },
    },
    // Certifications
    {
        patterns: [/certif/i, /credential/i, /qualification/i, /\baws\b/i, /google cloud/i, /\bgcp\b/i, /microsoft/i],
        response: () =>
            `I hold ${certifications.length} professional certifications:\n\n${certifications.map(c => `• ${c}`).join('\n')}\n\nThey've been a great way to validate my cloud and AI expertise.`,
    },
    // GitHub / repos
    {
        patterns: [/github/i, /\brepos?\b/i, /repositor/i, /open.?source/i],
        response: () => {
            const highlights = github.repos
                .filter(r => r.description && r.description.length > 20)
                .slice(0, 6);
            return `You can find my work on GitHub at ${github.profileUrl}. I have ${github.publicRepos} public repos. Here are some highlights:\n\n${highlights.map(r => `• **${r.name}** — ${r.description}${r.language ? ` [${r.language}]` : ''}`).join('\n')}\n\nFeel free to explore and star anything that interests you!`;
        },
    },
    // Blog / content / writing
    {
        patterns: [/blog/i, /article/i, /writ(e|ing)/i, /\bcontent\b/i, /medium/i, /dev\.to/i, /podcast/i, /spotify/i, /threads/i],
        response: () =>
            `I love sharing knowledge! Here's where you can find my content:\n\n${blogs.map(b => `• **${b.title}** (${b.platform}) — ${b.description}`).join('\n')}\n\nI'm always working on new content, so check back often!`,
    },
    // Projects
    {
        patterns: [/project/i, /\bbuilt\b/i, /\bbuild\b/i, /\bapp\b/i, /application/i],
        response: () => {
            const featured = projects.filter(p => p.featured);
            return `Here are some of my featured projects:\n\n${featured.map(p => `• **${p.title}** — ${p.description}\n  Tech: ${p.technologies.join(', ')}`).join('\n\n')}\n\nI also have several projects on my GitHub: ${github.profileUrl}`;
        },
    },
    // Experience / work / career
    {
        patterns: [/experience/i, /career/i, /work history/i, /\bjob\b/i, /\brole\b/i, /company/i, /bamboo/i, /employ/i],
        response: () =>
            `I'm currently working as a ${experience[0].title} at ${github.company}. ${experience[0].description}\n\nKey achievements:\n${experience[0].achievements.map(a => `• ${a}`).join('\n')}\n\nI've been on GitHub since ${github.memberSince}, building and learning in public.`,
    },
    // Contact
    {
        patterns: [/contact/i, /reach/i, /email/i, /\bhire\b/i, /available/i, /connect/i, /linkedin/i, /twitter/i, /social/i],
        response: () =>
            `I'd love to connect! Here's how you can reach me:\n\n• **Email:** ${personal.email}\n• **GitHub:** ${personal.social.github}\n• **LinkedIn:** ${personal.social.linkedin}\n• **Twitter:** ${personal.social.twitter}\n• **Medium:** ${personal.social.medium}\n\nI'm based in ${personal.location}. Don't hesitate to reach out!`,
    },
    // About / who / bio
    {
        patterns: [/about/i, /who are you/i, /tell me about/i, /yourself/i, /introduce/i, /\bbio\b/i, /background/i],
        response: () =>
            `${personal.bio}\n\nI work at ${github.company} and I'm passionate about ${personality.interests.join(', ').toLowerCase()}. I have ${certifications.length} cloud and AI certifications and ${github.publicRepos} public repos on GitHub.`,
    },
    // Location
    {
        patterns: [/where.*(you|based|from|located)/i, /location/i, /south africa/i, /johannesburg/i],
        response: () =>
            `I'm based in ${personal.location}. I work remotely and collaborate with teams and communities globally.`,
    },
    // Interests / hobbies / reading
    {
        patterns: [/interest/i, /hobb/i, /passion/i, /\bread\b/i, /\bbook/i, /free time/i],
        response: () =>
            `My main interests are ${personality.interests.join(', ')}. I also enjoy reading — I have a book reviews repo called "eyereadeverything" on GitHub! I'm a continuous learner who loves exploring new technologies.`,
    },
];

export function getFallbackResponse(message: string): FallbackResponse {
    const lower = message.toLowerCase();

    for (const rule of rules) {
        for (const pattern of rule.patterns) {
            if (pattern.test(lower)) {
                return { response: rule.response(), matched: true };
            }
        }
    }

    // Default fallback
    return {
        response: `Thanks for your message! I'm currently running in offline mode, so I can answer common questions about my skills, certifications, projects, blog posts, GitHub repos, and contact info.\n\nTry asking something like:\n• "What are your skills?"\n• "Tell me about your certifications"\n• "Show me your GitHub repos"\n• "How can I contact you?"\n\nOr reach out directly at ${personal.email}!`,
        matched: false,
    };
}
