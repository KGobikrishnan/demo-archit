import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../data/services';
import './Services.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* 1. HERO */}
      <section className="services-hero section-spacing-top">
        <div className="container">
          <span className="section-label">STUDIO DISCIPLINES</span>
          <h1 className="services-headline">
            Comprehensive Spatial Mastery.<br />
            <em>From macro-urban scale to tactile micro-detail.</em>
          </h1>
          <p className="lead" style={{ maxWidth: '780px', marginTop: '1.5rem', marginBottom: '3.5rem' }}>
            We provide an integrated suite of architectural, interior, and climate disciplines, eliminating friction between the external envelope and internal soul of each commission.
          </p>
        </div>
      </section>

      {/* 2. DETAILED SERVICE PANELS */}
      <section className="services-list-section section-spacing-bottom">
        <div className="container">
          <div className="services-vertical-stack">
            {SERVICES.map((service, index) => (
              <article key={service.id} className="service-deep-panel">
                <div className="service-panel-grid">
                  <div className="service-panel-visual img-editorial">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>

                  <div className="service-panel-content">
                    <span className="service-num mono-meta">{service.number} / 04</span>
                    <h2 className="service-title">{service.title}</h2>
                    <h3 className="service-sub-title">{service.subtitle}</h3>
                    <p className="service-summary-text">{service.summary}</p>

                    <div className="service-capabilities-block">
                      <span className="mono-meta capabilities-label">KEY CAPABILITIES</span>
                      <ul className="capabilities-checklist">
                        {service.capabilities.map((cap, i) => (
                          <li key={i}>{cap}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-panel-actions">
                      <Link to="/contact" className="btn-primary">
                        <span>Commission This Discipline</span>
                        <ArrowUpRight size={15} />
                      </Link>
                      <Link to="/projects" className="btn-link">
                        <span>View Completed Reference Works</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
