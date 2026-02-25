// Image utilities for optimized images
// This module provides fallback images and image metadata

export interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

// Default fallback images by category
const defaultImages: Record<string, string> = {
  hero: "https://placehold.co/1200x800/2563eb/white?text=Krovos+Automation",
  service: "https://placehold.co/800x600/22c55e/white?text=Automation+Services",
  team: "https://placehold.co/400x400/f97316/white?text=Our+Team",
  office: "https://placehold.co/800x600/8b5cf6/white?text=Our+Office",
  automation: "https://placehold.co/800x600/06b6d4/white?text=Automation",
  ai: "https://placehold.co/800x600/a855f7/white?text=AI+Solutions",
  development: "https://placehold.co/800x600/10b981/white?text=Development",
  blog: "https://placehold.co/800x600/f59e0b/white?text=Blog",
  contact: "https://placehold.co/800x600/0ea5e9/white?text=Contact+Us",
};

// Get image URL for OptimizedImage component
export function getImageForOptimizedImage(
  category: string,
  _options?: { width?: number; height?: number }
): string {
  // Return the default image for the category or a placeholder
  return defaultImages[category] || defaultImages.hero;
}

// Get all available images
export function getAllImages(): Record<string, string> {
  return { ...defaultImages };
}
