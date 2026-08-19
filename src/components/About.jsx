import { useEffect, useRef } from "react";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import "./About.css";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    period: "Jun 2023 – Jun 2025",
    cgpa: "7.21 / 10",
    major: "Computer Applications & Full-Stack Development",
    coursework: ["Software Development", "Operating Systems", "Algorithms", "AI/ML"],
    color: "indigo",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Rashtrasant Tukdoji Maharaj Nagpur University",
    location: "Nagpur, India",
    period: "Jul 2019 – Jul 2022",
    cgpa: "7.5 / 10",
    major: "Computer Application & Software Design",
    coursework: ["Data Structures", "Database Management", "Object-Oriented Programming"],
    color: "cyan",
  },
];

const experience = [
  {
    role: "Python Developer Intern",
    company: "OctaNet Services Pvt. Ltd.",
    location: "Pune, India",
    period: "Mar 2024 – Apr 2024",
    description: [
      "Built a Python-based ATM simulation system implementing core banking logic (balance inquiry, withdrawal, deposit, PIN validation) as part of a weekly project-based training program.",
      "Completed structured assignments covering Python fundamentals, control flow, and modular program design, reinforcing best practices in clean, maintainable code.",
    ],
    tags: ["Python", "Banking Logic", "Modular Design", "OOP Fundamentals", "Clean Code"],
    color: "purple",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>My Journey</span>
          </div>
          <h2 className="section-title">Education & Experience</h2>
          <div className="gradient-line"></div>
          <p className="section-subtitle">
            Academic background and hands-on industry experience that shaped my technical skills.
          </p>
        </div>

        {/* Education */}
        <div className="about-block">
          <h3 className="block-heading reveal">
            <GraduationCap size={22} />
            Education
          </h3>
          <div className="timeline">
            {education.map((edu, i) => (
              <div className={`timeline-item reveal`} key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className={`timeline-dot dot-${edu.color}`}></div>
                <div className={`timeline-card glass-card edu-card-${edu.color}`}>
                  <div className="timeline-card-header">
                    <div>
                      <h4 className="timeline-title">{edu.degree}</h4>
                      <p className="timeline-institution">{edu.institution}</p>
                      <p className="timeline-sub">{edu.location}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className={`tag tag-${edu.color === "indigo" ? "primary" : "accent"}`}>{edu.period}</span>
                      <div className="cgpa-badge">
                        <Award size={14} />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-card-body">
                    <p className="major-text">
                      <BookOpen size={14} />
                      <strong>Major:</strong> {edu.major}
                    </p>
                    {edu.coursework.length > 0 && (
                      <div className="coursework">
                        <span className="coursework-label">Coursework:</span>
                        <div className="tag-row">
                          {edu.coursework.map(c => (
                            <span key={c} className="tag tag-primary">{c}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="about-block">
          <h3 className="block-heading reveal">
            <Briefcase size={22} />
            Work Experience
          </h3>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div className="timeline-item reveal" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className={`timeline-dot dot-${exp.color}`}></div>
                <div className={`timeline-card glass-card exp-card`}>
                  <div className="timeline-card-header">
                    <div>
                      <h4 className="timeline-title">{exp.role}</h4>
                      <p className="timeline-institution">{exp.company}</p>
                      <p className="timeline-sub">{exp.location}</p>
                    </div>
                    <span className="tag tag-purple">{exp.period}</span>
                  </div>
                  <div className="timeline-card-body">
                    <ul className="exp-list">
                      {exp.description.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                    <div className="tag-row" style={{ marginTop: "1.4rem" }}>
                      {exp.tags.map(t => (
                        <span key={t} className="tag tag-purple">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
