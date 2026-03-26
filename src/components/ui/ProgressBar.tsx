export function ProgressBar({ value = 40 }: { value?: number }) {
  return (
    <div className="w-full">
      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
      <p className="mt-2 text-xs text-slate-500">{value}%</p>
    </div>
  );
}
