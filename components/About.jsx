// About Section Component
// Displays professional introduction in a glassmorphism card
function About() {
  return (
    <section className="about-section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <div className="title-underline"></div>
        </div>

        {/* About Content */}
        <div className="about-content">
          {/* Left - Text */}
          <div className="about-text">
            <div className="about-card glassmorphism">
              <h3>Who Am I?</h3>
              <p>
                I'm Hardi Vekariya, a passionate Full Stack Developer with a strong focus on Frontend Development.
                I love creating beautiful, responsive, and user-friendly web applications.
              </p>

              <h3 style={{ marginTop: "20px" }}>What I Do</h3>
              <p>
                I specialize in building modern web applications using React, JavaScript, and HTML/CSS.
                I also have experience in data analytics and Python programming.
                My goal is to create solutions that make a difference.
              </p>

              <h3 style={{ marginTop: "20px" }}>Why Hire Me?</h3>
              <ul className="about-list">
                <li>✨ Clean and maintainable code</li>
                <li>⚡ Fast and responsive designs</li>
                <li>🎨 Creative problem-solving</li>
                <li>🚀 Always learning new technologies</li>
              </ul>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Certificates</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Internships</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;