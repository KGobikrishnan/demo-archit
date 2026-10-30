import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO, NAV_LINKS, SOCIAL_LINKS } from '../../data/navigation';
import './Footer.css';

export default function StudioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="studio-footer theme-dark">
      <div className="container">
        {/* Footer Top: Invitation Statement */}
        <div className="footer-top">
          <div className="footer-headline">
            <span className="section-label">COMMISSIONS & INQUIRIES</span>
            <h2>Let us realize an architectural statement of enduring value.</h2>
          </div>
          <div className="footer-action">
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--color-sandstone-light)', color: 'var(--color-obsidian)', borderColor: 'var(--color-sandstone-light)' }}>
              <span>Initiate Dialogue</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="hairline-divider-dark my-footer-divider"></div>

        {/* Footer Main Columns */}
        <div className="footer-grid">
          {/* Col 1: Brand & Manifesto */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="footer-logo-title">ARCHITECH</span>
              <span className="footer-logo-sub">DUBAI</span>
            </div>
            <p className="footer-manifesto">
              An international architecture and design practice dedicated to monolithic materiality, environmental intelligence, and timeless residential and commercial expressions across the Middle East.
            </p>
            <div className="footer-coordinates mono-meta">
              <span>{STUDIO_INFO.coordinates}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col links-col">
            <span className="mono-meta col-title">DISCOVER</span>
            <ul className="footer-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Disciplines */}
          <div className="footer-col disciplines-col">
            <span className="mono-meta col-title">DISCIPLINES</span>
            <ul className="footer-nav-list">
              <li><Link to="/services" className="footer-nav-link">Private Residences</Link></li>
              <li><Link to="/services" className="footer-nav-link">Commercial Headquarters</Link></li>
              <li><Link to="/services" className="footer-nav-link">Interior Architecture</Link></li>
              <li><Link to="/services" className="footer-nav-link">Masterplanning</Link></li>
              <li><Link to="/services" className="footer-nav-link">Climate Engineering</Link></li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Presence */}
          <div className="footer-col contact-col">
            <span className="mono-meta col-title">DUBAI STUDIO</span>
            <address className="footer-address">
              <p>{STUDIO_INFO.location}</p>
              <p className="footer-email">
                <a href={`mailto:${STUDIO_INFO.inquiriesEmail}`}>{STUDIO_INFO.inquiriesEmail}</a>
              </p>
              <p className="footer-phone">
                <a href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}>{STUDIO_INFO.phone}</a>
              </p>
              <p className="footer-hours mono-meta">{STUDIO_INFO.workingHours}</p>
            </address>
          </div>
        </div>

        <div className="hairline-divider-dark my-footer-divider"></div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy mono-meta">
            &copy; {currentYear} {STUDIO_INFO.legalName}. All rights reserved.
          </div>

          <div className="footer-socials">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.label}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                {soc.label}
              </a>
            ))}
          </div>

          <div className="footer-legal mono-meta">
            <span>RIBA CHARTERED PRACTICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
