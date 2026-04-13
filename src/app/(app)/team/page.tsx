'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/contexts/ToastContext';

export default function TeamPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="font-outfit text-2xl md:text-3xl font-extrabold text-text tracking-[-0.7px]">
            Team
          </div>
          <div className="text-sm text-text-2 mt-1">Sphere Solution Developers · 6 members</div>
        </div>
        <Button onClick={() => showToast('Member invited!', 'fa-user-plus')}>
          <i className="fas fa-user-plus mr-2"></i> Invite Member
        </Button>
      </div>

      <Card>
        <div className="text-center py-16">
          <i className="fas fa-users text-6xl text-text-3 mb-4 block"></i>
          <div className="font-outfit text-xl font-bold text-text mb-2">Team collaboration</div>
          <div className="text-sm text-text-2">
            Manage your team, share schedules, and collaborate in real time.<br />
            This section is coming in the next update.
          </div>
        </div>
      </Card>
    </div>
  );
}