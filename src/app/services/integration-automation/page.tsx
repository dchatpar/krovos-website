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
  Link,
  Database,
  Cloud,
  Zap,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  Building,
  Heart,
  BookOpen,
  ShoppingCart,
  MessageSquare,
  Factory,
  Target,
} from "lucide-react";

export default function IntegrationAutomationPage() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
            <div>
              <Badge className="mb-6 bg-teal-500 text-gray-900">Integration Automation</Badge>
              <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Seamless System
                <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Connectivity
                </span>
              </h1>
              <p className="mb-10 text-lg text-gray-600">
                Connect your business systems, applications, and platforms with automated
                integration solutions. Eliminate data silos and enable seamless information flow
                across your organization.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-teal-600 text-gray-900 hover:bg-teal-700">
                  Get Integration Automation Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline">
                  View Integration Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                alt="System integration dashboard connecting multiple APIs and services"
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
                Unified System Integration
              </h2>
              <p className="mb-6 text-gray-600">
                We create automated integration solutions that connect your disparate systems,
                applications, and data sources. Our integration automation ensures seamless data
                flow, real-time synchronization, and unified business processes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">API Integration</h3>
                    <p className="text-gray-600">
                      Connect systems through RESTful APIs, GraphQL, and web services
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Data Synchronization</h3>
                    <p className="text-gray-600">
                      Real-time or batch data synchronization across systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Legacy System Integration</h3>
                    <p className="text-gray-600">
                      Connect modern applications with legacy systems and databases
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Key Benefits</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-teal-100 p-2">
                      <Link className="h-5 w-5 text-teal-600" />
                    </div>
                    <h4 className="font-medium">Unified Data</h4>
                    <p className="text-sm text-gray-600">
                      Single source of truth
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-teal-100 p-2">
                      <DollarSign className="h-5 w-5 text-teal-600" />
                    </div>
                    <h4 className="font-medium">70% Cost Reduction</h4>
                    <p className="text-sm text-gray-600">
                      Manual integration work
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-teal-100 p-2">
                      <TrendingUp className="h-5 w-5 text-teal-600" />
                    </div>
                    <h4 className="font-medium">Real-Time Updates</h4>
                    <p className="text-sm text-gray-600">
                      Instant data synchronization
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-teal-100 p-2">
                      <Shield className="h-5 w-5 text-teal-600" />
                    </div>
                    <h4 className="font-medium">Enhanced Security</h4>
                    <p className="text-sm text-gray-600">Secure data transfer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="light">
        <Container>
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-gray-300 text-gray-900">
              Integration Types
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Comprehensive Integration Solutions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Connect all your business systems and applications
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {integrationTypes.map((type, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gray-200 p-3">
                  <type.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
                <ul className="mt-4 space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <Badge className="mb-4">Use Cases</Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Integration Automation Applications
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Transformative integration solutions for various scenarios
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-teal-100 p-3">
                    <useCase.icon className="h-6 w-6 text-teal-600" />
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
              Integration Platforms & Tools
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Industry-leading integration technologies
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                  <div className="text-lg font-bold text-teal-600">
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
              Flexible Integration Packages
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Choose the integration automation plan that fits your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 ${plan.featured ? "border-teal-500 bg-teal-50" : "border-gray-200 bg-white"}`}
              >
                {plan.featured && (
                  <Badge className="mb-4 bg-teal-500 text-gray-900">Most Popular</Badge>
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
                  className={`w-full ${plan.featured ? "bg-teal-600 text-gray-900 hover:bg-teal-700" : ""}`}
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
              How We Implement Integration Automation
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Structured approach to successful system integration
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
              Common questions about integration automation
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
              Ready to Connect Your Systems?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Schedule a free consultation with our integration automation experts
            </p>
          </div>

          <ContactForm
            title="Discuss Your Integration Needs"
            description="Tell us about your systems and data flow challenges. We'll design seamless integration solutions."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}

const integrationTypes = [
  {
    title: "CRM Integration",
    icon: Users,
    description: "Connect CRM systems with other business applications",
    features: [
      "Salesforce integration",
      "HubSpot connectivity",
      "Lead synchronization",
      "Contact management",
      "Sales automation",
    ],
  },
  {
    title: "Marketing Automation",
    icon: Zap,
    description: "Integrate marketing platforms with sales and CRM",
    features: [
      "Email marketing integration",
      "Social media connectivity",
      "Campaign synchronization",
      "Lead scoring integration",
      "Analytics connection",
    ],
  },
  {
    title: "E-commerce Integration",
    icon: ShoppingCart,
    description: "Connect online stores with inventory and accounting",
    features: [
      "Shopify integration",
      "WooCommerce connectivity",
      "Order synchronization",
      "Inventory management",
      "Payment processing",
    ],
  },
  {
    title: "Cloud Storage",
    icon: Cloud,
    description: "Integrate cloud storage with business applications",
    features: [
      "Google Drive integration",
      "Dropbox connectivity",
      "File synchronization",
      "Document management",
      "Collaboration tools",
    ],
  },
  {
    title: "Communication Platforms",
    icon: MessageSquare,
    description: "Connect communication tools with business systems",
    features: [
      "Slack integration",
      "Microsoft Teams connectivity",
      "Email system integration",
      "Notification systems",
      "Chat integration",
    ],
  },
  {
    title: "Database Integration",
    icon: Database,
    description: "Connect and synchronize databases across systems",
    features: [
      "SQL database integration",
      "NoSQL connectivity",
      "Data synchronization",
      "ETL automation",
      "Data warehousing",
    ],
  },
];

const useCases = [
  {
    title: "Sales & Marketing",
    icon: Target,
    description: "Integrate sales and marketing systems",
    features: [
      "CRM to marketing automation",
      "Lead synchronization",
      "Campaign tracking",
      "Sales pipeline integration",
      "ROI analysis",
    ],
  },
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    description: "Connect financial systems and applications",
    features: [
      "Accounting software integration",
      "Payment processing",
      "Expense management",
      "Financial reporting",
      "Tax compliance",
    ],
  },
  {
    title: "Healthcare Systems",
    icon: Heart,
    description: "Medical system integration",
    features: [
      "EHR system integration",
      "Patient portal connectivity",
      "Lab system integration",
      "Billing system connection",
      "Telemedicine integration",
    ],
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Production system integration",
    features: [
      "ERP system integration",
      "Supply chain connectivity",
      "Inventory management",
      "Quality control systems",
      "Production planning",
    ],
  },
  {
    title: "Education",
    icon: BookOpen,
    description: "Educational system integration",
    features: [
      "LMS integration",
      "Student information systems",
      "Library system connectivity",
      "Payment system integration",
      "Communication platforms",
    ],
  },
  {
    title: "Real Estate",
    icon: Building,
    description: "Property management integration",
    features: [
      "Property listing integration",
      "CRM connectivity",
      "Payment processing",
      "Document management",
      "Maintenance system",
    ],
  },
];

const technologies = [
  { name: "Zapier", initials: "ZP", purpose: "Workflow automation platform" },
  { name: "Make", initials: "MK", purpose: "Visual integration builder" },
  { name: "MuleSoft", initials: "MS", purpose: "Enterprise integration platform" },
  { name: "Apache Kafka", initials: "AK", purpose: "Stream processing platform" },
  { name: "PostgreSQL", initials: "PG", purpose: "Database integration" },
  { name: "REST APIs", initials: "RA", purpose: "API-based integration" },
  { name: "GraphQL", initials: "GQ", purpose: "Query language for APIs" },
  { name: "AWS", initials: "AWS", purpose: "Cloud integration services" },
];

const pricingPlans = [
  {
    name: "Basic Integration",
    price: "899",
    period: "month",
    description: "Simple system integrations",
    featured: false,
    features: [
      "Up to 5 integrations",
      "Basic API connections",
      "Email support",
      "Standard monitoring",
      "Monthly sync",
      "Basic documentation",
    ],
  },
  {
    name: "Professional Integration",
    price: "2,499",
    period: "month",
    description: "Advanced integration solutions",
    featured: true,
    features: [
      "Up to 20 integrations",
      "Advanced API connections",
      "Priority support",
      "Real-time monitoring",
      "Real-time sync",
      "Comprehensive documentation",
      "Custom development",
      "Performance optimization",
    ],
  },
  {
    name: "Enterprise Integration",
    price: "Custom",
    period: "month",
    description: "Enterprise-wide integration",
    featured: false,
    features: [
      "Unlimited integrations",
      "Enterprise API management",
      "24/7 dedicated support",
      "Enterprise monitoring",
      "Real-time data flow",
      "Enterprise documentation",
      "Full customization",
      "On-premise deployment",
      "SLA guarantees",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Analysis",
    description: "Analyze systems and integration needs",
  },
  {
    number: "2",
    title: "Design",
    description: "Design integration architecture",
  },
  {
    number: "3",
    title: "Development",
    description: "Build integration solutions",
  },
  {
    number: "4",
    title: "Testing",
    description: "Test integration functionality",
  },
  {
    number: "5",
    title: "Deployment",
    description: "Deploy and monitor integrations",
  },
];

const faqs = [
  {
    question: "How do you handle API rate limits?",
    answer:
      "We implement sophisticated rate limiting strategies including request queuing, exponential backoff, request batching, and caching to ensure compliance with API rate limits while maintaining optimal performance.",
  },
  {
    question: "Can you integrate legacy systems without APIs?",
    answer:
      "Yes, we use various techniques including screen scraping, database connectors, file-based integration, and middleware solutions to connect legacy systems that don't have modern APIs.",
  },
  {
    question: "How do you ensure data consistency across systems?",
    answer:
      "We implement data validation, conflict resolution strategies, transaction management, and reconciliation processes to ensure data consistency. We also establish clear master data management policies.",
  },
  {
    question: "What about security and compliance?",
    answer:
      "All integrations include security measures such as encryption, authentication, authorization, audit trails, and compliance with relevant regulations like GDPR, HIPAA, or industry-specific requirements.",
  },
  {
    question: "How do you handle integration failures?",
    answer:
      "We build robust error handling including retry mechanisms, failure notifications, dead letter queues, manual intervention options, and comprehensive logging for troubleshooting integration issues.",
  },
];

