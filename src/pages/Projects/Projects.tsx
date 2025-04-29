import './Projects.css';

function Projects() {
    return (
        <div className="p-6">


            <div className="space-y-6">
                {/* Project 1 */}
                <div className="project-details">
                    <h2 className="text-xl font-semibold">Remote Desktop Client</h2>
                    <div className="git-link text-blue-500">
                        Link: <a href="https://github.com/kushansm/Remote-Desktop-Client" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                    <p className="paragraph text-sm text-gray-700 mt-2">
                        <strong>Technologies:</strong> Java, JavaFX, Networking, Multi-threading, Sockets <br />
                        A feature-rich remote desktop client that enables secure file transfers, real-time video/audio calls, text messaging, and remote desktop control. Designed for smooth performance and a seamless user experience.
                    </p>
                </div>

                {/* Project 2 */}
                <div className="project-details">
                    <h2 className="text-xl font-semibold">DEP Browser</h2>
                    <div className="git-link text-blue-500">
                        Link: <a href="https://github.com/kushansm/Dep-Browser" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                    <p className="paragraph text-sm text-gray-700 mt-2">
                        <strong>Technologies:</strong> Java, JavaFX, WebView, UI/UX Design <br />
                        A custom-built web browser with multi-tab support, browsing history, and a responsive UI. Developed using JavaFX, offering a lightweight and efficient browsing experience.
                    </p>
                </div>

                {/* Project 3 */}
                <div className="project-details">
                    <h2 className="text-xl font-semibold">Simple Connection Pool</h2>
                    <div className="git-link text-blue-500">
                        Link: <a href="https://github.com/kushansm/connection-pool" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                    <p className="paragraph text-sm text-gray-700 mt-2">
                        <strong>Technologies:</strong> Java, JDBC, Servlets, Multi-threading <br />
                        A high-performance connection pooling system to efficiently manage database connections, reducing latency and improving scalability for Java web applications.
                    </p>
                </div>

                {/* Project 4 */}
                <div className="project-details">
                    <h2 className="text-xl font-semibold">Google Clone</h2>
                    <div className="git-link text-blue-500">
                        Link: <a href="https://github.com/kushansm/google-clone" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    </div>
                    <p className="paragraph text-sm text-gray-700 mt-2">
                        <strong>Technologies:</strong> HTML, CSS, JavaScript <br />
                        A modern, responsive Google search clone with an intuitive UI, replicating the look and feel of Google's homepage while ensuring fast performance and smooth navigation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
