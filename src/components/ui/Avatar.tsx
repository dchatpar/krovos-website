import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
  fallback?: ReactNode
  status?: 'online' | 'offline' | 'away' | 'busy' | null
  statusPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className,
    src,
    alt = 'Avatar',
    size = 'md',
    shape = 'circle',
    fallback,
    status,
    statusPosition = 'bottom-right',
    ...props 
  }, ref) => {
    const sizes = {
      xs: 'h-8 w-8',
      sm: 'h-10 w-10',
      md: 'h-12 w-12',
      lg: 'h-14 w-14',
      xl: 'h-16 w-16',
    }
    
    const statusSizes = {
      xs: 'h-2 w-2',
      sm: 'h-2.5 w-2.5',
      md: 'h-3 w-3',
      lg: 'h-3.5 w-3.5',
      xl: 'h-4 w-4',
    }
    
    const statusPositions = {
      'top-right': 'top-0 right-0',
      'top-left': 'top-0 left-0',
      'bottom-right': 'bottom-0 right-0',
      'bottom-left': 'bottom-0 left-0',
    }
    
    const statusColors = {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      away: 'bg-yellow-500',
      busy: 'bg-red-500',
    }
    
    const shapes = {
      circle: 'rounded-full',
      square: 'rounded-lg',
    }
    
    return (
      <div
        ref={ref}
        className={cn('relative inline-block', className)}
        {...props}
      >
        <div className={cn(
          'overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center',
          sizes[size],
          shapes[shape]
        )}>
          {src ? (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
            />
          ) : fallback ? (
            <div className="flex h-full w-full items-center justify-center">
              {fallback}
            </div>
          ) : (
            <User className="h-1/2 w-1/2 text-gray-400" />
          )}
        </div>
        
        {status && (
          <div className={cn(
            'absolute rounded-full border-2 border-white dark:border-gray-900',
            statusPositions[statusPosition],
            statusSizes[size],
            statusColors[status]
          )} />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

export { Avatar }