'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SkillsSection.module.css';
import { portfolioData, Skill } from '@/lib/portfolioData';

interface SkillBarProps {
    skill: Skill;
    delay: number;
    isVisible: boolean;
}

function SkillBar({ skill, delay, isVisible }: SkillBarProps) {
    return (
        <div
            className={styles.skillItem}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.progressBar} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                <div
                    className={styles.progressFill}
                    style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${delay}ms`
                    }}
                />
            </div>
        </div>
    );
}

interface SkillCategoryProps {
    title: string;
    skills: Skill[];
    isVisible: boolean;
    baseDelay: number;
}

function SkillCategory({ title, skills, isVisible, baseDelay }: SkillCategoryProps) {
    return (
        <div className={`${styles.category} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={baseDelay + index * 100}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { skills } = portfolioData;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className={styles.section}
            aria-label="Skills"
        >
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Expertise</h2>
                    <p>Technologies and tools I work with to bring ideas to life</p>
                </div>

                <div className={styles.categoriesGrid}>
                    <SkillCategory
                        title="Frontend Development"
                        skills={skills.frontend}
                        isVisible={isVisible}
                        baseDelay={0}
                    />
                    <SkillCategory
                        title="Backend Development"
                        skills={skills.backend}
                        isVisible={isVisible}
                        baseDelay={200}
                    />
                    <SkillCategory
                        title="Tools & DevOps"
                        skills={skills.tools}
                        isVisible={isVisible}
                        baseDelay={400}
                    />
                </div>
            </div>
        </section>
    );
}
