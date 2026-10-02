import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: 'up' | 'none';
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion accessibility
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const element = domRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  const motionClass = direction === 'up'
    ? isVisible
      ? 'translate-y-0 opacity-100'
      : 'translate-y-6 opacity-0 pointer-events-none'
    : isVisible
      ? 'opacity-100'
      : 'opacity-0 pointer-events-none';

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className={`transition-all will-change-[transform,opacity] ${motionClass} ${className}`}
    >
      {children}
    </div>
  );
};
