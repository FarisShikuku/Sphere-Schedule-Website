import { AppointmentType } from '@/lib/types';

export const APPOINTMENT_TYPES: { value: AppointmentType; label: string; icon: string }[] = [
  { value: 'business', label: 'Business', icon: 'briefcase' },
  { value: 'personal', label: 'Personal', icon: 'user' },
  { value: 'consultation', label: 'Consultation', icon: 'comment' },
  { value: 'onboarding', label: 'Onboarding', icon: 'user-plus' },
  { value: 'mentoring', label: 'Mentoring', icon: 'chalkboard-user' },
  { value: 'design', label: 'Design', icon: 'paintbrush' },
];