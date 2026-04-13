export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled' | 'in-progress';
export type AppointmentType = 'business' | 'personal' | 'consultation' | 'onboarding' | 'mentoring' | 'design';

export interface Appointment {
  id: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  type: AppointmentType;
  status: AppointmentStatus;
  location?: string;
  meetingLink?: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  notes?: string;
  createdAt: Date;
  userId: string;
}