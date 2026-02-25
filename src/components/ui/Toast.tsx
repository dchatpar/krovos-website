import { forwardRef, HTMLAttributes, useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { X, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react'
import { createPortal } from 'react-dom'

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  title?: string
  message: string
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  duration?: number
  onClose: (id: string) => void
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  showCloseButton?: boolean
}

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ 
    className,
    id,
    title,
    message,
    variant = 'default',
    duration = 5000,
    onClose,
    position = 'top-right',
    showCloseButton = true,
    ...props 
  }, ref) => {
    const [isExiting, setIsExiting] = useState(false)
    
    const handleClose = useCallback(() => {
      setIsExiting(true)
      setTimeout(() => {
        onClose(id)
      }, 300)
    }, [id, onClose])
    
    useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose()
        }, duration)
        
        return () => clearTimeout(timer)
      }
    }, [duration, handleClose])
    
    const variants = {
      default: {
        container: 'bg-white border-gray-200',
        icon: 'text-gray-400',
        title: 'text-gray-900',
        message: 'text-gray-600',
        iconComponent: Info,
      },
      success: {
        container: 'bg-green-50 border-green-200',
        icon: 'text-green-500',
        title: 'text-green-900',
        message: 'text-green-800',
        iconComponent: CheckCircle,
      },
      warning: {
        container: 'bg-yellow-50 border-yellow-200',
        icon: 'text-yellow-500',
        title: 'text-yellow-900',
        message: 'text-yellow-800',
        iconComponent: AlertCircle,
      },
      error: {
        container: 'bg-red-50 border-red-200',
        icon: 'text-red-500',
        title: 'text-red-900',
        message: 'text-red-800',
        iconComponent: XCircle,
      },
      info: {
        container: 'bg-blue-50 border-blue-200',
        icon: 'text-blue-500',
        title: 'text-blue-900',
        message: 'text-blue-800',
        iconComponent: Info,
      },
    }
    
    const positions = {
      'top-left': 'top-4 left-4',
      'top-right': 'top-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-right': 'bottom-4 right-4',
    }
    
    const IconComponent = variants[variant].iconComponent
    
    const toastContent = (
      <div
        ref={ref}
        className={cn(
          'fixed z-50 w-full max-w-sm',
          positions[position],
          'animate-slide-in-right',
          isExiting && 'animate-slide-out-right',
          className
        )}
        {...props}
      >
        <div className={cn(
          'rounded-lg border p-4 shadow-lg',
          variants[variant].container
        )}>
          <div className="flex items-start">
            <IconComponent className={cn('h-5 w-5 mt-0.5 flex-shrink-0', variants[variant].icon)} />
            
            <div className="ml-3 flex-1">
              {title && (
                <h3 className={cn('font-medium', variants[variant].title)}>
                  {title}
                </h3>
              )}
              
              <div className={cn('mt-1 text-sm', variants[variant].message)}>
                {message}
              </div>
            </div>
            
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="ml-4 -mt-1 -mr-2 flex h-8 w-8 items-center justify-center rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
                aria-label="Close toast"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          
          {duration > 0 && (
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200">
              <div 
                className={cn(
                  'h-full rounded-full transition-all duration-300',
                  variant === 'success' ? 'bg-green-500' :
                  variant === 'warning' ? 'bg-yellow-500' :
                  variant === 'error' ? 'bg-red-500' :
                  variant === 'info' ? 'bg-blue-500' :
                  'bg-gray-500'
                )}
                style={{ 
                  width: isExiting ? '0%' : '100%',
                  transition: `width ${duration}ms linear`
                }}
              />
            </div>
          )}
        </div>
      </div>
    )
    
    return createPortal(toastContent, document.body)
  }
)

Toast.displayName = 'Toast'

export { Toast }
