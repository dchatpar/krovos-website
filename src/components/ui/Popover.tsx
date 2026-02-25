import { forwardRef, HTMLAttributes, ReactNode, useCallback, useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { createPortal } from 'react-dom'

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'center' | 'end'
  open?: boolean
  onOpenChange?: (open: boolean) => void
  triggerOn?: 'click' | 'hover'
  showArrow?: boolean
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ 
    className,
    trigger,
    children,
    position = 'bottom',
    align = 'center',
    open: controlledOpen,
    onOpenChange,
    triggerOn = 'click',
    showArrow = true,
    ..._props 
  }, _ref) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
    const triggerRef = useRef<HTMLDivElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)
    
    const isControlled = controlledOpen !== undefined
    const open = isControlled ? controlledOpen : uncontrolledOpen
    
    const setOpen = useCallback((value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value)
      }
      onOpenChange?.(value)
    }, [isControlled, onOpenChange])
    
    const handleTriggerClick = () => {
      if (triggerOn === 'click') {
        setOpen(!open)
      }
    }
    
    const handleMouseEnter = () => {
      if (triggerOn === 'hover') {
        setOpen(true)
      }
    }
    
    const handleMouseLeave = () => {
      if (triggerOn === 'hover') {
        setOpen(false)
      }
    }
    
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          open &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node) &&
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node)
        ) {
          setOpen(false)
        }
      }
      
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [open, setOpen])
    
    const positions = {
      top: {
        popover: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        arrow: 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2',
      },
      bottom: {
        popover: 'top-full left-1/2 -translate-x-1/2 mt-2',
        arrow: 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2',
      },
      left: {
        popover: 'right-full top-1/2 -translate-y-1/2 mr-2',
        arrow: 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2',
      },
      right: {
        popover: 'left-full top-1/2 -translate-y-1/2 ml-2',
        arrow: 'right-full top-1/2 -translate-y-1/2 translate-x-1/2',
      },
    }
    
    const aligns = {
      start: 'left-0 -translate-x-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0 translate-x-0',
    }
    
    const popoverContent = open && (
      <div 
        ref={popoverRef}
        className="fixed z-50"
        style={{
          left: triggerRef.current?.getBoundingClientRect().left || 0,
          top: triggerRef.current?.getBoundingClientRect().bottom || 0,
        }}
      >
        <div className={cn(
          'absolute rounded-lg bg-white shadow-lg border border-gray-200 p-4',
          positions[position].popover,
          aligns[align],
          className
        )}>
          {children}
          
          {showArrow && (
            <div className={cn(
              'absolute h-2 w-2 rotate-45 bg-white border border-gray-200',
              positions[position].arrow
            )} />
          )}
        </div>
      </div>
    )
    
    return (
      <>
        <div
          ref={triggerRef}
          className="inline-block"
          onClick={handleTriggerClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {trigger}
        </div>
        
        {createPortal(popoverContent, document.body)}
      </>
    )
  }
)

Popover.displayName = 'Popover'

export { Popover }
