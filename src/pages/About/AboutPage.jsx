import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_TEAM, STUDIO_MILESTONES, STUDIO_VALUES, VERIFIED_STATS } from '../../data/studio';
import { STUDIO_INFO } from '../../data/navigation';
import './About.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* 1. EDITORIAL HEADER */}
      <section className="about-hero section-spacing-top">
        <div className="container">
          <span className="section-label">THE STUDIO</span>
          <h1 className="about-headline">
            Rooted in Dubai.<br />
            Practicing at the forefront of<br />
            <em>international architectural thought.</em>
          </h1>
          <div className="about-hero-image img-editorial">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
              alt="ARCHITECH Dubai Design Studio and Materiality Atrium"
            />
            <div className="about-image-caption mono-meta">
              DIFC GATE PRECINCT STUDIO &bull; MATERIALITY ARCHIVE
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STUDIO NARRATIVE */}
      <section className="narrative-section section-spacing">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-sidebar">
              <span className="mono-meta">FOUNDED {STUDIO_INFO.establishedYear}</span>
              <p className="narrative-side-text">
                Operating between Dubai, London, and Zurich, ARCHITECH was formed to redefine Middle Eastern architecture through monolithic restraint, climate intelligence, and uncompromising tactile honesty.
              </p>
              <div className="verified-badge mono-meta">
                RIBA CHARTERED PRACTICE
              </div>
            </div>

            <div className="narrative-body">
              <p className="lead">
                The architecture of Dubai is frequently characterized by the speed of its emergence. ARCHITECH stands as a deliberate philosophical counterbalance: an architectural atelier committed to permanence, dignity, and geological resonance.
              </p>
              <p>
                We do not treat buildings as superficial sculptures wrapped in reflective skins. Every commission is approached as an enduring civic or domestic sanctuary, carved from materials that celebrate the physical reality of the Arabian desert: Roman travertine, titanium-reinforced cast concrete, patinated bronzes, and deep-set thermodynamic cantilevers.
              </p>
              <p>
                Our studio functions as an intimate atelier. We intentionally limit our active commissions annually. This discipline guarantees that our founding principals lead each phase personally—from the initial hand sketch and microclimate simulation to the selection of marble blocks in Tuscany and the millimeter supervision of on-site construction in Emirates Hills, Palm Jumeirah, and Abu Dhabi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="values-section section-spacing theme-dark">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label" style={{ color: 'var(--color-dune-gold)' }}>GUIDING PRINCIPLES</span>
              <h2>The Values That Govern Our Practice</h2>
            </div>
          </div>

          <div className="values-grid">
            {STUDIO_VALUES.map((val) => (
              <div key={val.number} className="value-card">
                <span className="value-number mono-meta">{val.number}</span>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & PARTNERS */}
      <section className="team-section section-spacing">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-label">STUDIO LEADERSHIP</span>
              <h2>The Principals</h2>
            </div>
          </div>

          <div className="team-grid">
            {STUDIO_TEAM.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-photo-wrap img-editorial">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role mono-meta">{member.role}</span>
                  <span className="team-credentials mono-meta">{member.credentials}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MILESTONES & HISTORY */}
      <section className="milestones-section section-spacing">
        <div className="container">
          <div className="milestones-header">
            <span className="section-label">CHRONICLE</span>
            <h2>Studio Milestones</h2>
          </div>

          <div className="milestones-timeline">
            {STUDIO_MILESTONES.map((m) => (
              <div key={m.year} className="milestone-row">
                <div className="milestone-year mono-meta">{m.year}</div>
                <div className="milestone-details">
                  <h4 className="milestone-title">{m.title}</h4>
                  <p className="milestone-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
