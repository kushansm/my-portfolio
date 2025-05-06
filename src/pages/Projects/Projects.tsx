import ProjectCard from './ProjectCard.tsx';
import googleIcon from '/src/assets/expieience-img/google.png';
import remoteIcon from '/src/assets/expieience-img/Remote-Desktop-Client.png';
import browserIcon from '/src/assets/expieience-img/Dep-Browser.jpg';
import poolIcon from '/src/assets/expieience-img/connection-pool.png';
import './Projects.css';

function Projects() {
    return (
        <div className="p-12 bg-black min-h-screen">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
                {/* Project 1 */}
                <ProjectCard
                    iconSrc={remoteIcon}
                    title="Remote Desktop Client"
                    description="A feature-rich remote desktop client that enables secure file transfers, real-time video/audio calls, text messaging, and remote desktop control."
                    techStack={["Java", "JavaFX", "Networking", "Multi-threading", "Sockets"]}
                    link="https://github.com/kushansm/Remote-Desktop-Client"
                />

                {/* Project 2 */}
                <ProjectCard
                    iconSrc={browserIcon}
                    title="DEP Browser"
                    description="A custom-built web browser with multi-tab support, browsing history, and a responsive UI."
                    techStack={["Java", "JavaFX", "WebView", "UI/UX Design"]}
                    link="https://github.com/kushansm/Dep-Browser"
                />

                {/* Project 3 */}
                <ProjectCard
                    iconSrc={poolIcon}
                    title="Simple Connection Pool"
                    description="A high-performance connection pooling system to manage database connections efficiently for Java web applications."
                    techStack={["Java", "JDBC", "Servlets", "Multi-threading"]}
                    link="https://github.com/kushansm/connection-pool"
                />

                {/* Project 4 */}
                <ProjectCard
                    iconSrc={googleIcon}
                    title="Google Clone"
                    description="A modern, responsive Google search clone with an intuitive UI replicating Google's homepage."
                    techStack={["HTML", "CSS", "JavaScript"]}
                    link="https://github.com/kushansm/google-clone"
                />
            </div>
        </div>
    );
}

export default Projects;
