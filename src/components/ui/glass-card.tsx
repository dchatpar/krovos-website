"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  blur?: "sm" | "md" | "lg";
  border?: boolean;
  gradient?: "primary" | "secondary" | "accent" | "none";
  animateOnHover?: boolean;
  delay?: number;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  blur = "md",
  border = true,
  gradient = "primary",
  animateOnHover = true,
  delay = 0,
}: GlassCardProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  const gradientClasses = {
    primary: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent",
    secondary: "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent",
    accent: "bg-gradient-to-br from-accent/10 via-accent/5 to-transparent",
    none: "bg-white/5",
  };

  const borderGradient = {
    primary: "border-primary/20",
    secondary: "border-secondary/20",
    accent: "border-accent/20",
    none: "border-gray-200/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        animateOnHover
          ? {
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 },
            }
          : undefined
      }
      className={cn(
        "relative overflow-hidden rounded-2xl",
        blurClasses[blur],
        gradientClasses[gradient],
        border && `border ${borderGradient[gradient]}`,
        "shadow-xl shadow-black/5",
        hoverEffect && "transition-all duration-300 hover:shadow-2xl hover:shadow-black/10",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300",
        hoverEffect && "hover:before:opacity-100",
        className
      )}
    >
      {/* Animated background gradient */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          hoverEffect && "group-hover:opacity-100",
          gradient === "primary" && "bg-gradient-to-br from-primary/5 to-transparent",
          gradient === "secondary" && "bg-gradient-to-br from-secondary/5 to-transparent",
          gradient === "accent" && "bg-gradient-to-br from-accent/5 to-transparent"
        )}
      />

      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>
    </motion.div>
  );
}

interface GlassCardContentProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardContent({ children, className }: GlassCardContentProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

interface GlassCardHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
}

export function GlassCardHeader({ title, description, icon, className }: GlassCardHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      {icon && (
        <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 backdrop-blur-sm">{icon}</div>
      )}
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}

interface GlassCardFeatureProps {
  features: string[];
  icon?: ReactNode;
  className?: string;
}

export function GlassCardFeature({ features, icon, className }: GlassCardFeatureProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center text-sm">
          {icon || <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />}
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
}

interface GlassCardStatsProps {
  stats: Array<{
    label: string;
    value: string;
    change?: string;
  }>;
  className?: string;
}

export function GlassCardStats({ stats, className }: GlassCardStatsProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="rounded-lg bg-white/5 p-3 backdrop-blur-sm">
          <div className="text-2xl font-bold text-gray-900 text-white">{stat.value}</div>
          <div className="text-sm text-gray-600 text-gray-400">{stat.label}</div>
          {stat.change && <div className="mt-1 text-xs text-green-500">{stat.change}</div>}
        </div>
      ))}
    </div>
  );
}

