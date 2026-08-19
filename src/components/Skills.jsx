import { useEffect, useRef } from "react";
import { Cpu, Globe, Wrench, Heart, Award, Star, Layers } from "lucide-react";
import { FaJs, FaPython, FaJava, FaGithub, FaServer, FaAndroid, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiSpringboot, SiExpress, SiMysql, SiPostman, SiPostgresql, SiRazorpay } from 'react-icons/si';
import "./Skills.css";

const technical = [
  { name: "Java", icon: <FaJava />, color: "orange" },
  { name: "Python", icon: <FaPython />, color: "blue" },
  { name: "JavaScript", icon: <FaJs />, color: "yellow" },
  { name: "SQL", icon: <SiMysql />, color: "blue" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "green" },
  { name: "React.js", icon: <FaReact />, color: "cyan" },
  { name: "Node.js", icon: <FaNodeJs />, color: "green" },
  { name: "Express.js", icon: <SiExpress />, color: "white" },
  { name: "REST APIs", icon: <FaServer />, color: "indigo" },
  { name: "MySQL", icon: <SiMysql />, color: "blue" },
  { name: "MongoDB", icon: <SiMongodb />, color: "green" },
  { name: "PostgreSQL / Supabase", icon: <SiPostgresql />, color: "cyan" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, color: "orange" },
  { name: "GitHub", icon: <FaGithub />, color: "white" },
  { name: "Postman", icon: <SiPostman />, color: "orange" },
  { name: "Razorpay API", icon: <SiRazorpay />, color: "blue" },
  { name: "Android Studio", icon: <FaAndroid />, color: "green" },
  { name: "XAMPP", icon: <FaServer />, color: "indigo" },
];

const coreConcepts = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Operating Systems",
  "Software Development Lifecycle (SDLC)",
  "Database Management Systems",
  "RESTful Architecture",
];

const softSkills = [
  "Problem-Solving",
  "Communication",
  "Attention to Detail",
  "Adaptability",
  "Team Collaboration",
  "Quick Learner",
];

const languages = [
  { name: "English", level: "Fluent", percent: 95 },
  { name: "Japanese", level: "JLPT N5 (Beginner)", percent: 35 },
];

const certifications = [
  { name: "Python Developer Intern", issuer: "OctaNet Services Pvt. Ltd.", year: "2024", icon: "🏆" },
  { name: "Full Stack Development (MERN & Java)", issuer: "Academic Projects & Training", year: "2023 – 2025", icon: "🎓" },
  { name: "JLPT N5 Japanese Proficiency", issuer: "Language Study & EdTech", year: "2026", icon: "🎌" },
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
          <p className="section-subtitle">Languages, frameworks, developer tools, and core computer science fundamentals.</p>
        </div>

        {/* Technical Skills */}
        <div className="skills-block reveal">
          <h3 className="skills-block-title"><Cpu size={20} /> Languages, Frameworks & Databases</h3>
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
                    animationDelay: `${i * 0.04}s`,
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
            <h3 className="skills-block-title"><Wrench size={20} /> Developer Tools & Platforms</h3>
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
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    <div className="skill-icon-box">{t.icon}</div>
                    <span className="skill-icon-name">{t.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Concepts */}
          <div className="skills-block reveal">
            <h3 className="skills-block-title"><Layers size={20} /> Core Computer Science Concepts</h3>
            <div className="soft-skills-cloud">
              {coreConcepts.map(c => (
                <span key={c} className="soft-chip" style={{ borderLeft: "2px solid var(--primary-light)" }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-two-col">
          {/* Languages & Soft Skills */}
          <div className="skills-block reveal">
            <h3 className="skills-block-title"><Globe size={20} /> Languages Spoken</h3>
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

            <div style={{ marginTop: "2rem" }}>
              <h4 style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Heart size={16} /> Soft Skills
              </h4>
              <div className="soft-skills-cloud">
                {softSkills.map(s => (
                  <span key={s} className="soft-chip">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Milestones */}
          <div className="skills-block reveal">
            <h3 className="skills-block-title"><Award size={20} /> Experience & Milestones</h3>
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
