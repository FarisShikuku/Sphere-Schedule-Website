import { AppointmentStatus } from '@/lib/types';

export const APPOINTMENT_STATUSES: { value: AppointmentStatus; label: string; color: string }[] = [
  { value: 'scheduled', label: 'Scheduled', color: 'sphere' },
  { value: 'in-progress', label: 'In Progress', color: 'yellow' },
  { value: 'completed', label: 'Completed', color: 'green' },
  { value: 'cancelled', label: 'Cancelled', color: 'red' },
];