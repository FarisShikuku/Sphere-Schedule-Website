const items = [
  { time: '10:30', title: 'Team sync', type: 'Meeting' },
  { time: '13:00', title: 'Client call', type: 'Appointment' },
  { time: '15:30', title: 'Deep work', type: 'Focus' },
];

export function UpcomingSchedule() {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100">
      <h3 className="text-lg font-semibold">Upcoming</h3>
      <div className="mt-4 space-y-3">
        {items.map((i) => (
          <div key={i.title} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{i.title}</p>
              <p className="text-xs text-slate-500">{i.type}</p>
            </div>
            <span className="text-xs text-slate-500">{i.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
