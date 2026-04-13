import { NotificationSettings, CalendarSyncSettings } from '@/lib/types';

export const defaultNotificationSettings: NotificationSettings = {
  taskReminders: true,
  meetingAlerts: true,
  emailDigest: false,
  pushNotifications: true,
};

export const defaultCalendarSyncSettings: CalendarSyncSettings = {
  googleCalendar: false,
  outlook: false,
  autoSync: true,
  syncInterval: 60,
};

export const defaultUserSettings = {
  theme: 'dark' as const,
  notifications: defaultNotificationSettings,
  calendarSync: defaultCalendarSyncSettings,
  language: 'en',
};