
import './Resume.css'; // Add this file in your styles

import profilePic  from "/src/assets/profile1.jpeg";

function Resume() {
    return (
        <div className="resume-container">
            <div className="left-column">
                <div id="image" style={{ backgroundImage: `url(${profilePic})` }}></div>
                <h2>Personal Info</h2>
                <ul>
                    <li><i className="bi bi-phone"></i> +94 71 3085242</li>
                    <li><i className="bi bi-whatsapp"></i> +94 71 3085242</li>
                    <li><i className="bi bi-envelope"></i> kushandileep12@gmail.com</li>
                </ul>

                <hr />
                <div className="section">
                    <span className="title">SKILLS</span>
                    <div id="skills-container">
                        {/* Skills List */}
                        <Skills />
                    </div>
                </div>
            </div>

            <div className="right-column">
                <h1>KUSHAN DILEEP SIRIWARDHANA</h1>
                <h3>ASSOCIATE SOFTWARE ENGINEER</h3>
                <p>Passionate software engineer with expertise in Java, Jakarta EE, Spring Boot, and full-stack development. Skilled in building scalable web applications, RESTful APIs, and optimizing performance with multithreading and database management.</p>

                <div className="section">
                    <span className="title">PROJECTS</span>
                    <hr />
                    <Projects />
                </div>

                <span className="title">EXPERIENCE</span>
                <hr />
                <Experience />

                <div className="section">
                    <span className="title">HIGHER EDUCATION</span>
                    <hr />
                    <div>
                        <span className="sub-title">BACHELOR OF SCIENCE (HONS) IN ENGINEERING</span>
                        <br /> Faculty of Engineering <br /> SLTC University <br /> Sri Lanka
                    </div>
                </div>

                <div className="section">
                    <div className="title">Referees</div>
                    <hr />
                    <div id="referees-container">
                        <div><b>Referee 1 Name</b>,<br /> Title <br /> Organization <br /> Location, Country <br /> xx xxx xxxx <br /><a href="mailto:referee1@example.com">referee1@example.com</a></div>
                        <div><b>Referee 2 Name</b>,<br /> Title <br /> Organization <br /> Location, Country <br /> xx xxx xxxx <br /><a href="mailto:referee2@example.com">referee2@example.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Skill Component
function Skills() {
    return (
        <>
            <div className="skill-category">Programming Languages</div>
            <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS/SASS</li>
            </ul>

            <div className="skill-category">Backend Development</div>
            <ul>
                <li>Spring Boot</li>
                <li>Jakarta Servlet</li>
                <li>Hibernate</li>
                <li>JPA</li>
                <li>RESTful APIs</li>
                <li>Apache Tomcat</li>
            </ul>

            <div className="skill-category">Frontend Development</div>
            <ul>
                <li>React.js</li>
                <li>Angular</li>
            </ul>

            <div className="skill-category">Full Stack & Server-side Development</div>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>

            <div className="skill-category">Databases</div>
            <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
            </ul>
        </>
    );
}

// Project Component
function Projects() {
    return (
        <>
            <Project
                title="Remote Desktop Client"
                link="https://github.com/kushansm/Remote-Desktop-Client"
                technologies="Java, JavaFX, Networking, Multi-threading, Sockets"
                description="A feature-rich remote desktop client that enables secure file transfers, real-time video/audio calls, text messaging, and remote desktop control."
            />
            <Project
                title="DEP Browser"
                link="https://github.com/kushansm/Dep-Browser"
                technologies="Java, JavaFX, WebView, UI/UX Design"
                description="A custom-built web browser with multi-tab support, browsing history, and a responsive UI."
            />
            <Project
                title="Simple Connection Pool"
                link="https://github.com/kushansm/connection-pool"
                technologies="Java, JDBC, Servlets, Multi-threading"
                description="A high-performance connection pooling system to efficiently manage database connections."
            />
        </>
    );
}

// Project Item Component
function Project({ title, link, technologies, description }: { title: string; link: string; technologies: string; description: string; }) {
    return (
        <div className="project-details">
            <span className="sub-title">{title}</span>
            <div className="git-link">Link: <a href={link}>GitHub Repository</a></div>
            <span className="paragraph">
        <strong>Technologies:</strong> {technologies} <br />
                {description}
      </span>
        </div>
    );
}

// Experience Component
function Experience() {
    return (
        <div className="experience-details">
            <span className="sub-title">Associate Software Engineer</span>
            <div className="company-name">Company: <strong>IJSE</strong> | <i>September 2024 - Present</i></div>
            <span className="paragraph">
        Working on Java-based enterprise applications, implementing Jakarta EE with JSF, JPA, and JAX-RS.
      </span>
        </div>
    );
}

export default Resume;
