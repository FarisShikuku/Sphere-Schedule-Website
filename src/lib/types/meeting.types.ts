export type MeetingStatus = 'live' | 'upcoming' | 'done' | 'cancelled';
export type MeetingType = 'video' | 'in-person' | 'hybrid';

export interface Meeting {
  id: string;
  title: string;
  organization: string;
  startTime: Date;
  endTime: Date;
  type: MeetingType;
  status: MeetingStatus;
  location?: string;
  meetingLink?: string;
  participants: Participant[];
  notes?: string;
  recording?: string;
  createdAt: Date;
  userId: string;
}

export interface Participant {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
}