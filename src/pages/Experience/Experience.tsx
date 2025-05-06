import ExperienceCard from './ExperienceCard';
import ijseLogo from '/src/assets/ijse.png';
import sltcLogo from '/src/assets/sltc.png';
import Particles from './Particles';

interface ExperienceCardProps {
    logo: string;
    title: string;
    company: string;
    duration: string;
    description: string[];
    align: 'left' | 'right';
}

const experiences: ExperienceCardProps[] = [
    {
        logo: sltcLogo,
        title: 'BSc (Hons) in Engineering',
        company: 'SLTC',
        duration: '2018 - 2022',
        description: [
            'Successfully completed a Bachelor of Science (Hons) in Engineering.',
            'Studied core engineering subjects with hands-on project work.',
            'Built a solid foundation in problem-solving and critical thinking.'
        ],
        align: 'left'
    },
    {
        logo: ijseLogo,
        title: 'Direct Entry Program (Full-Stack)',
        company: 'IJSE',
        duration: '2023 - 2024',
        description: [
            'Currently enrolled in the Direct Entry Program at IJSE to specialize in full-stack development.',
            'Focusing on both frontend and backend technologies, including React.js, Angular, and Spring Boot.',
            'Gaining practical experience by working on live projects with industry professionals.',
            'Learning cloud computing, containerization using Docker, and deployment on platforms like Firebase.',
            'Developing skills in DevOps practices, software architecture, and system design.',
            'In-depth focus on real-world software engineering practices to build production-grade applications.'
        ],
        align: 'right'
    },
    {
        logo: ijseLogo,
        title: 'Trainee Software Engineer',
        company: 'IJSE',
        duration: 'May 2024 - Present',
        description: [
            'Developing and maintaining web applications using React.js, Angular, and related technologies.',
            'Implementing responsive designs and ensuring cross-browser compatibility.',
            'Building and maintaining backend services using Spring Boot, Java, and Jakarta EE.',
            'Hands-on experience with the MERN stack for full-stack development.',
            'Collaborating with designers, product managers, and other developers to deliver high-quality software.',
            'Working with databases such as MySQL, PostgreSQL, and MongoDB.',
            'Deploying applications using Docker and Firebase.'
        ],
        align: 'left'
    }
];

function Experience() {
    return (
        <div className="relative mt-0 px-4 bg-black py-1 overflow-hidden">
            {/* Splash Cursor Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Particles />
            </div>

            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full z-10" />

            {experiences.map((exp, idx) => (
                <div
                    key={idx}
                    className={`relative flex items-center my-24 z-20 ${
                        exp.align === 'left' ? 'justify-start' : 'justify-end'
                    }`}
                >
                    {/* Left side card */}
                    {exp.align === 'left' && (
                        <>
                            <div className="w-1/2 flex justify-end pr-10 animate-slide-in-left">
                                <ExperienceCard {...exp} />
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow flex items-center justify-center z-30">
                                <img src={exp.logo} alt="logo" className="w-10 h-10 object-contain" />
                            </div>
                            <div className="w-1/2" />
                        </>
                    )}

                    {/* Right side card */}
                    {exp.align === 'right' && (
                        <>
                            <div className="w-1/2" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow flex items-center justify-center z-30">
                                <img src={exp.logo} alt="logo" className="w-10 h-10 object-contain" />
                            </div>
                            <div className="w-1/2 flex justify-start pl-10 animate-slide-in-right">
                                <ExperienceCard {...exp} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Experience;
