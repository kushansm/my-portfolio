import './Home.css';
import Aurora from "./Aurora.tsx";
import profile from "/src/assets/profile2.jpeg";
import Contacts from "../Contacts/Contacts.tsx";
import Skills from "../Skills/Skills.tsx";
import Projects from "../Projects/Projects.tsx";
import Services from "../Services/Services.tsx";
import Experience from "../Experience/Experience.tsx";
import { FloatingSocialMenu } from '../FloatingSocialMenu/FloatingSocialMenu.tsx';
import BuyMeCoffeeButton from "../FloatingSocialMenu/BuyMeCoffeeButton.tsx";

function Home() {
    return (
        <>
            <div className="relative w-full min-h-screen overflow-hidden text-white">
                {/* Animated Background */}
                <div className="home-background absolute inset-0 z-0">
                    <Aurora
                        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={0.5}
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 gap-6 relative z-10">
                    {/* Left Column */}
                    <div className="md:w-1/2 h-full flex flex-col items-center justify-center gap-6 md:gap-12">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-6xl font-extrabold text-cyan-400 mb-4 tracking-wide">Hi, I'm Kushan</h1>
                            <h2 className="text-2xl md:text-3xl mb-4 font-medium leading-snug">
                                I'm a software engineer passionate about Web App Development,
                                Business Growth, and Research.
                            </h2>
                            <p className="italic mb-8 text-lg text-white/90">
                                "Always make sense with engineering."
                            </p>
                        </div>

                        {/* Profile Links Section */}
                        <div className="flex flex-1 flex-col items-center md:items-start justify-center mt-6">
                            <h3 className="text-xl font-semibold mb-4">Checkout My Profile</h3>
                            <div className="flex gap-6">
                                <a
                                    href="https://github.com/kushansm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <img
                                        src="/src/assets/icons-github.gif"
                                        alt="GitHub"
                                        className="w-16 h-16"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kushan-siriwardhana-a07131167/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <img
                                        src="/src/assets/icons-linkedin.gif"
                                        alt="LinkedIn"
                                        className="w-16 h-16"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:w-1/2 flex items-center justify-center p-4">
                        <div className="profile-circle">
                            <img
                                src={profile}
                                alt="Kushan's Profile"
                                className="w-80 h-110 object-cover shadow-lg transition-transform duration-300 hover:scale-110"
                            />
                            <div className="orbit"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Social Icons FIRST */}
                <FloatingSocialMenu />

                {/* Buy Me a Coffee Button SECOND */}
                <BuyMeCoffeeButton />
            </div>

            {/* Sections */}
            <Services />
            <Experience />
            <Skills />
            <Projects />
            <Contacts />
        </>
    );
}

export default Home;
