import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  thickness?: number
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ 
    className,
    size = 'md',
    variant = 'primary',
    thickness = 2,
    ...props 
  }, ref) => {
    const sizes = {
      xs: 'h-4 w-4',
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-12 w-12',
    }
    
    const variants = {
      default: 'text-gray-400',
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      accent: 'text-accent-500',
    }
    
    return (
      <div
        ref={ref}
        className={cn('inline-block', className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <svg
          className={cn('animate-spin', sizes[size], variants[variant])}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={thickness}
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'

export { Spinner }