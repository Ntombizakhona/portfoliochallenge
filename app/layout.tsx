import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'AI Digital Twin Portfolio | Interactive Developer Portfolio',
    description: 'An innovative portfolio featuring an AI-powered digital twin chatbot. Explore my projects, skills, and experience through conversational AI.',
    keywords: ['portfolio', 'developer', 'AI', 'chatbot', 'digital twin', 'web development'],
    authors: [{ name: 'Portfolio Owner' }],
    openGraph: {
        title: 'AI Digital Twin Portfolio',
        description: 'Interactive portfolio with AI-powered chatbot',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                {children}
            </body>
        </html>
    );
}
