import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with hover support
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleHoverCheck = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHoverCheck);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHoverCheck);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div 
        className={`cursor-follower ${isHovering ? 'hovering' : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
    </>
  );
}
