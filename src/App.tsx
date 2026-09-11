import { useState, useEffect } from 'react';
import { DEFAULT_ROUTE, type Route } from './routes';
import Home from './pages/Home';
import Leadership from './pages/Leadership';
import Events from './pages/Events';
import Sponsorship from './pages/Sponsorship';
import { METHODS as CONTACT_METHODS } from './pages/Contact';

const TAB_LABELS: Record<Route, string> = {
  home: 'Home',
  committee: 'Committee',
  events: 'Events',
  sponsorship: 'Sponsorship',
};

const TAB_ORDER: Route[] = ['home', 'committee', 'events', 'sponsorship'];

export default function App() {
  const [route, setRoute] = useState<Route>(DEFAULT_ROUTE);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.title = 'UCL Hedge Fund Society';
    window.scrollTo({ top: 0 });
  }, [route]);

  return (
    <div className="app-wrapper">
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
      <aside className={`sidebar${sidebarOpen ? ' sidebar--open' : ''}`}>
        <nav className="sidebar__nav">
          {TAB_ORDER.map((r) => (
            <a
              key={r}
              href="/"
              className={`sidebar__link${route === r ? ' sidebar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); setRoute(r); setSidebarOpen(false); }}
            >
              {TAB_LABELS[r]}
            </a>
          ))}
          <div className="sidebar__contact">
            <div className="sidebar__contact-icons">
              {CONTACT_METHODS.map((m) => (
                <a
                  key={m.label}
                  className="sidebar__contact-item"
                  href={m.href}
                  target={m.kind === 'link' ? '_blank' : undefined}
                  rel={m.kind === 'link' ? 'noreferrer' : undefined}
                  aria-label={m.label}
                >
                  {m.label === 'Email' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  ) : m.label === 'LinkedIn' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ) : m.label === 'Instagram' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  ) : m.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      <header className="nav">
        <nav className="nav__inner" aria-label="Primary">
          <a href="/" className="nav__logo" onClick={(e) => { e.preventDefault(); setRoute('home'); }}>
            <img src={`${import.meta.env.BASE_URL}branding/hfs_logo.jpg`} alt="UCL Hedge Fund Society" className="nav__logo-img" />
          </a>
        </nav>
      </header>

      <button type="button" className={`nav__burger${sidebarOpen ? ' nav__burger--open' : ''}`} onClick={() => setSidebarOpen((o) => !o)} aria-label="Menu">
        <span className="nav__burger-label">Menu</span>
        <span className="nav__burger-lines">
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
        </span>
      </button>

      <main className="app-main">
        <section className="page container" hidden={route !== 'home'}>
          <Home onNavigate={(r) => setRoute(r as Route)} />
        </section>
        <section className="page container" hidden={route !== 'committee'}>
          <Leadership />
        </section>
        <section className="page container" hidden={route !== 'events'}>
          <Events />
        </section>
        <section className="page container" hidden={route !== 'sponsorship'}>
          <Sponsorship />
        </section>
      </main>

      <footer className="footer-bar">
        <span className="footer-bar__copy">© {new Date().getFullYear()} UCL Hedge Fund Society</span>
      </footer>
      <footer className="footer-expanded">
        <div className="footer-expanded__inner">
          <div className="footer-expanded__columns">
            <div className="footer-expanded__col">
              <h4 className="footer-expanded__heading">Pages</h4>
              {TAB_ORDER.map((r) => (
                <a key={r} href="/" className="footer-expanded__link" onClick={(e) => { e.preventDefault(); setRoute(r); }}>
                  {TAB_LABELS[r]}
                </a>
              ))}
            </div>
            <div className="footer-expanded__col">
              <h4 className="footer-expanded__heading">Contact</h4>
              {CONTACT_METHODS.map((m) => (
                <a key={m.label} className="footer-expanded__link" href={m.href} target={m.kind === 'link' ? '_blank' : undefined} rel={m.kind === 'link' ? 'noreferrer' : undefined}>
                  {m.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
