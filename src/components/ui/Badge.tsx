'use client';

import { cn } from '@/lib/utils/cn';
import { colorVar, colorBg } from '@/lib/utils/colors';
import { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'sphere' | 'green' | 'accent' | 'yellow' | 'red' | 'purple';
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'sphere', size = 'md', style, ...props }, ref) => {
    const sizeClass = size === 'sm' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-1 text-[11px]';
    const bg = variant === 'purple' ? 'rgba(168,85,247,0.12)' : colorBg[variant] ?? colorBg.sphere;
    const color = variant === 'purple' ? '#c084fc' : colorVar[variant] ?? colorVar.sphere;

    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center gap-1 font-bold rounded-full', sizeClass, className)}
        style={{ background: bg, color, ...style }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';