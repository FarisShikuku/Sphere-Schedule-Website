'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils/cn';

interface ToastProps {
  message: string;
  icon?: string;
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, icon = 'fa-check', duration = 2800, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'fixed bottom-7 right-7 z-[9999] bg-text text-bg px-5 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2.5 transition-all duration-350',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      )}
    >
      <i className={`fas ${icon}`}></i>
      <span>{message}</span>
    </div>
  );
}