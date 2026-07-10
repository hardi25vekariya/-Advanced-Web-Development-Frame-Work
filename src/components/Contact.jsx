// Contact Section Component
// Displays contact information and contact form

function Contact() {
  // Contact information
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hardi@example.com",
      link: "mailto:hardi@example.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 (555) 123-4567",
      link: "tel:+915551234567"
    },
    {
      icon: "📍",
      label: "Location",
      value: "City, Country",
      link: "#"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/hardi",
      link: "#"
    }
  ];

  return (
    <section className="contact-section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
          <div className="title-underline"></div>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Left - Contact Info */}
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="contact-info-card glassmorphism"
              >
                <div className="contact-icon">{info.icon}</div>
                <h3 className="contact-label">{info.label}</h3>
                <p className="contact-value">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Right - Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form glassmorphism">
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary contact-btn">
                Send Message 📤
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
