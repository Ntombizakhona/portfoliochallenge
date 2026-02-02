'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className={styles.container}>
                <a href="#home" className={styles.logo} aria-label="Go to homepage">
                    <span className={styles.logoText}>NM</span>
                </a>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks} role="menubar">
                    {navLinks.map((link) => (
                        <li key={link.name} role="none">
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                                role="menuitem"
                                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <ThemeToggle />

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <div
                    className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
                    aria-hidden={!isMobileMenuOpen}
                >
                    <ul role="menu">
                        {navLinks.map((link) => (
                            <li key={link.name} role="none">
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={styles.mobileNavLink}
                                    role="menuitem"
                                    tabIndex={isMobileMenuOpen ? 0 : -1}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
