import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users, 
  BarChart,
  Cpu,
  Database,
  Workflow,
  Brain,
  Code,
  Link as LinkIcon,
  Search,
  CheckCircle,
  DollarSign,
  Globe,
  Lock,
  RefreshCw,
  Target,
  FileText,
  MessageSquare,
  Eye,
  Cloud,
  Server,
  Smartphone,
  Mail,
  Calculator,
  ShoppingCart
} from 'lucide-react'
import type { BenefitItem } from '@/components/service/BenefitsGrid'

export const GENERAL_BENEFITS: BenefitItem[] = [
  {
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks to boost productivity and reduce manual errors by up to 90%.',
    icon: <Zap />,
    color: 'primary'
  },
  {
    title: 'Enhanced Security',
    description: 'Enterprise-grade security with encryption, access controls, and compliance monitoring.',
    icon: <Shield />,
    color: 'secondary'
  },
  {
    title: 'Scalable Solutions',
    description: 'Grow seamlessly from startup to enterprise with our scalable architecture and infrastructure.',
    icon: <TrendingUp />,
    color: 'accent'
  },
  {
    title: '24/7 Availability',
    description: '99.9% uptime guarantee with redundant systems and proactive monitoring.',
    icon: <Clock />,
    color: 'success'
  },
  {
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools and role-based access for distributed teams.',
    icon: <Users />,
    color: 'warning'
  },
  {
    title: 'Data-Driven Insights',
    description: 'Advanced analytics and reporting to make informed business decisions.',
    icon: <BarChart />,
    color: 'info'
  }
]

export const AI_AUTOMATION_BENEFITS: BenefitItem[] = [
  {
    title: 'Intelligent Processing',
    description: 'AI-powered document processing with 99% accuracy for complex data extraction.',
    icon: <Brain />,
    color: 'primary'
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models that predict trends and optimize business outcomes.',
    icon: <TrendingUp />,
    color: 'secondary'
  },
  {
    title: 'Natural Language',
    description: 'Advanced NLP for chatbots, sentiment analysis, and content understanding.',
    icon: <MessageSquare />,
    color: 'accent'
  },
  {
    title: 'Computer Vision',
    description: 'Image and video analysis for quality control, monitoring, and automation.',
    icon: <Eye />,
    color: 'success'
  },
  {
    title: 'Adaptive Learning',
    description: 'Systems that improve over time by learning from patterns and feedback.',
    icon: <RefreshCw />,
    color: 'warning'
  },
  {
    title: 'Real-time Insights',
    description: 'Instant analytics and decision support for time-sensitive operations.',
    icon: <BarChart />,
    color: 'info'
  }
]

export const EVENT_AUTOMATION_BENEFITS: BenefitItem[] = [
  {
    title: 'Automated Registration',
    description: 'Streamlined attendee registration with automated confirmation and reminders.',
    icon: <CheckCircle />,
    color: 'primary'
  },
  {
    title: 'Real-time Analytics',
    description: 'Live dashboards showing attendance, engagement, and satisfaction metrics.',
    icon: <BarChart />,
    color: 'secondary'
  },
  {
    title: 'Virtual Event Support',
    description: 'Full automation for virtual conferences, webinars, and hybrid events.',
    icon: <Globe />,
    color: 'accent'
  },
  {
    title: 'Marketing Automation',
    description: 'Automated email campaigns, social media promotion, and lead nurturing.',
    icon: <Mail />,
    color: 'success'
  },
  {
    title: 'Payment Processing',
    description: 'Secure payment automation with multiple currency and gateway support.',
    icon: <DollarSign />,
    color: 'warning'
  },
  {
    title: 'Post-event Reporting',
    description: 'Comprehensive analytics and ROI reports delivered automatically.',
    icon: <FileText />,
    color: 'info'
  }
]

export const DOM_AUTOMATION_BENEFITS: BenefitItem[] = [
  {
    title: 'Web Scraping',
    description: 'Extract data from any website with precision and reliability.',
    icon: <Search />,
    color: 'primary'
  },
  {
    title: 'Browser Automation',
    description: 'Automate complex browser workflows and interactions.',
    icon: <Cpu />,
    color: 'secondary'
  },
  {
    title: 'DOM Testing',
    description: 'Automated testing for web applications and user interfaces.',
    icon: <Target />,
    color: 'accent'
  },
  {
    title: 'Content Monitoring',
    description: '24/7 monitoring for content changes and updates.',
    icon: <Eye />,
    color: 'success'
  },
  {
    title: 'Data Aggregation',
    description: 'Combine data from multiple sources into unified formats.',
    icon: <Database />,
    color: 'warning'
  },
  {
    title: 'Performance Testing',
    description: 'Automated load testing and performance monitoring.',
    icon: <BarChart />,
    color: 'info'
  }
]

