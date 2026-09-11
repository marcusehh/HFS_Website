import { useState, useCallback } from 'react';
import { usePosts, formatDate, type PostMeta } from '../posts';

export const POSTS: PostMeta[] = [
  { file: 'welcome', title: 'Welcome to UCL Hedge Fund Society', date: '2026-09-10', category: 'General', author: 'HFS Committee' },
];

export const SECTORS = [
  'General', 'Equities', 'Macro', 'Commodities', 'Quant',
];

interface ArticlesProps {
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
}

export default function Articles({ activeCategory, setActiveCategory }: ArticlesProps) {
  const posts = usePosts();
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const togglePost = useCallback((file: string) => {
    setExpandedPost((prev) => (prev === file ? null : file));
  }, []);

  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  return (
    <>
      <div className="page__header page__header--articles">
        <h1 className="page__title">Articles</h1>
        <p className="page__subtitle">Latest ideas from UCL Hedge Fund Society.</p>
      </div>

      <div className="posts-filter">
        <button
          type="button"
          className={`posts-filter__chip${activeCategory === null ? ' posts-filter__chip--active' : ''}`}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>
        {SECTORS.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`posts-filter__chip${activeCategory === cat ? ' posts-filter__chip--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="posts-feed">
        {filtered.length === 0 ? (
          <p className="hero__bio">No posts yet.</p>
        ) : (
          filtered.map((p) => (
            <article className={`post-entry${expandedPost === p.file ? ' post-entry--open' : ''}`} id={`post-${p.file}`} key={p.file}>
              <header className="post-entry__header" onClick={() => togglePost(p.file)}>
                <h2 className="post-entry__title">{p.title}</h2>
                <span className="post-entry__date">
                  {formatDate(p.date)} · {p.category || 'Uncategorised'}
                </span>
              </header>
              <div className="post-entry__body-wrap">
                <div
                  className="post-entry__body hero__bio"
                  dangerouslySetInnerHTML={{ __html: p.bodyHtml }}
                />
              </div>
              {p.author && (
                <footer className="post-entry__footer" onClick={() => togglePost(p.file)}>
                  Written by {p.author}
                </footer>
              )}
            </article>
          ))
        )}
      </div>
    </>
  );
}
