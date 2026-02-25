"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Workflow, 
  Brain, 
  Code, 
  Database, 
  GitMerge, 
  ChevronRight,
  ArrowRight,
  BarChart,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";

// Service data with icons and descriptions
const services = [
  {
    id: "event-automation",
    name: "Event Automation",
    description: "Automate conferences, webinars, and corporate events",
    icon: Zap,
    href: "/services/event-automation",
    color: "from-blue-500 to-cyan-500",
    features: ["Real-time analytics", "Automated scheduling", "AI-powered matchmaking"],
    caseStudy: {
      title: "Tech Conference 2025",
      result: "300% ROI increase"
    }
  },
  {
    id: "workflow-automation",
    name: "Workflow Automation",
    description: "Streamline business processes with intelligent automation",
    icon: Workflow,
    href: "/services/workflow-automation",
    color: "from-purple-500 to-pink-500",
    features: ["Process mapping", "Automated approvals", "Real-time monitoring"],
    caseStudy: {
      title: "Enterprise Process Optimization",
      result: "80% time reduction"
    }
  },
  {
    id: "ai-automation",
    name: "AI & Machine Learning",
    description: "Intelligent automation powered by AI and ML",
    icon: Brain,
    href: "/services/ai-automation",
    color: "from-green-500 to-emerald-500",
    features: ["Predictive analytics", "Natural language processing", "Computer vision"],
    caseStudy: {
      title: "AI-Powered Customer Service",
      result: "95% accuracy rate"
    }
  },
  {
    id: "app-development",
    name: "Custom App Development",
    description: "Build scalable, high-performance applications",
    icon: Code,
    href: "/services/app-development",
    color: "from-orange-500 to-red-500",
    features: ["Full-stack development", "Cloud-native architecture", "DevOps integration"],
    caseStudy: {
      title: "Enterprise SaaS Platform",
      result: "10x performance improvement"
    }
  },
  {
    id: "dom-automation",
    name: "Document Automation",
    description: "Automate document processing and management",
    icon: Database,
    href: "/services/dom-automation",
    color: "from-indigo-500 to-blue-500",
    features: ["OCR processing", "Smart templates", "Compliance tracking"],
    caseStudy: {
      title: "Legal Document Processing",
      result: "90% faster processing"
    }
  },
  {
        id: "integration-automation",
        name: "Integration Automation",
        description: "Seamlessly connect your business systems",
        icon: GitMerge,
    href: "/services/integration-automation",
    color: "from-violet-500 to-purple-500",
    features: ["API integration", "Data synchronization", "Real-time updates"],
    caseStudy: {
      title: "Multi-Platform Integration",
      result: "Unified data ecosystem"
    }
  }
];

