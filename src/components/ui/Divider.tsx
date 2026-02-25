import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  thickness?: 'thin' | 'medium' | 'thick'
  label?: string
  labelPosition?: 'left' | 'center' | 'right'
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ 
    className,
    orientation = 'horizontal',
    variant = 'solid',
    thickness = 'thin',
    label,
    labelPosition = 'center',
    ...props 
  }, ref) => {
    const orientations = {
      horizontal: 'w-full',
      vertical: 'h-full w-px',
    }
    
    const variants = {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    }
    
    const thicknesses = {
      thin: orientation === 'horizontal' ? 'border-t' : 'border-l',
      medium: orientation === 'horizontal' ? 'border-t-2' : 'border-l-2',
      thick: orientation === 'horizontal' ? 'border-t-4' : 'border-l-4',
    }
    
    const labelPositions = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    }
    
    if (label && orientation === 'horizontal') {
      return (
        <div
          className={cn('flex items-center', className)}
          {...props as HTMLAttributes<HTMLDivElement>}
        >
          <hr
            ref={ref}
            className={cn(
              'flex-1 border-gray-200',
              variants[variant],
              thickness === 'medium' ? 'border-t-2' : thickness === 'thick' ? 'border-t-4' : 'border-t'
            )}
          />
          
          <span className={cn(
            'px-4 text-sm text-gray-500',
            labelPositions[labelPosition]
          )}>
            {label}
          </span>
          
          <hr
            className={cn(
              'flex-1 border-gray-200',
              variants[variant],
              thickness === 'medium' ? 'border-t-2' : thickness === 'thick' ? 'border-t-4' : 'border-t'
            )}
          />
        </div>
      )
    }
    
    return (
      <hr
        ref={ref}
        className={cn(
          'border-0 border-gray-200',
          orientations[orientation],
          variants[variant],
          thicknesses[thickness],
          className
        )}
        {...props}
      />
    )
  }
)

Divider.displayName = 'Divider'

export { Divider }
