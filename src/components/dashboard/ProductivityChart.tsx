const data = [30, 45, 38, 60, 50, 72, 68];

export function ProductivityChart() {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Productivity</h3>
        <span className="text-xs text-slate-500">Last 7 days</span>
      </div>
      <svg viewBox="0 0 200 80" className="mt-6 w-full h-24">
        <polyline
          fill="none"
          stroke="#6d28d9"
          strokeWidth="3"
          points={data.map((d, i) => `${i * 30},${80 - d}`).join(' ')}
        />
      </svg>
    </div>
  );
}
