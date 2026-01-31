import { forwardRef, HTMLAttributes, ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  title: string
  content: ReactNode
  disabled?: boolean
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  collapsible?: boolean
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ 
    className,
    items,
    type = 'single',
    defaultValue,
    collapsible = true,
    ...props 
  }, ref) => {
    const [openItems, setOpenItems] = useState<string[]>(
      Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
    )
    
    const handleItemClick = (itemId: string) => {
      if (type === 'single') {
        if (openItems.includes(itemId) && collapsible) {
          setOpenItems([])
        } else {
          setOpenItems([itemId])
        }
      } else {
        if (openItems.includes(itemId)) {
          setOpenItems(openItems.filter(id => id !== itemId))
        } else {
          setOpenItems([...openItems, itemId])
        }
      }
    }
    
    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      >
        {items.map((item) => {
          const isOpen = openItems.includes(item.id)
          
          return (
            <div
              key={item.id}
              className={cn(
                'rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden',
                item.disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              <button
                onClick={() => !item.disabled && handleItemClick(item.id)}
                disabled={item.disabled}
                className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.title}
                </span>
                
                <ChevronDown className={cn(
                  'h-5 w-5 text-gray-400 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )} />
              </button>
              
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-800">
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'

export { Accordion }