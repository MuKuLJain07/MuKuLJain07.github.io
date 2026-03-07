import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="portfolio-layout">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title">Hello, I'm a Full-Stack Developer.</h1>
          <p className="subtitle">
            Specializing in scalable web applications, intuitive UI/UX design, and streamlined DevOps practices.
          </p>
          <a href="#contact" className="cta-button">Let's Connect</a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Technical Arsenal</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend & Design</h3>
            <p>React, JavaScript, HTML5, CSS3, UI/UX Design</p>
          </div>
          <div className="skill-category">
            <h3>Backend & Database</h3>
            <p>Node.js, Express.js, MongoDB</p>
          </div>
          <div className="skill-category">
            <h3>Cloud & Architecture</h3>
            <p>AWS, GitHub Actions (CI/CD), RESTful APIs</p>
          </div>
          <div className="skill-category">
            <h3>Integrations</h3>
            <p>Payment Gateways (Razorpay), Authentication</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Featured Work</h2>
        <div className="projects-grid">
          
          {/* Featured Project Card */}
          <div className="project-card">
            <div className="project-header">
              <h3>TradeMetrics</h3>
              <span className="project-status">In Development</span>
            </div>
            <p className="project-description">
              A comprehensive tradelogging platform designed with a sleek dark theme and an emerald green finish. 
              Built to handle complex data processing, secure user transactions, and seamless cloud deployment.
            </p>
            <div className="tech-tags">
              <span className="tag">MERN Stack</span>
              <span className="tag">AWS</span>
              <span className="tag">Razorpay</span>
            </div>
            <div className="project-links">
              <a href="#" className="link">View Source</a>
              <a href="#" className="link">Live Demo</a>
            </div>
          </div>

          {/* Placeholder for future projects */}
          <div className="project-card">
            <div className="project-header">
              <h3>Project Two</h3>
            </div>
            <p className="project-description">
              A brief description of another application, highlighting the problem it solves and the tech stack utilized.
            </p>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">API</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Get In Touch</h2>
        <p>Currently open to new opportunities and collaborations. Feel free to reach out!</p>
        <a href="mailto:your.email@example.com" className="email-link">your.email@example.com</a>
      </section>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. Built with React & GitHub Actions.</p>
      </footer>
    </div>
  );
}

export default App;
