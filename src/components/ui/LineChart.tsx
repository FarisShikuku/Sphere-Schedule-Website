export function LineChart({ data = [10, 20, 15, 30, 25] }: { data?: number[] }) {
  return (
    <svg viewBox="0 0 200 80" className="h-24 w-full">
      <polyline
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="3"
        points={data.map((d, i) => `${i * 40},${80 - d * 2}`).join(' ')}
      />
    </svg>
  );
}
