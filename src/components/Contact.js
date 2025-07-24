import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";
import "../styles/Home.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_9wjrhaq",      // Replace with your EmailJS service ID
      "template_3ka1nv8",     // Replace with your EmailJS template ID
      {
        form_name: form.name,
        form_email: form.email,
        message: form.message,
      },
      "2KgGO0uxghNgh9vn0"          // Replace with your EmailJS user ID (public key)
    )
    .then(() => setSubmitted(true))
    .catch((err) =>{ 
      console.error("EmailJS error:", err);
      alert("Failed to send message. Please try again.")});
  };

  return (
    <section
      className={`contact-section section-fade${visible ? " visible" : ""}`}
      id="contact"
      ref={ref}
    >
      <div className="contact-grid">
        {/* Left: Form */}
        <div className="contact-left">
          <h2>Send A Message</h2>
          <div className="contact-underline"></div>
          {submitted ? (
            <div className="contact-success">Thank you for reaching out!</div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
        {/* Right: Info */}
        <div className="contact-right">
          <h2>Get in Touch</h2>
          <div className="contact-underline"></div>
          <p style={{ margin: "18px 0 28px 0" }}>
            Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.<br />
            Simply fill the form and send me an email.
          </p>
          <div className="contact-icons">
            <a href="mailto:nagarharshita3@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <svg width="32" height="32" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="m22 7-8.97 6.43a2 2 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://github.com/HarshitaNagar24" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg width="32" height="32" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.8c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
            </a>
            <a href="https://linkedin.com/in/harshitanagar" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="32" height="32" fill="none" stroke="#000" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37V17M8 17V11.37M8 8V8.01M12 17v-3.5a2 2 0 0 1 4 0"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


// GitHub Copilot
// To get your EmailJS credentials, follow these steps:

// Sign up at EmailJS
// Create a free account.

// Add an Email Service

// Go to the Email Services tab.
// Click Add New Service and connect your email provider (like Gmail, Outlook, etc.).
// After connecting, you’ll see your Service ID (e.g., service_xxxxx).
// Create an Email Template

// Go to the Email Templates tab.
// Click Create New Template.
// Set up the template (add variables like from_name, from_email, message).
// Save it and note the Template ID (e.g., template_xxxxx).
// Get Your Public Key (User ID)

// Go to Account > API Keys.
// Copy your Public Key (sometimes called User ID), e.g., QwErTy123456.
// You will use:

// Service ID
// Template ID
// Public Key (User ID)