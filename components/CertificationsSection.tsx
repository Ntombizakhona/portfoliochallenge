'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CertificationsSection.module.css';
import { portfolioData } from '@/lib/portfolioData';
import { Award, Cloud, Brain, CheckCircle, ExternalLink } from 'lucide-react';

function getCertIcon(cert: string) {
    if (cert.toLowerCase().includes('aws') || cert.toLowerCase().includes('cloud')) {
        return <Cloud size={32} />;
    }
    if (cert.toLowerCase().includes('ai') || cert.toLowerCase().includes('machine learning')) {
        return <Brain size={32} />;
    }
    return <Award size={32} />;
}

function getCertProvider(cert: string): string {
    if (cert.toLowerCase().includes('google')) return 'Google Cloud';
    if (cert.toLowerCase().includes('aws')) return 'Amazon Web Services';
    if (cert.toLowerCase().includes('microsoft') || cert.toLowerCase().includes('azure')) return 'Microsoft';
    return 'Professional';
}

function getCertBadgeUrl(cert: string): string {
    if (cert.toLowerCase().includes('aws')) return 'https://www.credly.com/organizations/amazon-web-services/badges';
    if (cert.toLowerCase().includes('google')) return 'https://www.credly.com/organizations/google-cloud/badges';
    if (cert.toLowerCase().includes('microsoft')) return 'https://learn.microsoft.com/en-us/certifications/';
    return '#';
}

export default function CertificationsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { certifications } = portfolioData;

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
            id="certifications"
            ref={sectionRef}
            className={styles.section}
            aria-label="Certifications"
        >
            <div className="container">
                <div className="section-title">
                    <h2>Certifications</h2>
                    <p>Professional cloud and AI certifications validating my expertise</p>
                </div>

                <div className={styles.certificationsGrid}>
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className={`${styles.cardContainer} ${isVisible ? styles.visible : ''}`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            title="Hover to flip"
                        >
                            <article className={styles.card}>
                                {/* Front of card */}
                                <div className={styles.cardFront}>
                                    <div className={styles.iconWrapper}>
                                        {getCertIcon(cert)}
                                    </div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.provider}>{getCertProvider(cert)}</span>
                                        <h3 className={styles.certTitle}>{cert}</h3>
                                    </div>
                                    <div className={styles.badge}>
                                        <Award size={16} />
                                        <span>Certified</span>
                                    </div>
                                </div>

                                {/* Back of card */}
                                <div className={styles.cardBack}>
                                    <div className={styles.backContent}>
                                        <div className={styles.backIcon}>
                                            <CheckCircle size={40} />
                                        </div>
                                        <h3 className={styles.backTitle}>Verified</h3>
                                        <p className={styles.backDescription}>
                                            This certification validates expertise in {getCertProvider(cert)} technologies and best practices.
                                        </p>
                                        <a
                                            href={getCertBadgeUrl(cert)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.verifyLink}
                                        >
                                            <span>View Badge</span>
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
