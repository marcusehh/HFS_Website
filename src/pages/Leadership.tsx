interface Leader {
  name: string;
  role: string;
  linkedin: string;
  sector?: string;
}

const LEADERS: Leader[] = [
  { name: 'Name 1',          role: 'President',                    linkedin: '#'},
  { name: 'Name 2',     role: 'Treasurer',               linkedin: '#'},
  { name: 'Name 3',   role: 'Welfare Officer',             linkedin: '#'},
];

export default function Leadership() {
  return (
    <>
      <div className="hero-scenic hero-scenic--leadership">
        <div className="hero-scenic__overlay">
          <div className="hero-scenic__content">
            <div className="page__header">
              <h1 className="page__title">Leadership</h1>
              <p className="page__subtitle">Our committee drives HFS's mission - from managing the paper fund to organising speaker events and careers support.</p>
            </div>

            <div className="leader-cards-wrapper">
              {LEADERS.map((l) => (
                <article className="leader-card" key={l.name} style={{ position: 'relative' }}>
                  {l.linkedin !== '#' && (
                    <a href={l.linkedin} target="_blank" rel="noreferrer" className="leader-card__linkedin-icon" aria-label={`${l.name} LinkedIn`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                  <a href={l.linkedin !== '#' ? l.linkedin : undefined} target="_blank" rel="noreferrer" className="leader-card__header">
                    <h3>{l.name}</h3>
                    <p><em>{l.role}</em></p>
                  </a>
                  <div className="leader-card__body">
                    {l.sector && <span className="leader-card__sector">{l.sector}</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
