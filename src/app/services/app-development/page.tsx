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
  Code,
  Smartphone,
  Monitor,
  Database,
  Zap,
  Shield,
  Users,
  TrendingUp,
  DollarSign,
  Network,
  Cloud,
  Terminal,
  Package,
  Heart,
  BookOpen,
} from "lucide-react";

export default function AppDevelopmentPage() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
            <div>
              <Badge className="mb-6 bg-purple-500 text-gray-900">App Development</Badge>
              <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Custom Applications
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  with Automation
                </span>
              </h1>
              <p className="mb-10 text-lg text-gray-600">
                Bespoke software applications with integrated automation capabilities. We build web,
                mobile, and desktop applications that streamline your business processes and drive
                efficiency.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-purple-600 text-gray-900 hover:bg-purple-700">
                  Get App Development Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline">
                  View App Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                alt="Software development team working on modern web application"
                width={600}
                height={400}
                className="aspect-video rounded-2xl"
                category="development"
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
                Full-Stack Application Development
              </h2>
              <p className="mb-6 text-gray-600">
                We develop custom applications that solve specific business challenges. From concept
                to deployment, we handle every aspect of application development with a focus on
                automation and efficiency.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">End-to-End Development</h3>
                    <p className="text-gray-600">
                      Complete development lifecycle from planning to maintenance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Automation Integration</h3>
                    <p className="text-gray-600">
                      Built-in automation features to streamline business processes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Scalable Architecture</h3>
                    <p className="text-gray-600">
                      Future-proof applications that grow with your business
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
                    <div className="mb-2 inline-flex rounded-lg bg-purple-100 p-2">
                      <Code className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium">Custom Solutions</h4>
                    <p className="text-sm text-gray-600">
                      Tailored to your needs
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-purple-100 p-2">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium">60% Cost Savings</h4>
                    <p className="text-sm text-gray-600">
                      vs off-the-shelf software
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-purple-100 p-2">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium">3x Faster Processes</h4>
                    <p className="text-sm text-gray-600">Automated workflows</p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-purple-100 p-2">
                      <Shield className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium">Enterprise Security</h4>
                    <p className="text-sm text-gray-600">
                      Bank-level protection
                    </p>
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
              Development Services
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Comprehensive App Development
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Full-spectrum application development services
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gray-200 p-3">
                  <service.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
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
              Custom Application Solutions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Tailored applications for specific business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-purple-100 p-3">
                    <useCase.icon className="h-6 w-6 text-purple-600" />
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
              Modern Development Technologies
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Cutting-edge tools for robust application development
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <div className="text-lg font-bold text-purple-600">
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
              Flexible Development Packages
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Choose the development plan that fits your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 ${plan.featured ? "border-purple-500 bg-purple-50" : "border-gray-200 bg-white"}`}
              >
                {plan.featured && (
                  <Badge className="mb-4 bg-purple-500 text-gray-900">Most Popular</Badge>
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
                  className={`w-full ${plan.featured ? "bg-purple-600 text-gray-900 hover:bg-purple-700" : ""}`}
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
              Development Process
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Our Agile Development Methodology
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Structured approach to successful application development
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
              Common questions about custom app development
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
              Ready to Build Your Custom Application?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Schedule a free consultation with our development experts
            </p>
          </div>

          <ContactForm
            title="Discuss Your App Development Needs"
            description="Tell us about your business challenges. We'll design a custom application solution."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}

const services = [
  {
    title: "Web Applications",
    icon: Monitor,
    description: "Custom web applications for business automation",
    features: [
      "Responsive design",
      "User authentication",
      "Real-time features",
      "API integration",
      "Admin dashboard",
    ],
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS & Android",
      "Offline functionality",
      "Push notifications",
      "Device integration",
      "App store deployment",
    ],
  },
  {
    title: "Desktop Applications",
    icon: Terminal,
    description: "Powerful desktop software solutions",
    features: [
      "Windows/Mac/Linux",
      "System integration",
      "Local data storage",
      "Background processing",
      "Auto-updates",
    ],
  },
  {
    title: "API Development",
    icon: Network,
    description: "RESTful and GraphQL API services",
    features: [
      "REST API design",
      "GraphQL implementation",
      "Authentication",
      "Rate limiting",
      "API documentation",
    ],
  },
  {
    title: "Database Design",
    icon: Database,
    description: "Optimized database architecture",
    features: [
      "Schema design",
      "Performance optimization",
      "Data migration",
      "Backup strategies",
      "Security implementation",
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Cloud,
    description: "CI/CD and cloud deployment",
    features: [
      "Continuous integration",
      "Automated testing",
      "Cloud deployment",
      "Monitoring setup",
      "Scaling configuration",
    ],
  },
];

const useCases = [
  {
    title: "Business Process Automation",
    icon: Zap,
    description: "Applications that automate workflows",
    features: [
      "Workflow automation",
      "Document processing",
      "Approval systems",
      "Task management",
      "Reporting automation",
    ],
  },
  {
    title: "Customer Relationship Management",
    icon: Users,
    description: "Custom CRM solutions",
    features: [
      "Lead management",
      "Customer tracking",
      "Communication logs",
      "Sales pipeline",
      "Analytics dashboard",
    ],
  },
  {
    title: "Inventory Management",
    icon: Package,
    description: "Stock and warehouse management",
    features: [
      "Inventory tracking",
      "Order management",
      "Supplier management",
      "Barcode scanning",
      "Stock alerts",
    ],
  },
  {
    title: "Financial Applications",
    icon: DollarSign,
    description: "Accounting and finance software",
    features: [
      "Invoice generation",
      "Expense tracking",
      "Financial reporting",
      "Payment processing",
      "Tax calculation",
    ],
  },
  {
    title: "Healthcare Systems",
    icon: Heart,
    description: "Medical and healthcare applications",
    features: [
      "Patient records",
      "Appointment scheduling",
      "Prescription management",
      "HIPAA compliance",
      "Telemedicine features",
    ],
  },
  {
    title: "Education Platforms",
    icon: BookOpen,
    description: "Learning management systems",
    features: [
      "Course management",
      "Student tracking",
      "Assignment submission",
      "Grade management",
      "Online testing",
    ],
  },
];

const technologies = [
  { name: "React", initials: "RT", purpose: "Frontend framework for web apps" },
  { name: "Next.js", initials: "NJ", purpose: "Full-stack React framework" },
  { name: "Node.js", initials: "NJ", purpose: "Backend JavaScript runtime" },
  { name: "TypeScript", initials: "TS", purpose: "Type-safe JavaScript" },
  { name: "PostgreSQL", initials: "PG", purpose: "Relational database" },
  { name: "MongoDB", initials: "MG", purpose: "NoSQL database" },
  { name: "AWS", initials: "AWS", purpose: "Cloud infrastructure" },
  { name: "Docker", initials: "DK", purpose: "Containerization" },
];

const pricingPlans = [
  {
    name: "MVP Development",
    price: "15,000",
    period: "project",
    description: "Minimum viable product development",
    featured: false,
    features: [
      "Basic features only",
      "Single platform",
      "Standard design",
      "Basic testing",
      "Documentation",
      "3 months support",
    ],
  },
  {
    name: "Standard Package",
    price: "35,000",
    period: "project",
    description: "Complete application development",
    featured: true,
    features: [
      "Full feature set",
      "Multiple platforms",
      "Custom design",
      "Comprehensive testing",
      "Full documentation",
      "6 months support",
      "API development",
      "Admin dashboard",
    ],
  },
  {
    name: "Enterprise Suite",
    price: "Custom",
    period: "project",
    description: "Large-scale enterprise solutions",
    featured: false,
    features: [
      "Custom everything",
      "All platforms",
      "Enterprise design",
      "Enterprise testing",
      "Training included",
      "12 months support",
      "Custom integrations",
      "Scalable architecture",
      "24/7 monitoring",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Requirements gathering and planning",
  },
  {
    number: "2",
    title: "Design",
    description: "UI/UX design and architecture",
  },
  {
    number: "3",
    title: "Development",
    description: "Agile development sprints",
  },
  {
    number: "4",
    title: "Testing",
    description: "Quality assurance and testing",
  },
  {
    number: "5",
    title: "Deployment",
    description: "Launch and maintenance",
  },
];

const faqs = [
  {
    question: "How long does app development take?",
    answer:
      "Development timelines vary based on complexity. A basic MVP typically takes 6-8 weeks, while a full-featured application can take 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance packages including bug fixes, updates, security patches, performance optimization, and feature enhancements. Maintenance is crucial for long-term application success.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We specialize in integrating custom applications with existing systems including CRMs, ERPs, databases, APIs, and legacy systems. We ensure seamless data flow and interoperability.",
  },
  {
    question: "What about scalability?",
    answer:
      "We build applications with scalability in mind from the start. Our architecture decisions, database design, and infrastructure setup ensure your application can grow with your business needs.",
  },
  {
    question: "Do you handle app store submissions?",
    answer:
      "Yes, we handle the complete app store submission process for iOS App Store and Google Play Store, including preparing assets, meeting guidelines, and managing the review process.",
  },
];



