import { useState } from "react";

// Contact Section Component
// Displays contact information and contact form

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

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
      value: "Charotar University of Science and Technology",
      link: "#"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/hardi-vekariya",
      link: "https://www.linkedin.com/posts/hardi-vekariya-582518322"
    }
  ];

  const handleSubmit = (event) => {
    // We let the form submit natively via mailto:
  };

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
            <form className="contact-form glassmorphism" action="mailto:hardivekariya9@gmail.com" method="POST" encType="text/plain">
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
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
                  name="Email"
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
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <div className="contact-field-header">
                  <label htmlFor="message">Message</label>
                  <button
                    type="button"
                    className="contact-help-toggle"
                    onClick={() => setShowHelp((current) => !current)}
                  >
                    {showHelp ? "Hide help" : "Need help?"}
                  </button>
                </div>

                {showHelp && (
                  <p className="contact-help-text">
                    Share what you need, and I can reply with the next step.
                  </p>
                )}

                <textarea
                  id="message"
                  name="body"
                  rows="5"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                ></textarea>

                <div className="contact-live-meta">
                  <p className="contact-live-preview">
                    Live preview: {message || "Start typing to preview your message."}
                  </p>
                  <p className="contact-char-count">{message.length} characters</p>
                </div>
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
