'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowRight, CheckCircle, Zap, Shield, BarChart, Users, Star, MessageSquare, Mail, Phone, MapPin, Cpu, Database, Workflow, Brain, Code, Headphones } from 'lucide-react'

function useIsVisible(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return isVisible
}

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  
  const isFeaturesVisible = useIsVisible(featuresRef)
  const isTestimonialsVisible = useIsVisible(testimonialsRef)
  const isCtaVisible = useIsVisible(ctaRef)

  const features = [
    {
      icon: <Workflow className="h-6 w-6" />,
      title: 'Process Automation',
      description: 'Automate complex business processes with intelligent workflows that adapt to your needs.',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Data Integration',
      description: 'Seamlessly connect and synchronize data across all your business systems and platforms.',
      color: 'from-secondary-500 to-secondary-700'
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'Workflow Optimization',
      description: 'Continuously analyze and improve your workflows for maximum efficiency and productivity.',
      color: 'from-accent-500 to-accent-700'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI Analytics',
      description: 'Leverage artificial intelligence to gain predictive insights and make data-driven decisions.',
      color: 'from-primary-600 to-secondary-600'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Custom Development',
      description: 'Tailored automation solutions built specifically for your unique business requirements.',
      color: 'from-secondary-600 to-accent-600'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to ensure your automation systems run smoothly.',
      color: 'from-accent-600 to-primary-600'
    }
  ]

  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'CTO, TechFlow Inc.',
      content: 'Krovos transformed our operational efficiency. We automated 80% of manual processes within the first month.',
      rating: 5,
      company: 'TechFlow'
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Director, Global Retail',
      content: 'The analytics dashboard alone saved us 20 hours per week in reporting. Incredible ROI.',
      rating: 5,
      company: 'Global Retail'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CEO, StartupScale',
      content: 'As a growing startup, Krovos gave us enterprise-level automation without the enterprise price tag.',
      rating: 5,
      company: 'StartupScale'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-accent-500/10 animate-gradient-shift" />
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400">
              <Zap className="h-4 w-4" />
              Next-Gen Automation Platform
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Automate Your Business Operations
              <span className="block bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                with Intelligent Automation
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              AI-powered automation solutions that scale with your growth
            </p>
            
             <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
               <Button size="lg" className="group">
                 Get Started
                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
               </Button>
               <Button size="lg" variant="outline">
                 View Demo
               </Button>
             </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">40%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Automation Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Businesses Automated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-700 ${isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Comprehensive Automation Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Everything you need to automate and optimize your business processes
            </p>
          </div>

           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
               <Card 
                key={index}
                className={`group relative overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.color} p-3`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-700 ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              See what our clients say about their automation journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-500 ${
                  isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-4 right-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                 <div className="mb-4 flex items-center">
                   <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white dark:border-gray-800">
                     <img 
                       src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name.replace(/\s+/g, '')}`}
                       alt={testimonial.name}
                       className="h-full w-full object-cover"
                     />
                   </div>
                   <div>
                     <h4 className="font-semibold text-gray-900 dark:text-white">
                       {testimonial.name}
                     </h4>
                     <p className="text-sm text-gray-600 dark:text-gray-400">
                       {testimonial.role}
                     </p>
                   </div>
                 </div>
                
                <p className="mb-6 text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
                
                 <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                   <div className="flex items-center">
                     <div className="mr-2 h-6 w-6 rounded bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                       <span className="text-xs font-bold text-white">{testimonial.company.charAt(0)}</span>
                     </div>
                     <span className="text-sm font-medium text-gray-900 dark:text-white">
                       {testimonial.company}
                     </span>
                   </div>
                   <MessageSquare className="h-5 w-5 text-gray-400" />
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Contact Form */}
      <section ref={ctaRef} className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className={`transition-all duration-700 ${isCtaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Ready to Automate Your Success?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Get in touch with our automation experts. We'll help you identify opportunities and build a customized automation strategy.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-500" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">contact@krovos.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-500" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Call Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary-500" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Visit Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">123 Automation Street, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className={`border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-700 ${
              isCtaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: '300ms' }}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  By submitting, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
        <div className="mx-auto max-w-7xl text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Start Your Automation Journey Today
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-primary-100">
            Join 500+ businesses that have transformed their operations with Krovos
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Get Started Free
            </Button>
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}