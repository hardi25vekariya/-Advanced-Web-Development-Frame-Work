import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

// Navigation Bar Component - route-based navigation with mobile menu and theme toggle
function Navbar() {
  // State to track mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Navigation items array
  const navItems = [
    { label: "Home", path: "/", end: true },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Education", path: "/education" },
    { label: "Certifications", path: "/certifications" },
    { label: "Contact", path: "/contact" },
  ];

  // Close the mobile menu after navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link className="navbar-logo" to="/" onClick={handleNavClick}>
          <span className="logo-text">HV</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
              onClick={handleNavClick}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDarkMode((currentMode) => !currentMode)}
            aria-pressed={isDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {isDarkMode ? "☾" : "☀"}
            </span>
            <span className="theme-toggle-text">
              {isDarkMode ? "Dark" : "Light"}
            </span>
          </button>
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
              <NavLink
                key={item.label}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `mobile-nav-link${isActive ? " active" : ""}`
                }
                onClick={handleNavClick}
              >
                {item.label}
              </NavLink>
            ))}

            <button
              type="button"
              className="theme-toggle theme-toggle-mobile"
              onClick={() => setIsDarkMode((currentMode) => !currentMode)}
              aria-pressed={isDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="theme-toggle-icon" aria-hidden="true">
                {isDarkMode ? "☾" : "☀"}
              </span>
              <span className="theme-toggle-text">
                {isDarkMode ? "Dark" : "Light"}
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;