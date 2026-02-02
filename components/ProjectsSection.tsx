'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ProjectsSection.module.css';
import { portfolioData, Project } from '@/lib/portfolioData';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    index: number;
    isVisible: boolean;
}

function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
    return (
        <article
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                    <span className={styles.projectIcon}>🚀</span>
                </div>
                <div className={styles.cardOverlay}>
                    <div className={styles.overlayContent}>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.overlayBtn}
                                aria-label={`View live demo of ${project.title}`}
                            >
                                <ExternalLink size={20} />
                                <span>Live Demo</span>
                            </a>
                        )}
                        {project.sourceUrl && (
                            <a
                                href={project.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.overlayBtn}
                                aria-label={`View source code of ${project.title}`}
                            >
                                <Github size={20} />
                                <span>Source Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.highlights}>
                    {project.highlights.map((highlight, i) => (
                        <div key={i} className={styles.highlight}>
                            <ChevronRight size={14} />
                            <span>{highlight}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.techStack}>
                    {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function ProjectsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { projects } = portfolioData;

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

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className={styles.section}
            aria-label="Projects"
        >
            <div className="container">
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <p>A selection of projects I&apos;ve worked on, showcasing my skills and passion</p>
                </div>

                <div className={styles.projectsGrid}>
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
