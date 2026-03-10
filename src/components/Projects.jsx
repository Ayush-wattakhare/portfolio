import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Code2, Layers } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "HomelyEates",
    subtitle: "Food Delivery Web Application",
    description: "Full-stack food delivery platform connecting customers to home-cooked meal providers. Built with MERN stack featuring role-based authentication, vendor dashboard, and payment integration.",
    highlights: [
      "Role-based auth (customer/vendor) with JWT",
      "Vendor dashboard: add/update/delete meals & upload images",
      "Razorpay payment gateway (online & COD)",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Razorpay"],
    github: "https://github.com/Ayush-wattakhare/HomelyEates.git",
    demo: null,
    period: "Dec 2024 – Present",
    color: "indigo",
    icon: "🍱",
  },
  {
    id: 2,
    title: "Time Management System",
    subtitle: "For Students — Python & MongoDB",
    description: "Python-based productivity application helping students organize schedules, set reminders, track assignments, and visualize study patterns through an intuitive dashboard.",
    highlights: [
      "Productivity dashboard with visual study-pattern analytics",
      "Schedule organizer and assignment tracker",
      "Integrated notification & reminder alerts",
    ],
    tags: ["Python", "MongoDB", "Dashboard", "Notifications"],
    github: "https://github.com/Ayush-wattakhare/time-management-system-for-student.git",
    demo: null,
    period: "Dec 2023 – May 2024",
    color: "cyan",
    icon: "⏰",
  },
  {
    id: 3,
    title: "College Voting System",
    subtitle: "Event Voting — Java & Spring Boot",
    description: "Secure Java web application managing college event elections with student registration, candidate nomination management, and a secure authentication system built on Spring Boot.",
    highlights: [
      "Student registration & candidate nomination flow",
      "Secure login and session management",
      "MySQL-backed data persistence",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/Ayush-wattakhare/voting-system-for-college-event.git",
    demo: null,
    period: "Aug 2023 – Dec 2023",
    color: "purple",
    icon: "🗳️",
  },
];

const ALL = "All";
const filters = [ALL, "React", "Python", "Java", "MongoDB", "Spring Boot"];

export default function Projects() {
  const [active, setActive] = useState(ALL);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  const filtered = active === ALL ? projects : projects.filter(p => p.tags.some(t => t.toLowerCase() === active.toLowerCase()));

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="gradient-line"></div>
          <p className="section-subtitle">
            A selection of real-world projects that showcase my full-stack development skills.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters reveal">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-chip ${active === f ? "active-chip" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`project-card glass-card reveal ${hovered === p.id ? "project-hovered" : ""} project-color-${p.color}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Card Top */}
              <div className="pc-top">
                <div className="pc-icon">{p.icon}</div>
                <div className="pc-period">{p.period}</div>
              </div>

              {/* Title */}
              <h3 className="pc-title">{p.title}</h3>
              <p className="pc-subtitle">{p.subtitle}</p>
              <p className="pc-desc">{p.description}</p>

              {/* Highlights */}
              <ul className="pc-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="pc-tags">
                {p.tags.map(t => (
                  <span key={t} className={`tag tag-${p.color === "indigo" ? "primary" : p.color === "cyan" ? "accent" : "purple"}`}>{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="pc-actions">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="pc-link pc-link-github">
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="pc-link pc-link-demo">
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              {/* Hover glow overlay */}
              <div className="pc-glow" aria-hidden="true"></div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="projects-cta reveal">
          <a href="https://github.com/Ayush-wattakhare" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Layers size={16} />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
