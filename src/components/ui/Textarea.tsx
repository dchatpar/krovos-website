import { forwardRef, TextareaHTMLAttributes, useId } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  showCount?: boolean
  maxLength?: number
  fullWidth?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className,
    label,
    error,
    helperText,
    showCount = false,
    maxLength,
    value,
    fullWidth = false,
    id,
    ...props 
  }, ref) => {
    const generatedId = useId()
    const textareaId = id || `textarea-${generatedId.replace(/:/g, '')}`
    const currentLength = typeof value === 'string' ? value.length : 0
    
    const baseStyles = 'flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none'
    
    const errorStyles = error ? 'border-red-500 focus-visible:ring-red-500' : ''
    
    return (
      <div className={cn('space-y-2', fullWidth && 'w-full')}>
        {label && (
          <label 
            htmlFor={textareaId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            className={cn(
              baseStyles,
              errorStyles,
              className
            )}
            value={value}
            maxLength={maxLength}
            {...props}
          />
          
          {showCount && maxLength && (
            <div className="absolute bottom-2 right-2 text-xs text-gray-500">
              {currentLength}/{maxLength}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm',
            error ? 'text-red-600' : 'text-gray-500'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
