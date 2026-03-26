export function Sparkline({ data = [2, 5, 3, 6, 4, 7] }: { data?: number[] }) {
  return (
    <svg viewBox="0 0 120 40" className="h-8 w-24">
      <polyline
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="2"
        points={data.map((d, i) => `${i * 20},${40 - d * 4}`).join(' ')}
      />
    </svg>
  );
}
