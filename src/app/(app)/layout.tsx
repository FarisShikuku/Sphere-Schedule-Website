import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { AppNavbar } from '@/components/layout/AppNavbar';
import { BottomNav } from '@/components/layout/BottomNav';
import { PageWrapper } from '@/components/layout/PageWrapper';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="lg:pl-64">
        <AppNavbar />
        <PageWrapper>{children}</PageWrapper>
      </div>
      <BottomNav />
    </div>
  );
}
