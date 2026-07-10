import React from "react";
import "./Header.css";
import profileImg from "../assets/profile.jpg";

function Header() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <h1 className="hero-title">
            Hi, I'm <span>Hardi Vekariya</span>
          </h1>

          <h3 className="hero-subtitle">
            React Developer | Frontend Developer | Data Analyst
          </h3>

          <p className="hero-description">
            I'm a passionate Frontend Developer who enjoys creating beautiful,
            responsive and modern websites using React JS and JavaScript.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              Download Resume
            </button>

            <button className="btn btn-secondary">
              Contact Me
            </button>
          </div>

          <div className="hero-social">
            <a href="/">GitHub</a>
            <a href="/">LinkedIn</a>
            <a href="/">Instagram</a>
          </div>

        </div>

        {/* Right Side */}
        <div className="hero-image">

          <div className="profile-frame">

            <div className="glass-card">

              <img
                src={profileImg}
                alt="Profile"
                className="profile-img"
              />

            </div>

            

          </div>

        </div>

      </div>
    </section>
  );
}

export default Header;