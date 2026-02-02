'use client';

import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import { portfolioData } from '@/lib/portfolioData';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const { personal } = portfolioData;

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className={styles.hero} aria-label="Introduction">
            {/* Animated background elements */}
            <div className={styles.bgElements} aria-hidden="true">
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
                <div className={styles.orb3}></div>
            </div>

            <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.greeting}>
                    <span className={styles.wave}>👋</span>
                    <span>Hello, I&apos;m</span>
                </div>

                <h1 className={styles.name}>
                    <TypeWriter texts={[personal.name]} speed={100} deleteSpeed={0} pauseDuration={999999} />
                </h1>

                <h2 className={styles.title}>{personal.title}</h2>

                <p className={styles.bio}>{personal.bio}</p>

                <div className={styles.cta}>
                    <a href="#certifications" className="btn btn-primary">
                        View My Credentials
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Get In Touch
                    </a>
                </div>

                <div className={styles.social}>
                    <a
                        href={personal.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className={styles.socialLink}
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={personal.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className={styles.socialLink}
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${personal.email}`}
                        aria-label="Send Email"
                        className={styles.socialLink}
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            <a
                href="#skills"
                className={styles.scrollIndicator}
                aria-label="Scroll to skills section"
            >
                <ArrowDown size={24} />
            </a>
        </section>
    );
}
