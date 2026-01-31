import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className,
  direction = 'up',
  distance = 20 
}: FadeInProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }
  
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  scale?: number
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.5,
  className,
  scale = 0.95 
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale,
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
}

export function StaggerContainer({ 
  children, 
  className,
  staggerDelay = 0.1,
  initialDelay = 0 
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ 
  children, 
  className,
  speed = 0.5 
}: ParallaxSectionProps) {
  return (
    <motion.div
      initial={{ y: 100 * speed }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
}

export function ScrollReveal({ 
  children, 
  className,
  threshold = 0.1 
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface HoverEffectProps {
  children: ReactNode
  className?: string
  scale?: number
  rotate?: number
}

export function HoverEffect({ 
  children, 
  className,
  scale = 1.05,
  rotate = 0 
}: HoverEffectProps) {
  return (
    <motion.div
      whileHover={{ 
        scale,
        rotate,
        transition: { duration: 0.2 }
      }}
      className={cn('cursor-pointer', className)}
    >
      {children}
    </motion.div>
  )
}

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({ 
  children, 
  className,
  strength = 0.5 
}: MagneticButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  )
}