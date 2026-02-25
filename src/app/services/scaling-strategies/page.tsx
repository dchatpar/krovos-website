import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  Map, 
  Gauge, 
  Activity,
  Layers,
  Zap,
  Target,
  Clock,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function ScalingStrategiesPage() {
  return (
    <>
      {/* Executive Framing */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20" />
        <Container className="relative">
          <div className="py-20 md:py-32 max-w-4xl">
            <Badge className="mb-6 bg-amber-600 text-gray-900">Enterprise Scaling</Badge>
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              Scaling Strategies
            </h1>
            <p className="mb-10 text-lg text-gray-600">
              Repeatable strategies for scaling systems, teams, and adoption. From capacity
              and architecture to rollout and value realization—so you scale with control,
              visibility, and measurable outcomes.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="xl" href="/contact" className="bg-amber-600 text-gray-900 hover:bg-amber-700">
                Plan Scaling Roadmap
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
              Scaling as a Disciplined Practice
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Scaling strategies combine technical architecture (capacity, regions, resilience)
              with adoption and rollout discipline. We define maturity stages, phased
              rollouts, and value-realization timelines so that scaling is predictable and
              aligned with business goals. The result is faster time-to-scale, better
              efficiency, and audit-ready deployment practices.
            </p>
          </div>
        </Container>
      </Section>

      {/* Systems & Governance Visuals - Enhanced */}
      <Section variant="dark">
        <Container>
          <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
            Systems & Governance Visuals
          </Badge>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enterprise Visual Architecture
          </h2>

          {/* Primary Visual - Enterprise Transformation Map */}
          <div className="mb-12 rounded-xl border border-gray-200 bg-gray-100 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-amber-600/20">
                <Layers className="h-7 w-7 text-amber-400" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Enterprise Transformation Map
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive four-layer transformation architecture connecting infrastructure scaling 
                  to business value realization. The Foundation Layer encompasses compute, storage, and 
                  network capacity with auto-scaling policies and redundancy patterns. The Orchestration 
                  Layer defines deployment pipelines, traffic management, and multi-region coordination 
                  with disaster recovery protocols. The Adoption Layer maps user onboarding workflows, 
                  training programs, and change management processes tied to deployment phases. The 
                  Outcomes Layer tracks KPIs including time-to-capacity, cost-per-transaction, adoption 
                  velocity, and business metric lift—each tied to specific phases in the transformation.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { title: "Foundation", items: ["Capacity Planning", "Infrastructure Automation", "Multi-Region Architecture", "Disaster Recovery"] },
                { title: "Orchestration", items: ["Deployment Pipelines", "Traffic Management", "Service Mesh", "Observability"] },
                { title: "Adoption", items: ["User Onboarding", "Training Programs", "Change Management", "Support Ops"] },
                { title: "Outcomes", items: ["Time-to-Capacity", "Cost Efficiency", "Adoption Velocity", "Business Impact"] }
              ].map((layer, i) => (
                <div key={i} className="rounded-lg bg-gray-100 p-4 border border-gray-200">
                  <h4 className="font-medium text-amber-400 text-sm mb-3">{layer.title}</h4>
                  <ul className="space-y-2">
                    {layer.items.map((item, j) => (
                      <li key={j} className="text-xs text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Capability Maturity Model - Full Width */}
          <div className="mb-12 rounded-xl border border-gray-200 bg-gray-100 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Target className="h-7 w-7 text-gray-900" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Capability Maturity Model
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Five-stage maturity progression from ad-hoc scaling to autonomous, self-optimizing 
                  scale operations. Each stage defines specific capabilities, processes, and measurement 
                  frameworks required to advance.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { level: "Level 1 - Initial", desc: "Reactive scaling; manual intervention; no defined processes", color: "bg-red-500/20 border-red-500/30" },
                { level: "Level 2 - Developing", desc: "Basic automation scripts; ad-hoc capacity planning; initial metrics", color: "bg-orange-500/20 border-orange-500/30" },
                { level: "Level 3 - Defined", desc: "Standardized scaling policies; defined runbooks; regular reporting", color: "bg-yellow-500/20 border-yellow-500/30" },
                { level: "Level 4 - Managed", desc: "Automated scaling with thresholds; predictive capacity modeling; governance integration", color: "bg-lime-500/20 border-lime-500/30" },
                { level: "Level 5 - Optimizing", desc: "AI-driven scaling decisions; continuous optimization; self-healing infrastructure", color: "bg-green-500/20 border-green-500/30" }
              ].map((stage, i) => (
                <div key={i} className={`rounded-lg border p-4 ${stage.color}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{stage.level}</span>
                    <span className="text-sm text-gray-600">{stage.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two-column layout for remaining diagrams */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Capacity Expansion Timeline */}
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Clock className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Capacity Expansion Timeline</h3>
                  <p className="text-xs text-gray-600">
                    Phased capacity ramp with milestone gates and validation checkpoints
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                {[
                  { phase: "Months 1-2", focus: "Infrastructure baseline, pilot region", deliverable: "Production-ready foundation" },
                  { phase: "Months 3-4", focus: "Secondary region deployment", deliverable: "Multi-region active-active" },
                  { phase: "Months 5-6", focus: "Capacity scale-out, automation", deliverable: "Auto-scaling policies live" },
                  { phase: "Months 7-8", focus: "Optimization, cost tuning", deliverable: "Target cost-per-transaction" },
                  { phase: "Months 9-12", focus: "Full scale, continuous improvement", deliverable: "Autonomous operations" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="text-amber-400 font-medium shrink-0 w-24">{item.phase}</span>
                    <span className="text-gray-600">{item.focus} → {item.deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Deployment Map */}
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Globe className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Regional Deployment Map</h3>
                  <p className="text-xs text-gray-600">
                    Global rollout strategy with latency, compliance, and redundancy considerations
                  </p>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                {[
                  { region: "Primary (Region A)", status: "Active", role: "Production, write-master" },
                  { region: "Secondary (Region B)", status: "Active", role: "Hot standby, read-replica" },
                  { region: "Tertiary (Region C)", status: "Warm", role: "DR, compliance isolation" },
                  { region: "Edge Locations", status: "Planned", role: "CDN, latency optimization" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-gray-100 text-sm">
                    <span className="text-gray-900">{item.region}</span>
                    <div className="flex gap-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        item.status === 'Active' ? 'bg-green-500/20 text-green-400' : 
                        item.status === 'Warm' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-600'
                      }`}>{item.status}</span>
                      <span className="text-gray-600 text-xs">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Scaling Curves */}
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Activity className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Performance Scaling Curves</h3>
                  <p className="text-xs text-gray-600">
                    Load response characteristics across scaling trigger thresholds
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-4 text-sm">
                {[
                  { metric: "CPU Utilization", threshold: "70% → Scale out trigger", curve: "Linear ramp, 5-min stabilization" },
                  { metric: "Request Latency", threshold: "p99 > 200ms → Scale trigger", curve: "Exponential backoff, 10-min hold" },
                  { metric: "Queue Depth", threshold: ">1000 messages → Scale consumers", curve: "Step function, immediate" },
                  { metric: "Error Rate", threshold: ">1% → Circuit break + scale", curve: "Immediate scale-in protected" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded bg-gray-100">
                    <div>
                      <span className="text-gray-900 font-medium">{item.metric}</span>
                      <div className="text-xs text-gray-600">{item.threshold}</div>
                    </div>
                    <div className="text-xs text-amber-400 text-right">{item.curve}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Optimization Matrix */}
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <BarChart3 className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Cost Optimization Matrix</h3>
                  <p className="text-xs text-gray-600">
                    Trade-off analysis between cost, performance, and availability tiers
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-600 border-b border-gray-200">
                      <th className="text-left py-2 font-medium">Strategy</th>
                      <th className="text-center py-2 font-medium">Cost</th>
                      <th className="text-center py-2 font-medium">Performance</th>
                      <th className="text-center py-2 font-medium">Availability</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      { strategy: "On-demand", cost: "High", perf: "Optimal", avail: "99.9%" },
                      { strategy: "Reserved", cost: "Low", perf: "Optimal", avail: "99.9%" },
                      { strategy: "Spot + fallback", cost: "Lowest", perf: "Variable", avail: "99.5%" },
                      { strategy: "Multi-tiered", cost: "Medium", perf: "Tiered", avail: "99.99%" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-2 text-gray-900">{row.strategy}</td>
                        <td className={`text-center py-2 ${row.cost === 'Low' || row.cost === 'Lowest' ? 'text-green-400' : row.cost === 'High' ? 'text-red-400' : 'text-yellow-400'}`}>{row.cost}</td>
                        <td className={`text-center py-2 ${row.perf === 'Optimal' ? 'text-green-400' : row.perf === 'Tiered' ? 'text-yellow-400' : 'text-orange-400'}`}>{row.perf}</td>
                        <td className="text-center py-2">{row.avail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quantified Impact Visualization */}
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <Gauge className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Quantified Impact Visualization</h3>
                  <p className="text-xs text-gray-600">
                    Before/after metrics and trend analysis tied to strategic outcomes
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                {[
                  { metric: "Time-to-capacity", before: "12 weeks", after: "3 weeks", improvement: "75% faster" },
                  { metric: "Cost-per-transaction", before: "$0.042", after: "$0.018", improvement: "57% reduction" },
                  { metric: "Deployment frequency", before: "Monthly", after: "Daily", improvement: "30x increase" },
                  { metric: "Incident recovery", before: "4 hours", after: "15 minutes", improvement: "94% faster" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded bg-gray-100">
                    <div className="text-sm">
                      <div className="text-gray-900 font-medium">{item.metric}</div>
                      <div className="text-gray-600 text-xs">{item.before} → {item.after}</div>
                    </div>
                    <div className="text-amber-400 font-semibold text-sm">{item.improvement}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Realization Timeline */}
            <div className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <TrendingUp className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">Value Realization Timeline</h3>
                  <p className="text-xs text-gray-600">
                    Milestone-based value delivery with dependency mapping between phases
                  </p>
                </div>
              </div>
              <div className="relative mt-4 pl-4">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-white/20" />
                {[
                  { milestone: "Foundation Complete", time: "Week 4", value: "Infrastructure ready for load" },
                  { milestone: "Pilot Launch", time: "Week 8", value: "First production workload live" },
                  { milestone: "Region 2 Live", time: "Week 12", value: "Disaster recovery capability" },
                  { milestone: "Auto-scale Active", time: "Week 16", value: "Elastic capacity achieved" },
                  { milestone: "Optimization Complete", time: "Week 24", value: "Target cost efficiency hit" }
                ].map((item, i) => (
                  <div key={i} className="relative pl-4 pb-4 last:pb-0">
                    <div className="absolute left-0 w-2 h-2 rounded-full bg-amber-400 -translate-x-[5px] mt-1.5" />
                    <div className="text-sm">
                      <div className="text-gray-900 font-medium">{item.milestone}</div>
                      <div className="text-xs text-gray-600">{item.time} — {item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            Scaling rollout is phased: pilot with a bounded scope (e.g., one region or one
            product line), validate capacity and adoption metrics, then expand. Each phase
            includes capacity planning, rollout playbooks, and value checks. Long-term,
            scaling strategy is embedded in planning and governance so that growth is
            sustainable and measurable.
          </p>
          <ul className="space-y-3 max-w-2xl text-gray-600">
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 1:</span>
              Baseline architecture and pilot scope; define metrics.
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 2:</span>
              Broader rollout with capacity and adoption automation.
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 font-medium shrink-0">Phase 3:</span>
              Full scale and continuous optimization; integration with governance.
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
            Organizations that treat scaling as a strategy—not an afterthought—deliver faster
            time-to-market for new capacity and more predictable cost and performance. That
            positions you to capture growth without overbuilding or underpreparing, and to
            demonstrate to the board and stakeholders that scale is under control.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactForm
            title="Discuss Scaling Strategies"
            description="Define capacity, rollout, and value-realization for your scale targets."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}
