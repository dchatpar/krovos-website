'use client';

import { motion } from 'framer-motion';
import React, { ReactNode, ElementType } from 'react';
import { useScrollAnimation } from './use-animation-hooks';
import { 
  staggerContainer as createStaggerVariants,
  durations,
  easingFunctions,
  animationPresets,
  AnimationPreset
} from './animation-utils';

interface StaggerContainerProps {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
  childPreset?: AnimationPreset;
  amount?: 'some' | 'all';
  animateOnMount?: boolean;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  threshold = 0.1,
  once = true,
  className = '',
  style,
  as = 'div',
  childPreset = 'fadeInUp',
  amount = 'some',
  animateOnMount = false,
}: StaggerContainerProps) {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    once,
    amount,
  });

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const containerVariants = createStaggerVariants(staggerChildren, delayChildren) as any;

  const childVariants = animationPresets[childPreset] as any;

  const shouldAnimate = animateOnMount ? true : isInView;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
      style={{
        ...style,
        willChange: 'transform, opacity',
      }}
      viewport={{ once, amount: threshold }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={childVariants}
          custom={index}
          transition={{
            delay: index * staggerChildren,
            duration: durations.normal,
            ease: easingFunctions.easeOut,
          }}
        >
          {child}
        </motion.div>
      ))}
    </MotionComponent>
  );
}

// Grid-specific stagger container
interface StaggerGridProps extends Omit<StaggerContainerProps, 'as'> {
  columns?: number;
  gap?: number;
}

export function StaggerGrid({
  children,
  columns = 3,
  gap = 8,
  ...props
}: StaggerGridProps) {
  return (
    <StaggerContainer
      {...props}
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-${gap} ${props.className || ''}`}
    >
      {children}
    </StaggerContainer>
  );
}

// List-specific stagger container
export function StaggerList({
  children,
  ...props
}: Omit<StaggerContainerProps, 'as'>) {
  return (
    <StaggerContainer
      {...props}
      className={`space-y-${props.staggerChildren && props.staggerChildren > 0.2 ? 6 : 4} ${props.className || ''}`}
      as="ul"
    >
      {React.Children.map(children, (child, index) => (
        <motion.li
          key={index}
          variants={animationPresets[props.childPreset || 'fadeInUp'] as any}
          custom={index}
        >
          {child}
        </motion.li>
      ))}
    </StaggerContainer>
  );
}

// Card grid with staggered animations
export function StaggerCardGrid({
  children,
  ...props
}: Omit<StaggerContainerProps, 'as'>) {
  return (
    <StaggerGrid
      {...props}
      className={`${props.className || ''}`}
      childPreset={props.childPreset || 'scaleIn'}
    >
      {children}
    </StaggerGrid>
  );
}

// Feature list with staggered animations
export function StaggerFeatureList({
  children,
  ...props
}: Omit<StaggerContainerProps, 'as'>) {
  return (
    <StaggerList
      {...props}
      childPreset={props.childPreset || 'fadeInLeft'}
      staggerChildren={props.staggerChildren || 0.15}
    >
      {children}
    </StaggerList>
  );
}

// Team member grid with staggered animations
export function StaggerTeamGrid({
  children,
  ...props
}: Omit<StaggerContainerProps, 'as'>) {
  return (
    <StaggerGrid
      {...props}
      columns={4}
      childPreset={props.childPreset || 'popIn'}
      staggerChildren={props.staggerChildren || 0.2}
    >
      {children}
    </StaggerGrid>
  );
}

// Testimonial grid with staggered animations
export function StaggerTestimonialGrid({
  children,
  ...props
}: Omit<StaggerContainerProps, 'as'>) {
  return (
    <StaggerGrid
      {...props}
      columns={3}
      childPreset={props.childPreset || 'fadeInUp'}
      staggerChildren={props.staggerChildren || 0.1}
    >
      {children}
    </StaggerGrid>
  );
}
