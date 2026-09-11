export default function Programmes() {
  return (
    <>
      <div className="page__header page__header--articles">
        <h1 className="page__title">Programmes</h1>
        <p className="page__subtitle">Our flagship programmes bridging academic finance with real-world practice.</p>
      </div>

      <div className="posts-feed">
        <div className="post-entry post-entry--open">
          <header className="post-entry__header" style={{ cursor: 'default' }}>
            <h2 className="post-entry__title">Equity Paper Fund</h2>
          </header>
          <div className="post-entry__body-wrap">
            <div className="post-entry__body hero__bio">
              <p>
                Members build research reports, financial models and stock pitches in a live
                paper fund covering major sectors. The fund gives members hands-on experience
                with the full investment process — from idea generation through to portfolio
                construction and risk management.
              </p>
            </div>
          </div>
        </div>

        <div className="post-entry post-entry--open">
          <header className="post-entry__header" style={{ cursor: 'default' }}>
            <h2 className="post-entry__title">LUSIF</h2>
            <span className="post-entry__date">London University Student Investment Fund</span>
          </header>
          <div className="post-entry__body-wrap">
            <div className="post-entry__body hero__bio">
              <p>
                An intercollegiate collaboration with LSE's Commodities Society and King's
                College's Quant Society, offering exposure to equities, commodities and
                quantitative strategies across London's top universities.
              </p>
            </div>
          </div>
        </div>

        <div className="post-entry post-entry--open">
          <header className="post-entry__header" style={{ cursor: 'default' }}>
            <h2 className="post-entry__title">Fundamental Edge × Investment Club</h2>
          </header>
          <div className="post-entry__body-wrap">
            <div className="post-entry__body hero__bio">
              <p>
                Our partnership with Fundamental Edge provides access to recorded lessons, stock
                pitch competitions and online office hours led by ex-portfolio managers from
                firms such as Citadel, Blackstone and D.E. Shaw.
              </p>
            </div>
          </div>
        </div>

        <div className="post-entry post-entry--open">
          <header className="post-entry__header" style={{ cursor: 'default' }}>
            <h2 className="post-entry__title">Careers & Networking</h2>
          </header>
          <div className="post-entry__body-wrap">
            <div className="post-entry__body hero__bio">
              <p>
                Spring Week crash courses, recruiter talks and guest speakers from leading
                financial institutions. We help members navigate the competitive landscape of
                finance recruitment with practical, actionable support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
