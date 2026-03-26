import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string; error?: string };

export function Textarea({ label, error, className, ...props }: Props) {
  return (
    <label className="block text-sm">
      {label && <span className="text-slate-600">{label}</span>}
      <textarea
        className={cn(
          'mt-2 w-full min-h-[120px] rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-primary',
          className
        )}
        {...props}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
