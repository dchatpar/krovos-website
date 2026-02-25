"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/glass-card";
import {
  BentoGrid,
  BentoCard,
  BentoCardHeader,
  BentoCardContent,
  BentoCardAction,
} from "@/components/ui/bento-grid";
import {
  ArrowRight,
  Calendar,
  User,
  Clock,
  Eye,
  MessageSquare,
  Share2,
  BookOpen,
  TrendingUp,
  Zap,
  Brain,
  Code,
  Workflow,
  Link as LinkIcon,
  Sparkles,
  Filter,
  Search,
  ChevronRight,
  Bookmark,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Posts", count: 24 },
    { id: "ai", label: "AI & Machine Learning", count: 8 },
    { id: "automation", label: "Automation", count: 12 },
    { id: "development", label: "Development", count: 6 },
    { id: "workflow", label: "Workflow Optimization", count: 10 },
    { id: "integration", label: "Integration", count: 4 },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.85_0.12_145)] via-[oklch(0.78_0.15_155)] to-[oklch(0.72_0.18_165)] animate-gradient" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 text-center md:py-32"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="mb-6 animate-pulse-slow glass-card border-gray-300">
                <BookOpen className="mr-2 h-4 w-4" />
                Insights & Updates
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
              style={{ fontVariationSettings: '"wght" 800' }}
            >
              <span className="block bg-gradient-to-r from-[oklch(0.65_0.25_20)] via-[oklch(0.65_0.25_280)] to-[oklch(0.65_0.25_180)] bg-clip-text text-transparent">
                Automation Insights
              </span>
                <span className="block mt-2 text-3xl sm:text-4xl text-gray-700">
                Latest Trends, Tips & Tutorials
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-gray-600"
            >
              Stay ahead with expert insights on AI automation, workflow optimization, and the
              latest technology trends transforming businesses.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles, tutorials, and insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl glass-card border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Categories Filter */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "glass-card border-primary/30 bg-primary/10 text-primary"
                      : "glass-card border-gray-200/30 hover:border-primary/20"
                  }`}
                >
                  <span className="font-medium">{category.label}</span>
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <GlassCard
                gradient="primary"
                blur="lg"
                hoverEffect={true}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8">
                    <Badge className="mb-4 glass-card border-gray-300">
                      <Sparkles className="mr-2 h-3 w-3" />
                      Featured
                    </Badge>

                    <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-2 h-4 w-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-2 h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="mr-2 h-4 w-4" />
                        {featuredPost.views}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-gray-100 text-sm backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Button className="glass-card border-primary/30">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="ghost" className="border-gray-300">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" className="border-gray-300">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="relative min-h-[300px] bg-gradient-to-br from-primary/20 to-secondary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📚</div>
                        <p className="text-gray-600">Featured Article</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                Latest Articles
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({filteredPosts.length} posts)
                </span>
              </h2>
              <Button variant="ghost" className="border-gray-200/30">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <BentoGrid columns={3} gap="lg" animate={true}>
              {filteredPosts.map((post, index) => (
                <BentoCard
                  key={index}
                  span={index % 4 === 0 ? 2 : 1}
                  rowSpan={1}
                  delay={index * 0.05}
                  gradient={post.gradient as "primary" | "secondary" | "accent"}
                  hoverEffect={true}
                >
                  <BentoCardHeader
                    title={post.title}
                    description={post.excerpt}
                    icon={<post.icon className="h-5 w-5" />}
                    badge={post.categoryLabel}
                  />

                  <BentoCardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full bg-gray-100 text-xs backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 rounded-full bg-gray-50 text-xs">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="mr-1 h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center text-gray-500">
                            <Eye className="mr-1 h-3 w-3" />
                            {post.views}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MessageSquare className="mr-1 h-3 w-3" />
                            {post.comments}
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="mr-1 h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </BentoCardContent>

                  <BentoCardAction>
                    <div className="flex items-center justify-between">
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          className="glass-card border-transparent hover:border-primary/20"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>

                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </BentoCardAction>
                </BentoCard>
              ))}
            </BentoGrid>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <GlassCard gradient="primary" blur="lg" className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest automation insights, tutorials, and industry news delivered directly
                to your inbox.
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg glass-card border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button className="glass-card border-primary/30">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-3 text-sm text-gray-500">No spam. Unsubscribe at any time.</p>
              </div>
            </GlassCard>
          </motion.div>
        </Container>
      </Section>

    </>
  );
}

const featuredPost = {
  title: "The Future of AI-Powered Automation: 2026 Trends & Predictions",
  excerpt:
    "Explore how artificial intelligence is revolutionizing business automation, from predictive workflows to self-optimizing systems that learn and adapt in real-time.",
  date: "Jan 30, 2026",
  readTime: "8 min read",
  views: "2.4K",
  tags: ["AI", "Automation", "Future Trends", "Machine Learning", "Business"],
  category: "ai",
  slug: "future-ai-automation-2026",
};

const blogPosts = [
  {
    title: "Quantum DOM Automation: Next-Gen Web Scraping",
    excerpt:
      "How quantum-inspired algorithms are transforming web automation with unprecedented speed and accuracy.",
    author: "Alex Chen",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    views: "1.8K",
    comments: "42",
    tags: ["Quantum", "DOM", "Automation", "Web Scraping", "Algorithms"],
    category: "automation",
    categoryLabel: "Automation",
    gradient: "primary",
    icon: Zap,
    slug: "quantum-dom-automation",
  },
  {
    title: "Building Self-Healing Workflows with AI",
    excerpt:
      "Create automation pipelines that detect and fix errors autonomously using machine learning.",
    author: "Maria Rodriguez",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    views: "3.2K",
    comments: "89",
    tags: ["AI", "Workflow", "Self-Healing", "Machine Learning", "Error Handling"],
    category: "ai",
    categoryLabel: "AI",
    gradient: "secondary",
    icon: Brain,
    slug: "self-healing-workflows-ai",
  },
  {
    title: "Neural Integration: Connecting Systems with AI",
    excerpt:
      "How neural networks are enabling seamless integration between disparate business systems.",
    author: "James Wilson",
    date: "Jan 22, 2026",
    readTime: "7 min read",
    views: "2.1K",
    comments: "56",
    tags: ["Integration", "Neural Networks", "API", "System Connectivity", "AI"],
    category: "integration",
    categoryLabel: "Integration",
    gradient: "accent",
    icon: LinkIcon,
    slug: "neural-integration-systems",
  },
  {
    title: "Cognitive App Development: Interfaces That Learn",
    excerpt: "Building applications that adapt to user behavior and preferences in real-time.",
    author: "Sarah Johnson",
    date: "Jan 20, 2026",
    readTime: "9 min read",
    views: "2.7K",
    comments: "73",
    tags: ["Development", "UI/UX", "Cognitive", "Adaptive", "User Experience"],
    category: "development",
    categoryLabel: "Development",
    gradient: "accent",
    icon: Code,
    slug: "cognitive-app-development",
  },
  {
    title: "Workflow Optimization with Predictive Analytics",
    excerpt:
      "Using data analytics to predict bottlenecks and optimize business processes before they occur.",
    author: "David Kim",
    date: "Jan 18, 2026",
    readTime: "5 min read",
    views: "1.5K",
    comments: "34",
    tags: ["Analytics", "Optimization", "Predictive", "Business Intelligence", "Data"],
    category: "workflow",
    categoryLabel: "Workflow",
    gradient: "primary",
    icon: TrendingUp,
    slug: "workflow-optimization-analytics",
  },
  {
    title: "Automating Event Management at Scale",
    excerpt: "Case study: How we automated conference management for 10,000+ attendees.",
    author: "Lisa Wang",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    views: "4.1K",
    comments: "112",
    tags: ["Case Study", "Events", "Scale", "Automation", "Success Story"],
    category: "automation",
    categoryLabel: "Automation",
    gradient: "secondary",
    icon: Calendar,
    slug: "event-management-automation-scale",
  },
  {
    title: "The Rise of Autonomous Business Processes",
    excerpt: "How businesses are moving from automated to fully autonomous operations.",
    author: "Michael Brown",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    views: "2.9K",
    comments: "67",
    tags: ["Autonomous", "Business", "Future", "Operations", "Innovation"],
    category: "automation",
    categoryLabel: "Automation",
    gradient: "accent",
    icon: Workflow,
    slug: "autonomous-business-processes",
  },
  {
    title: "AI Ethics in Automation: A Practical Guide",
    excerpt: "Ensuring ethical AI implementation in business automation systems.",
    author: "Emma Davis",
    date: "Jan 10, 2026",
    readTime: "11 min read",
    views: "3.5K",
    comments: "94",
    tags: ["Ethics", "AI", "Governance", "Compliance", "Responsible AI"],
    category: "ai",
    categoryLabel: "AI",
    gradient: "secondary",
    icon: Brain,
    slug: "ai-ethics-automation-guide",
  },
];

