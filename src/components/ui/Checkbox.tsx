import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string | ReactNode
  error?: string
  helperText?: string
  indeterminate?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className,
    label,
    error,
    helperText,
    indeterminate = false,
    id,
    checked,
    ...props 
  }, ref) => {
    const generatedId = useId()
    const checkboxId = id || `checkbox-${generatedId.replace(/:/g, '')}`
    
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={cn(
                'peer h-5 w-5 appearance-none rounded border border-gray-300 bg-white checked:border-primary-500 checked:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                error && 'border-red-500',
                className
              )}
              checked={checked}
              {...props}
            />
            
            <Check className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
            
            {indeterminate && (
              <div className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 bg-white opacity-0 peer-checked:opacity-0 peer-indeterminate:opacity-100 pointer-events-none" />
            )}
          </div>
          
          {label && (
            <label 
              htmlFor={checkboxId}
              className="text-sm font-medium text-gray-700 cursor-pointer"
            >
              {label}
            </label>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm pl-8',
            error ? 'text-red-600' : 'text-gray-500'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
