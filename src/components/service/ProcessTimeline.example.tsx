'use client'

import ProcessTimeline, { TimelineStep } from './ProcessTimeline'
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket,
  Users,
  BarChart,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react'

// Example 1: Basic 5-step process
export const basicProcessSteps: TimelineStep[] = [
  {
    id: 1,
    title: 'Discovery & Analysis',
    description: 'We conduct in-depth analysis of your current processes, identify automation opportunities, and define clear objectives and success metrics.',
    icon: <Search className="h-6 w-6" />,
    duration: '1-2 weeks',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Strategy & Planning',
    description: 'Our experts design a comprehensive automation strategy with detailed roadmaps, resource allocation, and risk assessment.',
    icon: <Lightbulb className="h-6 w-6" />,
    duration: '2-3 weeks',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Development & Implementation',
    description: 'We build and deploy custom automation solutions using cutting-edge technologies, with regular progress updates and feedback loops.',
    icon: <Code className="h-6 w-6" />,
    duration: '4-8 weeks',
    status: 'current'
  },
  {
    id: 4,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures reliability, security, and performance. We validate against all requirements before deployment.',
    icon: <TestTube className="h-6 w-6" />,
    duration: '1-2 weeks',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Launch & Optimization',
    description: 'We deploy the solution, provide comprehensive training, and establish ongoing monitoring and optimization processes.',
    icon: <Rocket className="h-6 w-6" />,
    duration: 'Ongoing',
    status: 'upcoming'
  }
]

// Example 2: Client onboarding process
export const onboardingProcessSteps: TimelineStep[] = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'Free discovery session to understand your business needs, challenges, and automation goals.',
    icon: <Users className="h-6 w-6" />,
    duration: '1 hour',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Solution Design',
    description: 'Custom automation blueprint with technical specifications, timeline, and investment requirements.',
    icon: <BarChart className="h-6 w-6" />,
    duration: '3-5 days',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Security Assessment',
    description: 'Comprehensive security review and compliance check to ensure enterprise-grade protection.',
    icon: <Shield className="h-6 w-6" />,
    duration: '1 week',
    status: 'current'
  },
  {
    id: 4,
    title: 'Development Sprint',
    description: 'Agile development with bi-weekly demos and continuous integration of your feedback.',
    icon: <Zap className="h-6 w-6" />,
    duration: '4-6 weeks',
    status: 'upcoming'
  },
  {
    id: 5,
    title: 'Go-Live & Support',
    description: 'Smooth deployment with training, documentation, and 24/7 support during the transition.',
    icon: <CheckCircle className="h-6 w-6" />,
    duration: 'Lifetime',
    status: 'upcoming'
  }
]

export default function ProcessTimelineExample() {
  return (
    <div className="space-y-16 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Basic 5-Step Automation Process</h2>
        <ProcessTimeline
          steps={basicProcessSteps}
          title="Our Proven Automation Methodology"
          description="From discovery to deployment, we follow a systematic approach to ensure success"
          showProgress={true}
          animated={true}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Client Onboarding Process</h2>
        <ProcessTimeline
          steps={onboardingProcessSteps}
          title="Seamless Client Journey"
          description="Experience our streamlined onboarding process designed for maximum efficiency"
          showProgress={true}
          animated={true}
          className="bg-gradient-to-b from-gray-50 to-white from-gray-950 to-black"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Minimal Configuration</h2>
        <ProcessTimeline
          steps={basicProcessSteps.map(step => ({ ...step, status: 'upcoming' }))}
          showProgress={false}
          animated={false}
          className="border rounded-2xl"
        />
      </div>
    </div>
  )
}
