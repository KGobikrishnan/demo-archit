import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { APPROACH_STEPS } from '../../data/services';
import './Approach.css';

export default function ApproachPage() {
  return (
    <div className="approach-page">
      {/* 1. HERO */}
      <section className="approach-hero section-spacing-top">
        <div className="container">
          <span className="section-label">METHODOLOGY & DISCIPLINE</span>
          <h1 className="approach-headline">
            The 6-Stage Architectural Framework.<br />
            <em>Rigorous physics meets visionary artistry.</em>
          </h1>
          <p className="lead" style={{ maxWidth: '800px', marginTop: '1.5rem', marginBottom: '4rem' }}>
            Transforming prime desert topography into international landmarks requires an unyielding sequence of research, computational simulation, master craftsmanship, and client collaboration.
          </p>
        </div>
      </section>

      {/* 2. THE 6 STAGES TIMELINE */}
      <section className="approach-timeline-section section-spacing-bottom">
        <div className="container">
          <div className="approach-stages-list">
            {APPROACH_STEPS.map((step, idx) => (
              <div key={idx} className="approach-stage-item">
                <div className="stage-marker">
                  <span className="stage-phase-tag mono-meta">{step.phase}</span>
                  <div className="stage-line"></div>
                </div>

                <div className="stage-content">
                  <h2 className="stage-name">{step.name}</h2>
                  <p className="stage-desc">{step.desc}</p>

                  <div className="stage-deliverables-box">
                    <span className="mono-meta deliv-title">KEY DELIVERABLES & MILESTONES</span>
                    <p className="deliv-text">{step.deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MATERIALITY & PRECISION AUDIT */}
      <section className="approach-craft-section theme-dark section-spacing">
        <div className="container">
          <div className="craft-grid">
            <div className="craft-text">
              <span className="section-label" style={{ color: 'var(--color-dune-gold)' }}>MATERIAL SOURCING</span>
              <h2>Direct Quarry Selection & Millimeter Tolerances</h2>
              <p>
                We do not select stone from catalogue brochures. Our partners travel directly to the quarries of Carrara, Rapolano, and Tivoli to inspect individual mineral strata under natural sunlight.
              </p>
              <p>
                By commissioning 1:1 full-scale physical mockups of facade junctions and interior millwork, we eliminate unexpected deviations before construction begins on-site.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--color-sandstone-light)', color: 'var(--color-obsidian)', borderColor: 'var(--color-sandstone-light)' }}>
                  <span>Request Architectural Brief</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div className="craft-visual img-editorial">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Direct quarry stone inspection and architectural fabrication"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
