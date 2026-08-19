import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Code2, Layers } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "JLPT N5 Study Hub",
    subtitle: "AI-Powered Japanese Learning Platform",
    description: "Full-stack JLPT N5 EdTech platform featuring vocabulary drills, kanji practice, interactive flashcards, and gamified progress tracking with XP, streaks, and study analytics.",
    highlights: [
      "Engineered an AI conversational tutor ('Sakura Sensei') using Google Gemini API & Web Speech API for real-time voice/text dialogue & grammar feedback.",
      "Built automated retention system combining Twilio API & node-cron to schedule personalized SMS study reminders and motivational alerts.",
      "Implemented secure JWT & bcryptjs auth backed by Supabase (PostgreSQL) for cloud persistence with local-state fallback.",
    ],
    tags: ["Google Gemini API", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Twilio API", "JWT", "Web Speech API"],
    github: "https://github.com/Ayush-wattakhare/jlpt-study-hub",
    demo: "https://jlpt-study-hub.vercel.app/",
    period: "Apr 2026 – Apr 2026",
    color: "cyan",
    icon: "🌸",
  },
  {
    id: 2,
    title: "HomelyEats",
    subtitle: "Full-Stack Food Delivery Platform (MERN)",
    description: "Full-stack food delivery application connecting customers with home-cooked meal vendors, supporting end-to-end order flow with role-based authentication.",
    highlights: [
      "Role-based auth (customer/vendor) with secure JWT and session management.",
      "Developed a vendor dashboard enabling meal creation, image upload, categorization, and inventory updates.",
      "Integrated Razorpay payment gateway with both online and Cash-on-Delivery options for a seamless checkout experience.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Razorpay"],
    github: "https://github.com/Ayush-wattakhare/HomelyEates",
    demo: null,
    period: "Dec 2024 – Present",
    color: "indigo",
    icon: "🍱",
  },
  {
    id: 3,
    title: "Time Management System for Students",
    subtitle: "Productivity & Schedule Analytics — Python & MongoDB",
    description: "Python application with an intuitive productivity dashboard to help students organize schedules, track assignments, and visualize study patterns.",
    highlights: [
      "Productivity dashboard with visual study-pattern analytics and time allocation tracking.",
      "Schedule organizer and assignment deadline manager.",
      "Built a notification & alert module to improve on-time task completion and eliminate missed deadlines.",
    ],
    tags: ["Python", "MongoDB", "Dashboard", "Analytics", "Alerts"],
    github: "https://github.com/Ayush-wattakhare/time-management-system-for-student",
    demo: null,
    period: "Dec 2023 – May 2024",
    color: "blue",
    icon: "⏰",
  },
  {
    id: 4,
    title: "Voting System for College Events",
    subtitle: "Secure Event Voting — Java & Spring Boot",
    description: "Java & Spring Boot web application to digitize and secure college event elections with authenticated student registration and candidate nominations.",
    highlights: [
      "Student registration and candidate nomination management preventing duplicate or unauthorized votes.",
      "Secure authenticated login and session controls with role restrictions.",
      "MySQL-backed data persistence and robust REST API architecture.",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "Security"],
    github: "https://github.com/Ayush-wattakhare/voting-system-for-college-event",
    demo: null,
    period: "Aug 2023 – Dec 2023",
    color: "purple",
    icon: "🗳️",
  },
];

const ALL = "All";
const filters = [ALL, "AI / Gemini", "React", "Node.js", "Java", "Spring Boot", "Python", "MongoDB", "PostgreSQL"];

export default function Projects() {
  const [active, setActive] = useState(ALL);
  const sectionRef = useRef(null);

  const filtered = active === ALL 
    ? projects 
    : projects.filter(p => p.tags.some(t => {
        const tagLower = t.toLowerCase();
        const activeLower = active.toLowerCase();
        if (activeLower === "ai / gemini") return tagLower.includes("gemini") || tagLower.includes("ai");
        if (activeLower === "react") return tagLower.includes("react");
        if (activeLower === "node.js") return tagLower.includes("node");
        if (activeLower === "postgresql") return tagLower.includes("postgres") || tagLower.includes("supabase");
        return tagLower.includes(activeLower);
      }));

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
              className={`project-card glass-card project-color-${p.color}`}
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
