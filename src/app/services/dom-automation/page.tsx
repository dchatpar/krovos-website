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
  Zap,
  Globe,
  Shield,
  Database,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Search,
  Eye,
  Download,
  Building,
  ShoppingCart,
  BookOpen,
  Target,
} from "lucide-react";

export default function DOMAutomationPage() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
            <div>
              <Badge className="mb-6 bg-green-500 text-gray-900">DOM Automation</Badge>
              <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Advanced Web
                <span className="block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Data Extraction
                </span>
              </h1>
              <p className="mb-10 text-lg text-gray-600">
                Professional web automation solutions for data extraction, browser workflows, and
                DOM manipulation. Extract valuable insights from websites with our sophisticated
                automation technology.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-green-600 text-gray-900 hover:bg-green-700">
                  Get DOM Automation Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline">
                  View DOM Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                alt="DOM automation interface showing web scraping and browser automation"
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
                Sophisticated Web Automation
              </h2>
              <p className="mb-6 text-gray-600">
                Our DOM automation solutions enable businesses to extract, process, and analyze web
                data at scale. From simple data collection to complex browser workflows, we handle
                it all with precision and reliability.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">High-Speed Extraction</h3>
                    <p className="text-gray-600">
                      Extract data from thousands of pages per hour with 99.9% accuracy
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Anti-Detection Technology</h3>
                    <p className="text-gray-600">
                      Advanced techniques to avoid detection and bypass restrictions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Real-Time Monitoring</h3>
                    <p className="text-gray-600">
                      Continuous monitoring and alerting for data changes and anomalies
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
                    <div className="mb-2 inline-flex rounded-lg bg-green-100 p-2">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-medium">90% Faster</h4>
                    <p className="text-sm text-gray-600">
                      Data extraction speed
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-green-100 p-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-medium">70% Cost Reduction</h4>
                    <p className="text-sm text-gray-600">Manual labor savings</p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-green-100 p-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-medium">99.9% Accuracy</h4>
                    <p className="text-sm text-gray-600">
                      Data quality assurance
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-green-100 p-2">
                      <Database className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-medium">24/7 Operation</h4>
                    <p className="text-sm text-gray-600">
                      Continuous monitoring
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
              Core Features
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Complete DOM Automation Suite
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Advanced tools for web data extraction and browser automation
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-100 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gray-200 p-3">
                  <feature.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      {item}
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
              Applications of DOM Automation
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Transform web data into actionable business intelligence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3">
                    <useCase.icon className="h-6 w-6 text-green-600" />
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
              Advanced Automation Technology
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Cutting-edge tools for reliable web automation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <div className="text-lg font-bold text-green-600">
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
              Flexible DOM Automation Packages
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Choose the plan that matches your data extraction needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 ${plan.featured ? "border-green-500 bg-green-50" : "border-gray-200 bg-white"}`}
              >
                {plan.featured && (
                  <Badge className="mb-4 bg-green-500 text-gray-900">Most Popular</Badge>
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
                  className={`w-full ${plan.featured ? "bg-green-600 text-gray-900 hover:bg-green-700" : ""}`}
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
              Our Process
            </Badge>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              How We Implement DOM Automation
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              A systematic approach to web automation success
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
              Common questions about DOM automation
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
              Ready to Automate Web Data Extraction?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Schedule a free consultation with our DOM automation experts
            </p>
          </div>

          <ContactForm
            title="Discuss Your Web Automation Needs"
            description="Tell us about your data extraction challenges. We'll provide a customized automation solution."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}

const features = [
  {
    title: "Web Scraping",
    icon: Download,
    description: "Extract data from websites with precision and speed",
    items: [
      "Structured data extraction",
      "Dynamic content handling",
      "JavaScript rendering",
      "Pagination automation",
      "Data validation",
    ],
  },
  {
    title: "Browser Automation",
    icon: Globe,
    description: "Automate complex browser workflows and interactions",
    items: [
      "Form filling automation",
      "Click sequence automation",
      "Navigation automation",
      "Screenshot capture",
      "PDF generation",
    ],
  },
  {
    title: "DOM Testing",
    icon: Eye,
    description: "Automated testing and monitoring of web elements",
    items: [
      "Element existence checks",
      "Content validation",
      "Performance monitoring",
      "Error detection",
      "Regression testing",
    ],
  },
  {
    title: "Content Aggregation",
    icon: Database,
    description: "Collect and consolidate data from multiple sources",
    items: [
      "Multi-source aggregation",
      "Data deduplication",
      "Format standardization",
      "Real-time updates",
      "API integration",
    ],
  },
  {
    title: "Monitoring & Alerting",
    icon: AlertCircle,
    description: "Continuous monitoring with instant notifications",
    items: [
      "Price change detection",
      "Content change alerts",
      "Availability monitoring",
      "Performance alerts",
      "Custom triggers",
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    description: "Secure and compliant data extraction",
    items: [
      "Rate limiting",
      "Proxy rotation",
      "GDPR compliance",
      "Data encryption",
      "Access logging",
    ],
  },
];

const useCases = [
  {
    title: "Competitive Intelligence",
    icon: Search,
    description: "Monitor competitors and market trends",
    features: [
      "Price monitoring",
      "Product tracking",
      "Review aggregation",
      "Market analysis",
      "Trend detection",
    ],
  },
  {
    title: "Lead Generation",
    icon: Target,
    description: "Extract contact information and leads",
    features: [
      "Contact scraping",
      "Company data extraction",
      "Email collection",
      "Social media scraping",
      "Lead validation",
    ],
  },
  {
    title: "Financial Data",
    icon: DollarSign,
    description: "Collect financial and economic data",
    features: [
      "Stock price tracking",
      "Financial report extraction",
      "Economic indicator collection",
      "Currency rate monitoring",
      "Investment research",
    ],
  },
  {
    title: "Real Estate",
    icon: Building,
    description: "Property listing and market data",
    features: [
      "Property listing aggregation",
      "Price trend analysis",
      "Neighborhood data",
      "Rental market monitoring",
      "Property comparison",
    ],
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Product data and inventory monitoring",
    features: [
      "Product catalog extraction",
      "Inventory monitoring",
      "Review collection",
      "Shipping cost tracking",
      "Marketplace analysis",
    ],
  },
  {
    title: "Research & Academia",
    icon: BookOpen,
    description: "Academic research and data collection",
    features: [
      "Research paper collection",
      "Citation extraction",
      "Academic database scraping",
      "Publication monitoring",
      "Data for analysis",
    ],
  },
];

const technologies = [
  { name: "Playwright", initials: "PW", purpose: "Browser automation framework" },
  { name: "Puppeteer", initials: "PP", purpose: "Headless browser automation" },
  { name: "Selenium", initials: "SL", purpose: "Web automation testing" },
  { name: "BeautifulSoup", initials: "BS", purpose: "HTML parsing library" },
  { name: "Scrapy", initials: "SC", purpose: "Web scraping framework" },
  { name: "PostgreSQL", initials: "PG", purpose: "Data storage and management" },
  { name: "Redis", initials: "RD", purpose: "Caching and queue management" },
  { name: "Docker", initials: "DK", purpose: "Containerization and scaling" },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "299",
    period: "month",
    description: "For small-scale data extraction needs",
    featured: false,
    features: [
      "Up to 10,000 pages/month",
      "Basic data extraction",
      "Email support",
      "Standard monitoring",
      "Basic reporting",
      "Single data source",
    ],
  },
  {
    name: "Professional",
    price: "899",
    period: "month",
    description: "Ideal for business intelligence",
    featured: true,
    features: [
      "Up to 100,000 pages/month",
      "Advanced extraction",
      "Priority support",
      "Real-time monitoring",
      "Advanced analytics",
      "Multiple data sources",
      "Custom workflows",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "month",
    description: "For large-scale automation needs",
    featured: false,
    features: [
      "Unlimited pages",
      "Custom solutions",
      "24/7 dedicated support",
      "Custom monitoring",
      "Enterprise analytics",
      "Unlimited sources",
      "White-label solution",
      "On-premise deployment",
      "Custom integrations",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Requirements",
    description: "Analyze data extraction needs",
  },
  {
    number: "2",
    title: "Development",
    description: "Build automation scripts",
  },
  {
    number: "3",
    title: "Testing",
    description: "Validate extraction accuracy",
  },
  {
    number: "4",
    title: "Deployment",
    description: "Launch automation system",
  },
  {
    number: "5",
    title: "Monitoring",
    description: "Continuous optimization",
  },
];

const faqs = [
  {
    question: "Is web scraping legal?",
    answer:
      "Web scraping is legal when done ethically and in compliance with website terms of service, robots.txt files, and data protection laws. We ensure all our automation solutions follow legal guidelines and respect website policies.",
  },
  {
    question: "How do you handle anti-scraping measures?",
    answer:
      "We use advanced techniques including proxy rotation, rate limiting, browser fingerprinting, and CAPTCHA solving to avoid detection. Our solutions are designed to be respectful of website resources while achieving your data extraction goals.",
  },
  {
    question: "What data formats do you support?",
    answer:
      "We support all common data formats including JSON, CSV, Excel, XML, and database exports. We can also integrate directly with your existing systems via API or webhook connections.",
  },
  {
    question: "How do you ensure data quality?",
    answer:
      "We implement multiple validation layers including data type checking, format validation, duplicate detection, and anomaly detection. Our systems include automated quality checks and manual review processes.",
  },
  {
    question: "Can you handle JavaScript-heavy websites?",
    answer:
      "Yes, we specialize in handling modern JavaScript websites using headless browsers that execute JavaScript just like regular browsers. We can wait for dynamic content to load and interact with complex web applications.",
  },
];

