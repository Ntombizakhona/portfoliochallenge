'use client';

import styles from './ContactSection.module.css';
import { portfolioData } from '@/lib/portfolioData';
import { Mail, Github, Linkedin, Twitter, BookOpen, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
    const { personal } = portfolioData;

    return (
        <section id="contact" className={styles.section} aria-label="Contact">
            <div className="container">
                <div className="section-title">
                    <h2>Let&apos;s Connect</h2>
                    <p>Have a project in mind or just want to chat? I&apos;d love to hear from you!</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.contactCard}>
                        <div className={styles.cardHeader}>
                            <h3>Get In Touch</h3>
                            <p>Feel free to reach out through any of these channels</p>
                        </div>

                        <div className={styles.contactLinks}>
                            <a
                                href={`mailto:${personal.email}`}
                                className={styles.contactLink}
                                aria-label="Send email"
                            >
                                <div className={styles.linkIcon}>
                                    <Mail size={24} />
                                </div>
                                <div className={styles.linkContent}>
                                    <span className={styles.linkLabel}>Email</span>
                                    <span className={styles.linkValue}>{personal.email}</span>
                                </div>
                                <Send size={18} className={styles.linkArrow} />
                            </a>

                            <a
                                href={personal.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                                aria-label="GitHub profile"
                            >
                                <div className={styles.linkIcon}>
                                    <Github size={24} />
                                </div>
                                <div className={styles.linkContent}>
                                    <span className={styles.linkLabel}>GitHub</span>
                                    <span className={styles.linkValue}>@ntombizakhona</span>
                                </div>
                                <Send size={18} className={styles.linkArrow} />
                            </a>

                            <a
                                href={personal.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                                aria-label="LinkedIn profile"
                            >
                                <div className={styles.linkIcon}>
                                    <Linkedin size={24} />
                                </div>
                                <div className={styles.linkContent}>
                                    <span className={styles.linkLabel}>LinkedIn</span>
                                    <span className={styles.linkValue}>Ntombizakhona Mabaso</span>
                                </div>
                                <Send size={18} className={styles.linkArrow} />
                            </a>

                            <a
                                href={personal.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                                aria-label="Twitter profile"
                            >
                                <div className={styles.linkIcon}>
                                    <Twitter size={24} />
                                </div>
                                <div className={styles.linkContent}>
                                    <span className={styles.linkLabel}>Twitter</span>
                                    <span className={styles.linkValue}>@NtombizakhonaX</span>
                                </div>
                                <Send size={18} className={styles.linkArrow} />
                            </a>

                            <a
                                href={personal.social.medium}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                                aria-label="Medium profile"
                            >
                                <div className={styles.linkIcon}>
                                    <BookOpen size={24} />
                                </div>
                                <div className={styles.linkContent}>
                                    <span className={styles.linkLabel}>Medium</span>
                                    <span className={styles.linkValue}>@ntombizakhona</span>
                                </div>
                                <Send size={18} className={styles.linkArrow} />
                            </a>
                        </div>

                        <div className={styles.location}>
                            <MapPin size={18} />
                            <span>{personal.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <p>
                        © {new Date().getFullYear()} {personal.name}. Built with Next.js & AI ✨
                    </p>
                </div>
            </footer>
        </section>
    );
}
