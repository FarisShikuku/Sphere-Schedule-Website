'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface Toast {
  id: string;
  message: string;
  icon?: string;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (message: string, icon?: string, duration?: number) => void;
  hideToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, icon: string = 'fa-check', duration: number = 2800) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, icon, duration }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
      {children}
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="fixed bottom-7 right-7 z-[9999] flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold"
          style={{
            background: 'var(--text)',
            color: 'var(--bg)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            animation: 'fadeUp 0.3s ease both',
          }}
        >
          <i className={`fas ${toast.icon}`} />
          <span>{toast.message}</span>
        </div>
      ))}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}