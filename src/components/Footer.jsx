import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from 'lucide-react';
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/Ayush-wattakhare", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ayush-wattakhare-pw2001", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:Avattakhare@gmail.com", label: "Email" },
];

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Code2 size={22} />
              <span>Ayush Wattakhare</span>
            </div>
            <p className="footer-tagline">
              Full Stack Developer crafting scalable, modern web applications with the MERN stack, Java, and Python.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="footer-social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link" onClick={e => {
                    e.preventDefault();
                    const el = document.querySelector(l.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-list">
              <a href="mailto:Avattakhare@gmail.com" className="footer-contact-item">
                <Mail size={14} />
                <span>Avattakhare@gmail.com</span>
              </a>

              <a
                href="/resume.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-resume-btn"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 Ayush Wattakhare. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <Heart size={13} className="heart" /> using React
          </p>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
