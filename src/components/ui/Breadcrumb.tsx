import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: ReactNode
}

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  items: BreadcrumbItem[]
  separator?: ReactNode
  showHome?: boolean
  homeHref?: string
  homeLabel?: string
}

const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ 
    className,
    items,
    separator = <ChevronRight className="h-4 w-4 text-gray-400" />,
    showHome = true,
    homeHref = '/',
    homeLabel = 'Home',
    ...props 
  }, ref) => {
    const allItems = showHome 
      ? [{ label: homeLabel, href: homeHref, icon: <Home className="h-4 w-4" /> }, ...items]
      : items
    
    return (
      <nav
        ref={ref}
        className={cn('flex items-center space-x-2', className)}
        aria-label="Breadcrumb"
        {...props}
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          
          return (
            <div key={index} className="flex items-center space-x-2">
              {index > 0 && (
                <span className="text-gray-400" aria-hidden="true">
                  {separator}
                </span>
              )}
              
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors'
                  )}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <div
                  className={cn(
                    'flex items-center space-x-1 text-sm font-medium',
                    isLast 
                      ? 'text-gray-900 text-white' 
                      : 'text-gray-500 text-gray-400'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </div>
              )}
            </div>
          )
        })}
      </nav>
    )
  }
)

Breadcrumb.displayName = 'Breadcrumb'

export { Breadcrumb }
