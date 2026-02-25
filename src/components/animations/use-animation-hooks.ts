/**
 * Custom hooks for animation functionality
 * Provides reusable hooks for scroll, parallax, and interactive animations
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { scrollThresholds, parallaxConfig } from './animation-utils';

/**
 * Hook for scroll-triggered animations with performance optimizations
 */
export function useScrollAnimation(
  options: {
    threshold?: number;
    once?: boolean;
    amount?: 'some' | 'all';
    margin?: string;
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: options.amount || 'some',
    once: options.once || true,
    margin: options.margin || '-100px' as any,
  });

  return { ref, isInView };
}

/**
 * Hook for parallax effects based on scroll position
 */
export function useParallax(
  intensity: keyof typeof parallaxConfig.intensity = 'normal',
  direction: 'vertical' | 'horizontal' = 'vertical'
) {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  
  const yTransform = useTransform(
    scrollY,
    [0, 1000],
    [0, parallaxConfig.intensity[intensity] * 100]
  );
  
  const xTransform = useTransform(
    scrollY,
    [0, 1000],
    [0, parallaxConfig.intensity[intensity] * 100]
  );

  const transform = direction === 'vertical' 
    ? { y: yTransform }
    : { x: xTransform };

  return { ref, transform };
}

/**
 * Hook for magnetic button effects
 */
export function useMagneticEffect(strength = 0.3) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const strengthFactor = strength * Math.min(rect.width, rect.height) / 100;
    
    setPosition({
      x: distanceX * strengthFactor,
      y: distanceY * strengthFactor,
    });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, position };
}

/**
 * Hook for animated counters
 */
export function useAnimatedCounter(
  targetValue: number,
  duration = 2000,
  startImmediately = true
) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateCounter = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [targetValue, duration, isAnimating]);

  useEffect(() => {
    if (startImmediately) {
      animateCounter();
    }
  }, [animateCounter, startImmediately]);

  return { count, isAnimating, animateCounter };
}

/**
 * Hook for hover animations with spring physics
 */
export function useHoverAnimation(scale = 1.05, rotate = 0) {
  const scaleValue = useMotionValue(1);
  const rotateValue = useMotionValue(0);
  const scaleSpring = useSpring(scaleValue, { stiffness: 300, damping: 15 });
  const rotateSpring = useSpring(rotateValue, { stiffness: 200, damping: 10 });

  const handleMouseEnter = useCallback(() => {
    scaleValue.set(scale);
    rotateValue.set(rotate);
  }, [scale, rotate, scaleValue, rotateValue]);

  const handleMouseLeave = useCallback(() => {
    scaleValue.set(1);
    rotateValue.set(0);
  }, [scaleValue, rotateValue]);

  return {
    scale: scaleSpring,
    rotate: rotateSpring,
    handleMouseEnter,
    handleMouseLeave,
  };
}

/**
 * Hook for scroll progress tracking
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return { progress };
}

/**
 * Hook for reduced motion preferences
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for viewport-based animations
 */
export function useViewportAnimation(
  threshold: keyof typeof scrollThresholds = 'once',
  direction: 'vertical' | 'horizontal' = 'vertical'
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: scrollThresholds[threshold],
        rootMargin: direction === 'vertical' ? '0px 0px -100px 0px' : '0px -100px 0px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, direction]);

  return { ref, isVisible };
}

/**
 * Hook for staggered animations
 */
export function useStaggerAnimation(
  itemCount: number,
  staggerDelay = 0.1,
  startDelay = 0
) {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    Array(itemCount).fill(false)
  );

  const startAnimation = useCallback(() => {
    animatedItems.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => {
          const newItems = [...prev];
          newItems[index] = true;
          return newItems;
        });
      }, (startDelay + index * staggerDelay) * 1000);
    });
  }, [staggerDelay, startDelay, animatedItems]);

  return { animatedItems, startAnimation };
}