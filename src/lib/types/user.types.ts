export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: UserRole;
  plan: SubscriptionPlan;
  timezone: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'member' | 'viewer';
export type SubscriptionPlan = 'free' | 'pro' | 'business' | 'enterprise';

export interface UserSettings {
  theme: 'light' | 'dark';
  notifications: NotificationSettings;
  calendarSync: CalendarSyncSettings;
  language: string;
}

export interface NotificationSettings {
  taskReminders: boolean;
  meetingAlerts: boolean;
  emailDigest: boolean;
  pushNotifications: boolean;
}

export interface CalendarSyncSettings {
  googleCalendar: boolean;
  outlook: boolean;
  autoSync: boolean;
  syncInterval: number;
}