import {
  format,
  formatDistance,
  isToday,
  isTomorrow,
  isYesterday,
  differenceInDays,
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  parseISO,
} from 'date-fns';

export const formatDate = (date: Date | string, pattern: string = 'MMM dd, yyyy'): string => {
  const d = typeof date === 'string' ? parseISO(date) : date;
  return format(d, pattern);
};

export const formatTime = (date: Date | string, pattern: string = 'h:mm a'): string => {
  const d = typeof date === 'string' ? parseISO(date) : date;
  return format(d, pattern);
};

export const formatRelativeDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? parseISO(date) : date;
  
  if (isToday(d)) return 'Today';
  if (isTomorrow(d)) return 'Tomorrow';
  if (isYesterday(d)) return 'Yesterday';
  
  const daysDiff = differenceInDays(d, new Date());
  if (Math.abs(daysDiff) <= 7) {
    return format(d, 'EEEE');
  }
  
  return format(d, 'MMM dd, yyyy');
};

export const getDaysInMonth = (year: number, month: number): Date[] => {
  const start = startOfMonth(new Date(year, month));
  const end = endOfMonth(new Date(year, month));
  return eachDayOfInterval({ start, end });
};

export const getCalendarDays = (year: number, month: number): Date[] => {
  const firstDayOfMonth = new Date(year, month, 1);
  const start = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });
  const end = endOfMonth(new Date(year, month));
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const endDate = endOfWeek(lastDayOfMonth, { weekStartsOn: 0 });
  
  return eachDayOfInterval({ start, end: endDate });
};

export const groupEventsByDate = <T extends { start: Date }>(
  events: T[]
): Map<string, T[]> => {
  const grouped = new Map<string, T[]>();
  
  events.forEach((event) => {
    const dateKey = format(event.start, 'yyyy-MM-dd');
    if (!grouped.has(dateKey)) {
      grouped.set(dateKey, []);
    }
    grouped.get(dateKey)!.push(event);
  });
  
  return grouped;
};