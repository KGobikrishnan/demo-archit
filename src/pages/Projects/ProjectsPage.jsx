import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects';
import './Projects.css';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-page">
      {/* 1. EDITORIAL HEADER */}
      <section className="projects-hero section-spacing-top">
        <div className="container">
          <span className="section-label">SELECTED WORKS</span>
          <div className="projects-hero-row">
            <h1 className="projects-headline">
              Portfolio of Built Works &<br />
              <em>Monuments in Progress.</em>
            </h1>
            <p className="lead projects-lead">
              A curated archive of private waterfront estates, commercial headquarters, and cultural pavilions executed with uncompromising craft across Dubai and the Gulf.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="portfolio-filter-bar">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
                <span className="filter-count mono-meta">
                  (
                  {cat === 'All'
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat).length}
                  )
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL PROJECTS GRID */}
      <section className="projects-grid-section section-spacing-bottom">
        <div className="container">
          <div className="editorial-portfolio-grid">
            {filteredProjects.map((project, index) => {
              // Asymmetric grid layout variation classes
              const variationClass = index % 3 === 0
                ? 'col-span-large'
                : index % 3 === 1
                ? 'col-span-medium'
                : 'col-span-portrait';

              return (
                <article key={project.id} className={`portfolio-item ${variationClass}`}>
                  <Link to={`/projects/${project.slug}`} className="portfolio-media-box img-editorial">
                    <img src={project.heroImage} alt={project.title} loading="lazy" />
                    <div className="portfolio-overlay-meta">
                      <span className="mono-meta">{project.category} &bull; {project.year}</span>
                      <span className="mono-meta">{project.area}</span>
                    </div>
                  </Link>

                  <div className="portfolio-content">
                    <div className="portfolio-location mono-meta">{project.location}</div>
                    <h2 className="portfolio-title">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    <p className="portfolio-subtitle">{project.subtitle}</p>
                    <Link to={`/projects/${project.slug}`} className="btn-link view-case-link">
                      <span>Examine Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
