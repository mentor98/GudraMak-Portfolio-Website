import React, { useEffect, useRef, useState } from 'react';

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'zoom-in'
  | 'zoom-up'
  | 'zoom-down'
  | 'random';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  variant?: AnimationVariant;
}

const ALL_RANDOM_VARIANTS: Exclude<AnimationVariant, 'random'>[] = [
  'zoom-in',
  'zoom-up',
  'fade-up',
  'fade-down',
];

const getInitialTransform = (variant: Exclude<AnimationVariant, 'random'>) => {
  switch (variant) {
    case 'zoom-in':
      return 'scale3d(0.86, 0.86, 1)';
    case 'zoom-up':
      return 'translate3d(0, 40px, 0) scale3d(0.88, 0.88, 1)';
    case 'zoom-down':
      return 'translate3d(0, -40px, 0) scale3d(0.88, 0.88, 1)';
    case 'fade-down':
      return 'translate3d(0, -36px, 0)';
    case 'fade-up':
    default:
      return 'translate3d(0, 36px, 0)';
  }
};

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 650,
  className = '',
  threshold = 0.1,
  variant = 'fade-up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  // Determine stable variant on mount (handles 'random' without flickering on rerender)
  const [activeVariant] = useState<Exclude<AnimationVariant, 'random'>>(() => {
    if (variant === 'random') {
      const idx = Math.floor(Math.random() * ALL_RANDOM_VARIANTS.length);
      return ALL_RANDOM_VARIANTS[idx];
    }
    return variant;
  });

  useEffect(() => {
    // If IntersectionObserver is not available (e.g. older environments), show immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const initialTransform = getInitialTransform(activeVariant);
  const finalTransform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? finalTransform : initialTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        transformOrigin: activeVariant.startsWith('zoom') ? 'center center' : 'top center',
      }}
    >
      {children}
    </div>
  );
};
