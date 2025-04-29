import './Home.css';
import profile from "/src/assets/profile.jpeg";

function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 gap-4">
            {/* Left Column */}
            <div className="md:w-1/2 p-4 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Hi, I'm [Your Name]</h2>
                <p className="mb-4">A passionate full-stack developer focusing on modern web apps.</p>
                <h3 className="text-xl font-semibold">Core Technologies</h3>
                <ul className="list-disc list-inside mt-2 text-left">
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>MySQL / PostgreSQL</li>
                </ul>
            </div>

            {/* Right Column with Animation */}
            <div className="md:w-1/2 flex items-center justify-center relative">
                <div className="profile-circle">
                    <img src={profile} alt="Profile" className="w-40 h-40 rounded-full object-cover shadow-lg" />
                    <div className="orbit"></div>
                </div>
            </div>

        </div>
    );
}

export default Home;
