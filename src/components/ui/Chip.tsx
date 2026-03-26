import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type Props = HTMLAttributes<HTMLSpanElement> & { tone?: 'neutral' | 'success' | 'warning' };

export function Chip({ className, tone = 'neutral', ...props }: Props) {
  const tones = {
    neutral: 'bg-slate-100 text-slate-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
  };
  return <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs', tones[tone], className)} {...props} />;
}
