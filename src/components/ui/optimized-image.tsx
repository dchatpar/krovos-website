"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getImageForOptimizedImage } from "@/lib/image-utils";

interface OptimizedImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  onLoadingComplete?: () => void;
  placeholderType?: "gradient" | "icon" | "pattern";
  category?:
    | "hero"
    | "service"
    | "team"
    | "office"
    | "automation"
    | "ai"
    | "development"
    | "blog"
    | "contact";
}

const categoryConfigs = {
  hero: {
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    icon: "🏢",
    text: "Modern Business Automation",
    pattern: "grid",
  },
  service: {
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    icon: "⚡",
    text: "Automation Service",
    pattern: "dots",
  },
  team: {
    gradient: "from-orange-400 via-red-500 to-pink-500",
    icon: "👥",
    text: "Professional Team",
    pattern: "lines",
  },
  office: {
    gradient: "from-indigo-500 via-purple-500 to-violet-600",
    icon: "🏢",
    text: "Corporate Workspace",
    pattern: "grid",
  },
  automation: {
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    icon: "🤖",
    text: "Robotic Process Automation",
    pattern: "circuit",
  },
  ai: {
    gradient: "from-purple-500 via-pink-500 to-rose-600",
    icon: "🧠",
    text: "Artificial Intelligence",
    pattern: "neural",
  },
  development: {
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    icon: "💻",
    text: "Software Development",
    pattern: "code",
  },
  blog: {
    gradient: "from-amber-500 via-orange-500 to-red-500",
    icon: "📚",
    text: "Technology Insights",
    pattern: "lines",
  },
  contact: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    icon: "📞",
    text: "Contact & Support",
    pattern: "waves",
  },
};

const patternStyles = {
  grid: "bg-[url('/grid.svg')]",
  dots: "bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]",
  lines:
    "bg-[linear-gradient(90deg,transparent_49%,white_50%,transparent_51%)] bg-[length:20px_100%]",
  circuit: "bg-[url('/circuit.svg')]",
  neural: "bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_0)]",
  code: "bg-[linear-gradient(45deg,transparent_49%,white_50%,transparent_51%)]",
  waves: "bg-[url('/waves.svg')]",
};

export function OptimizedImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className,
  priority = false,
  quality = 85,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  onLoadingComplete,
  placeholderType = "gradient",
  category = "hero",
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);
  const [imageWidth, setImageWidth] = useState<number | undefined>(width);
  const [imageHeight, setImageHeight] = useState<number | undefined>(height);
  const [isLoading, setIsLoading] = useState(true);
  const config = categoryConfigs[category];

  useEffect(() => {
    async function loadImage() {
      if (src) {
        setImageSrc(src);
        setImageWidth(width);
        setImageHeight(height);
        return;
      }

      try {
        setIsLoading(true);
        const imageProps = await getImageForOptimizedImage(category, {
          useBest: priority,
        });
        
        if (imageProps.src) {
          setImageSrc(imageProps.src);
          setImageWidth(imageProps.width);
          setImageHeight(imageProps.height);
        }
      } catch (error) {
        console.error('Error loading image:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadImage();
  }, [src, category, priority, width, height]);

  const isExternal = imageSrc?.startsWith("http") || false;

  if (!imageSrc || hasError || isLoading) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-lg flex items-center justify-center animate-pulse",
          `bg-gradient-to-br ${config.gradient}`,
          className
        )}
        style={fill ? undefined : { width, height }}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-10",
            patternStyles[config.pattern as keyof typeof patternStyles]
          )}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative z-10 text-center p-4">
          {placeholderType === "icon" && (
            <div className="text-5xl mb-3">{config.icon}</div>
          )}
          <div className="text-white font-semibold text-lg">{config.text}</div>
          <div className="text-white/70 text-sm mt-1">
            {isLoading ? 'Loading high-quality image...' : 'Image not available'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={fill ? undefined : { width: imageWidth, height: imageHeight }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : imageWidth}
        height={fill ? undefined : imageHeight}
        className={cn(
          "object-cover transition-all duration-300",
          "hover:scale-105 hover:brightness-110",
          fill && "object-cover"
        )}
        priority={priority}
        quality={quality}
        fill={fill}
        sizes={sizes}
        onLoadingComplete={onLoadingComplete}
        unoptimized={!isExternal}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export function HeroImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      priority
      quality={90}
      sizes="100vw"
      className="rounded-xl shadow-2xl"
      category="hero"
      placeholderType="gradient"
    />
  );
}

export function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        quality={80}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg"
      />
    </div>
  );
}

export function AvatarImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-12 w-12 overflow-hidden rounded-full">
      <OptimizedImage src={src} alt={alt} fill quality={75} sizes="48px" className="rounded-full" />
    </div>
  );
}

