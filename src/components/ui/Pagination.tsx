import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  boundaryCount?: number
  showFirstLast?: boolean
  showPrevNext?: boolean
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ 
    className,
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
    boundaryCount = 1,
    showFirstLast = true,
    showPrevNext = true,
    ...props 
  }, ref) => {
    const range = (start: number, end: number) => {
      const length = end - start + 1
      return Array.from({ length }, (_, i) => start + i)
    }
    
    const getPageNumbers = () => {
      const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2
      const totalBlocks = totalNumbers + 2
      
      if (totalPages <= totalBlocks) {
        return range(1, totalPages)
      }
      
      const leftBoundary = range(1, boundaryCount)
      const rightBoundary = range(totalPages - boundaryCount + 1, totalPages)
      const siblingStart = Math.max(
        Math.min(
          currentPage - siblingCount,
          totalPages - boundaryCount - siblingCount * 2 - 1
        ),
        boundaryCount + 2
      )
      const siblingEnd = siblingStart + siblingCount * 2
      
      const items = [
        ...leftBoundary,
        siblingStart > boundaryCount + 2 ? 'ellipsis' : boundaryCount + 1,
        ...range(siblingStart, siblingEnd),
        siblingEnd < totalPages - boundaryCount - 1 ? 'ellipsis' : totalPages - boundaryCount,
        ...rightBoundary,
      ]
      
      return items
    }
    
    const pageNumbers = getPageNumbers()
    
    const handlePageClick = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange(page)
      }
    }
    
    const buttonStyles = 'flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors'
    const activeStyles = 'bg-primary-500 text-white hover:bg-primary-600'
    const inactiveStyles = 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
    const disabledStyles = 'opacity-50 cursor-not-allowed'
    
    return (
      <nav
        ref={ref}
        className={cn('flex items-center space-x-1', className)}
        role="navigation"
        aria-label="Pagination"
        {...props}
      >
        {showFirstLast && (
          <button
            onClick={() => handlePageClick(1)}
            disabled={currentPage === 1}
            className={cn(
              buttonStyles,
              currentPage === 1 ? disabledStyles : inactiveStyles
            )}
            aria-label="Go to first page"
          >
            <span className="sr-only">First</span>
            <ChevronLeft className="h-4 w-4" />
            <ChevronLeft className="h-4 w-4 -ml-2" />
          </button>
        )}
        
        {showPrevNext && (
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={cn(
              buttonStyles,
              currentPage === 1 ? disabledStyles : inactiveStyles
            )}
            aria-label="Go to previous page"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}
        
        {pageNumbers.map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex h-10 w-10 items-center justify-center"
              >
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </span>
            )
          }
          
          const page = item as number
          const isActive = page === currentPage
          
          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={cn(
                buttonStyles,
                isActive ? activeStyles : inactiveStyles
              )}
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          )
        })}
        
        {showPrevNext && (
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={cn(
              buttonStyles,
              currentPage === totalPages ? disabledStyles : inactiveStyles
            )}
            aria-label="Go to next page"
          >
            <span className="sr-only">Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
        
        {showFirstLast && (
          <button
            onClick={() => handlePageClick(totalPages)}
            disabled={currentPage === totalPages}
            className={cn(
              buttonStyles,
              currentPage === totalPages ? disabledStyles : inactiveStyles
            )}
            aria-label="Go to last page"
          >
            <span className="sr-only">Last</span>
            <ChevronRight className="h-4 w-4" />
            <ChevronRight className="h-4 w-4 -ml-2" />
          </button>
        )}
      </nav>
    )
  }
)

Pagination.displayName = 'Pagination'

export { Pagination }