"use client";

import { ReactNode, useRef, useState, useCallback, memo, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export type GridSize = 1 | 2;
export type CardSize = "1x1" | "2x1" | "1x2" | "2x2";
export type GradientType = "primary" | "secondary" | "accent" | "rainbow" | "cyberpunk" | "neon" | "glass";
export type AnimationPreset = "fade" | "slide" | "scale" | "blur" | "magnetic";
export type ContentType = "stats" | "features" | "testimonial" | "cta" | "case-study" | "dashboard";

export interface BentoGridProps {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3 | 4 | 5;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  animationPreset?: AnimationPreset;
  magneticEffect?: boolean;
  glassEffect?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  autoRows?: boolean;
  density?: "compact" | "normal" | "spacious";
}

export function BentoGrid({
  children,
  className,
  columns = 3,
  gap = "md",
  animate = true,
  animationPreset = "fade",
  magneticEffect = false,
  glassEffect = true,
  maxWidth = "full",
  autoRows = true,
  density = "normal",
}: BentoGridProps) {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
  };

  const gapClasses = {
    xs: "gap-2 md:gap-3",
    sm: "gap-4 md:gap-5",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-10",
    xl: "gap-10 md:gap-12",
  };

  const maxWidthClasses = {
    sm: "max-w-4xl mx-auto",
    md: "max-w-6xl mx-auto",
    lg: "max-w-7xl mx-auto",
    xl: "max-w-8xl mx-auto",
    full: "",
  };

  const densityClasses = {
    compact: "auto-rows-[250px]",
    normal: "auto-rows-[300px]",
    spacious: "auto-rows-[350px]",
  };

  const animationVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.15,
        },
      },
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.25,
        },
      },
    },
    magnetic: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          staggerChildren: 0.15,
          delayChildren: 0.3,
        },
      },
    },
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!magneticEffect || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".bento-card");
    
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      cardElement.addEventListener("mousemove", (e) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((centerX - x) / centerX) * 5;
        
        gsap.to(cardElement, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      cardElement.addEventListener("mouseleave", () => {
        gsap.to(cardElement, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, [magneticEffect]);

  return (
    <motion.div
      ref={containerRef}
      initial={animate ? "hidden" : false}
      animate={animate ? "visible" : false}
      variants={animationVariants[animationPreset]}
      className={cn(
        "grid",
        gridClasses[columns],
        gapClasses[gap],
        maxWidthClasses[maxWidth],
        autoRows && densityClasses[density],
        glassEffect && "backdrop-blur-xs",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: CardSize;
  span?: number;
  rowSpan?: number;
  delay?: number;
  hoverEffect?: boolean;
  gradient?: GradientType;
  contentType?: ContentType;
  glassEffect?: boolean;
  borderGlow?: boolean;
  shimmerEffect?: boolean;
  revealContent?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

export const BentoCard = memo(function BentoCard({
  children,
  className,
  size = "1x1",
  span,
  rowSpan,
  delay = 0,
  hoverEffect = true,
  gradient = "primary",
  contentType: _contentType,
  glassEffect = true,
  borderGlow = false,
  shimmerEffect = false,
  revealContent = false,
  interactive = true,
  onClick,
}: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(!revealContent);
  const cardRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    "1x1": "col-span-1 row-span-1",
    "2x1": "col-span-1 md:col-span-2 row-span-1",
    "1x2": "col-span-1 row-span-1 md:row-span-2",
    "2x2": "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  };

  const spanClass = span ? `col-span-${span}` : "";
  const rowSpanClass = rowSpan ? `row-span-${rowSpan}` : "";

  const gradientClasses = {
    primary: "bg-gradient-to-br from-primary/5 via-primary/2 to-transparent",
    secondary: "bg-gradient-to-br from-secondary/5 via-secondary/2 to-transparent",
    accent: "bg-gradient-to-br from-accent/5 via-accent/2 to-transparent",
    rainbow: "bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5",
    cyberpunk: "bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10",
    neon: "bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15",
    glass: "bg-gradient-to-br from-gray-100 via-gray-50 to-transparent",
  };

  const borderGradient = {
    primary: "border-primary/15",
    secondary: "border-secondary/15",
    accent: "border-accent/15",
    rainbow: "border-transparent",
    cyberpunk: "border-transparent",
    neon: "border-transparent",
    glass: "border-gray-200",
  };

  const glowClasses = {
    primary: "shadow-glow",
    secondary: "shadow-glow-secondary",
    accent: "shadow-glow-accent",
    rainbow: "shadow-[0_0_40px_rgba(59,130,246,0.3),0_0_80px_rgba(168,85,247,0.2)]",
    cyberpunk: "shadow-[0_0_60px_rgba(59,130,246,0.4),0_0_120px_rgba(168,85,247,0.3)]",
    neon: "shadow-[0_0_80px_rgba(34,197,94,0.5)]",
    glass: "shadow-glass",
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const _hoverVariants = {
    rest: { scale: 1, y: 0, rotateX: 0, rotateY: 0 },
    hover: {
      scale: 1.03,
      y: -6,
      rotateX: 2,
      rotateY: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
  };

  useGSAP(() => {
    if (!shimmerEffect || !cardRef.current) return;

    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shimmerEffect]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (revealContent) {
      setIsContentVisible(true);
    }
  }, [revealContent]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (revealContent) {
      setTimeout(() => setIsContentVisible(false), 300);
    }
  }, [revealContent]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hoverEffect ? "hover" : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "bento-card group relative overflow-hidden rounded-3xl border",
        sizeClasses[size],
        spanClass,
        rowSpanClass,
        gradientClasses[gradient],
        borderGradient[gradient],
        glassEffect && "backdrop-blur-md",
        borderGlow && glowClasses[gradient],
        interactive && "cursor-pointer",
        "shadow-card",
        hoverEffect && "transition-all duration-500 hover:shadow-card-hover",
        shimmerEffect && "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-gray-100 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
        className
      )}
      style={
        shimmerEffect
          ? ({
              "--mouse-x": "0px",
              "--mouse-y": "0px",
              background: `radial-gradient(600px at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)`,
            } as React.CSSProperties)
          : undefined
      }
    >
      {/* Glassmorphism overlay */}
      {glassEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent backdrop-blur-xl" />
      )}

      {/* Animated gradient overlay */}
      <motion.div
        className={cn(
          "absolute inset-0 opacity-0",
          gradient === "primary" && "bg-gradient-to-br from-primary/20 to-transparent",
          gradient === "secondary" && "bg-gradient-to-br from-secondary/20 to-transparent",
          gradient === "accent" && "bg-gradient-to-br from-accent/20 to-transparent",
          gradient === "rainbow" &&
            "bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20",
          gradient === "cyberpunk" &&
            "bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30",
          gradient === "neon" && "bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40",
          gradient === "glass" && "bg-gradient-to-br from-gray-200 to-transparent"
        )}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.01]" />

      {/* Inner glow edges */}
      <div className="absolute inset-0 rounded-3xl border border-gray-100" />

      {/* Gradient border */}
      {borderGlow && (
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full p-6 md:p-8">
        <AnimatePresence>
          {isContentVisible && (
            <motion.div
              key="content"
              initial={revealContent ? "hidden" : false}
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="h-full"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent opacity-50" />
      <div className="absolute top-0 right-0 h-12 w-1 bg-gradient-to-b from-secondary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 h-12 w-1 bg-gradient-to-t from-accent to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 h-1 w-12 bg-gradient-to-l from-primary to-transparent opacity-50" />

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden">
          {useMemo(() => 
            [...Array(5)].map((_, i) => {
              const startX = `${(i * 20) % 100}%`;
              const startY = `${(i * 25) % 100}%`;
              const endX = `${((i + 3) * 20) % 100}%`;
              const endY = `${((i + 3) * 25) % 100}%`;
              return (
                <motion.div
                  key={i}
                  className="absolute h-[1px] w-[1px] bg-primary"
                  initial={{ x: startX, y: startY, opacity: 0 }}
                  animate={{ x: [startX, endX], y: [startY, endY], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              );
            }), [])
          }
        </div>
      )}
    </motion.div>
  );
});

export interface BentoCardHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  badge?: string;
  className?: string;
  animate?: boolean;
  gradient?: GradientType;
}

export function BentoCardHeader({
  title,
  description,
  icon,
  badge,
  className,
  animate = true,
  gradient = "primary",
}: BentoCardHeaderProps) {
  const badgeColors = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    rainbow: "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary",
    cyberpunk: "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 text-white",
    neon: "bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 text-white",
    glass: "bg-gray-100 text-gray-900",
  };

  const iconBackgrounds = {
    primary: "bg-primary/10",
    secondary: "bg-secondary/10",
    accent: "bg-accent/10",
    rainbow: "bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10",
    cyberpunk: "bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20",
    neon: "bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20",
    glass: "bg-gray-100",
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={animate ? "hidden" : false}
      animate={animate ? "visible" : false}
      variants={titleVariants}
      className={cn("mb-6 md:mb-8", className)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={cn(
                "rounded-2xl p-3 backdrop-blur-sm",
                iconBackgrounds[gradient],
                "border border-gray-200"
              )}
            >
              {icon}
            </motion.div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {title}
              </h3>
              {badge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={cn(
                    "inline-block rounded-full px-3 py-1 text-xs font-medium",
                    badgeColors[gradient]
                  )}
                >
                  {badge}
                </motion.span>
              )}
            </div>
            {description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-gray-600"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface BentoCardContentProps {
  children: ReactNode;
  className?: string;
}

export function BentoCardContent({ children, className }: BentoCardContentProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

interface BentoCardFeaturesProps {
  features: string[];
  limit?: number;
  className?: string;
}

export function BentoCardFeatures({ features, limit = 3, className }: BentoCardFeaturesProps) {
  const displayFeatures = features.slice(0, limit);

  return (
    <div className={cn("space-y-2", className)}>
      {displayFeatures.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
      {features.length > limit && (
        <div className="pt-2 text-xs text-gray-500">
          +{features.length - limit} more features
        </div>
      )}
    </div>
  );
}

interface BentoCardStatsProps {
  stats: Array<{
    label: string;
    value: string;
    trend?: "up" | "down" | "neutral";
  }>;
  className?: string;
}

export function BentoCardStats({ stats, className }: BentoCardStatsProps) {
  const trendIcons = {
    up: "↗",
    down: "↘",
    neutral: "→",
  };

  const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-gray-500",
  };

  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="rounded-lg bg-gray-100 p-3 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            {stat.trend && (
              <span className={cn("text-sm", trendColors[stat.trend])}>
                {trendIcons[stat.trend]}
              </span>
            )}
          </div>
          <div className="mt-1 text-xs text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

interface BentoCardActionProps {
  children: ReactNode;
  className?: string;
}

export function BentoCardAction({ children, className }: BentoCardActionProps) {
  return <div className={cn("mt-auto pt-6", className)}>{children}</div>;
}

