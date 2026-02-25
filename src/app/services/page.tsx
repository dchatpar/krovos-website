"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/ui/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import StrategicOutcomeArchitecture from "@/components/service/StrategicOutcomeArchitecture";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Mic,
  Fingerprint,
  Cpu as CpuIcon,
  Workflow as WorkflowIcon,
  Code2,
  Target as TargetIcon,
  BarChart3,
  CloudLightning,
  Server,
  Cpu as CpuIcon2,
  Shield,
  Lock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const _scaleIn = {
  initial: { opacity: 0, scale: 0.9, rotateX: 10 },
  animate: { opacity: 1, scale: 1, rotateX: 0 },
};

const _glassCardVariants = {
  initial: { opacity: 0, y: 30, rotateY: -5 },
  animate: { opacity: 1, y: 0, rotateY: 0 },
};

export default function ServicesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Modern Hero Section with Glassmorphism & Parallax */}
      <Section className="relative overflow-hidden min-h-screen" ref={heroRef}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.85_0.12_145)] via-[oklch(0.78_0.15_155)] to-[oklch(0.72_0.18_165)] animate-gradient" />

        {/* Dynamic grid pattern */}
        <div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />

        {/* Floating particles - pre-computed for hydration stability */}
        <div className="absolute inset-0 overflow-hidden">
          {useMemo(() => 
            [...Array(20)].map((_, i) => {
              const startX = `${(i * 5) % 100}vw`;
              const startY = `${(i * 7) % 100}vh`;
              const endX = `${((i + 10) * 5) % 100}vw`;
              const endY = `${((i + 10) * 7) % 100}vh`;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gray-300 rounded-full"
                  initial={{ x: startX, y: startY }}
                  animate={{ x: [startX, endX], y: [startY, endY] }}
                  transition={{
                    duration: 15 + (i * 2),
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              );
            }), [])
          }
        </div>

        <Container className="relative">
          <motion.div style={{ y, opacity }} className="py-20 text-center md:py-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <Badge className="mb-6 animate-pulse-slow glass-card border-gray-300">
                <Sparkles className="mr-2 h-4 w-4" />
                2026 Automation Solutions
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl"
              style={{ fontVariationSettings: '"wght" 800, "wdth" 100' }}
            >
              <span className="block bg-gradient-to-r from-[oklch(0.65_0.25_20)] via-[oklch(0.65_0.25_280)] to-[oklch(0.65_0.25_180)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Next-Gen
              </span>
              <span className="block mt-2 text-gray-900">Business Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto mb-10 max-w-2xl text-xl text-gray-700"
              style={{ fontVariationSettings: '"wght" 450' }}
            >
              Experience the future of automation with AI-powered solutions, real-time analytics,
              and seamless integration across all platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  href="/contact"
                  className="glass-card border-gray-300 hover:border-gray-400 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <Button
                size="lg"
                variant="outline"
                href="/services"
                className="border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                <Mic className="mr-2 h-5 w-5" />
                Voice Demo
              </Button>

              <Button
                size="lg"
                variant="outline"
                href="/contact"
                className="border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                <Fingerprint className="mr-2 h-5 w-5" />
                Biometric Login
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Enterprise Service Architecture — capability matrices, no bento grids */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 glass-card border-primary/20">
                <CpuIcon className="mr-2 h-4 w-4" />
                Service Portfolio
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              style={{ fontVariationSettings: '"wght" 700' }}
            >
              Enterprise Service Architecture
              <span className="block mt-2 text-3xl sm:text-4xl text-gray-600">
                Capability-led delivery across governance, security, and scale
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-lg text-gray-600"
            >
              Service lines mapped to capability dimensions: policy and control coverage, security
              posture, scaling and value realization. Dense, measurable outcomes—no feature grids.
            </motion.p>
          </motion.div>

          {/* Service capability matrix */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 backdrop-blur-sm"
          >
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Service–Capability Matrix
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Primary ownership (P), supported (S), or out of scope (—) by capability dimension.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Capability dimension
                    </th>
                    <th className="text-center py-4 px-6 font-medium text-gray-700">
                      Agent Governance
                    </th>
                    <th className="text-center py-4 px-6 font-medium text-gray-700">
                      Security Patterns
                    </th>
                    <th className="text-center py-4 px-6 font-medium text-gray-700">
                      Scaling Strategies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {serviceCapabilityMatrix.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-900 font-medium">
                        {row.capability}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-600">
                        {row.agentGovernance}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-600">
                        {row.securityPatterns}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-600">
                        {row.scalingStrategies}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Service entry points — layered, not grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Service lines
            </h3>
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
              {strategicOutcomeCtas.map((cta, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  className="flex-1 min-w-0"
                >
                  <Link
                    href={cta.href}
                    className="block h-full rounded-xl border border-gray-200 bg-gray-50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-gray-100"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                      <cta.icon className="h-6 w-6 text-gray-900" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {cta.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {cta.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary/80">
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Strategic Outcome Architecture — shared component, design-system aligned */}
      <StrategicOutcomeArchitecture scope="Enterprise Automation Platform" variant="dark" />

      {/* Technology Stack with Glass Cards */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 glass-card border-primary/20">
              <Server className="mr-2 h-4 w-4" />
              Technology Stack
            </Badge>
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Built with Cutting-Edge Technology
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We leverage the latest technologies to deliver robust, scalable, and future-proof
              automation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <GlassCard
                  gradient={tech.gradient as any}
                  blur="sm"
                  hoverEffect={true}
                  className="aspect-square p-4 text-center"
                >
                  <div className="mb-3 text-3xl">{tech.icon}</div>
                  <div className="text-sm font-medium">{tech.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {tech.category}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Flow with Interactive Timeline */}
      <Section variant="dark">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900 glass-card">
              <WorkflowIcon className="mr-2 h-4 w-4" />
              Our Process
            </Badge>
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Streamlined Implementation Journey
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From discovery to deployment, we follow a proven process to ensure successful
              automation implementation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <GlassCard
                      gradient={index % 2 === 0 ? "primary" : "secondary"}
                      blur="md"
                      className="p-6"
                    >
                      <div className="flex items-start">
                        <div className="mr-4 rounded-xl bg-gray-100 p-3">
                          <step.icon className="h-6 w-6 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Animated timeline dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary border-4 border-gray-900 z-10"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center h-full text-gray-900 font-bold">
                      {step.number}
                    </div>
                  </motion.div>

                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                    <div className="text-3xl font-bold text-gray-900">{step.duration}</div>
                    <div className="text-sm text-gray-600 mt-1">{step.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA with Modern Contact Form */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-gradient-to-br from-[oklch(0.65_0.25_20)] to-[oklch(0.65_0.25_280)] p-8 md:p-12 text-center glass-card border-gray-300"
          >
            <h2 className="mb-4 font-display text-4xl font-bold text-gray-900 sm:text-5xl">
              Ready for the Future of Automation?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-900/90">
              Join 500+ businesses that have transformed their operations with our next-generation
              automation solutions.
            </p>

            <ContactForm
              title="Start Your Automation Journey"
              description="Get a personalized demo and see how our AI-powered solutions can transform your business."
              showServiceSelection={true}
              className="max-w-2xl mx-auto bg-gray-100 backdrop-blur-lg border-gray-300"
            />

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-gray-900">{indicator.value}</div>
                  <div className="text-sm text-gray-900/70">{indicator.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

    </>
  );
}

const serviceCapabilityMatrix = [
  { capability: "Policy & approval workflows", agentGovernance: "P", securityPatterns: "S", scalingStrategies: "—" },
  { capability: "Audit & evidence trail", agentGovernance: "P", securityPatterns: "S", scalingStrategies: "—" },
  { capability: "Control coverage & remediation", agentGovernance: "S", securityPatterns: "P", scalingStrategies: "—" },
  { capability: "Threat surface & compliance overlay", agentGovernance: "S", securityPatterns: "P", scalingStrategies: "—" },
  { capability: "Capacity & rollout sequencing", agentGovernance: "—", securityPatterns: "S", scalingStrategies: "P" },
  { capability: "Value realization & ROI timeline", agentGovernance: "S", securityPatterns: "S", scalingStrategies: "P" },
];

const strategicOutcomeCtas = [
  {
    title: "Agent Governance",
    description: "Board-level control and accountability for AI agents. Policies, approval workflows, audit-ready evidence.",
    href: "/services/agent-governance",
    icon: Shield,
  },
  {
    title: "Security Patterns",
    description: "Repeatable security patterns that reduce incident exposure and accelerate secure delivery.",
    href: "/services/security-patterns",
    icon: Lock,
  },
  {
    title: "Scaling Strategies",
    description: "Capacity, rollout, and value-realization strategies for predictable scale.",
    href: "/services/scaling-strategies",
    icon: TrendingUp,
  },
];

const technologies = [
  { name: "React 19", icon: "⚛️", category: "Frontend", gradient: "primary" },
  { name: "Next.js 15", icon: "▲", category: "Fullstack", gradient: "primary" },
  { name: "TypeScript 6", icon: "📘", category: "Language", gradient: "secondary" },
  { name: "TensorFlow", icon: "🧠", category: "AI/ML", gradient: "accent" },
  { name: "WebAssembly", icon: "🔧", category: "Performance", gradient: "primary" },
  { name: "GraphQL", icon: "📊", category: "API", gradient: "secondary" },
  { name: "Kubernetes", icon: "☸️", category: "DevOps", gradient: "accent" },
  { name: "Redis 8", icon: "🗃️", category: "Cache", gradient: "primary" },
  { name: "PostgreSQL", icon: "🐘", category: "Database", gradient: "secondary" },
  { name: "Docker", icon: "🐳", category: "Container", gradient: "accent" },
  { name: "Apache Kafka", icon: "📨", category: "Streaming", gradient: "primary" },
  { name: "Prometheus", icon: "📈", category: "Monitoring", gradient: "secondary" },
];

const processSteps = [
  {
    number: "01",
    title: "Quantum Discovery",
    description:
      "Deep analysis using quantum-inspired algorithms to identify automation opportunities",
    icon: TargetIcon,
    duration: "1-2 weeks",
    subtitle: "Pattern Recognition Phase",
  },
  {
    number: "02",
    title: "Neural Architecture",
    description: "Design self-learning systems with neural network-based architecture",
    icon: CpuIcon2,
    duration: "2-3 weeks",
    subtitle: "AI Design Phase",
  },
  {
    number: "03",
    title: "Cognitive Development",
    description: "Build adaptive solutions that learn from user interactions",
    icon: Code2,
    duration: "4-6 weeks",
    subtitle: "Learning Development",
  },
  {
    number: "04",
    title: "Autonomous Deployment",
    description: "Self-optimizing deployment with predictive scaling",
    icon: CloudLightning,
    duration: "1-2 weeks",
    subtitle: "Smart Deployment",
  },
  {
    number: "05",
    title: "Continuous Evolution",
    description: "Systems that continuously improve through machine learning",
    icon: BarChart3,
    duration: "Ongoing",
    subtitle: "Perpetual Optimization",
  },
];

const trustIndicators = [
  { value: "ISO 27001", label: "Security Certified" },
  { value: "99.9% SLA", label: "Uptime Guarantee" },
  { value: "24/7", label: "AI Monitoring" },
  { value: "GDPR", label: "Compliant" },
];

