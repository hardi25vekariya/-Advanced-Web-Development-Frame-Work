import "./App.css";
import { useRef } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Main App Component
function App() {
  // Create refs for smooth scrolling to each section
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll smoothly to a section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app">
      {/* Navbar - Fixed at top with scroll functionality */}
      <Navbar scrollToSection={scrollToSection} refs={{ headerRef, aboutRef, skillsRef, projectsRef, educationRef, certificationsRef, contactRef }} />

      {/* Hero/Header Section */}
      <div ref={headerRef}>
        <Header />
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        <Skills />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      {/* Education Section */}
      <div ref={educationRef}>
        <Education />
      </div>

      {/* Certifications Section */}
      <div ref={certificationsRef}>
        <Certifications />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;