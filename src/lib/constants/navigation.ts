export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}

export const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'home', href: '/dashboard' },
  { id: 'tasks', label: 'Tasks', icon: 'check-circle', href: '/tasks', badge: '5' },
  { id: 'calendar', label: 'Calendar', icon: 'calendar-alt', href: '/calendar' },
  { id: 'meetings', label: 'Meetings', icon: 'video', href: '/meetings', badge: '2' },
  { id: 'appointments', label: 'Appointments', icon: 'clock', href: '/appointments' },
];

export const workspaceNavItems: NavItem[] = [
  { id: 'analytics', label: 'Analytics', icon: 'chart-line', href: '/analytics', badge: 'New', badgeColor: 'green' },
  { id: 'team', label: 'Team', icon: 'users', href: '/team' },
  { id: 'notes', label: 'Notes', icon: 'sticky-note', href: '/notes' },
];

export const bottomNavItems: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: 'cog', href: '/settings' },
];