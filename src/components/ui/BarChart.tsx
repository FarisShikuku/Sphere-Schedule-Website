export function BarChart({ data = [4, 7, 3, 8, 6] }: { data?: number[] }) {
  return (
    <div className="flex items-end gap-2 h-24">
      {data.map((d, i) => (
        <div key={i} className="w-6 rounded-t bg-primary/80" style={{ height: `${d * 10}px` }} />
      ))}
    </div>
  );
}
