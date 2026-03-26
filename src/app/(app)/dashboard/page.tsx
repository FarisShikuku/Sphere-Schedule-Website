import { KpiGrid } from '@/components/dashboard/KpiGrid';
import { ProductivityChart } from '@/components/dashboard/ProductivityChart';
import { UpcomingSchedule } from '@/components/dashboard/UpcomingSchedule';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { FocusTimer } from '@/components/dashboard/FocusTimer';
import { StreakTracker } from '@/components/dashboard/StreakTracker';

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <KpiGrid />
      <div className="grid lg:grid-cols-2 gap-6">
        <ProductivityChart />
        <UpcomingSchedule />
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <RecentActivity />
        <FocusTimer />
        <StreakTracker />
      </div>
    </div>
  );
}
