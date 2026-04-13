'use client';

import { cn } from '@/lib/utils/cn';
import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'banner';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', padding = 'md', style, ...props }, ref) => {
    const paddings = {
      none: '',
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-6 md:p-8',
    };

    const baseStyle: React.CSSProperties =
      variant === 'banner'
        ? { background: 'linear-gradient(135deg, var(--color-sphere-600), #7C3AED, #A855F7, var(--color-accent))', color: 'white' }
        : variant === 'glass'
        ? { background: 'var(--glass)', backdropFilter: 'blur(16px)', border: '1px solid var(--glass-border)' }
        : { background: 'var(--card)', border: '1px solid var(--border)' };

    return (
      <div
        ref={ref}
        className={cn('rounded-xl transition-all duration-300', paddings[padding], className)}
        style={{ ...baseStyle, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';