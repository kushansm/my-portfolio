import './Skills.css';

function Skills() {
    return (
        <div className="p-6">


            <div id="skills-container" className="flex flex-col items-center gap-8">

                {/* Programming Languages */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Programming Languages</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS/SASS</li>
                    </ul>
                </div>

                {/* Backend Development */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Backend Development</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>Spring Boot</li>
                        <li>Jakarta Servlet</li>
                        <li>JDBC</li>
                        <li>Hibernate</li>
                        <li>JPA</li>
                        <li>RESTful APIs</li>
                        <li>Apache Tomcat</li>
                    </ul>
                </div>

                {/* Frontend Development */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Frontend Development</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>React.js</li>
                        <li>Angular</li>
                        <li>JavaFX</li>
                    </ul>
                </div>

                {/* Full Stack & Server-side Development */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Full Stack & Server-side Development</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>Node.js</li>
                        <li>Express.js</li>
                    </ul>
                </div>

                {/* Databases */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Databases</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                        <li>Firestore</li>
                    </ul>
                </div>

                {/* Version Control & DevOps */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Version Control & DevOps</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>Git</li>
                        <li>Git Flow</li>
                        <li>Docker</li>
                    </ul>
                </div>

                {/* Others */}
                <div>
                    <h2 className="font-bold text-lg mb-2">Other</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-sm">
                        <li>Web APIs</li>
                        <li>Microservices</li>
                        <li>Multithreading</li>
                        <li>Concurrency Programming</li>
                        <li>Regex</li>
                        <li>I/O and Networking</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Skills;
