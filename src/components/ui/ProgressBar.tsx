import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  showLabel?: boolean
  labelPosition?: 'inside' | 'outside'
  striped?: boolean
  animated?: boolean
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ 
    className,
    value,
    max = 100,
    variant = 'primary',
    size = 'md',
    showLabel = false,
    labelPosition = 'outside',
    striped = false,
    animated = false,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    
    const variants = {
      default: 'bg-gray-200 dark:bg-gray-800',
      primary: 'bg-primary-200 dark:bg-primary-900/30',
      secondary: 'bg-secondary-200 dark:bg-secondary-900/30',
      accent: 'bg-accent-200 dark:bg-accent-900/30',
      success: 'bg-green-200 dark:bg-green-900/30',
      warning: 'bg-yellow-200 dark:bg-yellow-900/30',
      error: 'bg-red-200 dark:bg-red-900/30',
    }
    
    const fillVariants = {
      default: 'bg-gray-600 dark:bg-gray-400',
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      accent: 'bg-accent-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500',
    }
    
    const sizes = {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
    }
    
    const labelSizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base',
    }
    
    const stripedStyles = striped ? 'bg-stripes' : ''
    const animatedStyles = animated ? 'animate-stripes' : ''
    
    return (
      <div className={cn('space-y-2', className)} {...props}>
        {(showLabel && labelPosition === 'outside') && (
          <div className="flex justify-between text-sm">
            <span className={cn('font-medium', labelSizes[size])}>
              Progress
            </span>
            <span className={cn('font-medium', labelSizes[size])}>
              {percentage.toFixed(0)}%
            </span>
          </div>
        )}
        
        <div
          ref={ref}
          className={cn(
            'w-full overflow-hidden rounded-full',
            variants[variant],
            sizes[size]
          )}
        >
          <div
            className={cn(
              'h-full rounded-full transition-all duration-300',
              fillVariants[variant],
              stripedStyles,
              animatedStyles
            )}
            style={{ width: `${percentage}%` }}
          >
            {(showLabel && labelPosition === 'inside') && (
              <div className="flex h-full items-center justify-center px-2">
                <span className={cn(
                  'font-medium text-white',
                  labelSizes[size]
                )}>
                  {percentage.toFixed(0)}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export { ProgressBar }