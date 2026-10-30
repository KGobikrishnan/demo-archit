import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Shield, Award, Sparkles } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { SERVICES, APPROACH_STEPS } from '../../data/services';
import { VERIFIED_STATS } from '../../data/studio';
import { ARTICLES } from '../../data/journal';
import './Home.css';

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const featuredArticles = ARTICLES.slice(0, 2);

  return (
    <div className="home-page">
      {/* 1. CINEMATIC EDITORIAL HERO */}
      <section className="hero-section" aria-label="Introduction Hero">
        <div className="hero-backdrop">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
            alt="Villa Travertine waterfront architecture on Palm Jumeirah"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content-wrapper">
          <div className="hero-meta mono-meta">
            <span>STUDIO DUBAI / DIFC</span>
            <span className="dot-sep">&bull;</span>
            <span>INTERNATIONAL ARCHITECTURAL PRACTICE</span>
          </div>

          <h1 className="hero-title">
            Monolithic form.<br />
            Timeless presence.<br />
            <em>Sculpted for the Gulf.</em>
          </h1>

          <div className="hero-bottom-bar">
            <p className="hero-lead">
              ARCHITECH conceives enduring residential estates, visionary commercial towers, and cultural landmarks across Dubai and the international sphere.
            </p>
            <div className="hero-cta-group">
              <Link to="/projects" className="btn-primary hero-btn">
                <span>Explore Works</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/about" className="btn-secondary hero-btn-secondary">
                <span>The Studio Philosophy</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY STATEMENT */}
      <section className="philosophy-section section-spacing">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-col-left">
              <span className="section-label">STUDIO PHILOSOPHY</span>
              <span className="mono-meta stamp">DUBAI &bull; 2014 — 2026</span>
            </div>
            <div className="philosophy-col-right">
              <p className="lead philosophy-quote">
                &ldquo;We reject the transient spectacle of generic glass towers. Our architecture is an intentional geological inquiry: heavy stone, deep thermal cantilevers, poetic shadows, and air conditioned silence engineered for the world's most exacting desert climate.&rdquo;
              </p>
              <div className="philosophy-author">
                <span className="author-name">Tariq Al-Mansoor</span>
                <span className="mono-meta author-title">FOUNDER & PRINCIPAL ARCHITECT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORKS (EDITORIAL IRREGULAR GRID) */}
      <section className="featured-section section-spacing-bottom">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">SELECTED COMMISSIONS</span>
              <h2>Landmarks of Restraint & Scale</h2>
            </div>
            <Link to="/projects" className="btn-link">
              <span>View All Portfolios (06)</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project, idx) => (
              <article key={project.id} className={`featured-project-card card-variant-${idx}`}>
                <Link to={`/projects/${project.slug}`} className="project-media-wrap img-editorial">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} - ${project.subtitle}`}
                    loading="lazy"
                  />
                  <div className="project-badge mono-meta">
                    {project.category} &bull; {project.year}
                  </div>
                </Link>

                <div className="project-info">
                  <div className="project-header">
                    <span className="mono-meta location-tag">{project.location}</span>
                    <h3 className="project-heading">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="project-sub">{project.subtitle}</p>
                  </div>
                  <p className="project-desc">{project.overview.slice(0, 150)}...</p>
                  <div className="project-meta-pills">
                    <span className="meta-pill">{project.area}</span>
                    <span className="meta-pill">{project.disciplines[0]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRACTICE STATS BANNER */}
      <section className="stats-section theme-dark section-spacing">
        <div className="container">
          <div className="stats-grid">
            {VERIFIED_STATS.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE DISCIPLINES & SERVICES */}
      <section className="services-overview-section section-spacing">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">EXPERTISE & DISCIPLINES</span>
              <h2>Holistic Spatial Mastery</h2>
            </div>
            <Link to="/services" className="btn-link">
              <span>Explore All Disciplines</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="service-card-item">
                <span className="service-number mono-meta">{srv.number}</span>
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-summary">{srv.summary}</p>
                <ul className="service-capabilities-list">
                  {srv.capabilities.slice(0, 3).map((cap, idx) => (
                    <li key={idx}>&bull; {cap}</li>
                  ))}
                </ul>
                <Link to="/services" className="service-detail-link btn-link">
                  <span>Learn More</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DESIGN METHODOLOGY PREVIEW */}
      <section className="approach-preview-section section-spacing theme-dark">
        <div className="container">
          <div className="approach-header">
            <span className="section-label" style={{ color: 'var(--color-dune-gold)' }}>RIGOROUS METHODOLOGY</span>
            <h2>Architectural Precision from Inception to Handover</h2>
            <p className="lead" style={{ maxWidth: '680px', marginTop: '1.25rem' }}>
              We govern every commission through our six-stage architectural framework, assuring uninterrupted continuity from initial solar simulation to the millimeter calibration of finished travertine.
            </p>
          </div>

          <div className="approach-steps-preview">
            {APPROACH_STEPS.slice(0, 4).map((step, index) => (
              <div key={index} className="approach-preview-card">
                <span className="step-phase mono-meta">{step.phase}</span>
                <h4>{step.name}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <Link to="/approach" className="btn-primary" style={{ backgroundColor: 'var(--color-sandstone-light)', color: 'var(--color-obsidian)', borderColor: 'var(--color-sandstone-light)' }}>
              <span>Review Complete 6-Stage Process</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. JOURNAL & INSIGHTS PREVIEW */}
      <section className="journal-preview-section section-spacing">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">EDITORIAL & DISCOURSE</span>
              <h2>Reflections on Contemporary Architecture</h2>
            </div>
            <Link to="/journal" className="btn-link">
              <span>Read All Essays</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="journal-preview-grid">
            {featuredArticles.map((article) => (
              <article key={article.id} className="journal-card">
                <Link to={`/journal/${article.slug}`} className="journal-media-wrap img-editorial">
                  <img src={article.image} alt={article.title} loading="lazy" />
                  <span className="journal-category mono-meta">{article.category}</span>
                </Link>
                <div className="journal-info">
                  <div className="journal-meta mono-meta">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="journal-title">
                    <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="journal-summary">{article.summary}</p>
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

      {/* 8. INQUIRY / COMMISSION BANNER */}
      <section className="inquiry-banner-section section-spacing">
        <div className="container">
          <div className="inquiry-box">
            <div className="inquiry-content">
              <span className="section-label">PRIVATE COMMISSIONS</span>
              <h2>Ready to discuss your visionary architectural commission?</h2>
              <p>
                Our partners personally review all prospective residential, commercial, and masterplanning inquiries across Dubai, the GCC, and internationally.
              </p>
              <div className="inquiry-actions">
                <Link to="/contact" className="btn-primary">
                  <span>Schedule Private Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>
                <a href="tel:+97148219000" className="btn-secondary">
                  <span>Direct Studio Line: +971 4 821 9000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
