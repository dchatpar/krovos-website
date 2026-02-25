import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title?: string
  position?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showCloseButton?: boolean
  children: ReactNode
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ 
    className,
    isOpen,
    onClose,
    title,
    position = 'right',
    size = 'md',
    showCloseButton = true,
    children,
    ...props 
  }, ref) => {
    if (!isOpen) return null
    
    const positions = {
      left: 'left-0 top-0 h-full',
      right: 'right-0 top-0 h-full',
      top: 'top-0 left-0 w-full',
      bottom: 'bottom-0 left-0 w-full',
    }
    
    const sizes = {
      sm: position === 'left' || position === 'right' ? 'w-80' : 'h-64',
      md: position === 'left' || position === 'right' ? 'w-96' : 'h-96',
      lg: position === 'left' || position === 'right' ? 'w-[28rem]' : 'h-[32rem]',
      xl: position === 'left' || position === 'right' ? 'w-[36rem]' : 'h-[40rem]',
      full: position === 'left' || position === 'right' ? 'w-full' : 'h-full',
    }
    
    const animations = {
      left: 'animate-slide-in-left',
      right: 'animate-slide-in-right',
      top: 'animate-slide-in-top',
      bottom: 'animate-slide-in-bottom',
    }
    
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    }
    
    const drawerContent = (
      <div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <div
          ref={ref}
          className={cn(
            'absolute bg-white shadow-2xl',
            positions[position],
            sizes[size],
            animations[position],
            className
          )}
          {...props}
        >
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              {title && (
                <h2 className="text-xl font-semibold text-gray-900">
                  {title}
                </h2>
              )}
              
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          )}
          
          <div className="p-6 overflow-y-auto h-[calc(100%-73px)]">
            {children}
          </div>
        </div>
      </div>
    )
    
    return createPortal(drawerContent, document.body)
  }
)

Drawer.displayName = 'Drawer'

export { Drawer }
