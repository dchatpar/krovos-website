'use client'

import { ArrowRight, CheckCircle, Zap, Shield, BarChart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { METRICS } from '@/constants'

export interface ServiceHeroProps {
  title: string
  description: string
  backgroundImage?: string
  ctaText?: string
  stats?: ReadonlyArray<{
    label: string
    value: string
    suffix?: string
    icon?: React.ReactNode
  }>
  showAnimatedBackground?: boolean
  showStats?: boolean
  className?: string
}

export default function ServiceHero({
  title,
  description,
  backgroundImage,
  ctaText = 'Get Started',
  stats = METRICS,
  showAnimatedBackground = true,
  showStats = true,
  className = '',
}: ServiceHeroProps) {
  return (
    <section className={`relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32 ${className}`}>
      {/* Background Options */}
      {backgroundImage ? (
        <div className="absolute inset-0 -z-10">
          <img
            src={backgroundImage}
            alt="Service background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        </div>
      ) : showAnimatedBackground ? (
        <div className="absolute inset-0 -z-10">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-accent-500/10 animate-gradient-shift" />
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 h-64 w-64 border-2 border-primary-500/30 rounded-full" />
            <div className="absolute bottom-0 right-0 h-64 w-64 border-2 border-secondary-500/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 border-2 border-accent-500/30 rotate-45" />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
      )}

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* Service Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 px-4 py-2 text-sm font-medium text-primary-600 backdrop-blur-sm border border-gray-200">
            <Zap className="h-4 w-4" />
            Krovos Automation Service
          </div>
          
          {/* Title with Gradient */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
            <span className="block bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
              Automation Solutions
            </span>
          </h1>
          
          {/* Description */}
          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 sm:text-xl leading-relaxed">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600">
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300">
              View Case Studies
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm border border-gray-200">
                <div className="mb-4 inline-flex rounded-lg bg-primary-500/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Strategic Outcomes
                </h3>
                <p className="text-sm text-gray-600">
                  Board-level value, quantified risk reduction, audit-ready governance
                </p>
              </div>
              
              <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm border border-gray-200">
                <div className="mb-4 inline-flex rounded-lg bg-secondary-500/10 p-3">
                  <Shield className="h-6 w-6 text-secondary-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Enterprise Security
                </h3>
                <p className="text-sm text-gray-600">
                  SOC 2 compliant with end-to-end encryption
                </p>
              </div>
              
              <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm border border-gray-200">
                <div className="mb-4 inline-flex rounded-lg bg-accent-500/10 p-3">
                  <BarChart className="h-6 w-6 text-accent-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Real-time Analytics
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive dashboards and performance insights
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {showStats && (
            <div className="mt-20">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Trusted by Industry Leaders
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                  Join hundreds of businesses that have transformed their operations
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center group"
                  >
                    <div className="relative inline-block">
                      <div className="text-3xl font-bold text-gray-900 sm:text-4xl transition-all duration-300 group-hover:scale-110">
                        {stat.value}
                        {stat.suffix && <span className="text-primary-500">{stat.suffix}</span>}
                      </div>
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <div className="h-8 w-px bg-gradient-to-b from-primary-500 to-transparent" />
              <div className="mt-2 h-8 w-px bg-gradient-to-b from-secondary-500 to-transparent" style={{ animationDelay: '0.2s' }} />
              <div className="mt-2 h-8 w-px bg-gradient-to-b from-accent-500 to-transparent" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 h-20 w-20 rounded-full border-2 border-primary-500/20 animate-pulse" />
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full border-2 border-secondary-500/20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 h-16 w-16 rotate-45 border-2 border-accent-500/20 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}
