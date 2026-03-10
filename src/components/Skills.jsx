import { useEffect, useRef } from "react";
import { Cpu, Globe, Wrench, Heart, Award, Star } from "lucide-react";
import { FaJs, FaPython, FaJava, FaGithub, FaHtml5, FaServer, FaAndroid, FaGitAlt, FaReact } from 'react-icons/fa';
import { SiMongodb, SiSpringboot, SiExpress, SiMysql } from 'react-icons/si';
import "./Skills.css";

const technical = [
  { name: "JavaScript", icon: <FaJs />, color: "yellow" },
  { name: "React.js", icon: <FaReact />, color: "cyan" },
  { name: "Node.js / Express", icon: <SiExpress />, color: "green" },
  { name: "Java", icon: <FaJava />, color: "orange" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "green" },
  { name: "Python", icon: <FaPython />, color: "blue" },
  { name: "MongoDB", icon: <SiMongodb />, color: "green" },
  { name: "SQL / MySQL", icon: <SiMysql />, color: "blue" },
  { name: "HTML / CSS", icon: <FaHtml5 />, color: "orange" },
  { name: "Android Dev", icon: <FaAndroid />, color: "green" },
  { name: "OOP Concepts", icon: <FaServer />, color: "indigo" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, color: "orange" },
  { name: "GitHub", icon: <FaGithub />, color: "white" },
  { name: "Android Studio", icon: <FaAndroid />, color: "green" },
  { name: "XAMPP", icon: <FaServer />, color: "indigo" },
];

const softSkills = ["Communication", "Problem-Solving", "Attention to Detail", "Adaptability", "Creativity", "Team Collaboration"];

const languages = [
  { name: "English", level: "Fluent", percent: 90 },
  { name: "Japanese", level: "N5 Beginner", percent: 20 },
];

const certifications = [
  { name: "Python Development Intern", issuer: "OctaNet Services", year: "2024", icon: "🏆" },
  { name: "GitHub Fundamentals", issuer: "Various Projects", year: "Ongoing", icon: "🎓" },
  { name: "QA Analyst", issuer: "Training Program", year: "2023", icon: "✅" },
];

const colorMap = {
  yellow:  { bg: "rgba(234,179,8,0.12)",   color: "#eab308", border: "rgba(234,179,8,0.3)" },
  cyan:    { bg: "rgba(6,182,212,0.12)",   color: "#06b6d4", border: "rgba(6,182,212,0.3)" },
  green:   { bg: "rgba(16,185,129,0.12)",  color: "#10b981", border: "rgba(16,185,129,0.3)" },
  orange:  { bg: "rgba(249,115,22,0.12)",  color: "#f97316", border: "rgba(249,115,22,0.3)" },
  blue:    { bg: "rgba(59,130,246,0.12)",  color: "#3b82f6", border: "rgba(59,130,246,0.3)" },
  indigo:  { bg: "rgba(99,102,241,0.12)",  color: "#818cf8", border: "rgba(99,102,241,0.3)" },
  white:   { bg: "rgba(255,255,255,0.07)", color: "#e2e8f0", border: "rgba(255,255,255,0.15)" },
};

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">
            <Star size={14} />
            <span>Skills</span>
          </div>
          <h2 className="section-title">My Expertise</h2>
          <div className="gradient-line"></div>
          <p className="section-subtitle">Technologies, tools, and soft skills I bring to the table.</p>
        </div>

        {/* Technical Skills */}
        <div className="skills-block reveal">
          <h3 className="skills-block-title"><Cpu size={20} /> Technical Skills</h3>
          <div className="skill-icon-grid">
            {technical.map((s, i) => {
              const c = colorMap[s.color];
              return (
                <div
                  key={s.name}
                  className="skill-icon-card"
                  style={{
                    "--skill-bg": c.bg,
                    "--skill-color": c.color,
                    "--skill-border": c.border,
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  <div className="skill-icon-box">{s.icon}</div>
                  <span className="skill-icon-name">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills-two-col">
          {/* Tools */}
          <div className="skills-block reveal">
            <h3 className="skills-block-title"><Wrench size={20} /> Developer Tools</h3>
            <div className="skill-icon-grid tool-grid">
              {tools.map((t, i) => {
                const c = colorMap[t.color];
                return (
                  <div
                    key={t.name}
                    className="skill-icon-card"
                    style={{
                      "--skill-bg": c.bg,
                      "--skill-color": c.color,
                      "--skill-border": c.border,
                      animationDelay: `${i * 0.07}s`,
                    }}
                  >
                    <div className="skill-icon-box">{t.icon}</div>
                    <span className="skill-icon-name">{t.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div className="skills-block reveal">
            <h3 className="skills-block-title"><Globe size={20} /> Languages</h3>
            <div className="language-list">
              {languages.map(l => (
                <div key={l.name} className="lang-item">
                  <div className="lang-header">
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                  <div className="lang-bar">
                    <div className="lang-fill" style={{ "--pct": `${l.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-two-col">
          {/* Soft Skills */}
          <div className="skills-block reveal">
            <h3 className="skills-block-title"><Heart size={20} /> Soft Skills</h3>
            <div className="soft-skills-cloud">
              {softSkills.map(s => (
                <span key={s} className="soft-chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="skills-block reveal">
            <h3 className="skills-block-title"><Award size={20} /> Certifications</h3>
            <div className="cert-list">
              {certifications.map(c => (
                <div key={c.name} className="cert-item glass-card">
                  <span className="cert-icon">{c.icon}</span>
                  <div>
                    <p className="cert-name">{c.name}</p>
                    <p className="cert-meta">{c.issuer} · {c.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
