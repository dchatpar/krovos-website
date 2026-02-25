import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/contact-form";
import { ArrowRight, Shield, Lock, Activity, FileCheck, Crosshair, Scale, TrendingUp, Layers } from "lucide-react";
import Link from "next/link";

export default function SecurityPatternsPage() {
  return (
    <>
      {/* Executive Framing */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20" />
        <Container className="relative">
          <div className="py-20 md:py-32 max-w-4xl">
            <Badge className="mb-6 bg-emerald-600 text-gray-900">Enterprise Security</Badge>
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Security Patterns
            </h1>
            <p className="mb-10 text-lg text-gray-600">
              Repeatable, architecture-level security patterns that reduce incident exposure,
              accelerate secure delivery, and align technical controls with executive risk
              appetite. Built for enterprises that need to scale without scaling risk.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="xl" href="/contact" className="bg-emerald-600 text-gray-900 hover:bg-emerald-700">
                Assess Security Posture
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline" href="/services">
                View All Services
              </Button>
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
              Pattern-Based Security at Scale
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Security patterns codify proven controls for identity, data protection, and
              resilience. Instead of one-off designs, teams reuse attested patterns that
              integrate with existing SIEM, IAM, and compliance tooling. The result is a
              higher security baseline, faster secure deployments, and evidence ready for
              auditors and regulators.
            </p>
          </div>
        </Container>
      </Section>

      {/* Systems & Governance Visuals — layered architecture, no bento grid */}
      <Section variant="dark">
        <Container>
          <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
            Systems & Governance Visuals
          </Badge>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Diagram Concepts and Visual Systems
          </h2>
          <p className="mb-10 max-w-3xl text-gray-600">
            Enterprise-grade visual systems for security posture, control coverage, and transformation tracking. Each artifact supports board-level reporting and risk committee review.
          </p>

          {/* Tier 1: Enterprise Transformation Map — full-width */}
          <div className="mb-10 rounded-xl border border-gray-200 bg-gray-100 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-600/30">
                <Shield className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Enterprise Transformation Map
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end before/after overlay: current state (fragmented controls, manual security reviews, point-in-time audits, inconsistent identity and encryption) versus target state (pattern-based architecture with defined trust boundaries, automated control verification, continuous evidence collection, and alignment to SIEM/SOAR and IAM). Governance boundaries, control points, and handoff reduction between security, architecture, and engineering are explicitly mapped. Used for executive steering and program governance.
                </p>
              </div>
            </div>
          </div>

          {/* Tier 2: Security architecture and control visuals — asymmetric two-column */}
          <div className="mb-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <Lock className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Security Architecture Diagram</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trust boundaries, encryption zones (at rest and in transit), and identity and network segmentation flows. Shows where patterns apply across workloads, APIs, and data stores; integration points with existing SIEM, SOAR, and identity providers; and how control objectives map to architecture components. Supports architecture review and security sign-off.
              </p>
            </div>
            <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <Activity className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Control Coverage Heatmap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mapping of controls to assets, environments, and critical business processes. Coverage intensity by control family (identity, encryption, logging, response). Highlights gaps, over-coverage, and prioritization for remediation and compliance. Aligns to risk appetite and audit scope.
              </p>
            </div>
          </div>

          {/* Tier 3: Threat surface and compliance — two-column */}
          <div className="mb-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <Crosshair className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Threat Surface Mapping</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Attack surface inventory by environment, entry points, and data sensitivity. Exposure by asset type and pattern coverage; residual risk zones where patterns are not yet applied. Informs prioritization for pattern rollout and red-team scope. Updated as new systems and integrations are onboarded.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <Scale className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Compliance Framework Overlay</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Control objectives mapped to regulatory and internal frameworks (e.g., SOC 2, ISO 27001, PCI-DSS, internal policy). Shows which patterns satisfy which requirements; evidence sources and audit readiness per control. Reduces duplicate work and clarifies accountability for attestation.
              </p>
            </div>
          </div>

          {/* Tier 4: Capability Maturity Model — 5-stage horizontal */}
          <div className="mb-10 rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
              <Layers className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Capability Maturity Model (5-Stage)</h3>
            <p className="mb-6 text-sm text-gray-600 leading-relaxed">
              Progression from ad hoc to optimized security operations, with measurable gates and target outcomes per stage.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-between">
              {[
                { stage: "1", name: "Initial", desc: "Ad hoc controls; manual reviews; no consistent patterns." },
                { stage: "2", name: "Repeatable", desc: "Pattern library defined; pilot systems adopting; evidence manual." },
                { stage: "3", name: "Defined", desc: "Patterns approved and integrated with CI/CD; coverage tracked." },
                { stage: "4", name: "Managed", desc: "Metrics and KPIs; automated evidence; gap remediation SLA." },
                { stage: "5", name: "Optimizing", desc: "Continuous improvement; audit-ready; pattern evolution governed." },
              ].map(({ stage, name, desc }) => (
                <div key={stage} className="flex-1 min-w-[160px] rounded-lg border border-gray-200 bg-gray-100 px-4 py-3">
                  <span className="text-xs font-mono text-emerald-400">Stage {stage}</span>
                  <p className="mt-1 font-semibold text-gray-900">{name}</p>
                  <p className="mt-0.5 text-xs text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 5: Capability Matrix and Value Realization — side-by-side */}
          <div className="mb-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <FileCheck className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Capability Matrix</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rows: control domains (identity, data protection, network, logging, response). Columns: environments and critical systems. Cells indicate pattern adoption status, evidence state, and owner. Supports portfolio-level view and dependency planning for pattern rollout.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                <TrendingUp className="h-6 w-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Value Realization Timeline</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Quantified impact over 6–18 months: MTTD/MTTR reduction, audit evidence turnaround, oversight cost reduction, and critical-findings-at-go-live trends. Tied to adoption milestones and pattern coverage. Used for benefits tracking and executive reporting.
              </p>
            </div>
          </div>

          {/* Quantified impact visualization */}
          <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Quantified Impact Visualization</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dashboard-style view of security and compliance outcomes: control coverage percentage by domain, trend lines for MTTD/MTTR and audit findings, and risk exposure before/after pattern adoption. Supports board and risk committee reporting with high signal density and executive-level metrics.
            </p>
          </div>
        </Container>
      </Section>

      {/* Deployment & Adoption Model */}
      <Section>
        <Container>
          <Badge className="mb-4">Deployment & Adoption</Badge>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Deployment and Adoption Model
          </h2>
          <p className="mb-8 max-w-3xl text-gray-600">
            Rollout starts with high-impact, high-visibility systems and a core set of
            patterns (e.g., zero-trust identity, encryption at rest/transit). Patterns are
            documented, approved by security and architecture, and then adopted by product
            teams with training and guardrails. Metrics track adoption coverage, MTTD/MTTR,
            and audit finding trends.
          </p>
          <ul className="space-y-3 max-w-2xl text-gray-600">
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 1:</span>
              Pattern library and pilot on 1–2 critical systems.
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 2:</span>
              Integration with CI/CD and security tooling; broader rollout.
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 3:</span>
              Organization-wide adoption and continuous compliance reporting.
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
            Enterprises that standardize on security patterns reduce technical debt and
            compliance cost while improving resilience. As regulation and threat landscapes
            evolve, pattern-based security allows you to update controls once and propagate
            across systems, preserving both security and velocity.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactForm
            title="Discuss Security Patterns"
            description="Define and adopt security patterns for your critical systems."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}
