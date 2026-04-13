'use client';

import { cn } from '@/lib/utils/cn';
import { HTMLAttributes, forwardRef } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, name, size = 'md', fallback, style, ...props }, ref) => {
    const sizes = {
      sm: 'w-7 h-7 text-xs',
      md: 'w-9 h-9 text-sm',
      lg: 'w-12 h-12 text-base',
      xl: 'w-16 h-16 text-xl',
    };

    const getInitials = () => {
      if (fallback) return fallback;
      if (name) {
        const parts = name.split(' ');
        if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
        return name[0].toUpperCase();
      }
      return '?';
    };

    if (src) {
      return (
        <img
          src={src}
          alt={name || 'avatar'}
          className={cn('rounded-xl object-cover', sizes[size], className)}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn('rounded-xl flex items-center justify-center text-white font-outfit font-bold', sizes[size], className)}
        style={{
          background: 'linear-gradient(135deg, var(--color-sphere), var(--color-accent))',
          boxShadow: '0 4px 20px rgba(124,108,248,0.25)',
          ...style,
        }}
        {...props}
      >
        {getInitials()}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';