import './Skills.css';
import { useRef } from 'react';
import Particles from './Particles';

function TechIcon({ src, alt }: { src: string; alt: string }) {
    const iconRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const icon = iconRef.current;
        if (!icon) return;
        const rect = icon.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / 10).toFixed(2);
        const rotateY = (x / 10).toFixed(2);

        icon.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    };

    const handleMouseLeave = () => {
        const icon = iconRef.current;
        if (!icon) return;
        icon.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    return (
        <div
            className="tech-icon-container animate-zoom"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={iconRef}
        >
            <img src={src} alt={alt} className="tech-icon" />
        </div>
    );
}

function Skills() {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'relative',
                backgroundColor: '#000',
                overflow: 'hidden',
                padding: '2rem',
            }}
        >
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center gap-16 text-white overflow-y-auto">
                {/* Languages */}
                <div className="flex flex-col items-center w-full">
                    <h2 className="section-title">Languages</h2>
                    <div className="flex flex-wrap gap-8 justify-center px-4">
                        <TechIcon src="/src/assets/tech-stack/javascript.png" alt="JavaScript" />
                        <TechIcon src="/src/assets/tech-stack/java1.png" alt="Java" />
                        <TechIcon src="/src/assets/tech-stack/ts.png" alt="TypeScript" />
                        <TechIcon src="/src/assets/tech-stack/html.png" alt="HTML" />
                        <TechIcon src="/src/assets/tech-stack/css.png" alt="CSS" />
                    </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="flex flex-col items-center w-full">
                    <h2 className="section-title">Frameworks & Libraries</h2>
                    <div className="flex flex-wrap gap-8 justify-center px-4">
                        <TechIcon src="/src/assets/tech-stack/react.png" alt="React" />
                        <TechIcon src="/src/assets/tech-stack/angular.png" alt="Angular" />
                        <TechIcon src="/src/assets/tech-stack/spring.svg" alt="Spring Framework" />
                        <TechIcon src="/src/assets/tech-stack/node.png" alt="Node.js" />
                        <TechIcon src="/src/assets/tech-stack/bootstrap.png" alt="Bootstrap" />
                        <TechIcon src="/src/assets/tech-stack/tailwind.png" alt="Tailwind CSS" />
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className="flex flex-col items-center w-full">
                    <h2 className="section-title">Tools & Platforms</h2>
                    <div className="flex flex-wrap gap-8 justify-center px-4">
                        <TechIcon src="/src/assets/tech-stack/github.png" alt="GitHub" />
                        <TechIcon src="/src/assets/tech-stack/docker.png" alt="Docker" />
                    </div>
                </div>

                {/* Databases */}
                <div className="flex flex-col items-center w-full">
                    <h2 className="section-title">Databases</h2>
                    <div className="flex flex-wrap gap-8 justify-center px-4">
                        <TechIcon src="/src/assets/tech-stack/mysql.png" alt="MySQL" />
                        <TechIcon src="/src/assets/tech-stack/mongo.png" alt="MongoDB" />
                        <TechIcon src="/src/assets/tech-stack/postgress.png" alt="PostgreSQL" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
