// Skills Section Component
// Displays colorful animated skill cards with icons
function Skills() {
  // Array of skills with icons and colors
  const skillsData = [
    { name: "HTML", icon: "🏗️", color: "#FF6B6B" },
    { name: "CSS", icon: "🎨", color: "#4ECDC4" },
    { name: "JavaScript", icon: "⚡", color: "#FFE66D" },
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "Data Analytics", icon: "📊", color: "#FF6B9D" },
    { name: "Git", icon: "🔧", color: "#F1502F" },
    { name: "Responsive Design", icon: "📱", color: "#00D4FF" },
  ];

  return (
    <section className="skills-section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <div className="title-underline"></div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card" style={{ "--color": skill.color }}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-progress-bar">
                <div className="skill-progress"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;