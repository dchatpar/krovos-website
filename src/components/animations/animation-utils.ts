/**
 * Core animation utilities for Krovos website
 * Provides reusable animation presets, easing functions, and utilities
 */

import { Variants } from 'framer-motion';

// Animation presets for common use cases
export const animationPresets = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleOut: {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 0, scale: 0.8 },
  },

  // Slide animations
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },

  // Complex animations
  popIn: {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  },
  flipIn: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  },
};

// Easing functions for smooth animations (cubic-bezier tuples for framer-motion)
export const easingFunctions = {
  // Standard easings
  easeInOut: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  sharp: [0.4, 0, 0.6, 1] as const,

  // Custom easings
  smooth: [0.645, 0.045, 0.355, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  elastic: [0.68, -0.55, 0.265, 1.55] as const,
  back: [0.68, -0.55, 0.265, 1.55] as const,

  // Material Design easings
  materialStandard: [0.4, 0, 0.2, 1] as const,
  materialDecelerate: [0, 0, 0.2, 1] as const,
  materialAccelerate: [0.4, 0, 1, 1] as const,
};

// Animation durations (in seconds)
export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
  pageTransition: 0.4,
  staggerDelay: 0.1,
};

// Stagger animations for lists
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Parallax effect configuration
export const parallaxConfig = {
  intensity: {
    subtle: 0.1,
    normal: 0.2,
    strong: 0.3,
    extreme: 0.5,
  },
  direction: {
    up: -1,
    down: 1,
    left: -1,
    right: 1,
  },
};

// Scroll animation thresholds
export const scrollThresholds = {
  once: 0.1, // Trigger once when 10% visible
  always: 0.5, // Trigger when 50% visible
  fully: 0.9, // Trigger when 90% visible
};

// Performance optimization utilities
export const performanceOptimizations = {
  // Will-change properties for GPU acceleration
  willChange: {
    transform: 'transform',
    opacity: 'opacity',
    all: 'transform, opacity',
  },

  // Reduce motion preferences
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',

  // Hardware acceleration
  hardwareAccelerated: {
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
  },
};

// Utility function to create custom variants
export const createVariants = (
  hidden: Record<string, any>,
  visible: Record<string, any>,
  options?: {
    transition?: Record<string, any>;
    exit?: Record<string, any>;
  }
): Variants => ({
  hidden,
  visible: {
    ...visible,
    transition: options?.transition,
  },
  ...(options?.exit && { exit: options.exit }),
});

// Utility function to combine multiple animations
export const combineVariants = (...variants: Variants[]): Variants => {
  const combined: Variants = {};

  variants.forEach(variant => {
    Object.keys(variant).forEach(key => {
      if (!combined[key]) {
        combined[key] = {};
      }
      combined[key] = { ...combined[key], ...variant[key] };
    });
  });

  return combined;
};

// Type for animation direction
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

// Type for animation preset
export type AnimationPreset = keyof typeof animationPresets;

// Utility to get animation preset with custom options
export const getAnimationPreset = (
  preset: AnimationPreset,
  options?: {
    delay?: number;
    duration?: number;
    ease?: number[];
    once?: boolean;
  }
) => {
  const basePreset = animationPresets[preset];
  
  return {
    ...basePreset,
    visible: {
      ...basePreset.visible,
      transition: {
        ...(typeof basePreset.visible === 'object' && 'transition' in basePreset.visible 
          ? basePreset.visible.transition 
          : {}),
        delay: options?.delay,
        duration: options?.duration,
        ease: options?.ease,
      },
    },
  };
};