import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string | ReactNode
  error?: string
  helperText?: string
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    className,
    label,
    error,
    helperText,
    id,
    checked,
    ...props 
  }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`
    
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              ref={ref}
              type="checkbox"
              id={switchId}
              className="sr-only peer"
              checked={checked}
              {...props}
            />
            
            <div className={cn(
              'peer h-6 w-11 rounded-full border border-gray-300 bg-gray-200 transition-colors duration-200 peer-checked:border-primary-500 peer-checked:bg-primary-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 peer-focus:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800',
              error && 'border-red-500 peer-checked:border-red-500 peer-checked:bg-red-500'
            )}>
              <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
            </div>
          </div>
          
          {label && (
            <label 
              htmlFor={switchId}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              {label}
            </label>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm pl-14',
            error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Switch.displayName = 'Switch'

export { Switch }