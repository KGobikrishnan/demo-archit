import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="not-found-page section-spacing" style={{ textAlign: 'center', minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <span className="section-label">PAGE NOT FOUND</span>
        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', margin: '1rem 0' }}>404</h1>
        <p className="lead" style={{ maxWidth: '550px', margin: '0 auto 2.5rem auto' }}>
          The architectural coordinates you are seeking have been relocated or do not exist in our active archives.
        </p>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} />
          <span>Return to Studio Home</span>
        </Link>
      </div>
    </div>
  );
}
