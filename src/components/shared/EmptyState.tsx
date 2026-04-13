'use client';

import { Button } from '@/components/ui/Button';

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <i className={`fas fa-${icon} text-6xl text-text-3 mb-4 block`}></i>
      <div className="font-outfit text-xl font-bold text-text mb-2">{title}</div>
      <div className="text-sm text-text-2 mb-6 max-w-sm mx-auto">{description}</div>
      {actionLabel && onAction && (
        <Button onClick={onAction}>
          <i className={`fas fa-plus mr-2`}></i>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}