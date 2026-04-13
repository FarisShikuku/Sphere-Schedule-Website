'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/contexts/ToastContext';

export default function NotesPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="font-outfit text-2xl md:text-3xl font-extrabold text-text tracking-[-0.7px]">
            Notes
          </div>
          <div className="text-sm text-text-2 mt-1">Your quick notes</div>
        </div>
        <Button onClick={() => showToast('Note created!', 'fa-plus')}>
          <i className="fas fa-plus mr-2"></i> New Note
        </Button>
      </div>

      <Card>
        <div className="text-center py-16">
          <i className="fas fa-sticky-note text-6xl text-text-3 mb-4 block"></i>
          <div className="font-outfit text-xl font-bold text-text mb-2">Quick Notes</div>
          <div className="text-sm text-text-2">
            Capture thoughts, meeting notes, and ideas on the fly.<br />
            Coming in the next update.
          </div>
        </div>
      </Card>
    </div>
  );
}