import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/ContactSection';
import ChatWidget from '@/components/ChatWidget';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
    return (
        <>
            <FloatingParticles />
            <Navigation />
            <main id="main-content">
                <HeroSection />
                <SkillsSection />
                <CertificationsSection />
                <BlogsSection />
                <ContactSection />
            </main>
            <ChatWidget />
        </>
    );
}

