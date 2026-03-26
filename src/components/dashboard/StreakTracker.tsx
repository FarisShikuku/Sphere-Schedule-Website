export function StreakTracker() {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100">
      <h3 className="text-lg font-semibold">Streak</h3>
      <div className="mt-4 grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className={`h-6 w-6 rounded ${i % 4 == 0 ? 'bg-primary' : 'bg-slate-100'}`} />
        ))}
      </div>
    </div>
  );
}
