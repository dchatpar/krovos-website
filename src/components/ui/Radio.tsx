import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string | ReactNode
  error?: string
  helperText?: string
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    className,
    label,
    error,
    helperText,
    id,
    ...props 
  }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              ref={ref}
              type="radio"
              id={radioId}
              className={cn(
                'peer h-5 w-5 appearance-none rounded-full border border-gray-300 bg-white checked:border-primary-500 checked:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900',
                error && 'border-red-500',
                className
              )}
              {...props}
            />
            
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
          </div>
          
          {label && (
            <label 
              htmlFor={radioId}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              {label}
            </label>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm pl-8',
            error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Radio.displayName = 'Radio'

export { Radio }