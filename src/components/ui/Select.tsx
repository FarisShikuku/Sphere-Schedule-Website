export function Select({ label }: { label?: string }) {
  return (
    <label className="block text-sm">
      {label && <span className="text-slate-600">{label}</span>}
      <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
        <option>Option A</option>
        <option>Option B</option>
      </select>
    </label>
  );
}
