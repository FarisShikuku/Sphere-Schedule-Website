export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const FEATURES: Feature[] = [
  {
    id: 'smart-tasks',
    title: 'Smart Task Management',
    description: 'Create, prioritize, and track tasks with intelligent due dates, labels, sub-tasks, and automated reminders.',
    icon: 'check-double',
    color: 'sphere',
  },
  {
    id: 'unified-calendar',
    title: 'Unified Calendar',
    description: 'A single calendar view that merges all your meetings, appointments, deadlines, and personal events.',
    icon: 'calendar-alt',
    color: 'green',
  },
  {
    id: 'meeting-hub',
    title: 'Meeting Hub',
    description: 'Schedule, join, and manage meetings with one-click video links, participant tracking, and live status badges.',
    icon: 'video',
    color: 'accent',
  },
  {
    id: 'appointment-booking',
    title: 'Appointment Booking',
    description: 'Share your availability, let clients book slots, and automatically sync appointments to your schedule.',
    icon: 'clock',
    color: 'yellow',
  },
  {
    id: 'analytics',
    title: 'Productivity Analytics',
    description: 'Track your completion rates, focus time, and weekly progress with beautiful charts and insights.',
    icon: 'chart-line',
    color: 'cyan',
  },
  {
    id: 'focus-mode',
    title: 'Focus Mode',
    description: 'Block distractions, set deep work sessions with Pomodoro timers, and enter flow state in seconds.',
    icon: 'moon',
    color: 'pink',
  },
];