import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, STUDIO_INFO } from '../../data/navigation';
import './Navbar.css';

export default function StudioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`studio-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <Link to="/" className="brand-logo" aria-label="ARCHITECH Dubai Home">
            <span className="logo-title">ARCHITECH</span>
            <span className="logo-sub">DUBAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {NAV_LINKS.map((item) => (
                <li key={item.path} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action */}
          <div className="header-action">
            <Link to="/contact" className="commission-cta">
              <span>Commission Inquiry</span>
              <ArrowUpRight size={15} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <span className="mono-meta">{STUDIO_INFO.establishedYear} — DUBAI</span>
            <span className="mono-meta">{STUDIO_INFO.coordinates}</span>
          </div>

          <nav className="mobile-nav-links">
            {NAV_LINKS.map((item, idx) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="mobile-nav-item"
              >
                <span className="mobile-item-num">0{idx + 1}</span>
                <span className="mobile-item-label">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <div className="mobile-footer-col">
              <span className="mono-meta">STUDIO LOCATION</span>
              <p>{STUDIO_INFO.location}</p>
            </div>
            <div className="mobile-footer-col">
              <span className="mono-meta">DIRECT INQUIRIES</span>
              <p>{STUDIO_INFO.inquiriesEmail}</p>
              <p>{STUDIO_INFO.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
