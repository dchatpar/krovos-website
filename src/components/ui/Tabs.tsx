import { forwardRef, HTMLAttributes, ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

interface TabItem {
  id: string
  label: string
  content: ReactNode
  disabled?: boolean
}

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[]
  defaultValue?: string
  variant?: 'default' | 'pills' | 'underline'
  orientation?: 'horizontal' | 'vertical'
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    className,
    items,
    defaultValue,
    variant = 'default',
    orientation = 'horizontal',
    ...props 
  }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.id)
    
    const activeItem = items.find(item => item.id === activeTab)
    
    const variants = {
      default: {
        container: 'border-b border-gray-200',
        tab: 'border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors',
        active: 'border-primary-500 text-primary-600',
      },
      pills: {
        container: 'space-x-2',
        tab: 'rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors',
        active: 'bg-primary-500 text-white hover:bg-primary-600',
      },
      underline: {
        container: 'space-x-6 border-b border-gray-200',
        tab: 'px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors',
        active: 'text-primary-600 border-b-2 border-primary-500',
      },
    }
    
    const orientations = {
      horizontal: 'flex',
      vertical: 'flex flex-col space-y-1',
    }
    
    return (
      <div
        ref={ref}
        className={cn('space-y-4', className)}
        {...props}
      >
        <div className={cn(orientations[orientation], variants[variant].container)}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => !item.disabled && setActiveTab(item.id)}
              disabled={item.disabled}
              className={cn(
                variants[variant].tab,
                activeTab === item.id && variants[variant].active,
                item.disabled && 'opacity-50 cursor-not-allowed',
                orientation === 'vertical' && 'text-left'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="pt-2">
          {activeItem?.content}
        </div>
      </div>
    )
  }
)

Tabs.displayName = 'Tabs'

export { Tabs }
