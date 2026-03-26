import { Button } from '@/components/ui/Button';

const meetings = [
  { title: 'Weekly sync', time: '10:30 AM' },
  { title: 'Client kickoff', time: '1:00 PM' },
  { title: 'Design review', time: '4:00 PM' },
];

export default function MeetingsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Meetings</h1>
        <Button variant="outline">Schedule</Button>
      </div>
      <div className="grid gap-4">
        {meetings.map((m) => (
          <div key={m.title} className="p-5 rounded-2xl bg-white border border-slate-100 flex items-center justify-between">
            <div>
              <p className="font-medium">{m.title}</p>
              <p className="text-xs text-slate-500">{m.time}</p>
            </div>
            <Button>Join</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
