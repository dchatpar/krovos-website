'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation, useParallax } from './use-animation-hooks';
import { 
  animationPresets, 
  AnimationPreset, 
  createVariants,
  durations,
  easingFunctions 
} from './animation-utils';

interface ScrollRevealProps {
  children: ReactNode;
  preset?: AnimationPreset;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  customVariants?: any;
  staggerChildren?: boolean;
  amount?: 'some' | 'all';
}

export function ScrollReveal({
  children,
  preset = 'fadeInUp',
  delay = 0,
  duration = durations.normal,
  threshold = 0.1,
  once = true,
  className = '',
  style,
  as = 'div',
  customVariants,
  staggerChildren = false,
  amount = 'some',
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    once,
    amount,
  });

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const baseVariants = customVariants || animationPresets[preset];
  
  const variants = createVariants(
    baseVariants.hidden,
    {
      ...baseVariants.visible,
      transition: {
        ...(typeof baseVariants.visible === 'object' && 'transition' in baseVariants.visible 
          ? baseVariants.visible.transition 
          : {}),
        delay,
        duration,
        ease: easingFunctions.easeOut,
      },
    }
  );

  const containerVariants = staggerChildren 
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }
    : variants;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerChildren ? containerVariants : variants}
      className={className}
      style={{
        ...style,
        willChange: 'transform, opacity',
      }}
      whileInView={staggerChildren ? undefined : 'visible'}
      viewport={{ once, amount: threshold }}
    >
      {staggerChildren ? (
        <motion.div variants={variants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </MotionComponent>
  );
}

// Specialized scroll reveal components for common use cases
export function FadeInUp({
  children,
  ...props
}: Omit<ScrollRevealProps, 'preset'>) {
  return (
    <ScrollReveal preset="fadeInUp" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function FadeInLeft({
  children,
  ...props
}: Omit<ScrollRevealProps, 'preset'>) {
  return (
    <ScrollReveal preset="fadeInLeft" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function FadeInRight({
  children,
  ...props
}: Omit<ScrollRevealProps, 'preset'>) {
  return (
    <ScrollReveal preset="fadeInRight" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function ScaleIn({
  children,
  ...props
}: Omit<ScrollRevealProps, 'preset'>) {
  return (
    <ScrollReveal preset="scaleIn" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function SlideUp({
  children,
  ...props
}: Omit<ScrollRevealProps, 'preset'>) {
  return (
    <ScrollReveal preset="slideUp" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function PopIn({
  children,
  ...props
}: Omit<ScrollRevealProps, 'preset'>) {
  return (
    <ScrollReveal preset="popIn" {...props}>
      {children}
    </ScrollReveal>
  );
}

// Parallax scroll reveal component
interface ParallaxRevealProps extends Omit<ScrollRevealProps, 'preset'> {
  intensity?: 'subtle' | 'normal' | 'strong' | 'extreme';
  direction?: 'vertical' | 'horizontal';
}

export function ParallaxReveal({
  children,
  intensity = 'normal',
  direction = 'vertical',
  ...props
}: ParallaxRevealProps) {
  const { ref, transform } = useParallax(intensity, direction);

  const customVariants = {
    hidden: { opacity: 0, y: direction === 'vertical' ? 50 : 0, x: direction === 'horizontal' ? 50 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: durations.slow,
        ease: easingFunctions.easeOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{
        ...transform,
        willChange: 'transform',
      }}
      initial="hidden"
      animate="visible"
      variants={customVariants}
      className={props.className}
    >
      {children}
    </motion.div>
  );
}
