"use client";

import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/ui/contact-form";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AgentGovernancePage() {
  return (
    <>
      {/* Executive Framing */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-indigo-600/20" />
        <Container className="relative">
          <div className="py-20 md:py-32 max-w-4xl">
            <Badge className="mb-6 bg-slate-600 text-gray-900">Enterprise AI Governance</Badge>
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Agent Governance
            </h1>
            <p className="mb-10 text-lg text-gray-600">
              Board-level control and accountability for AI agents. Governance frameworks that
              reduce regulatory exposure, enforce decision boundaries, and position the
              organization as an audit-ready, governed operator of autonomous systems.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium rounded-lg px-6 py-3.5 text-base bg-slate-600 text-gray-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Discuss Governance Requirements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center font-medium rounded-lg px-6 py-3.5 text-base border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Strategic Framework */}
      <Section variant="dark">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
              Strategic Framework
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Governance-First Agent Operations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Agent governance is the control plane for autonomous systems. We define policies,
              approval workflows, and technical guardrails so that every agent is discoverable,
              versioned, and operating within board-approved boundaries. The result is reduced
              oversight cost, faster safe deployment, and audit-ready evidence on demand.
            </p>
          </div>
        </Container>
      </Section>

      {/* Systems & Governance Visuals */}
      <Section variant="dark">
        <Container>
          <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
            Systems & Governance Visuals
          </Badge>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Diagram Concepts and Visual Systems
          </h2>

          {/* Featured: Enterprise Transformation Map — full-width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 rounded-xl border border-gray-200 bg-gray-100 p-6 md:p-8 backdrop-blur-sm"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-600">
              Diagram 1 — Enterprise Transformation Map
            </p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Enterprise Transformation Map</h3>
            <p className="max-w-4xl text-sm text-gray-600 leading-relaxed">
              Before/after state overlay of the organization&apos;s agent footprint: from ungoverned
              point solutions and shadow AI usage to a centralized, policy-driven agent ecosystem
              with clear ownership, audit trails, and board-level accountability. Maps governance
              boundaries (policy, risk, compliance), control points (approval, audit, escalation),
              and handoff reduction across business units. Used for executive alignment and program
              steering committees.
            </p>
          </motion.div>

          {/* Row 2: Agent Lifecycle Map + Governance Heatmap */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-600">
                Diagram 2 — Agent Lifecycle Map
              </p>
              <h3 className="mb-3 font-semibold text-gray-900">Agent Lifecycle Map</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                End-to-end flow from design and approval through deployment, monitoring, and
                retirement. Stages include: (1) Discovery — use case identification and risk
                assessment; (2) Design — policy definition, boundary configuration, and approval
                gates; (3) Development — implementation with audit logging; (4) Deployment —
                rollout with observability; (5) Operation — continuous monitoring and compliance;
                (6) Retirement — data retention and decommissioning. Shows handoffs between risk,
                legal, engineering, and business owners at each stage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-600">
                Diagram 3 — Governance Heatmap
              </p>
              <h3 className="mb-3 font-semibold text-gray-900">Governance Heatmap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Coverage mapping of controls and policies across agent populations and environments
                (production, staging, development). Heat intensity indicates maturity level and gap
                severity by domain: intake processes, execution boundaries, approval workflows, audit
                trails. Identifies policy orphans and prioritizes remediation by risk score and
                regulatory requirement (SOX, GDPR, SOC 2). Drives remediation planning and resource
                allocation.
              </p>
            </motion.div>
          </div>

          {/* Row 3: Maturity Progression Model + Capability Matrix */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-600">
                Diagram 4 — Maturity Progression Model
              </p>
              <h3 className="mb-3 font-semibold text-gray-900">Maturity Progression Model (5-Stage)</h3>
              <p className="mb-3 text-sm text-gray-600 leading-relaxed">
                Five-stage progression with measurable gates and success criteria:
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>· <span className="text-gray-900 font-medium">Stage 1 — Ad hoc:</span> No formal controls, shadow AI, manual oversight</li>
                <li>· <span className="text-gray-900 font-medium">Stage 2 — Repeatable:</span> Defined processes, basic documentation, limited automation</li>
                <li>· <span className="text-gray-900 font-medium">Stage 3 — Defined:</span> Standardized workflows, governance framework, policy enforcement</li>
                <li>· <span className="text-gray-900 font-medium">Stage 4 — Managed:</span> Metrics-driven, continuous monitoring, automated compliance</li>
                <li>· <span className="text-gray-900 font-medium">Stage 5 — Optimized:</span> Full automation, predictive controls, board-level reporting</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-600">
                Diagram 5 — Capability Matrix
              </p>
              <h3 className="mb-3 font-semibold text-gray-900">Capability Matrix</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Decision matrix mapping governance capabilities to process domains and maturity stages.
                Capabilities include: orchestration layer, observability stack, policy enforcement
                engine, audit logging, access control, incident response, and compliance reporting.
                Maps each capability to business units, agent populations, and regulatory requirements.
                Supports scope definition, dependency analysis, and roadmap sequencing for enterprise
                rollout.
              </p>
            </motion.div>
          </div>

          {/* Row 4: Value Realization Timeline — full width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-xl border border-gray-200 bg-gray-100 p-6 md:p-8 backdrop-blur-sm"
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-600">
              Diagram 6 — Value Realization Timeline
            </p>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Value Realization Timeline</h3>
            <p className="max-w-4xl text-sm text-gray-600 leading-relaxed">
              Phased ROI and benefit realization milestones over 6–18 months. Timeline shows:
              (1) Months 1-3 — Foundation: policy framework, agent registry, baseline metrics;
              (2) Months 4-6 — Control Layer: approval workflows, audit integration, initial
              compliance reporting; (3) Months 7-12 — Scale: full deployment, automation of
              governance, measurable oversight cost reduction; (4) Months 12-18 — Optimization:
              predictive controls, continuous improvement, board-level dashboards. Links capability
              rollout to financial and operational KPIs. Enables program governance and executive
              checkpoint reporting.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Quantified Outcomes */}
      <Section variant="dark">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-gray-100 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Quantified Outcomes</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { metric: "35–50%", label: "Reduction in governance oversight costs" },
                { metric: "40–60%", label: "Acceleration in agent deployment cycles" },
                { metric: "25–45%", label: "Reduction in compliance audit preparation time" },
                { metric: "20–35%", label: "Increase in cross-agent operational efficiency" },
                { metric: "2–4x", label: "Time-to-scale improvement across business units" },
                { metric: "Audit-ready", label: "Compliance documentation and control evidence" },
                { metric: "60–80%", label: "Reduction in policy gap remediation time" },
                { metric: "90%+", label: "Agent registry coverage target" },
                { metric: "15–25%", label: "Decrease in regulatory finding resolution time" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold tabular-nums text-gray-900">{item.metric}</span>
                  <span className="mt-1 text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Deployment & Adoption Model */}
      <Section>
        <Container>
          <Badge className="mb-4">Deployment & Adoption</Badge>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 text-gray-900">
            Deployment and Adoption Model
          </h2>
          <p className="mb-8 max-w-3xl text-gray-600">
            Rollout is phased: pilot with a bounded agent set and a single policy domain (e.g.,
            customer-facing chatbots), then extend to additional agents and domains. Each phase
            includes training for risk and engineering, updates to the agent registry, and
            metrics for oversight cost and time-to-deploy.
          </p>
          <ul className="space-y-3 max-w-2xl text-gray-600">
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 1:</span>
              Registry and baseline policies for pilot agents.
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 2:</span>
              Approval workflows and integration with IAM/audit.
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 3:</span>
              Full coverage and continuous compliance reporting.
            </li>
          </ul>
        </Container>
      </Section>

      {/* Long-Term Strategic Advantage */}
      <Section variant="dark">
        <Container>
          <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
            Strategic Advantage
          </Badge>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Long-Term Strategic Advantage
          </h2>
          <p className="max-w-3xl text-gray-600 leading-relaxed">
            Organizations that institutionalize agent governance gain a durable advantage: the
            ability to scale AI safely and to demonstrate to regulators, boards, and customers
            that autonomous systems are under control. This positions you for stricter
            future regulation and for higher-stakes use cases where accountability is
            non-negotiable.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactForm
            title="Discuss Agent Governance"
            description="Define policies, controls, and adoption for your agent ecosystem."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}
