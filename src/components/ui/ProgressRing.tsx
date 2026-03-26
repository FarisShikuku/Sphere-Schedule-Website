export function ProgressRing({ value = 60 }: { value?: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <svg width="72" height="72">
      <circle cx="36" cy="36" r={radius} stroke="#e2e8f0" strokeWidth="8" fill="none" />
      <circle
        cx="36"
        cy="36"
        r={radius}
        stroke="#6d28d9"
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text x="36" y="40" textAnchor="middle" fontSize="12" fill="#0f172a">{value}%</text>
    </svg>
  );
}
