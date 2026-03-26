export function Sidebar() {
  const items = ['Dashboard', 'Calendar', 'Tasks', 'Meetings', 'Appointments', 'Settings'];
  return (
    <aside className="hidden lg:flex flex-col w-64 fixed inset-y-0 bg-white border-r border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <p className="text-lg font-semibold">Sphere</p>
        <p className="text-xs text-slate-500">Personal command center</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => (
          <button key={item} className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100 text-sm">
            {item}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200">
        <div className="p-3 rounded-xl bg-slate-50">
          <p className="text-sm font-semibold">Alex Wilson</p>
          <p className="text-xs text-slate-500">Pro Plan</p>
        </div>
      </div>
    </aside>
  );
}
