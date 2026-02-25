"use client";

import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";

export interface StrategicOutcomeArchitectureProps {
  /** Optional scope for page-specific headlines (e.g. "Automation Platform" vs "AI Automation") */
  scope?: string;
  /** Optional variant for section background */
  variant?: "default" | "dark" | "gradient" | "light";
}

const scopeLabel = "Enterprise Automation Platform";

export default function StrategicOutcomeArchitecture({
  scope = scopeLabel,
  variant = "dark",
}: StrategicOutcomeArchitectureProps) {
  const isDark = variant === "dark" || variant === "gradient";
  const textMuted = "text-gray-600";
  const textStrong = "text-gray-900";
  const borderCls = "border-gray-200";

  return (
    <Section variant={variant} id="strategic-outcomes">
      <Container>
        {/* Executive Framing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className={`mb-3 text-sm font-medium uppercase tracking-widest ${textMuted}`}>
            Strategic Outcome Architecture
          </p>
          <h2 className={`mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl ${textStrong}`}>
            Transformation-Level Value
          </h2>
          <p className={`mx-auto max-w-3xl text-lg leading-relaxed ${textMuted}`}>
            Board-level outcomes, quantified risk reduction, and measurable performance gains. No marketing
            fluff—systemic impact mapped to executive priorities.
          </p>
        </motion.div>

        {/* Core Strategic Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mb-16 rounded-2xl border ${borderCls} bg-gray-100 p-8 backdrop-blur-sm`}
        >
          <h3 className={`mb-4 text-xl font-semibold ${textStrong}`}>Core Strategic Framework</h3>
          <p className={`max-w-4xl ${textMuted} leading-relaxed`}>
            The {scope} is designed as a four-layer outcome architecture: strategic transformation (executive
            and board value), operational impact (process and efficiency), technical systems (architecture and
            governance), and quantified performance (metrics and audit readiness). Each layer maps to
            deployment maturity and long-term competitive advantage.
          </p>
        </motion.div>

        {/* 4-Layer Enterprise Impact Architecture */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              layer: "01",
              title: "Strategic Transformation",
              items: [
                "Executive outcomes and board-level value",
                "Risk reduction impact and compliance posture",
                "Market positioning and competitive differentiation",
              ],
            },
            {
              layer: "02",
              title: "Operational Impact",
              items: [
                "Process changes and efficiency deltas",
                "Automation uplift and throughput gains",
                "Cross-functional alignment and handoff reduction",
              ],
            },
            {
              layer: "03",
              title: "Technical Systems",
              items: [
                "Architecture improvements and interoperability",
                "Security posture and governance controls",
                "Observability and incident exposure reduction",
              ],
            },
            {
              layer: "04",
              title: "Quantified Performance",
              items: [
                "Oversight cost reduction and deployment acceleration",
                "Cross-agent efficiency and time-to-scale",
                "Compliance audit readiness and SLA attainment",
              ],
            },
          ].map((block, index) => (
            <motion.div
              key={block.layer}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-xl border ${borderCls} p-6`}
            >
              <span className={`mb-3 block text-xs font-mono font-medium ${textMuted}`}>
                Layer {block.layer}
              </span>
              <h4 className={`mb-4 text-lg font-semibold ${textStrong}`}>{block.title}</h4>
              <ul className="space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className={`text-sm ${textMuted}`}>
                    · {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Systems & Governance Visuals (described) — 6+ diagram concepts, layered layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className={`mb-6 text-2xl font-semibold ${textStrong}`}>
            Systems & Governance Visuals
          </h3>

          {/* Featured: Enterprise Transformation Map — full-width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mb-6 rounded-xl border ${borderCls} p-6 md:p-8`}
          >
            <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${textMuted}`}>
              Diagram 1 — Enterprise Transformation Map
            </p>
            <h4 className={`mb-3 text-lg font-semibold ${textStrong}`}>Enterprise Transformation Map</h4>
            <p className={`max-w-4xl text-sm ${textMuted} leading-relaxed`}>
              End-to-end before/after state overlay: current process topology, system boundaries, and
              handoff points mapped against post-automation architecture. Depicts governance boundaries
              (policy, risk, compliance), control points (approval, audit, escalation), and quantified
              handoff reduction. Used for executive alignment and program steering.
            </p>
          </motion.div>

          {/* Row 2: Capability Maturity + Quantified Impact */}
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`rounded-xl border ${borderCls} p-6`}
            >
              <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${textMuted}`}>
                Diagram 2 — Capability Maturity Model
              </p>
              <h4 className={`mb-3 font-semibold ${textStrong}`}>Capability Maturity Model (5-Stage)</h4>
              <p className={`mb-3 text-sm ${textMuted} leading-relaxed`}>
                Five-stage progression with measurable gates: (1) Ad hoc — no formal controls or repeatability;
                (2) Repeatable — defined processes, limited automation; (3) Defined — standardized workflows,
                governance in place; (4) Managed — metrics-driven, continuous improvement; (5) Optimized —
                full automation, predictive controls, board-level reporting. Deployment readiness and
                adoption curve mapped to target state.
              </p>
              <ul className={`space-y-1 text-xs ${textMuted}`}>
                <li>· Stage 1: Ad hoc → 2: Repeatable → 3: Defined → 4: Managed → 5: Optimized</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`rounded-xl border ${borderCls} p-6`}
            >
              <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${textMuted}`}>
                Diagram 3 — Quantified Impact Visualization
              </p>
              <h4 className={`mb-3 font-semibold ${textStrong}`}>Quantified Impact Visualization</h4>
              <p className={`text-sm ${textMuted} leading-relaxed`}>
                Value realization timeline (6–18 months) with curves for oversight cost reduction,
                deployment acceleration, and compliance audit readiness. Shows cumulative benefit and
                break-even by workstream. Supports board-level ROI narrative and phase-gate reporting.
              </p>
            </motion.div>
          </div>

          {/* Row 3: Governance Heatmap, Risk & Compliance Overlay, Value Realization Timeline */}
          <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`rounded-xl border ${borderCls} p-6`}
            >
              <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${textMuted}`}>
                Diagram 4 — Governance Heatmap
              </p>
              <h4 className={`mb-2 font-semibold ${textStrong}`}>Governance Heatmap</h4>
              <p className={`text-sm ${textMuted} leading-relaxed`}>
                Coverage mapping of controls and policies across process domains (e.g. intake, execution,
                approval, audit). Heat intensity indicates maturity and gap severity. Used for prioritization
                and remediation planning.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`rounded-xl border ${borderCls} p-6`}
            >
              <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${textMuted}`}>
                Diagram 5 — Risk & Compliance Overlay
              </p>
              <h4 className={`mb-2 font-semibold ${textStrong}`}>Risk & Compliance Overlay</h4>
              <p className={`text-sm ${textMuted} leading-relaxed`}>
                Threat surface mapping with control effectiveness and framework alignment (e.g. SOC 2, ISO,
                internal policy). Shows residual risk by domain and compliance coverage. Drives audit
                readiness and exception handling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`rounded-xl border ${borderCls} p-6`}
            >
              <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${textMuted}`}>
                Diagram 6 — Value Realization Timeline
              </p>
              <h4 className={`mb-2 font-semibold ${textStrong}`}>Value Realization Timeline</h4>
              <p className={`text-sm ${textMuted} leading-relaxed`}>
                Phased ROI and benefit realization milestones by initiative and workstream. Links capability
                rollout to financial and operational KPIs. Enables program governance and executive
                checkpoint reporting.
              </p>
            </motion.div>
          </div>

          {/* Row 4: Capability Matrix — asymmetric emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={`rounded-xl border ${borderCls} p-6 md:flex md:items-start md:gap-8`}
          >
            <div className="md:min-w-0 md:flex-1">
              <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${textMuted}`}>
                Diagram 7 — Capability Matrix
              </p>
              <h4 className={`mb-2 font-semibold ${textStrong}`}>Capability Matrix</h4>
              <p className={`text-sm ${textMuted} leading-relaxed`}>
                Decision matrix mapping capabilities (e.g. orchestration, observability, policy enforcement)
                to process domains and maturity stages. Supports scope definition, dependency analysis, and
                roadmap sequencing for enterprise rollout.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Quantified Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`mb-16 rounded-2xl border ${borderCls} p-8`}
        >
          <h3 className={`mb-6 text-2xl font-semibold ${textStrong}`}>Quantified Outcomes</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { metric: "35–50%", label: "Reduction in oversight costs" },
              { metric: "40–60%", label: "Acceleration in deployment cycles" },
              { metric: "25–45%", label: "Reduction in incident exposure" },
              { metric: "20–35%", label: "Increase in cross-agent efficiency" },
              { metric: "2–4x", label: "Time-to-scale improvement" },
              { metric: "Audit-ready", label: "Compliance and control documentation" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className={`text-2xl font-bold tabular-nums ${textStrong}`}>{item.metric}</span>
                <span className={`mt-1 text-sm ${textMuted}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deployment & Adoption Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mb-16 rounded-2xl border ${borderCls} p-8`}
        >
          <h3 className={`mb-4 text-xl font-semibold ${textStrong}`}>Deployment & Adoption Model</h3>
          <p className={`mb-6 max-w-4xl ${textMuted} leading-relaxed`}>
            Phased rollout aligned to capability maturity: pilot scope definition, governance and control
            mapping, technical implementation, and scaled adoption with measurable gates. Each phase
            includes risk and compliance checkpoints and executive sign-off criteria.
          </p>
          <ul className={`space-y-2 text-sm ${textMuted}`}>
            <li>· Pilot scope and success criteria</li>
            <li>· Governance and control overlay</li>
            <li>· Technical implementation and integration</li>
            <li>· Scaled adoption with measurable gates</li>
          </ul>
        </motion.div>

        {/* Long-Term Strategic Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center"
        >
          <h3 className={`mb-4 text-xl font-semibold ${textStrong}`}>
            Long-Term Strategic Advantage
          </h3>
          <p className={`mx-auto max-w-3xl ${textMuted} leading-relaxed`}>
            Sustained competitive positioning through continuous capability improvement, embedded governance,
            and measurable ROI. The outcome architecture is designed for board-level reporting and
            transformation-level value—not feature lists.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
