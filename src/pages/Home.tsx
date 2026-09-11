import { useState, useEffect } from 'react';

export default function Home({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="hero-scenic">
        <div className="hero-scenic__overlay">
          <div className="hero-scenic__content">
            <div className="page__header">
              <h1 className="page__title page__title--intro">UCL Hedge Fund Society is dedicated to preparing students for careers in finance through a hands-on, practical approach.</h1>
              <p
                  className="page__lead">
              </p>
            </div>

            <div className={`scroll-cue${scrolled ? ' is-hidden' : ''}`} aria-hidden="true">
              <div className="scroll-cue__group">
                <span className="scroll-cue__line" />
                <span className="scroll-cue__triangle" />
              </div>
            </div>
          </div>
        </div>
        <hr className="home-divider" />
      </div>

      <div className="what-we-do">
        <h2 className="what-we-do__heading">What We Do</h2>

        <div className="what-we-do__grid">
          <div className="what-we-do__item">
            <h3 className="what-we-do__title">Equity Paper Fund</h3>
            <p className="what-we-do__desc">
              Our analysts and portfolio managers cover equities across all major sectors.
              Members apply skills from training by building research reports, financial models,
              and stock pitches in a live paper fund setting.
            </p>
          </div>
          

          <div className="what-we-do__item">
            <h3 className="what-we-do__title">London University Student Investment Fund (LUSIF)</h3>
            <p className="what-we-do__desc">
              We've joined LUSIF, the first intercollegiate paper fund, collaborating with LSE's
              Commodities Society and King's College's Quant Society. Alongside our own equity
              paper fund, this opens opportunities across equities, commodities, and quant strategies.
            </p>
          </div>

          <div className="what-we-do__item">
            <h3 className="what-we-do__title">Fundamental Edge × Investment Club</h3>
            <p className="what-we-do__desc">
              We've partnered with Fundamental Edge, giving members access to top buy-side
              training through video lectures, office hours and stock pitch competitions led by
              ex-portfolio managers from firms such as Citadel, Blackstone, and D.E. Shaw.
            </p>
          </div>

          <div className="what-we-do__item">
            <h3 className="what-we-do__title">Careers & Networking</h3>
            <p className="what-we-do__desc">
              We support members with application prep, including a Spring Week crash course,
              recruiter talks, and guest speakers from leading global financial institutions.
            </p>
          </div>
        </div>
      </div>

      <div className="home-cards home-cards--stacked">
        <div className="home-cards__row">
          <a href="/" className="home-card" onClick={(e) => { e.preventDefault(); onNavigate?.('committee'); }}>
            <span className="home-card__title">Our Committee</span>
            <hr className="home-card__divider" />
            <span className="home-card__subtitle">Meet the team behind HFS</span>
          </a>
          <a href="https://studentsunionucl.org/clubs-societies/hedge-fund-society" target="_blank" rel="noreferrer" className="home-card">
            <span className="home-card__title">Join HFS</span>
            <hr className="home-card__divider" />
            <span className="home-card__subtitle">Become a member via the Students' Union</span>
          </a>
        </div>
      </div>
    </>
  );
}
