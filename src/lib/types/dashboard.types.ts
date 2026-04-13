export interface KpiCard {
  id: string;
  label: string;
  value: string | number;
  trend: number;
  trendDirection: 'up' | 'down' | 'neutral';
  icon: string;
  color: string;
}

export interface ProductivityData {
  date: Date;
  completedTasks: number;
  focusHours: number;
  meetingsAttended: number;
  productivityScore: number;
}

export interface ActivityItem {
  id: string;
  type: 'task' | 'meeting' | 'appointment';
  title: string;
  time: Date;
  status: string;
  priority?: string;
}