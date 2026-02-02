'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './BlogsSection.module.css';
import { portfolioData } from '@/lib/portfolioData';
import { BookOpen, ExternalLink, Newspaper, MessageCircle, Headphones } from 'lucide-react';

function getPlatformIcon(platform: string) {
    const p = platform.toLowerCase();
    if (p === 'medium') return <BookOpen size={20} />;
    if (p === 'threads') return <MessageCircle size={20} />;
    if (p === 'spotify') return <Headphones size={20} />;
    return <Newspaper size={20} />;
}

export default function BlogsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { blogs } = portfolioData;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="blogs"
            ref={sectionRef}
            className={styles.section}
            aria-label="Blogs"
        >
            <div className="container">
                <div className="section-title">
                    <h2>Blog & Articles</h2>
                    <p>Sharing knowledge through writing on cloud, AI, and development</p>
                </div>

                <div className={styles.blogsGrid}>
                    {blogs.map((blog, index) => (
                        <a
                            key={blog.id}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.platformBadge}>
                                    {getPlatformIcon(blog.platform)}
                                    <span>{blog.platform}</span>
                                </div>
                                <ExternalLink size={18} className={styles.externalIcon} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.blogTitle}>{blog.title}</h3>
                                <p className={styles.blogDescription}>{blog.description}</p>
                            </div>
                            <div className={styles.readMore}>
                                <span>View Content</span>
                                <ExternalLink size={16} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
