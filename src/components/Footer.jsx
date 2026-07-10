// Footer Component
// Displays social media links and copyright information
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="footer-social">
          <a href="#" className="footer-social-link" aria-label="GitHub">
            <span className="social-icon">🔗</span> GitHub
          </a>
          <a href="#" className="footer-social-link" aria-label="LinkedIn">
            <span className="social-icon">💼</span> LinkedIn
          </a>
          
          <a href="#" className="footer-social-link" aria-label="Email">
            <span className="social-icon">📧</span> Email
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {currentYear} Hardi Vekariya. All rights reserved.</p>
          <p>Built with <span className="heart">❤️</span> using React & CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;