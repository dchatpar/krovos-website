import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  children: ReactNode
  onDelete?: () => void
  deletable?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    className,
    variant = 'default',
    size = 'md',
    rounded = 'full',
    children,
    onDelete,
    deletable = false,
    leftIcon,
    rightIcon,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center font-medium transition-colors'
    
    const variants = {
      default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      primary: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
      secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200',
      accent: 'bg-accent-100 text-accent-800 hover:bg-accent-200',
      success: 'bg-green-100 text-green-800 hover:bg-green-200',
      warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
      error: 'bg-red-100 text-red-800 hover:bg-red-200',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    }
    
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-sm',
    }
    
    const iconSizes = {
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4',
    }
    
    const roundedStyles = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }
    
    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation()
      onDelete?.()
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          roundedStyles[rounded],
          className
        )}
        {...props}
      >
        {leftIcon && (
          <span className={cn('mr-1.5', iconSizes[size])}>
            {leftIcon}
          </span>
        )}
        
        {children}
        
        {rightIcon && !deletable && (
          <span className={cn('ml-1.5', iconSizes[size])}>
            {rightIcon}
          </span>
        )}
        
        {deletable && (
          <button
            onClick={handleDelete}
            className={cn(
              'ml-1.5 rounded-full p-0.5 hover:bg-black/10 hover:bg-white/10 transition-colors',
              iconSizes[size]
            )}
            aria-label="Remove chip"
          >
            <X className="h-full w-full" />
          </button>
        )}
      </div>
    )
  }
)

Chip.displayName = 'Chip'

export { Chip }
