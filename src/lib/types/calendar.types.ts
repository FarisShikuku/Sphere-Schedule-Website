export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'task' | 'meeting' | 'appointment' | 'personal';
  color?: string;
  allDay?: boolean;
  description?: string;
  location?: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  events: CalendarEvent[];
  isToday: boolean;
}

export interface CalendarView {
  type: 'month' | 'week' | 'day' | 'agenda';
  date: Date;
}