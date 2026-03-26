import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

type Props = HTMLAttributes<HTMLDivElement> & { initials?: string };

export function Avatar({ initials = 'SS', className, ...props }: Props) {
  return (
    <div className={cn('h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center', className)} {...props}>
      {initials}
    </div>
  );
}
