export function Dropdown() {
  return (
    <div className="relative inline-block">
      <button className="px-4 py-2 rounded-full border border-slate-200">Menu</button>
      <div className="absolute mt-2 w-40 rounded-xl border border-slate-100 bg-white shadow-glow p-2">
        <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Profile</button>
        <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Settings</button>
      </div>
    </div>
  );
}
