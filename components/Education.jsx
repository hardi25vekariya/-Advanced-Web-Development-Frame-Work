// Education Section Component
// Displays education timeline with schools, degrees, and dates

function Education() {
  // Array of education entries
  const educationData = [
    {
      id: 1,
      school: "Charotar University of Science and Technology",
      degree: "Bachelor of Technology in Information Technology",
      field: "Information Technology",
      year: "2024 - 2028",
      description: "Focused on web development,data analytics, data structures, and algorithms."
    },
    {
      id: 2,
       school: "High School",
      degree: "Senior Secondary Certificate",
      field: "Science",
      year: "2022 - 2024",
      description: "Strong foundation in mathematics, physics, and chemistry."
     },
    
  ];

  return (
    <section className="education-section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">My <span className="highlight">Education</span></h2>
          <div className="title-underline"></div>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="education-item">
              {/* Timeline Circle */}
              <div className="timeline-dot"></div>

              {/* Education Card */}
              <div className="education-card glassmorphism">
                {/* Year Badge */}
                <span className="year-badge">{edu.year}</span>

                {/* Education Content */}
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-field">📚 {edu.field}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
