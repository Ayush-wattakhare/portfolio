import { useState, useRef, useEffect } from 'react';
import { Mail, MessageSquare, Send, User, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const contacts = [
  { icon: <Mail />, label: "Email", value: "Avattakhare@gmail.com", href: "mailto:Avattakhare@gmail.com" },
  { icon: <Linkedin />, label: "LinkedIn", value: "ayush-wattakhare-pw2001", href: "https://www.linkedin.com/in/ayush-wattakhare-pw2001" },
  { icon: <Github />, label: "GitHub", value: "Ayush-wattakhare", href: "https://github.com/Ayush-wattakhare" },
  { icon: <MapPin />, label: "Location", value: "Pune, India", href: null },
];

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) e.email = "Valid email is required";
    if (!formData.message.trim() || formData.message.length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setStatus(null);
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');
      setStatus({ ok: true, msg: "Message sent! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({ ok: false, msg: "Oops! Something went wrong. Please email me directly at Avattakhare@gmail.com" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">
            <Mail size={14} />
            <span>Contact</span>
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="gradient-line"></div>
          <p className="section-subtitle">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left – contact info */}
          <div className="contact-info-panel reveal">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-sub">
              I'm open to new opportunities and collaborations. Whether it's a full-time role, freelance project, or just a tech conversation — reach out!
            </p>

            <div className="contact-items">
              {contacts.map(c => (
                <div className="contact-item glass-card" key={c.label}>
                  <div className="ci-icon">{c.icon}</div>
                  <div className="ci-body">
                    <p className="ci-label">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="ci-value">
                        {c.value}
                        {c.href.startsWith("http") && <ExternalLink size={12} />}
                      </a>
                    ) : (
                      <span className="ci-value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <form className="contact-form glass-card reveal" ref={formRef} onSubmit={handleSubmit} noValidate>
            <h3 className="form-title">Send a Message</h3>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="cnt-name"><User size={14} /> Name</label>
                <input id="cnt-name" name="name" type="text" className={`form-input ${errors.name ? "input-err" : ""}`} placeholder="Your Name" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="field-err">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cnt-email"><Mail size={14} /> Email</label>
                <input id="cnt-email" name="email" type="email" className={`form-input ${errors.email ? "input-err" : ""}`} placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="field-err">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cnt-subject"><MessageSquare size={14} /> Subject</label>
              <input id="cnt-subject" name="subject" type="text" className="form-input" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="cnt-msg"><MessageSquare size={14} /> Message</label>
              <textarea id="cnt-msg" name="message" rows="5" className={`form-input form-textarea ${errors.message ? "input-err" : ""}`} placeholder="Write your message here..." value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <span className="field-err">{errors.message}</span>}
            </div>

            {status && (
              <div className={`form-status ${status.ok ? "status-ok" : "status-err"}`}>{status.msg}</div>
            )}

            <button type="submit" className="btn-primary submit-btn" disabled={submitting}>
              {submitting ? <span>Sending...</span> : <><span>Send Message</span><Send size={15} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
