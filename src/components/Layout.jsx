import { useState, useEffect, useLayoutEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { WA_DISPLAY, waLink, useData } from '../data/site';
import Logo from './Logo';
import { SocialRow } from './ui';
import { SERVICES } from '../data/services';

export function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const doc = document.documentElement;
    const prev = doc.style.scrollBehavior;
    doc.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    doc.style.scrollBehavior = prev;
  }, [pathname]);
  return null;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="nav">
      <div className="nav-float">
        <Link className="brand" to="/">
          <Logo />
        </Link>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <NavLink className="nl" to="/" end>Home</NavLink>
          <NavLink className="nl" to="/courses">Courses</NavLink>
          <NavLink className="nl" to="/services">Services</NavLink>
          <NavLink className="nl" to="/tools">Tools</NavLink>
          <NavLink className="nl" to="/prompts">Prompts</NavLink>
          <NavLink className="nl" to="/about">About</NavLink>
          <NavLink className="nl" to="/contact">Contact</NavLink>
          <a
            className="btn btn-amber btn-sm nav-cta"
            href={waLink('Assalam o Alaikum! Mujhe Saraiki Tech ke courses ke baare mein maloomat chahiye.')}
            target="_blank" rel="noopener"
          >
            <MessageCircle size={16} /> WhatsApp Karo
          </a>
        </div>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  const { courses } = useData();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-giant" aria-hidden="true">Saraiki Tech</div>
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo />
            <p>AI se kamana seekho — apni zaban mein. Courses aur viral AI content ke master prompts, sab ek jagah.</p>
            <SocialRow />
          </div>
          <div>
            <h4>Courses</h4>
            {courses.map((c) => (
              <Link key={c.slug} to={`/courses/${c.slug}`}>{c.name}</Link>
            ))}
          </div>
          <div>
            <h4>Services</h4>
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>
            ))}
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/tools">Premium Tools</Link>
            <Link to="/prompts">Master Prompts</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a href={waLink('Assalam o Alaikum!')} target="_blank" rel="noopener">
              WhatsApp <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Saraiki Tech. All rights reserved.</span>
          <span>Seekho. Banao. Kamao.</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsFloat() {
  return (
    <a
      className="wa-float"
      href={waLink('Assalam o Alaikum! Mujhe Saraiki Tech ke baare mein sawal hai.')}
      target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="#ffffff" aria-hidden>
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.9 6.5L4 29l7.7-1.8c1.8 1 3.9 1.5 4.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.3 0-2.6-.4-3.7-1l-.3-.2-4.5 1.1 1.1-4.4-.2-.3c-.7-1.2-1.1-2.5-1.1-3.9C7.3 10.2 10.9 7 16 7s8.7 3.6 8.7 8-3.6 9.8-8.7 9.8zm4.8-7.3c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.3-.7-.7-1.2-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.3-.9.9-1.1 2.2-.2 3.9.9 1.9 2.8 4.1 5.4 5.5 1.9 1 2.7 1.1 3.6.9.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.2z" />
      </svg>
    </a>
  );
}
