export const SERVICES = [
  {
    id: 'event-automation',
    title: 'Event Automation',
    description: 'End-to-end automation for conferences, trade shows, and corporate events',
    icon: '🎪',
    href: '/services/event-automation',
    features: [
      'Event Registration & Ticketing',
      'Attendee Management',
      'Event Marketing Automation',
      'Virtual Event Automation',
      'Event Analytics & Reporting',
    ],
  },
  {
    id: 'dom-automation',
    title: 'DOM Engine Automation',
    description: 'Advanced web automation for data extraction and browser workflows',
    icon: '🌐',
    href: '/services/dom-automation',
    features: [
      'Web Scraping & Data Extraction',
      'Browser Automation',
      'DOM Manipulation & Testing',
      'Content Aggregation',
      'Monitoring & Alerting',
    ],
  },
  {
    id: 'app-development',
    title: 'Custom App Development',
    description: 'Bespoke applications with integrated automation',
    icon: '💻',
    href: '/services/app-development',
    features: [
      'Web Application Development',
      'Mobile Application Development',
      'Desktop Application Development',
      'API Development & Integration',
      'Custom Automation Scripts',
    ],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation (RPA)',
    description: 'Business process automation to eliminate repetitive tasks',
    icon: '⚙️',
    href: '/services/workflow-automation',
    features: [
      'Document Processing',
      'Data Entry & Migration',
      'Email Automation',
      'HR & Payroll Automation',
      'Finance & Accounting',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Automation',
    description: 'Intelligent automation with ML and AI',
    icon: '🤖',
    href: '/services/ai-automation',
    features: [
      'Intelligent Document Processing',
      'Conversational AI & Chatbots',
      'Predictive Analytics',
      'Computer Vision',
      'Natural Language Processing',
    ],
  },
  {
    id: 'integration-automation',
    title: 'Integration Automation',
    description: 'Seamless connectivity between systems',
    icon: '🔗',
    href: '/services/integration-automation',
    features: [
      'CRM Integration',
      'Marketing Automation Integration',
      'E-commerce Automation',
      'Cloud Storage Integration',
      'Communication Platform Integration',
    ],
  },
] as const

export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: SERVICES.map(service => ({
    name: service.title,
    href: service.href,
  })),
  footer: {
    services: SERVICES.map(service => ({
      name: service.title,
      href: service.href,
    })),
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
    contact: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Sales', href: '/sales' },
    ],
  },
} as const

export const COMPANY_INFO = {
  name: 'Krovos Inc.',
  tagline: 'Vancouver\'s Premier Automation Agency',
  description: 'We help businesses automate their operations with cutting-edge technology and expert solutions.',
  address: '123 Main Street, Vancouver, BC V6B 1A1, Canada',
  phone: '+1 (604) 123-4567',
  email: 'hello@krovos.com',
  social: {
    twitter: 'https://twitter.com/krovosinc',
    linkedin: 'https://linkedin.com/company/krovos',
    github: 'https://github.com/krovos',
    instagram: 'https://instagram.com/krovosinc',
  },
} as const

export const TECH_STACK = [
  { name: 'Next.js', category: 'Framework', icon: '⚡' },
  { name: 'React', category: 'Library', icon: '⚛️' },
  { name: 'TypeScript', category: 'Language', icon: '📘' },
  { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
  { name: 'Framer Motion', category: 'Animation', icon: '✨' },
  { name: 'GSAP', category: 'Animation', icon: '🎬' },
  { name: 'Node.js', category: 'Runtime', icon: '🟢' },
  { name: 'Python', category: 'Language', icon: '🐍' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
  { name: 'MongoDB', category: 'Database', icon: '🍃' },
  { name: 'Docker', category: 'Container', icon: '🐳' },
  { name: 'AWS', category: 'Cloud', icon: '☁️' },
  { name: 'Vercel', category: 'Hosting', icon: '▲' },
  { name: 'Git', category: 'Version Control', icon: '📚' },
  { name: 'Jest', category: 'Testing', icon: '🧪' },
  { name: 'Playwright', category: 'Testing', icon: '🎭' },
  { name: 'GraphQL', category: 'API', icon: '📊' },
  { name: 'Redis', category: 'Cache', icon: '🔴' },
  { name: 'Kubernetes', category: 'Orchestration', icon: '⚓' },
  { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
  { name: 'Prometheus', category: 'Monitoring', icon: '📈' },
  { name: 'Grafana', category: 'Visualization', icon: '📊' },
  { name: 'Sentry', category: 'Error Tracking', icon: '🚨' },
  { name: 'Storybook', category: 'Documentation', icon: '📖' },
] as const

export const METRICS = [
  { label: 'Projects Completed', value: '150+', suffix: '+' },
  { label: 'Happy Clients', value: '85', suffix: '+' },
  { label: 'Automation Hours Saved', value: '50k', suffix: 'k+' },
  { label: 'Success Rate', value: '98', suffix: '%' },
] as const

export const FAQS = [
  {
    id: '1',
    question: 'What is automation and how can it benefit my business?',
    answer: 'Automation involves using technology to perform repetitive tasks without human intervention. It can benefit your business by increasing efficiency, reducing errors, saving time and costs, improving scalability, and allowing your team to focus on higher-value work.',
    category: 'general',
  },
  {
    id: '2',
    question: 'How long does it take to implement automation solutions?',
    answer: 'Implementation time varies based on complexity. Simple automations can be set up in days, while comprehensive enterprise solutions may take weeks to months. We provide detailed timelines during our consultation phase.',
    category: 'implementation',
  },
  {
    id: '3',
    question: 'What industries do you specialize in?',
    answer: 'We work across various industries including technology, healthcare, finance, e-commerce, manufacturing, and professional services. Our solutions are tailored to each industry\'s specific needs and compliance requirements.',
    category: 'services',
  },
  {
    id: '4',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, updates, and optimization. We ensure your automation solutions continue to perform optimally as your business evolves.',
    category: 'support',
  },
  {
    id: '5',
    question: 'How do you ensure data security and privacy?',
    answer: 'We implement industry-standard security measures including encryption, access controls, regular audits, and compliance with regulations like GDPR and CCPA. Security is built into every solution we develop.',
    category: 'security',
  },
  {
    id: '6',
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely. We specialize in integrating with existing CRM, ERP, marketing, and other business systems. We work with APIs, webhooks, and custom connectors to ensure seamless integration.',
    category: 'integration',
  },
  {
    id: '7',
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing including project-based, subscription, and retainer models. Pricing depends on scope, complexity, and ongoing support needs. We provide transparent quotes after understanding your requirements.',
    category: 'pricing',
  },
  {
    id: '8',
    question: 'How do you measure the success of automation projects?',
    answer: 'We establish clear KPIs before implementation, including time savings, cost reduction, error reduction, productivity gains, and ROI. We provide regular reports and analytics to track performance.',
    category: 'metrics',
  },
] as const