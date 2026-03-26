export function AppNavbar() {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500">Dashboard</p>
          <p className="text-lg font-semibold">Welcome back, Alex</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 rounded-full border border-slate-200 text-sm">Search</button>
          <div className="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center">A</div>
        </div>
      </div>
    </div>
  );
}
