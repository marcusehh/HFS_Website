import { useState, useEffect } from 'react';
import { usePosts } from '../posts';

export default function Home({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const posts = usePosts();
  const latest = posts[0];
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
              <h1 className="page__title page__title--intro">Finance, Applied.</h1>
              <p className="page__lead">
                {'UCL\'s student-run hedge fund society — preparing the next generation of investors through hands-on experience.'
                  .split(' ')
                  .map((word, i) => (
                    <span
                      className="page__lead-word"
                      key={i}
                      style={{ ['--i' as string]: i }}
                    >
                      {word}{' '}
                    </span>
                  ))}
              </p>
            </div>

            <div className="hero__bio">
              <p>
                UCL Hedge Fund Society is dedicated to preparing students for careers in finance
                through a hands-on, practical approach. Established in 2022, we combine investment
                training with application support to help members develop the skills needed to
                secure top finance internships and graduate roles.
              </p>
              <p>
                Through our Equity Paper Fund, LUSIF collaboration and partnership with
                Fundamental Edge, we bridge the gap between academic theory and real-world
                portfolio management.
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

      <div className="home-cards home-cards--stacked">
        <a href="/" className="home-card home-card--article" onClick={(e) => { e.preventDefault(); onNavigate?.('articles'); }}>
          <span className="home-card__title">{latest ? latest.title : 'Recent Article'}</span>
          <hr className="home-card__divider" />
          <span className="home-card__subtitle">Read our most recent article</span>
        </a>
        <div className="home-cards__row">
          <a href="/" className="home-card" onClick={(e) => { e.preventDefault(); onNavigate?.('programmes'); }}>
            <span className="home-card__title">Our Programmes</span>
            <hr className="home-card__divider" />
            <span className="home-card__subtitle">Equity Paper Fund · LUSIF · Fundamental Edge</span>
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
