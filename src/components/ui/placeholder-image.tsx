import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  category: "hero" | "service" | "team" | "office" | "automation" | "ai" | "development";
  className?: string;
  text?: string;
}

const categoryColors = {
  hero: "from-blue-500 to-purple-600",
  service: "from-green-500 to-teal-600",
  team: "from-orange-500 to-red-600",
  office: "from-indigo-500 to-purple-600",
  automation: "from-cyan-500 to-blue-600",
  ai: "from-purple-500 to-pink-600",
  development: "from-emerald-500 to-green-600",
};

const categoryIcons = {
  hero: "🏢",
  service: "⚡",
  team: "👥",
  office: "🏢",
  automation: "🤖",
  ai: "🧠",
  development: "💻",
};

const categoryTexts = {
  hero: "Modern Office Technology",
  service: "Automation Service",
  team: "Professional Team",
  office: "Corporate Workspace",
  automation: "Robotic Process Automation",
  ai: "Artificial Intelligence",
  development: "Software Development",
};

export function PlaceholderImage({ category, className, text }: PlaceholderImageProps) {
  const colors = categoryColors[category];
  const icon = categoryIcons[category];
  const defaultText = text || categoryTexts[category];

  return (
    <div
      className={cn(
        "relative flex aspect-video items-center justify-center overflow-hidden rounded-lg",
        "bg-gradient-to-br",
        colors,
        className
      )}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 text-center">
        <div className="mb-2 text-4xl">{icon}</div>
        <div className="text-white/90 font-medium">{defaultText}</div>
        <div className="mt-1 text-sm text-white/70">Image placeholder - will be replaced</div>
      </div>
    </div>
  );
}

export function HeroPlaceholder() {
  return (
    <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      <div className="relative z-10 flex h-full items-center justify-center p-8 text-center">
        <div>
          <div className="mb-4 text-6xl">🏢</div>
          <h2 className="mb-2 text-3xl font-bold text-white">Modern Business Automation</h2>
          <p className="text-white/80">
            High-quality images coming soon from our automated scraper
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServiceCardPlaceholder({ serviceName }: { serviceName: string }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div className="mb-2 text-3xl">⚡</div>
        <h3 className="text-xl font-bold text-white">{serviceName}</h3>
        <p className="text-white/80 text-sm">Automation service image</p>
      </div>
    </div>
  );
}

export function TeamMemberPlaceholder({ name, role }: { name: string; role: string }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-full border-4 border-white shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <div className="mb-2 text-4xl">👤</div>
          <div className="text-white font-medium">{name}</div>
          <div className="text-white/80 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
}

