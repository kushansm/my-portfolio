import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import letterk  from "/src/assets/letter-k.png";


// Importing pages
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contacts from './pages/Contacts/Contacts';

function App() {
    return (
        <Router>
            {/* Navigation Bar */}
            <nav className="flex items-center justify-between bg-gray-900 text-white py-4 px-8 ">
                {/* Left Side: Logo + Title */}
                <div className="flex items-center gap-3">
                    <img src={letterk} className="w-10 h-10 object-contain" alt="K" />
                    <span className="text-lg font-bold">
                     Kushan | <span className="text-cyan-400">Software Engineer</span>
                    </span>
                </div>

                {/* Right Side: Nav Links */}
                <div className="flex gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 transition duration-300 font-semibold rounded 
                 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            `px-4 py-2 transition duration-300 font-semibold rounded 
                 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                        }
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `px-4 py-2 transition duration-300 font-semibold rounded 
                 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `px-4 py-2 transition duration-300 font-semibold rounded 
                 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                        }
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            `px-4 py-2 transition duration-300 font-semibold rounded 
                 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                        }
                    >
                        Contacts
                    </NavLink>
                </div>
            </nav>



            {/* Page Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App;
