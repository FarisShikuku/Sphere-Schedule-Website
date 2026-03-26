type Props = { label: string; value: string; delta: string };

export function KpiCard({ label, value, delta }: Props) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-100">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <p className="text-xs text-emerald-600 mt-2">{delta}</p>
    </div>
  );
}
