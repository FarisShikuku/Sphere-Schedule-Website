export function Checkbox({ label = 'Remember me' }: { label?: string }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <input type="checkbox" className="h-4 w-4" />
      {label}
    </label>
  );
}
