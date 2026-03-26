import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string };

export function Input({ label, error, className, ...props }: Props) {
  return (
    <label className="block text-sm">
      {label && <span className="text-slate-600">{label}</span>}
      <input
        className={cn(
          'mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary',
          className
        )}
        {...props}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