// Stats for the mega menu
const stats = [
  { label: "Projects Delivered", value: "250+", icon: BarChart },
  { label: "Happy Clients", value: "150+", icon: Users },
  { label: "Avg. Time Saved", value: "65%", icon: Clock },
  { label: "ROI Improvement", value: "3.2x", icon: TrendingUp }
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);
  const [_isHoveringMenu, setIsHoveringMenu] = React.useState(false);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsHoveringMenu(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsHoveringMenu(false);
      onClose();
    }, 500);
  };

  // Clear timeout on unmount
  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Animation variants
  const menuVariants: any = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const caseStudyVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          />

          {/* Mega Menu */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed left-0 right-0 top-16 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left Column - Services */}
                <div className="col-span-2 p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Our Automation Services
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Comprehensive solutions for modern business challenges
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <motion.div
                          key={service.id}
                          variants={itemVariants}
                          onMouseEnter={() => setHoveredService(service.id)}
                          onMouseLeave={() => setHoveredService(null)}
                          className={cn(
                            "group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300",
                            "hover:border-gray-300 hover:bg-gray-100 hover:shadow-md"
                          )}
                        >
                          <Link href={service.href} className="block">
                            <div className="flex items-start space-x-4">
                              {/* Icon with gradient */}
                              <div className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br",
                                service.color,
                                "shadow-lg"
                              )}>
                                <Icon className="h-6 w-6 text-white" />
                              </div>

                              {/* Content */}
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium text-gray-900 group-hover:text-primary-600">
                                    {service.name}
                                  </h4>
                                  <ChevronRight className="h-4 w-4 text-gray-600 transition-transform group-hover:translate-x-1" />
                                </div>
                                <p className="mt-1 text-sm text-gray-600">
                                  {service.description}
                                </p>
                                
                                {/* Features */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {service.features.map((feature, index) => (
                                    <span
                                      key={index}
                                      className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="rounded-lg bg-primary-500/10 p-2">
                              <Icon className="h-5 w-5 text-primary-400" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-gray-900">
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-600">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column - Featured Case Study */}
                <div className="border-t border-gray-200 bg-gray-50 p-8 lg:border-t-0 lg:border-l">
                  <motion.div
                    variants={caseStudyVariants}
                    className="h-full rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Featured Case Study
                      </h3>
                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700">
                        Success Story
                      </span>
                    </div>

                    {hoveredService ? (
                      // Show hovered service case study
                      (() => {
                        const service = services.find(s => s.id === hoveredService);
                        if (!service) return null;
                        
                        return (
                          <>
                            <div className="mb-4 overflow-hidden rounded-lg">
                              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                                {/* In a real implementation, this would be an Image component */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <service.icon className="h-16 w-16 text-gray-600" />
                                </div>
                              </div>
                            </div>
                            
                            <h4 className="mb-2 text-xl font-bold text-gray-900">
                              {service.caseStudy.title}
                            </h4>
                            <p className="mb-4 text-sm text-gray-600">
                              How {service.name} transformed their business operations
                            </p>
                            
                            <div className="mb-6">
                              <div className="text-3xl font-bold text-green-600">
                                {service.caseStudy.result}
                              </div>
                              <div className="text-sm text-gray-600">
                                Average improvement
                              </div>
                            </div>
                            
                            <Link
                              href={service.href}
                              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                            >
                              Read full case study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </>
                        );
                      })()
                    ) : (
                      // Default case study
                      <>
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Zap className="h-16 w-16 text-primary-400/40" />
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="mb-2 text-xl font-bold text-gray-900">
                          Global Tech Conference Automation
                        </h4>
                        <p className="mb-4 text-sm text-gray-600">
                          How we automated a 10,000+ attendee conference with AI-powered matchmaking and real-time analytics
                        </p>
                        
                        <div className="mb-6">
                          <div className="text-3xl font-bold text-primary-600">
                            300% ROI Increase
                          </div>
                          <div className="text-sm text-gray-600">
                            Within 6 months of implementation
                          </div>
                        </div>
                        
                        <Link
                          href="/case-studies/tech-conference"
                          className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300"
                        >
                          Explore all case studies
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </>
                    )}
                  </motion.div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="block w-full rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-3 text-center font-medium text-white shadow-lg transition-all hover:from-primary-500 hover:to-secondary-500 hover:shadow-md"
                    >
                      Schedule Free Consultation
                    </Link>
                    <p className="mt-2 text-center text-xs text-gray-500">
                      Get a personalized automation strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Mobile Mega Menu (Drawer)
export function MobileMegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);

  const drawerVariants: any = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
          />

          {/* Drawer */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Main Navigation */}
                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    Home
                  </Link>

                  {/* Services Accordion */}
                  <div className="space-y-1">
                    <button
                      onClick={() => setOpenCategory(openCategory === "services" ? null : "services")}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                    >
                      <span>Services</span>
                      <ChevronRight className={cn(
                        "h-5 w-5 transition-transform",
                        openCategory === "services" && "rotate-90"
                      )} />
                    </button>

                    {openCategory === "services" && (
                      <div className="ml-4 space-y-1 border-l border-gray-200 pl-4">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.id}
                              href={service.href}
                              className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                              onClick={onClose}
                            >
                              <div className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br",
                                service.color
                              )}>
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                              <span>{service.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/case-studies"
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/about"
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    Contact
                  </Link>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const _Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-8 space-y-4">
                  <Link
                    href="/contact"
                    className="block rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-3 text-center font-medium text-white shadow-md"
                    onClick={onClose}
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="block rounded-lg border border-gray-300 px-4 py-3 text-center font-medium text-gray-700"
                    onClick={onClose}
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
