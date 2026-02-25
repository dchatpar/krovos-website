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
  Users,
  Mail,
  Ticket,
  BarChart,
  Video,
  Globe,
  Shield,
  TrendingUp,
  DollarSign,
  Building,
  Heart,
  GraduationCap,
} from "lucide-react";

export default function EventAutomationPage() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
            <div>
              <Badge className="mb-6 bg-blue-500 text-gray-900">Event Automation</Badge>
              <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Event Management
                </span>
              </h1>
              <p className="mb-10 text-lg text-gray-600">
                End-to-end automation solutions for conferences, trade shows, corporate events, and
                virtual gatherings. Streamline registration, attendee management, marketing, and
                analytics with our comprehensive event automation platform.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-blue-600 text-gray-900 hover:bg-blue-700">
                  Get Event Automation Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline">
                  View Event Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                alt="Event automation dashboard for conference and meeting management"
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
                Comprehensive Event Automation
              </h2>
              <p className="mb-6 text-gray-600">
                Our event automation solutions handle every aspect of event management, from initial
                registration to post-event analytics. We eliminate manual processes, reduce errors,
                and provide real-time insights into your events.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">End-to-End Automation</h3>
                    <p className="text-gray-600">
                      Complete automation of registration, ticketing, communication, and reporting
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Real-Time Analytics</h3>
                    <p className="text-gray-600">
                      Live dashboards with attendee engagement, revenue tracking, and ROI analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Multi-Platform Support</h3>
                    <p className="text-gray-600">
                      Seamless integration with virtual event platforms, CRMs, and marketing tools
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
                    <div className="mb-2 inline-flex rounded-lg bg-blue-100 p-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium">85% Faster Registration</h4>
                    <p className="text-sm text-gray-600">
                      Reduce registration time
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-blue-100 p-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium">40% Cost Reduction</h4>
                    <p className="text-sm text-gray-600">
                      Lower operational costs
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-blue-100 p-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium">95% Accuracy</h4>
                    <p className="text-sm text-gray-600">
                      Eliminate manual errors
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 inline-flex rounded-lg bg-blue-100 p-2">
                      <BarChart className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Real-Time Insights</h4>
                    <p className="text-sm text-gray-600">Live event analytics</p>
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
              Complete Event Management Suite
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Everything you need to automate and optimize your events in one platform
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
              Who Benefits from Event Automation?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Our event automation solutions are tailored for various industries and event types
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3">
                    <useCase.icon className="h-6 w-6 text-blue-600" />
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
              Powered by Modern Technology
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              We use cutting-edge technologies to deliver robust and scalable event automation
              solutions
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <div className="text-lg font-bold text-blue-600">
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
              Flexible Event Automation Packages
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Choose the plan that best fits your event automation needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 ${plan.featured ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
              >
                {plan.featured && (
                  <Badge className="mb-4 bg-blue-500 text-gray-900">Most Popular</Badge>
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
                  className={`w-full ${plan.featured ? "bg-blue-600 text-gray-900 hover:bg-blue-700" : ""}`}
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
              How We Implement Event Automation
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              A structured approach to ensure successful event automation implementation
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
              Common questions about our event automation services
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
              Ready to Automate Your Events?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Schedule a free consultation with our event automation experts
            </p>
          </div>

          <ContactForm
            title="Discuss Your Event Automation Needs"
            description="Tell us about your upcoming events and challenges. We'll provide a customized automation solution."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}

const features = [
  {
    title: "Registration & Ticketing",
    icon: Ticket,
    description: "Automated registration forms, payment processing, and ticket management",
    items: [
      "Custom registration forms",
      "Multi-payment gateway support",
      "Automated confirmation emails",
      "Waitlist management",
      "Discount code automation",
    ],
  },
  {
    title: "Attendee Management",
    icon: Users,
    description: "Complete attendee lifecycle management from registration to follow-up",
    items: [
      "Attendee database",
      "Badge printing automation",
      "Session tracking",
      "Networking facilitation",
      "Post-event surveys",
    ],
  },
  {
    title: "Event Marketing",
    icon: Mail,
    description: "Automated marketing campaigns and communication workflows",
    items: [
      "Email sequence automation",
      "Social media integration",
      "Reminder automation",
      "Promotional campaigns",
      "Analytics tracking",
    ],
  },
  {
    title: "Virtual Events",
    icon: Video,
    description: "Complete virtual event platform integration and automation",
    items: [
      "Virtual lobby automation",
      "Session access control",
      "Chat moderation",
      "Polling and Q&A",
      "Recording management",
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart,
    description: "Real-time analytics and comprehensive reporting dashboards",
    items: [
      "Attendance tracking",
      "Revenue analytics",
      "Engagement metrics",
      "ROI calculation",
      "Custom reports",
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    description: "Enterprise-grade security and compliance features",
    items: [
      "GDPR compliance",
      "Data encryption",
      "Access controls",
      "Audit trails",
      "Backup automation",
    ],
  },
];

const useCases = [
  {
    title: "Corporate Conferences",
    icon: Building,
    description: "Large-scale corporate events and annual conferences",
    features: [
      "Multi-track session management",
      "Speaker coordination",
      "Sponsor management",
      "Networking events",
      "Content distribution",
    ],
  },
  {
    title: "Trade Shows",
    icon: Globe,
    description: "Industry trade shows and exhibition automation",
    features: [
      "Exhibitor management",
      "Lead capture automation",
      "Booth scheduling",
      "Product demos",
      "Visitor analytics",
    ],
  },
  {
    title: "Virtual Summits",
    icon: Video,
    description: "Online conferences and virtual summits",
    features: [
      "Platform integration",
      "Live streaming automation",
      "Virtual networking",
      "Content on-demand",
      "Global accessibility",
    ],
  },
  {
    title: "Training Workshops",
    icon: Users,
    description: "Professional training and workshop automation",
    features: [
      "Course registration",
      "Material distribution",
      "Progress tracking",
      "Certification automation",
      "Feedback collection",
    ],
  },
  {
    title: "Non-Profit Events",
    icon: Heart,
    description: "Fundraising events and charity galas",
    features: [
      "Donation processing",
      "Sponsor recognition",
      "Auction automation",
      "Volunteer management",
      "Impact reporting",
    ],
  },
  {
    title: "Academic Conferences",
    icon: GraduationCap,
    description: "University conferences and academic symposiums",
    features: [
      "Paper submission system",
      "Reviewer assignment",
      "Schedule generation",
      "Proceedings management",
      "Student registration",
    ],
  },
];

const technologies = [
  { name: "Next.js", initials: "NJ", purpose: "Frontend framework for dynamic event portals" },
  { name: "Node.js", initials: "NJ", purpose: "Backend API and real-time features" },
  { name: "PostgreSQL", initials: "PG", purpose: "Attendee and event data storage" },
  { name: "Redis", initials: "RD", purpose: "Caching and session management" },
  { name: "Stripe", initials: "ST", purpose: "Payment processing and subscriptions" },
  { name: "SendGrid", initials: "SG", purpose: "Email automation and communication" },
  { name: "AWS", initials: "AWS", purpose: "Cloud infrastructure and scaling" },
  { name: "Docker", initials: "DK", purpose: "Containerization and deployment" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "499",
    period: "month",
    description: "Perfect for small events and workshops",
    featured: false,
    features: [
      "Up to 500 attendees",
      "Basic registration forms",
      "Email automation",
      "Basic analytics",
      "Standard support",
      "Single event management",
    ],
  },
  {
    name: "Professional",
    price: "1,299",
    period: "month",
    description: "Ideal for medium-sized conferences",
    featured: true,
    features: [
      "Up to 5,000 attendees",
      "Advanced registration forms",
      "Multi-payment gateways",
      "Advanced analytics",
      "Priority support",
      "Multiple events",
      "Virtual event integration",
      "Custom branding",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "month",
    description: "For large-scale events and organizations",
    featured: false,
    features: [
      "Unlimited attendees",
      "Fully custom solutions",
      "API access",
      "Real-time analytics",
      "24/7 dedicated support",
      "Unlimited events",
      "White-label solution",
      "On-premise deployment",
      "Custom integrations",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Analyze your event requirements and goals",
  },
  {
    number: "2",
    title: "Planning",
    description: "Design automation strategy and workflow",
  },
  {
    number: "3",
    title: "Development",
    description: "Build and customize automation solutions",
  },
  {
    number: "4",
    title: "Testing",
    description: "Thorough testing and quality assurance",
  },
  {
    number: "5",
    title: "Deployment",
    description: "Launch and provide training",
  },
];

const faqs = [
  {
    question: "How quickly can you set up event automation?",
    answer:
      "Most event automation setups are completed within 2-4 weeks, depending on complexity. We start with a discovery phase to understand your specific needs, then implement the automation solutions with regular check-ins and testing.",
  },
  {
    question: "Can you integrate with our existing event platforms?",
    answer:
      "Yes, we specialize in integrating with existing event platforms like Eventbrite, Cvent, Zoom, and custom solutions. Our automation solutions work alongside your current tools to enhance their capabilities.",
  },
  {
    question: "What types of events do you support?",
    answer:
      "We support all types of events including conferences, trade shows, virtual summits, workshops, corporate meetings, fundraising events, and academic symposiums. Our solutions are customizable for any event format.",
  },
  {
    question: "How do you handle data security and privacy?",
    answer:
      "We implement enterprise-grade security measures including data encryption, secure payment processing, GDPR compliance, access controls, and regular security audits. All data is stored in secure, compliant cloud infrastructure.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we provide comprehensive training for your team and ongoing support. This includes documentation, video tutorials, live training sessions, and 24/7 technical support during events.",
  },
];

