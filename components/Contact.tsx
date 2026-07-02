"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [note, setNote] = useState(
    "Your details are only used to reply to your enquiry."
  );

  const send = () => {
    if (!name.trim() || !email.trim() || !msg.trim()) {
      setNote(
        "Please add your name, email, and a short note about your project."
      );
      return;
    }
    setSent(true);
    setNote(
      `Thanks, ${name.trim().split(" ")[0]} — I’ll be in touch within two business days.`
    );
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <Reveal className="contact-wrap">
          <div className="contact-info">
            <p className="eyebrow">Contact</p>
            <h2>
              Let&apos;s build something <em>measurable.</em>
            </h2>
            <p>
              Whether you need a full strategy, a campaign, or a sharper
              direction for what you already have — start the conversation.
            </p>
            <ul className="contact-links">
              <li>
                <a href="mailto:hello@thirdhorizon.studio">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="M3 8l9 6 9-6" />
                  </svg>
                  hello@thirdhorizon.studio
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </li>
              <li>
                <a href="#" download>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />
                  </svg>
                  Download my CV
                </a>
              </li>
            </ul>
          </div>
          <div className="form">
            <div>
              <label htmlFor="f-name">Name</label>
              <input
                id="f-name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={sent}
              />
            </div>
            <div>
              <label htmlFor="f-email">Email</label>
              <input
                id="f-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sent}
              />
            </div>
            <div>
              <label htmlFor="f-msg">Project</label>
              <textarea
                id="f-msg"
                placeholder="Tell me about your goal — I'll reply within two business days."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                disabled={sent}
              />
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={send}
              disabled={sent}
            >
              {sent ? "Message sent ✓" : "Send message"}
            </button>
            <p className="form-note">{note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
