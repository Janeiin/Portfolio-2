export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <a href="#top" className="logo">
          Janin<span className="dot">.</span>
        </a>
        <p>
          © 2026 Janin — Strategy <span className="times">×</span> Story{" "}
          <span className="times">×</span> Social
        </p>
        <ul className="socials">
          <li>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5v.01" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M9 12a4 4 0 1 0 4 4V4c.6 2.4 2.4 4.2 5 4.5" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M3 8l9 6 9-6" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
