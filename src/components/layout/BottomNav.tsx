export function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 md:hidden">
      <div className="grid grid-cols-5 text-xs">
        {['Home','Calendar','Tasks','Meetings','Settings'].map((item) => (
          <button key={item} className="py-3 text-slate-600">{item}</button>
        ))}
      </div>
    </nav>
  );
}
