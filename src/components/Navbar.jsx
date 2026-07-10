import { useState } from "react";

// Navigation Bar Component - Fixed at top with smooth scrolling
function Navbar({ scrollToSection, refs }) {
  // State to track mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items array
  const navItems = [
    { label: "Home", ref: refs.headerRef },
    { label: "About", ref: refs.aboutRef },
    { label: "Skills", ref: refs.skillsRef },
    { label: "Projects", ref: refs.projectsRef },
    { label: "Education", ref: refs.educationRef },
    { label: "Certifications", ref: refs.certificationsRef },
    { label: "Contact", ref: refs.contactRef },
  ];

  // Handle nav item click
  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">HV</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-link"
              onClick={() => handleNavClick(item.ref)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="mobile-nav-link"
                onClick={() => handleNavClick(item.ref)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;