import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import './ProjectDetails.css';

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = PROJECTS[currentIndex];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="project-details-page">
      {/* 1. CINEMATIC HERO */}
      <section className="detail-hero">
        <div className="detail-hero-media">
          <img src={project.heroImage} alt={project.title} className="detail-hero-img" />
          <div className="detail-hero-overlay"></div>
        </div>

        <div className="container detail-hero-content">
          <Link to="/projects" className="back-to-works mono-meta">
            <ArrowLeft size={14} />
            <span>RETURN TO WORKS</span>
          </Link>

          <div className="detail-hero-meta mono-meta">
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.location}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>

          <h1 className="detail-hero-title">{project.title}</h1>
          <p className="detail-hero-subtitle">{project.subtitle}</p>
        </div>
      </section>

      {/* 2. SPECIFICATIONS & EXECUTIVE SUMMARY */}
      <section className="project-specs-section">
        <div className="container">
          <div className="specs-grid">
            <div className="spec-item">
              <span className="mono-meta spec-label">LOCATION</span>
              <span className="spec-val">{project.location}</span>
            </div>
            <div className="spec-item">
              <span className="mono-meta spec-label">SCALE & AREA</span>
              <span className="spec-val">{project.area}</span>
            </div>
            <div className="spec-item">
              <span className="mono-meta spec-label">COMPLETION</span>
              <span className="spec-val">{project.year}</span>
            </div>
            <div className="spec-item">
              <span className="mono-meta spec-label">DISCIPLINES</span>
              <span className="spec-val">{project.disciplines.join(', ')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL OVERVIEW & CONCEPT */}
      <section className="concept-section section-spacing">
        <div className="container">
          <div className="concept-grid">
            <div className="concept-sidebar">
              <span className="section-label">CURATORIAL VISION</span>
              <h3>Architectural Concept & Dialogue</h3>
            </div>
            <div className="concept-body">
              <p className="lead">{project.overview}</p>
              <p>{project.concept}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY GRID */}
      <section className="detail-gallery-section section-spacing-bottom">
        <div className="container">
          <div className="detail-gallery-grid">
            {project.gallery.map((imgSrc, idx) => (
              <div key={idx} className={`gallery-item item-layout-${idx % 3} img-editorial`}>
                <img src={imgSrc} alt={`${project.title} visual study ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MATERIALITY & CHALLENGES */}
      <section className="technical-section theme-dark section-spacing">
        <div className="container">
          <div className="technical-grid">
            <div className="tech-col">
              <span className="section-label" style={{ color: 'var(--color-dune-gold)' }}>MATERIAL PALETTE</span>
              <h3>Tactile Substances</h3>
              <ul className="materials-list">
                {project.materials.map((mat, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} color="var(--color-dune-gold)" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tech-col">
              <span className="section-label" style={{ color: 'var(--color-dune-gold)' }}>CHALLENGE & SOLUTION</span>
              <h3>Engineering Precision</h3>
              <div className="challenge-box">
                <span className="mono-meta">ARCHITECTURAL CHALLENGE</span>
                <p>{project.challenges}</p>
              </div>
              <div className="solution-box">
                <span className="mono-meta">INNOVATIVE RESOLUTION</span>
                <p>{project.solutions}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEXT / PREVIOUS NAVIGATION */}
      <section className="project-pager-section">
        <div className="container">
          <div className="pager-grid">
            <Link to={`/projects/${prevProject.slug}`} className="pager-link prev-link">
              <span className="mono-meta">
                <ArrowLeft size={14} /> PREVIOUS WORK
              </span>
              <span className="pager-title">{prevProject.title}</span>
            </Link>

            <Link to={`/projects/${nextProject.slug}`} className="pager-link next-link">
              <span className="mono-meta">
                NEXT WORK <ArrowRight size={14} />
              </span>
              <span className="pager-title">{nextProject.title}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
