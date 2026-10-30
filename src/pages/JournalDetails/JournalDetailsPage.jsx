import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../../data/journal';
import './JournalDetails.css';

export default function JournalDetailsPage() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <div className="journal-details-page">
      <article className="article-container">
        {/* Editorial Header */}
        <header className="article-header section-spacing-top">
          <div className="container-narrow">
            <Link to="/journal" className="back-link mono-meta">
              <ArrowLeft size={14} />
              <span>RETURN TO JOURNAL</span>
            </Link>

            <div className="article-meta mono-meta">
              <span>{article.category}</span>
              <span>&bull;</span>
              <span>{article.date}</span>
              <span>&bull;</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="article-title">{article.title}</h1>
            <p className="lead article-lead">{article.summary}</p>
            <div className="article-author mono-meta">BY {article.author}</div>
          </div>
        </header>

        {/* Feature Image */}
        <div className="article-hero-wrap">
          <div className="container">
            <div className="article-main-img img-editorial">
              <img src={article.image} alt={article.title} />
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="article-content-section section-spacing">
          <div className="container-narrow">
            <div className="article-rich-text">
              {article.content.trim().split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}

              <blockquote className="article-quote">
                &ldquo;Architecture in the desert must feel grounded; it must speak not of temporary wealth, but of enduring civilization.&rdquo;
              </blockquote>

              <p>
                As we continue to develop new structural frameworks in our DIFC studio, the dialogue between ancient architectural wisdom and computational precision remains at the heart of every line we draft.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Essays */}
      <section className="related-essays-section theme-dark section-spacing">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label" style={{ color: 'var(--color-dune-gold)' }}>RELATED ESSAYS</span>
              <h2>Further Reading</h2>
            </div>
          </div>

          <div className="related-essays-grid">
            {relatedArticles.map((rel) => (
              <div key={rel.id} className="related-card">
                <span className="mono-meta" style={{ color: 'var(--color-dune-gold)' }}>{rel.category}</span>
                <h3>
                  <Link to={`/journal/${rel.slug}`}>{rel.title}</Link>
                </h3>
                <p>{rel.summary}</p>
                <Link to={`/journal/${rel.slug}`} className="btn-link" style={{ color: 'var(--color-sandstone-light)' }}>
                  <span>Read Essay</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
