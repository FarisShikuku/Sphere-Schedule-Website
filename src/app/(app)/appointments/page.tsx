import { Chip } from '@/components/ui/Chip';

const appts = [
  { title: 'Dentist', time: '09:00', status: 'Confirmed' },
  { title: 'Project review', time: '14:00', status: 'Pending' },
];

export default function AppointmentsPage() {
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">Appointments</h1>
      <div className="grid gap-4">
        {appts.map((a) => (
          <div key={a.title} className="p-5 rounded-2xl bg-white border border-slate-100 flex items-center justify-between">
            <div>
              <p className="font-medium">{a.title}</p>
              <p className="text-xs text-slate-500">{a.time}</p>
            </div>
            <Chip tone={a.status == 'Confirmed' ? 'success' : 'warning'}>{a.status}</Chip>
          </div>
        ))}
      </div>
    </div>
  );
}
