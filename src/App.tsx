import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

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
            <nav className="flex bg-gray-800 text-white">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex-1 text-center py-5 transition duration-300 font-semibold
                         ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                        `flex-1 text-center py-5 transition duration-300 font-semibold
                         ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                    }
                >
                    Resume
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `flex-1 text-center py-5 transition duration-300 font-semibold
                         ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        `flex-1 text-center py-5 transition duration-300 font-semibold
                         ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                    }
                >
                    Skills
                </NavLink>
                <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                        `flex-1 text-center py-5 transition duration-300 font-semibold
                         ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
                    }
                >
                    Contacts
                </NavLink>
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
