import { TaskPriority } from '@/lib/types';

export const priorityColors: Record<TaskPriority, { bg: string; text: string; dot: string }> = {
  low: {
    bg: 'bg-green-500/10',
    text: 'text-green',
    dot: 'bg-green',
  },
  medium: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow',
    dot: 'bg-yellow',
  },
  high: {
    bg: 'bg-red-500/10',
    text: 'text-red',
    dot: 'bg-red',
  },
};

export const priorityLabels: Record<TaskPriority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

export const priorityOrder: Record<TaskPriority, number> = {
  low: 1,
  medium: 2,
  high: 3,
};