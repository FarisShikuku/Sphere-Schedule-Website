import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { checked?: boolean };

export function Toggle({ checked = false, className, ...props }: Props) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      className={cn(
        'relative h-7 w-12 rounded-full transition',
        checked ? 'bg-primary' : 'bg-slate-200',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'absolute top-1 h-5 w-5 rounded-full bg-white shadow transition',
          checked ? 'left-6' : 'left-1'
        )}
      />
    </button>
  );
}
