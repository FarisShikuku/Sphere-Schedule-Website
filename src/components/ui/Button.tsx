'use client';

import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', isLoading, disabled, style, ...props }, ref) => {
    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg',
    };

    const variantStyle: React.CSSProperties =
      variant === 'primary'
        ? { background: 'linear-gradient(135deg, var(--color-sphere), #A855F7)', color: 'white', boxShadow: '0 4px 20px rgba(124,108,248,0.25)' }
        : variant === 'secondary'
        ? { background: 'var(--card-2)', border: '1px solid var(--border)', color: 'var(--text)' }
        : variant === 'outline'
        ? { border: '2px solid var(--border-2)', color: 'var(--text-2)', background: 'transparent' }
        : { background: 'transparent', color: 'var(--text-2)' }; // ghost

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-px',
          sizes[size],
          className
        )}
        style={{ ...variantStyle, ...style }}
        onMouseEnter={e => {
          if (variant !== 'primary') {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-sphere)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-sphere)';
          }
        }}
        onMouseLeave={e => {
          if (variant === 'outline') {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-2)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)';
          } else if (variant === 'secondary') {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text)';
          } else if (variant === 'ghost') {
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-2)';
          }
        }}
        {...props}
      >
        {isLoading && <i className="fas fa-spinner fa-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';