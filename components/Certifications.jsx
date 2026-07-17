// Certifications Section Component
// Displays certificates and achievements

function Certifications() {
  // Array of certifications
  const certificationsData = [
  {
    id: 1,
    name: "Introduction to Java",
    issuer: "Coursera",
    date: "2025",
    icon: "☕"
  },
  {
    id: 2,
    name: "Java Programming",
    issuer: "Coursera",
    date: "2025",
    icon: "💻"
  },
  {
    id: 3,
    name: "JObject-Oriented Hierarchies in Java",
    issuer: "Coursera",
    date: "2025",
    icon: "🧩"
  },
  {
    id: 4,
    name: " Introduction to Object-Oriented Programming with Java",
    issuer: "Coursera",
    date: "2025",
    icon: "🚀"
  },
  {
    id: 5,
    name: "HTML, CSS & JavaScript",
    issuer: "Coursera",
    date: "2025",
    icon: "🌐"
  },
  {
    id: 6,
    name: "JavaScript Programming",
    issuer: "Coursera",
    date: "2025",
    icon: "⚡"
  },
  {
    id: 7,
    name: "DataQuest Hackathon",
    issuer: "DataQuest",
    date: "2025",
    icon: "🏆"
  },
  {
    id: 8,
    name: "NPTEL Examination",
    issuer: "NPTEL",
    date: "2025",
    icon: "🎓"
  },
  {
    id: 9,
    name: "Smart India Hackathon Volunteer",
    issuer: "SIH",
    date: "2025",
    icon: "🤝"
  },
  {
    id: 10,
    name: "AWS Cloud Foundation",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: "☁️"
  },
  
];

  return (
    <section className="certifications-section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">Certifications & <span className="highlight">Achievements</span></h2>
          <div className="title-underline"></div>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="certification-card">
              {/* Icon */}
              <div className="cert-icon">{cert.icon}</div>

              {/* Content */}
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">📅 {cert.date}</p>

              {/* Verify Button */}
              <button className="cert-verify-btn">Verify</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
