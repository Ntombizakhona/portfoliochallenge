'use client';

import styles from './FloatingParticles.module.css';

export default function FloatingParticles() {
    // Generate particles with random properties
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 20 + 5,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 20 + 15,
        shape: Math.random() > 0.5 ? 'circle' : 'square',
    }));

    return (
        <div className={styles.container} aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className={`${styles.particle} ${p.shape === 'circle' ? styles.circle : styles.square}`}
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.left}%`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}
