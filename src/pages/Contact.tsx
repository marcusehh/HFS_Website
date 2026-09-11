export interface ContactMethod {
  label: string;
  value: string;
  href?: string;
  kind: 'email' | 'link';
}

export const METHODS: ContactMethod[] = [
  { label: 'Email',     value: 'hedgefundsociety@ucl.ac.uk', href: 'mailto:hedgefundsociety@ucl.ac.uk',                    kind: 'email' },
  { label: 'LinkedIn',  value: 'UCL Hedge Fund Society',     href: 'https://www.linkedin.com/company/ucl-hfs/',             kind: 'link' },
  { label: 'Instagram', value: '@ucl_hedgefund',             href: 'https://www.instagram.com/ucl_hedgefund/',              kind: 'link' },
];

export default function Contact() {
  return (
    <>
      <div className="page__header">
        <h1 className="page__title">Contact Us</h1>
      </div>

      <div className="garden__section">
        <div className="garden__section-header">
          <h2 className="garden__section-title">Get in touch</h2>
        </div>
        <ul className="post-list">
          {METHODS.map((m) => (
            <li className="post-item" key={m.label}>
              {m.href ? (
                <a
                  className="post-item__link external-link"
                  href={m.href}
                  target={m.kind === 'link' ? '_blank' : undefined}
                  rel={m.kind === 'link' ? 'noreferrer' : undefined}
                >
                  {m.value}
                </a>
              ) : (
                <span className="post-item__link">{m.value}</span>
              )}
              <span className="post-item__date">{m.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
