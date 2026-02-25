'use client'

import { ReactNode } from 'react'
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react'

export interface TimelineStep {
  id: number
  title: string
  description: string
  icon?: ReactNode
  duration?: string
  status?: 'completed' | 'current' | 'upcoming'
}

export interface ProcessTimelineProps {
  steps: TimelineStep[]
  title?: string
  description?: string
  showProgress?: boolean
  animated?: boolean
  className?: string
}

const defaultIcons = [
  <Search key="search" className="h-6 w-6" />,
  <Lightbulb key="lightbulb" className="h-6 w-6" />,
  <Code key="code" className="h-6 w-6" />,
  <TestTube key="test" className="h-6 w-6" />,
  <Rocket key="rocket" className="h-6 w-6" />,
]

export default function ProcessTimeline({
  steps,
  title = 'Our 5-Step Process',
  description = 'A systematic approach to delivering exceptional automation solutions',
  showProgress = true,
  animated = true,
  className = '',
}: ProcessTimelineProps) {
  const completedSteps = steps.filter(step => step.status === 'completed').length
  const progressPercentage = (completedSteps / steps.length) * 100

  return (
    <section className={`relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50" />
        <div className="absolute top-1/4 left-10 h-64 w-64 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-64 w-64 rounded-full bg-secondary-500/5 blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 px-4 py-2 text-sm font-medium text-primary-600 backdrop-blur-sm border border-gray-200">
            <Rocket className="h-4 w-4" />
            Systematic Approach
          </div>
          
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            {description}
          </p>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="mb-12 mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">
                Progress: {completedSteps} of {steps.length} steps
              </span>
              <span className="text-sm font-medium text-primary-600">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="relative h-3 rounded-full bg-gray-200 overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              >
                {animated && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{
                          animation: 'shimmer 2s infinite',
                        }}
                      />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-500/20 via-secondary-500/20 to-accent-500/20">
            {animated && (
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 animate-pulse" style={{
                animationDuration: '3s',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              }} />
            )}
          </div>

          {/* Mobile connector lines between steps */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-500/10 via-secondary-500/10 to-accent-500/10">
            {animated && (
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/30 via-secondary-500/30 to-accent-500/30 animate-pulse" style={{
                animationDuration: '4s',
              }} />
            )}
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const _isEven = index % 2 === 0
              const stepIcon = step.icon || defaultIcons[index % defaultIcons.length]
              const stepStatus = step.status || (index < completedSteps ? 'completed' : index === completedSteps ? 'current' : 'upcoming')
              
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col lg:flex-row lg:items-center"
                >
                  {/* Step Content */}
                  <div className="lg:w-1/2 lg:pr-12 lg:text-right first:lg:text-left last:lg:text-right">
                    <div className={`inline-block rounded-2xl bg-white/80 p-6 backdrop-blur-sm border border-gray-200 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                      stepStatus === 'current' ? 'ring-2 ring-primary-500/30' : ''
                    }`}>
                      {/* Step Header */}
                      <div className="flex items-center gap-3 mb-4 lg:flex-row lg:first:flex-row-reverse lg:last:flex-row">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          stepStatus === 'completed' 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' 
                            : stepStatus === 'current'
                            ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white animate-pulse-subtle'
                            : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600'
                        }`} style={
                          stepStatus === 'current' ? {
                            animation: 'pulse 2s ease-in-out infinite',
                          } : undefined
                        }>
                          {stepStatus === 'completed' ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            stepIcon
                          )}
                        </div>
                        
                        <div className="flex-1 lg:text-right lg:first:text-left lg:last:text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                              Step {step.id}
                            </span>
                            {step.duration && (
                              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                                <Clock className="h-3 w-3" />
                                {step.duration}
                              </span>
                            )}
                          </div>
                          <h3 className="mt-1 text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Status Badge */}
                      <div className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                        stepStatus === 'completed'
                          ? 'bg-green-500/10 text-green-700'
                          : stepStatus === 'current'
                          ? 'bg-primary-500/10 text-primary-700 animate-pulse-subtle'
                          : 'bg-gray-500/10 text-gray-700'
                      }`} style={
                        stepStatus === 'current' ? {
                          animation: 'pulse 2s ease-in-out infinite',
                        } : undefined
                      }>
                        {stepStatus === 'completed' && (
                          <>
                            <CheckCircle className="h-3 w-3" />
                            Completed
                          </>
                        )}
                        {stepStatus === 'current' && (
                          <>
                            <div className="h-2 w-2 rounded-full bg-primary-500" style={{
                              animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                            }} />
                            In Progress
                          </>
                        )}
                        {stepStatus === 'upcoming' && 'Upcoming'}
                      </div>
                    </div>
                  </div>

                  {/* Step Marker */}
                  <div className="absolute left-1/2 top-0 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/2 z-10 mt-8 lg:mt-0 mb-8 lg:mb-0">
                    <div className={`relative flex items-center justify-center ${
                      stepStatus === 'completed' 
                        ? 'text-green-500' 
                        : stepStatus === 'current'
                        ? 'text-primary-500'
                        : 'text-gray-400'
                    }`}>
                      {/* Outer Ring */}
                      <div className={`absolute inset-0 rounded-full ${
                        stepStatus === 'completed' 
                          ? 'bg-green-500/20 animate-pulse-subtle' 
                          : stepStatus === 'current'
                          ? 'bg-primary-500/20 animate-ping'
                          : 'bg-gray-500/20'
                      }`} style={{ 
                        width: '48px', 
                        height: '48px',
                        animation: stepStatus === 'current' ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }} />
                      
                      {/* Inner Circle */}
                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center ${
                        stepStatus === 'completed' 
                          ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                          : stepStatus === 'current'
                          ? 'bg-gradient-to-br from-primary-500 to-secondary-500'
                          : 'bg-gradient-to-br from-gray-300 to-gray-400'
                      }`}>
                        {stepStatus === 'completed' ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <span className="text-sm font-bold text-white">
                            {step.id}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div className={`absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:block ${
                      stepStatus === 'completed' ? 'text-green-500/30' : 'text-gray-400'
                    }`}>
                      <ArrowRight className="h-8 w-8 rotate-90" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 p-6 backdrop-blur-sm border border-gray-200">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-900">
                Ready to start your automation journey?
              </h4>
              <p className="text-sm text-gray-600">
                Follow our proven 5-step process to transform your operations
              </p>
            </div>
            <button className="rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 font-medium text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}
