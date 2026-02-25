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
  DollarSign,
  Users,
  Heart,
  BookOpen,
  Factory,
  ShoppingCart,
} from "lucide-react";

export default function AIAutomationPage() {
  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
            <div>
              <Badge className="mb-6 bg-indigo-500 text-gray-900">AI Automation</Badge>
              <h1 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Intelligent Automation
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  with AI
                </span>
              </h1>
              <p className="mb-10 text-lg text-gray-600">
                Leverage artificial intelligence and machine learning to automate complex tasks,
                make intelligent decisions, and transform your business operations with cognitive
                automation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-indigo-600 text-gray-900 hover:bg-indigo-700">
                  Get AI Automation Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="xl" variant="outline">
                  View AI Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                alt="AI Automation Dashboard showing machine learning models and predictive analytics"
                width={600}
                height={400}
                className="aspect-video rounded-2xl"
                category="ai"
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
                Cognitive Automation Solutions
              </h2>
              <p className="mb-6 text-gray-600">
                We implement AI-powered automation that goes beyond rule-based systems. Our
                solutions understand context, learn from data, and make intelligent decisions to
                automate complex business processes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Machine Learning Integration</h3>
                    <p className="text-gray-600">
                      AI models that learn and improve from data over time
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Natural Language Processing</h3>
                    <p className="text-gray-600">
                      Understand and process human language for automation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Predictive Analytics</h3>
                    <p className="text-gray-600">
                      Forecast trends and make proactive automation decisions
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
              AI Automation Applications
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Transformative AI solutions across industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-indigo-100 p-3">
                    <useCase.icon className="h-6 w-6 text-indigo-600" />
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
              AI & Machine Learning Platforms
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Industry-leading AI technologies for automation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <div className="text-lg font-bold text-indigo-600">
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
              Flexible AI Automation Packages
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Choose the AI automation plan that fits your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-8 ${plan.featured ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white"}`}
              >
                {plan.featured && (
                  <Badge className="mb-4 bg-indigo-500 text-gray-900">Most Popular</Badge>
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
                  className={`w-full ${plan.featured ? "bg-indigo-600 text-gray-900 hover:bg-indigo-700" : ""}`}
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
              How We Implement AI Automation
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Structured approach to successful AI automation
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
              Common questions about AI automation
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
              Ready to Implement AI Automation?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Schedule a free consultation with our AI automation experts
            </p>
          </div>

          <ContactForm
            title="Discuss Your AI Automation Needs"
            description="Tell us about your complex processes. We'll design intelligent automation solutions."
            showServiceSelection={true}
          />
        </Container>
      </Section>
    </>
  );
}

const useCases = [
  {
    title: "Customer Service",
    icon: Users,
    description: "AI-powered customer support automation",
    features: [
      "Intelligent chatbots",
      "Ticket classification",
      "Sentiment analysis",
      "Auto-responses",
      "Knowledge base",
    ],
  },
  {
    title: "Healthcare",
    icon: Heart,
    description: "Medical AI automation solutions",
    features: [
      "Medical image analysis",
      "Patient triage",
      "Drug interaction checking",
      "Appointment scheduling",
      "Medical coding",
    ],
  },
  {
    title: "Finance",
    icon: DollarSign,
    description: "Financial AI automation",
    features: [
      "Fraud detection",
      "Credit scoring",
      "Investment analysis",
      "Risk assessment",
      "Compliance monitoring",
    ],
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "AI in production and quality control",
    features: [
      "Predictive maintenance",
      "Quality inspection",
      "Supply chain optimization",
      "Production planning",
      "Defect detection",
    ],
  },
  {
    title: "Retail",
    icon: ShoppingCart,
    description: "AI for retail automation",
    features: [
      "Personalized recommendations",
      "Inventory optimization",
      "Price optimization",
      "Customer segmentation",
      "Demand forecasting",
    ],
  },
  {
    title: "Education",
    icon: BookOpen,
    description: "AI in educational automation",
    features: [
      "Personalized learning",
      "Automated grading",
      "Content recommendation",
      "Student performance prediction",
      "Administrative automation",
    ],
  },
];

const technologies = [
  { name: "TensorFlow", initials: "TF", purpose: "Machine learning framework" },
  { name: "PyTorch", initials: "PT", purpose: "Deep learning platform" },
  { name: "OpenAI API", initials: "OA", purpose: "Large language models" },
  { name: "Azure AI", initials: "AZ", purpose: "Microsoft AI services" },
  { name: "AWS SageMaker", initials: "SM", purpose: "Amazon ML platform" },
  { name: "Google Cloud AI", initials: "GC", purpose: "Google AI services" },
  { name: "Hugging Face", initials: "HF", purpose: "Transformer models" },
  { name: "LangChain", initials: "LC", purpose: "LLM application framework" },
];

const pricingPlans = [
  {
    name: "Starter AI",
    price: "1,499",
    period: "month",
    description: "Basic AI automation features",
    featured: false,
    features: [
      "Pre-built AI models",
      "Basic NLP capabilities",
      "Email support",
      "Standard processing",
      "Monthly reports",
      "API access",
    ],
  },
  {
    name: "Professional AI",
    price: "3,999",
    period: "month",
    description: "Advanced AI automation",
    featured: true,
    features: [
      "Custom AI models",
      "Advanced NLP",
      "Priority support",
      "High-volume processing",
      "Real-time analytics",
      "Custom integrations",
      "Model training",
      "Performance optimization",
    ],
  },
  {
    name: "Enterprise AI",
    price: "Custom",
    period: "month",
    description: "Full-scale AI automation",
    featured: false,
    features: [
      "Fully custom AI",
      "Enterprise NLP",
      "24/7 dedicated support",
      "Unlimited processing",
      "Enterprise analytics",
      "Custom development",
      "On-premise deployment",
      "SLA guarantees",
      "Security compliance",
    ],
  },
];

const processSteps = [
  {
    number: "1",
    title: "Data Analysis",
    description: "Analyze data and define AI objectives",
  },
  {
    number: "2",
    title: "Model Selection",
    description: "Choose appropriate AI models",
  },
  {
    number: "3",
    title: "Development",
    description: "Build and train AI models",
  },
  {
    number: "4",
    title: "Integration",
    description: "Integrate AI into workflows",
  },
  {
    number: "5",
    title: "Optimization",
    description: "Continuous AI model improvement",
  },
];

const faqs = [
  {
    question: "How much data is needed for AI automation?",
    answer:
      "The amount of data needed depends on the complexity of the task. Simple classification tasks might need hundreds of examples, while complex natural language processing might require thousands. We help you assess your data needs and can work with synthetic data or data augmentation when needed.",
  },
  {
    question: "How accurate are AI automation solutions?",
    answer:
      "Accuracy varies by application but typically ranges from 85% to 99% for well-defined tasks. We implement validation layers, human-in-the-loop systems, and continuous monitoring to ensure high accuracy and reliability.",
  },
  {
    question: "Can AI automation handle unstructured data?",
    answer:
      "Yes, modern AI excels at processing unstructured data including text, images, audio, and video. We use techniques like natural language processing, computer vision, and speech recognition to extract insights from unstructured sources.",
  },
  {
    question: "How do you ensure AI model fairness?",
    answer:
      "We implement fairness testing, bias detection, and mitigation strategies. Our AI models undergo rigorous testing for demographic parity, equal opportunity, and other fairness metrics to ensure ethical AI implementation.",
  },
  {
    question: "What about AI model maintenance?",
    answer:
      "AI models require ongoing maintenance including retraining with new data, performance monitoring, and updates for concept drift. We offer comprehensive maintenance packages to keep your AI automation effective over time.",
  },
];

