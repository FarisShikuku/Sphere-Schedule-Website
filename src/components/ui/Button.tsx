import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'primary' | 'ghost' | 'outline' | 'danger';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = 'primary', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition';
  const variants: Record<Variant, string> = {
    primary: 'bg-primary text-white shadow-glow hover:opacity-90',
    ghost: 'text-slate-700 hover:bg-slate-100',
    outline: 'border border-slate-200 text-slate-700 hover:border-primary',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
