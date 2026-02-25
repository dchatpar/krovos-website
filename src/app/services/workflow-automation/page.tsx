import { Section } from "@/components/sections/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/ui/contact-form";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  ArrowRight,
  CheckCircle,
  Building,
  Heart,
  BookOpen,
  Factory,
  Scale,
  ShoppingCart,
} from "lucide-react";

export default function WorkflowAutomationPage() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
            <div>
              <Badge className="mb-6 bg-orange-500 text-gray-900">Workflow Automation</Badge>
              <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Streamline Business
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Processes
                </span>
              </h1>
              <p className="mb-10 text-lg text-gray-600">
                Automate repetitive business processes to eliminate manual work, reduce errors, and
                increase efficiency. Our workflow automation solutions transform how your business
                operates.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-orange-600 text-gray-900 hover:bg-orange-700">
                  Get Workflow Automation Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline">
                  View Workflow Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                alt="Workflow automation interface showing business process optimization"
                width={600}
                height={400}
                className="aspect-video rounded-2xl"
                category="automation"
                placeholderType="gradient"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4">Service Overview</Badge>
              <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Intelligent Process Automation
              </h2>
              <p className="mb-6 text-gray-600">
                We analyze your business processes and implement automation solutions that eliminate
                manual tasks, reduce errors, and accelerate workflows. From simple approvals to
                complex multi-department processes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Process Analysis</h3>
                    <p className="text-gray-600">
                      Comprehensive analysis of existing workflows and bottlenecks
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Custom Automation</h3>
                    <p className="text-gray-600">
                      Tailored automation solutions for your specific processes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      Ongoing monitoring and improvement of automated workflows
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <Badge className="mb-4">Use Cases</Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Workflow Automation Applications
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Transformative automation solutions for various industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3">
                    <useCase.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="light">
        <Container>
          <div className="text-center">
            <Badge className="mb-4">Technology Stack</Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Workflow Automation Platforms
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Industry-leading tools for process automation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <div className="text-lg font-bold text-orange-600">
                    {tech.initials}
                  </div>
                </div>
                <h3 className="mb-2 font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.purpose}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <Badge className="mb-4">Pricing Plans</Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Flexible Automation Packages
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Choose the workflow automation plan that fits your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 ${plan.featured ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white"}`}
              >
                {plan.featured && (
                  <Badge className="mb-4 bg-orange-500 text-gray-900">Most Popular</Badge>
                )}
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="mb-6 text-gray-600">{plan.description}</p>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.featured ? "bg-orange-600 text-gray-900 hover:bg-orange-700" : ""}`}
                  variant={plan.featured ? "primary" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="light">
        <Container>
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
              Implementation Process
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              How We Implement Workflow Automation
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Structured approach to successful automation implementation
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-bold text-gray-900">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Common questions about workflow automation
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 p-6"
                >
                  <h3 className="mb-3 text-lg font-semibold">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="light">
        <Container>
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
              Get Started
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Ready to Automate Your Workflows?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Schedule a free consultation with our workflow automation experts
            </p>
          </div>

          <ContactForm
            title="Discuss Your Workflow Automation Needs"
            description="Tell us about your business processes. We'll design custom automation solutions."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}

const useCases = [
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Production and supply chain automation",
    features: [
      "Order processing",
      "Inventory management",
      "Quality control",
      "Shipping automation",
      "Supplier coordination",
    ],
  },
  {
    title: "Healthcare",
    icon: Heart,
    description: "Medical and patient care automation",
    features: [
      "Patient scheduling",
      "Medical records",
      "Prescription management",
      "Billing automation",
      "Lab result processing",
    ],
  },
  {
    title: "Education",
    icon: BookOpen,
    description: "Academic and administrative automation",
    features: [
      "Student registration",
      "Grade management",
      "Course scheduling",
      "Fee collection",
      "Library management",
    ],
  },
  {
    title: "Legal",
    icon: Scale,
    description: "Legal document and case management",
    features: [
      "Document generation",
      "Case tracking",
      "Billing automation",
      "Compliance tracking",
      "Client communication",
    ],
  },
  {
    title: "Real Estate",
    icon: Building,
    description: "Property management automation",
    features: [
      "Listing management",
      "Lead tracking",
      "Document processing",
      "Payment collection",
      "Maintenance requests",
    ],
  },
  {
    title: "Retail",
    icon: ShoppingCart,
    description: "Retail operations automation",
    features: [
      "Inventory management",
      "Order processing",
      "Customer service",
      "Marketing automation",
      "Sales reporting",
    ],
  },
];

const technologies = [
  { name: "Zapier", initials: "ZP", purpose: "Workflow automation platform" },
  { name: "Make", initials: "MK", purpose: "Visual automation builder" },
  { name: "n8n", initials: "N8", purpose: "Open-source workflow automation" },
  { name: "Power Automate", initials: "PA", purpose: "Microsoft automation platform" },
  { name: "Node-RED", initials: "NR", purpose: "Flow-based programming" },
  { name: "Python", initials: "PY", purpose: "Custom automation scripts" },
  { name: "PostgreSQL", initials: "PG", purpose: "Workflow data storage" },
  { name: "AWS", initials: "AWS", purpose: "Cloud automation infrastructure" },
];

const pricingPlans = [
  {
    name: "Departmental",
    price: "799",
    period: "month",
    description: "Automation for single department",
    featured: false,
    features: [
      "Up to 10 workflows",
      "Single department",
      "Basic integrations",
      "Email support",
      "Monthly reports",
      "Standard monitoring",
    ],
  },
  {
    name: "Business",
    price: "1,999",
    period: "month",
    description: "Cross-department automation",
    featured: true,
    features: [
      "Up to 50 workflows",
      "Multiple departments",
      "Advanced integrations",
      "Priority support",
      "Real-time analytics",
      "Advanced monitoring",
      "Custom development",
      "Training included",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "month",
    description: "Organization-wide automation",
    featured: false,
    features: [
      "Unlimited workflows",
      "All departments",
      "Custom integrations",
      "24/7 dedicated support",
      "Enterprise analytics",
      "Proactive monitoring",
      "Full customization",
      "On-site training",
      "SLA guarantees",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Process analysis and mapping",
  },
  {
    number: "2",
    title: "Design",
    description: "Automation workflow design",
  },
  {
    number: "3",
    title: "Development",
    description: "Build and configure automation",
  },
  {
    number: "4",
    title: "Testing",
    description: "Validate automation workflows",
  },
  {
    number: "5",
    title: "Deployment",
    description: "Launch and train users",
  },
];

const faqs = [
  {
    question: "How do you identify automation opportunities?",
    answer:
      "We conduct thorough process analysis including interviews, observation, and data analysis to identify repetitive tasks, bottlenecks, and error-prone processes that are ideal candidates for automation.",
  },
  {
    question: "Can you automate legacy systems?",
    answer:
      "Yes, we specialize in automating legacy systems through various methods including screen scraping, API wrappers, database integration, and robotic process automation (RPA) techniques.",
  },
  {
    question: "How do you handle exceptions in automated workflows?",
    answer:
      "We build robust exception handling into all automated workflows, including error detection, notification systems, manual override options, and escalation procedures for unresolved issues.",
  },
  {
    question: "What about security and compliance?",
    answer:
      "All automation solutions include security measures such as access controls, audit trails, data encryption, and compliance with relevant regulations like GDPR, HIPAA, or industry-specific requirements.",
  },
  {
    question: "How do you measure automation success?",
    answer:
      "We establish KPIs before implementation including time savings, cost reduction, error rate reduction, and productivity improvements. We provide regular reports on these metrics.",
  },
];

