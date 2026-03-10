import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, Code2 } from "lucide-react";
import "./Hero.css";

const roles = ["Full Stack Developer", "MERN Stack Developer", "Java Developer", "Python Developer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(130);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setSpeed(130);
      } else {
        setText(current.substring(0, text.length - 1));
        setSpeed(60);
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <section id="home" className="hero">
      {/* Decorative floating blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true"></div>
      <div className="hero-blob hero-blob-2" aria-hidden="true"></div>
      <div className="hero-blob hero-blob-3" aria-hidden="true"></div>

      <div className="container">
        <div className={`hero-inner ${mounted ? "mounted" : ""}`}>
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Open to Work</span>
            </div>

            <h1 className="hero-greeting">
              Hi, I'm <br />
              <span className="hero-name">Ayush Wattakhare</span>
            </h1>

            <div className="hero-role-wrapper">
              <span className="role-prefix">I'm a </span>
              <span className="hero-role">{text}<span className="cursor">|</span></span>
            </div>

            <p className="hero-desc">
              Passionate Computer Application developer with expertise in MERN Stack, Java, and Python.
              I craft end-to-end digital solutions that are performant, scalable, and visually compelling.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">2</span>
                <span className="stat-label">Degrees</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">1+</span>
                <span className="stat-label">Internships</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary" onClick={e => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}>
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="/resume.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Ayush-wattakhare" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-wattakhare-pw2001" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:Avattakhare@gmail.com" className="social-btn" aria-label="Email">
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* Right — Avatar card */}
          <div className="hero-visual">
            <div className="avatar-ring">
              <div className="avatar-ring-inner">
                <div className="avatar-placeholder">
                  <Code2 size={56} strokeWidth={1.5} />
                  <span>AW</span>
                </div>
              </div>
              {/* Orbit dots */}
              <div className="orbit orbit-1">
                <div className="orbit-dot orbit-dot-java">Java</div>
              </div>
              <div className="orbit orbit-2">
                <div className="orbit-dot orbit-dot-react">React</div>
              </div>
              <div className="orbit orbit-3">
                <div className="orbit-dot orbit-dot-mongo">MongoDB</div>
              </div>
            </div>

            <div className="hero-info-card glass-card">
              <div className="info-row">
                <Mail size={14} />
                <a href="mailto:Avattakhare@gmail.com">Avattakhare@gmail.com</a>
              </div>

              <div className="info-row">
                <Linkedin size={14} />
                <a href="https://linkedin.com/in/ayush-wattakhare-pw2001" target="_blank" rel="noopener noreferrer">ayush-wattakhare-pw2001</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
