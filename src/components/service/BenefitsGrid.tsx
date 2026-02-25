import { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

export interface BenefitItem {
  title: string
  description: string
  icon: ReactNode
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info'
}

interface BenefitsGridProps {
  benefits: BenefitItem[]
  title?: string
  description?: string
  columns?: {
    mobile?: 1 | 2
    tablet?: 2 | 3
    desktop?: 3 | 4
  }
  cardVariant?: 'default' | 'elevated' | 'outline' | 'interactive'
  showIcons?: boolean
  className?: string
}

const BenefitsGrid = ({
  benefits,
  title,
  description,
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  },
  cardVariant = 'interactive',
  showIcons = true,
  className
}: BenefitsGridProps) => {
  const displayBenefits = benefits.slice(0, 6)
  
  const colorClasses = {
    primary: 'text-primary-600 text-primary-400 bg-primary-50 bg-primary-900/20',
    secondary: 'text-secondary-600 text-secondary-400 bg-secondary-50 bg-secondary-900/20',
    accent: 'text-accent-600 text-accent-400 bg-accent-50 bg-accent-900/20',
    success: 'text-green-600 text-green-400 bg-green-50 bg-green-900/20',
    warning: 'text-amber-600 text-amber-400 bg-amber-50 bg-amber-900/20',
    info: 'text-blue-600 text-blue-400 bg-blue-50 bg-blue-900/20'
  }

  const gridClasses = cn(
    'grid gap-6',
    columns.mobile === 1 ? 'grid-cols-1' : 'grid-cols-2',
    columns.tablet === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3',
    columns.desktop === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4',
    className
  )

  return (
    <div className="w-full">
      {(title || description) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}

      <div className={gridClasses}>
        {displayBenefits.map((benefit, index) => (
          <Card
            key={index}
            variant={cardVariant}
            hoverEffect={true}
            padding="lg"
            className="group relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-primary-50/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 via-primary-900/5" />
            
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                {showIcons && benefit.icon && (
                  <div className={cn(
                    'mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110',
                    colorClasses[benefit.color || 'primary']
                  )}>
                    <div className="h-6 w-6">
                      {benefit.icon}
                    </div>
                  </div>
                )}
                
                <span className="text-xs font-semibold text-gray-400 text-gray-500">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
              
              <CardTitle className="text-xl font-semibold text-gray-900 text-white group-hover:text-primary-600 group-hover:text-primary-400 transition-colors duration-300">
                {benefit.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-gray-600 text-gray-400 text-base leading-relaxed">
                {benefit.description}
              </CardDescription>
              
              <div className="mt-6 flex items-center text-sm font-medium text-primary-600 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="mr-2">Learn more</span>
                <svg 
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent via-gray-800" />
        <div className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent via-gray-800" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent via-gray-800" />
      </div>
    </div>
  )
}

export default BenefitsGrid
