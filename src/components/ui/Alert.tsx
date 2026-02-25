import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  title?: string
  children: ReactNode
  showIcon?: boolean
  dismissible?: boolean
  onDismiss?: () => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className,
    variant = 'default',
    title,
    children,
    showIcon = true,
    dismissible = false,
    onDismiss,
    ...props 
  }, ref) => {
    const variants = {
      default: {
        container: 'bg-gray-50 border-gray-200',
        icon: 'text-gray-400',
        title: 'text-gray-900',
        content: 'text-gray-700',
        iconComponent: Info,
      },
      success: {
        container: 'bg-green-50 border-green-200',
        icon: 'text-green-500',
        title: 'text-green-900',
        content: 'text-green-800',
        iconComponent: CheckCircle,
      },
      warning: {
        container: 'bg-yellow-50 border-yellow-200 bg-yellow-900/20 border-yellow-800/30',
        icon: 'text-yellow-500',
        title: 'text-yellow-900 text-yellow-300',
        content: 'text-yellow-800 text-yellow-400',
        iconComponent: AlertCircle,
      },
      error: {
        container: 'bg-red-50 border-red-200 bg-red-900/20 border-red-800/30',
        icon: 'text-red-500',
        title: 'text-red-900 text-red-300',
        content: 'text-red-800 text-red-400',
        iconComponent: XCircle,
      },
      info: {
        container: 'bg-blue-50 border-blue-200 bg-blue-900/20 border-blue-800/30',
        icon: 'text-blue-500',
        title: 'text-blue-900 text-blue-300',
        content: 'text-blue-800 text-blue-400',
        iconComponent: Info,
      },
    }
    
    const IconComponent = variants[variant].iconComponent
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border p-4',
          variants[variant].container,
          className
        )}
        role="alert"
        {...props}
      >
        <div className="flex items-start">
          {showIcon && (
            <IconComponent className={cn('h-5 w-5 mt-0.5 flex-shrink-0', variants[variant].icon)} />
          )}
          
          <div className={cn('flex-1', showIcon && 'ml-3')}>
            {title && (
              <h3 className={cn('font-medium', variants[variant].title)}>
                {title}
              </h3>
            )}
            
            <div className={cn('mt-1 text-sm', variants[variant].content)}>
              {children}
            </div>
          </div>
          
          {dismissible && (
            <button
              onClick={onDismiss}
              className="ml-4 -mt-1 -mr-2 flex h-8 w-8 items-center justify-center rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export { Alert }
