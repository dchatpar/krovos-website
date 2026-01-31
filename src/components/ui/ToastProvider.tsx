import { createContext, useContext, useState, ReactNode, useCallback } from 'react'
import { Toast } from './Toast'
import { generateId } from '@/lib/utils'

interface ToastItem {
  id: string
  title?: string
  message: string
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  duration?: number
}

interface ToastContextType {
  toasts: ToastItem[]
  addToast: (toast: Omit<ToastItem, 'id'>) => void
  removeToast: (id: string) => void
  clearToasts: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

interface ToastProviderProps {
  children: ReactNode
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  maxToasts?: number
}

export function ToastProvider({ 
  children, 
  position = 'top-right',
  maxToasts = 5 
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  
  const addToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = generateId()
    const newToast = { ...toast, id }
    
    setToasts(prev => {
      const updated = [newToast, ...prev]
      return updated.slice(0, maxToasts)
    })
    
    return id
  }, [maxToasts])
  
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])
  
  const clearToasts = useCallback(() => {
    setToasts([])
  }, [])
  
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          message={toast.message}
          variant={toast.variant}
          duration={toast.duration}
          onClose={removeToast}
          position={position}
        />
      ))}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  
  return context
}

export function useToastShortcuts() {
  const { addToast } = useToast()
  
  const success = useCallback((message: string, title?: string, duration?: number) => {
    return addToast({ title, message, variant: 'success', duration })
  }, [addToast])
  
  const error = useCallback((message: string, title?: string, duration?: number) => {
    return addToast({ title, message, variant: 'error', duration })
  }, [addToast])
  
  const warning = useCallback((message: string, title?: string, duration?: number) => {
    return addToast({ title, message, variant: 'warning', duration })
  }, [addToast])
  
  const info = useCallback((message: string, title?: string, duration?: number) => {
    return addToast({ title, message, variant: 'info', duration })
  }, [addToast])
  
  return { success, error, warning, info }
}