import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../../data/journal';
import './Journal.css';

export default function JournalPage() {
  const featuredArticle = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1);

  return (
    <div className="journal-page">
      {/* 1. HERO */}
      <section className="journal-hero section-spacing-top">
        <div className="container">
          <span className="section-label">STUDIO JOURNAL & DISCOURSE</span>
          <h1 className="journal-headline">
            Essays on Space, Materiality &<br />
            <em>Contemporary Desert Architecture.</em>
          </h1>
          <p className="lead" style={{ maxWidth: '780px', marginTop: '1.5rem', marginBottom: '3.5rem' }}>
            Critical architectural analysis, research on thermodynamic performance in the Gulf, and reflections on international spatial aesthetics curated by ARCHITECH principals.
          </p>
        </div>
      </section>

      {/* 2. FEATURED HERO ESSAY */}
      <section className="featured-essay-section">
        <div className="container">
          <article className="hero-essay-card">
            <Link to={`/journal/${featuredArticle.slug}`} className="hero-essay-media img-editorial">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
              <div className="hero-essay-badge mono-meta">LEAD EDITORIAL ESSAY</div>
            </Link>

            <div className="hero-essay-body">
              <div className="essay-meta mono-meta">
                <span>{featuredArticle.category}</span>
                <span>&bull;</span>
                <span>{featuredArticle.date}</span>
                <span>&bull;</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h2 className="hero-essay-title">
                <Link to={`/journal/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
              </h2>
              <p className="hero-essay-summary">{featuredArticle.summary}</p>
              <div className="hero-essay-author mono-meta">BY {featuredArticle.author}</div>
              <Link to={`/journal/${featuredArticle.slug}`} className="btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                <span>Read Full Essay</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 3. SECONDARY ESSAYS LIST */}
      <section className="journal-stream-section section-spacing">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">ARCHIVE DISCOURSE</span>
              <h2>Further Architectural Investigations</h2>
            </div>
          </div>

          <div className="journal-stream-grid">
            {secondaryArticles.map((article) => (
              <article key={article.id} className="stream-card">
                <Link to={`/journal/${article.slug}`} className="stream-media img-editorial">
                  <img src={article.image} alt={article.title} loading="lazy" />
                  <span className="stream-category mono-meta">{article.category}</span>
                </Link>
                <div className="stream-info">
                  <div className="stream-meta mono-meta">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="stream-title">
                    <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="stream-summary">{article.summary}</p>
                  <Link to={`/journal/${article.slug}`} className="btn-link">
                    <span>Read Essay</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
