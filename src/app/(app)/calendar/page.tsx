import { DatePicker } from '@/components/ui/DatePicker';

export default function CalendarPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Calendar</h1>
        <DatePicker />
      </div>
      <div className="grid md:grid-cols-7 gap-3">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className="h-24 rounded-2xl bg-white border border-slate-100 p-3">
            <p className="text-xs text-slate-500">{i + 1}</p>
            <div className="mt-2 h-2 w-10 rounded-full bg-primary/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
