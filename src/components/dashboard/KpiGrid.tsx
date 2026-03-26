import { KpiCard } from './KpiCard';

export function KpiGrid() {
  const items = [
    { label: 'Tasks completed', value: '42', delta: '+12% vs last week' },
    { label: 'Meetings today', value: '4', delta: 'On track' },
    { label: 'Focus time', value: '6h 20m', delta: '+1.2h' },
    { label: 'Appointments', value: '9', delta: '2 this afternoon' },
  ];
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {items.map((i) => (
        <KpiCard key={i.label} {...i} />
      ))}
    </div>
  );
}
