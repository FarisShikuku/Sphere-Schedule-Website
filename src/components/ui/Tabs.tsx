export function Tabs() {
  return (
    <div className="flex gap-2">
      {['Overview', 'Details', 'Activity'].map((t, i) => (
        <button key={t} className={`px-4 py-2 rounded-full text-sm ${i == 0 ? 'bg-primary text-white' : 'bg-slate-100'}`}>
          {t}
        </button>
      ))}
    </div>
  );
}