export const APP_DEVELOPMENT_BENEFITS: BenefitItem[] = [
  {
    title: 'Custom Solutions',
    description: 'Tailored applications built specifically for your business needs.',
    icon: <Code />,
    color: 'primary'
  },
  {
    title: 'Cross-platform',
    description: 'Applications that work seamlessly across web, mobile, and desktop.',
    icon: <Smartphone />,
    color: 'secondary'
  },
  {
    title: 'API Integration',
    description: 'Seamless integration with existing systems and third-party services.',
    icon: <LinkIcon />,
    color: 'accent'
  },
  {
    title: 'Cloud Native',
    description: 'Modern applications built for cloud deployment and scalability.',
    icon: <Cloud />,
    color: 'success'
  },
  {
    title: 'Security First',
    description: 'Built-in security features and compliance with industry standards.',
    icon: <Lock />,
    color: 'warning'
  },
  {
    title: 'Maintenance Support',
    description: 'Ongoing support, updates, and optimization services.',
    icon: <Server />,
    color: 'info'
  }
]

export const WORKFLOW_AUTOMATION_BENEFITS: BenefitItem[] = [
  {
    title: 'Process Optimization',
    description: 'Streamline business processes to eliminate bottlenecks and delays.',
    icon: <Workflow />,
    color: 'primary'
  },
  {
    title: 'Document Automation',
    description: 'Automated document generation, processing, and management.',
    icon: <FileText />,
    color: 'secondary'
  },
  {
    title: 'Data Entry Automation',
    description: 'Eliminate manual data entry with intelligent automation.',
    icon: <Calculator />,
    color: 'accent'
  },
  {
    title: 'HR Automation',
    description: 'Automate recruitment, onboarding, and employee management.',
    icon: <Users />,
    color: 'success'
  },
  {
    title: 'Finance Automation',
    description: 'Automated invoicing, payments, and financial reporting.',
    icon: <DollarSign />,
    color: 'warning'
  },
  {
    title: 'Compliance Tracking',
    description: 'Automated compliance monitoring and reporting.',
    icon: <CheckCircle />,
    color: 'info'
  }
]

export const INTEGRATION_AUTOMATION_BENEFITS: BenefitItem[] = [
  {
    title: 'CRM Integration',
    description: 'Seamless integration with Salesforce, HubSpot, and other CRM platforms.',
    icon: <Users />,
    color: 'primary'
  },
  {
    title: 'E-commerce Integration',
    description: 'Connect Shopify, WooCommerce, and other e-commerce platforms.',
    icon: <ShoppingCart />,
    color: 'secondary'
  },
  {
    title: 'Marketing Automation',
    description: 'Integration with Mailchimp, Marketo, and marketing platforms.',
    icon: <Mail />,
    color: 'accent'
  },
  {
    title: 'Cloud Storage',
    description: 'Connect with Google Drive, Dropbox, and cloud storage services.',
    icon: <Cloud />,
    color: 'success'
  },
  {
    title: 'Communication Tools',
    description: 'Integration with Slack, Teams, and communication platforms.',
    icon: <MessageSquare />,
    color: 'warning'
  },
  {
    title: 'API Management',
    description: 'Centralized API management and monitoring.',
    icon: <LinkIcon />,
    color: 'info'
  }
]

export function getBenefitsByServiceType(serviceType: string): BenefitItem[] {
  const benefitsMap: Record<string, BenefitItem[]> = {
    'ai-automation': AI_AUTOMATION_BENEFITS,
    'event-automation': EVENT_AUTOMATION_BENEFITS,
    'dom-automation': DOM_AUTOMATION_BENEFITS,
    'app-development': APP_DEVELOPMENT_BENEFITS,
    'workflow-automation': WORKFLOW_AUTOMATION_BENEFITS,
    'integration-automation': INTEGRATION_AUTOMATION_BENEFITS,
  }
  
  return benefitsMap[serviceType] || GENERAL_BENEFITS
}
