export function Radio() {
  return (
    <div className="flex gap-4 text-sm">
      <label className="inline-flex items-center gap-2"><input type="radio" name="r" /> Monthly</label>
      <label className="inline-flex items-center gap-2"><input type="radio" name="r" /> Annual</label>
    </div>
  );
}
