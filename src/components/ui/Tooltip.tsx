import { forwardRef, HTMLAttributes, ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'
import { createPortal } from 'react-dom'

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  showArrow?: boolean
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ 
    className,
    content,
    children,
    position = 'top',
    delay = 300,
    showArrow = true,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    let timeoutId: NodeJS.Timeout
    
    const handleMouseEnter = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setCoords({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
      
      timeoutId = setTimeout(() => setIsVisible(true), delay)
    }
    
    const handleMouseLeave = () => {
      clearTimeout(timeoutId)
      setIsVisible(false)
    }
    
    const positions = {
      top: {
        tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        arrow: 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2',
      },
      bottom: {
        tooltip: 'top-full left-1/2 -translate-x-1/2 mt-2',
        arrow: 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2',
      },
      left: {
        tooltip: 'right-full top-1/2 -translate-y-1/2 mr-2',
        arrow: 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2',
      },
      right: {
        tooltip: 'left-full top-1/2 -translate-y-1/2 ml-2',
        arrow: 'right-full top-1/2 -translate-y-1/2 translate-x-1/2',
      },
    }
    
    const tooltipContent = isVisible && (
      <div 
        className="fixed z-50 pointer-events-none"
        style={{ left: coords.x, top: coords.y }}
      >
        <div className={cn(
          'absolute whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white shadow-lg',
          positions[position].tooltip
        )}>
          {content}
          
          {showArrow && (
            <div className={cn(
              'absolute h-2 w-2 rotate-45 bg-gray-900',
              positions[position].arrow
            )} />
          )}
        </div>
      </div>
    )
    
    return (
      <>
        <div
          ref={ref}
          className={cn('inline-block', className)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {children}
        </div>
        
        {createPortal(tooltipContent, document.body)}
      </>
    )
  }
)

Tooltip.displayName = 'Tooltip'

export { Tooltip }
